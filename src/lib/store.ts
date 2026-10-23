'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { canDeleteArticle, canEditArticle, canManageContent } from './rbac';
import type {
  Article,
  CourseProgress,
  DayProgress,
  Role,
  ThemePref,
  UserProfile,
} from './types';

const XP_PER_CORRECT = 10;
const XP_DAY_BONUS = 50;
const XP_REVIEW_BONUS = 100;

function todayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}

/* ---------- local account (device-only for now; Google sign-in at v3) ---------- */

export interface LocalAccount {
  name: string;
  email: string;
  /** SHA-256 (with per-email salt) — never a plaintext password */
  passwordHash: string;
  createdAt: string;
  /** access role — content publishing is admin-only (lib/rbac.ts) */
  role: Role;
}

/** Admin-published library item stored on this device (until the backend lands). */
export interface CustomArticle extends Article {
  authorEmail: string;
}

export interface AccountData {
  profile: UserProfile | null;
  enrolled: Record<string, { startDate: string }>;
  progress: Record<string, CourseProgress>;
  streak: { current: number; longest: number; lastActiveDate: string | null };
  restTicks: string[];
  weakConcepts: Record<string, string[]>;
}

async function hashPassword(email: string, password: string): Promise<string> {
  const input = new TextEncoder().encode(`uneek::${email.toLowerCase()}::${password}`);
  if (typeof crypto !== 'undefined' && crypto.subtle?.digest) {
    const buf = await crypto.subtle.digest('SHA-256', input);
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  // Non-crypto fallback (non-secure contexts only)
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input[i]) >>> 0;
  return `f${h.toString(16)}`;
}

export type AuthIntent =
  | { kind: 'enroll'; slug: string }
  | { kind: 'navigate'; href: string }
  | null;

export interface AppState {
  hydrated: boolean;
  theme: ThemePref;

  /* auth (local) */
  account: LocalAccount | null;
  accounts: Record<string, LocalAccount>;
  accountData: Record<string, AccountData>;
  authOpen: boolean;
  authMode: 'signup' | 'signin';
  authIntent: AuthIntent;

  /* working data for the signed-in account (flat for simple reads) */
  profile: UserProfile | null;
  enrolled: Record<string, { startDate: string }>;
  progress: Record<string, CourseProgress>;
  streak: { current: number; longest: number; lastActiveDate: string | null };
  restTicks: string[];
  weakConcepts: Record<string, string[]>;

  /* auth actions */
  signUp: (name: string, email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => void;
  openAuth: (mode?: 'signup' | 'signin', intent?: AuthIntent) => void;
  closeAuth: () => void;
  /** grant / revoke admin role on the signed-in local account (demo until server RBAC) */
  setRole: (role: Role) => void;

  /* library (admin-published content) */
  customArticles: CustomArticle[];
  publishArticle: (a: Omit<Article, 'id' | 'slug' | 'custom'>) => string | null;
  updateArticle: (id: string, a: Partial<Article>) => string | null;
  deleteArticle: (id: string) => void;

  /* course actions */
  setTheme: (t: ThemePref) => void;
  setProfile: (p: UserProfile) => void;
  enroll: (courseSlug: string) => void;
  completeDay: (
    courseSlug: string,
    dayIndex: number,
    correct: number,
    total: number,
    isReview: boolean,
  ) => void;
  markShared: (courseSlug: string, dayIndex: number) => void;
  tickRest: () => void;
  addWeak: (courseSlug: string, concepts: string[]) => void;
  clearWeak: (courseSlug: string) => void;
  reset: () => void;
}

function touchStreak(streak: AppState['streak']) {
  const today = todayKey();
  if (streak.lastActiveDate === today) return streak;
  const current =
    streak.lastActiveDate && daysBetween(streak.lastActiveDate, today) === 1
      ? streak.current + 1
      : 1;
  return {
    current,
    longest: Math.max(current, streak.longest),
    lastActiveDate: today,
  };
}

function snapshot(s: AppState): AccountData {
  return {
    profile: s.profile,
    enrolled: s.enrolled,
    progress: s.progress,
    streak: s.streak,
    restTicks: s.restTicks,
    weakConcepts: s.weakConcepts,
  };
}

function blankData(): AccountData {
  return {
    profile: null,
    enrolled: {},
    progress: {},
    streak: { current: 0, longest: 0, lastActiveDate: null },
    restTicks: [],
    weakConcepts: {},
  };
}

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      theme: 'system',
      account: null,
      accounts: {},
      accountData: {},
      authOpen: false,
      authMode: 'signup',
      authIntent: null,
      ...blankData(),

      openAuth: (mode = 'signup', intent = null) =>
        set({ authOpen: true, authMode: mode, authIntent: intent }),
      closeAuth: () => set({ authOpen: false, authIntent: null }),

      signUp: async (name, email, password) => {
        const key = email.trim().toLowerCase();
        if (!name.trim()) return 'Please enter your name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(key)) return 'Please enter a valid email.';
        if (password.length < 6) return 'Password needs at least 6 characters.';
        const s = get();
        if (s.accounts[key]) return 'An account already exists for this email — sign in instead.';
        const account: LocalAccount = {
          name: name.trim(),
          email: key,
          passwordHash: await hashPassword(key, password),
          createdAt: todayKey(),
          role: 'learner',
        };
        // First signup on this device adopts any existing local progress.
        const data = snapshot(s);
        set({
          accounts: { ...s.accounts, [key]: account },
          accountData: { ...s.accountData, [key]: data },
          account,
          authOpen: false,
          authIntent: null,
          profile: data.profile ?? { name: account.name, joinedAt: account.createdAt },
        });
        return null;
      },

      signIn: async (email, password) => {
        const key = email.trim().toLowerCase();
        const s = get();
        const account = s.accounts[key];
        if (!account) return 'No local account for this email — sign up instead.';
        const hash = await hashPassword(key, password);
        if (hash !== account.passwordHash) return 'That password does not match.';
        // Stash current working data under the outgoing account, then load the new one.
        const accountData = { ...s.accountData };
        if (s.account) accountData[s.account.email] = snapshot(s);
        const data = accountData[key] ?? blankData();
        set({
          account,
          accountData: { ...accountData, [key]: data },
          ...data,
          profile: data.profile ?? { name: account.name, joinedAt: account.createdAt },
          authOpen: false,
          authIntent: null,
        });
        return null;
      },

      signOut: () => {
        const s = get();
        const accountData = { ...s.accountData };
        if (s.account) accountData[s.account.email] = snapshot(s);
        set({ account: null, accountData, authOpen: false });
      },

      setTheme: (theme) => set({ theme }),
      setProfile: (profile) => set({ profile }),

      setRole: (role) =>
        set((s) => {
          if (!s.account) return s;
          const account = { ...s.account, role };
          return {
            account,
            accounts: { ...s.accounts, [account.email]: account },
          };
        }),

      customArticles: [],
      publishArticle: (a) => {
        const s = get();
        if (!s.account) return 'Sign in to publish.';
        if (!canManageContent(s.account.role)) return 'Only admins can publish content.';
        if (!a.title.trim() || !a.body.length) return 'Title and body are required.';
        const slug = a.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
          .slice(0, 60) || `article-${Date.now()}`;
        const article: CustomArticle = {
          ...a,
          id: `local-${Date.now()}`,
          slug,
          custom: true,
          authorEmail: s.account.email,
          authorName: s.account.name,
        };
        set({ customArticles: [article, ...s.customArticles] });
        return null;
      },
      updateArticle: (id, patch) => {
        const s = get();
        if (!s.account) return 'Sign in to edit.';
        const existing = s.customArticles.find((c) => c.id === id);
        if (!existing) return 'Article not found.';
        if (!canEditArticle(s.account.role, existing, s.account.email))
          return 'You can only edit your own posts.';
        set({
          customArticles: s.customArticles.map((c) => (c.id === id ? { ...c, ...patch } : c)),
        });
        return null;
      },
      deleteArticle: (id) =>
        set((s) => {
          if (!s.account) return s;
          const existing = s.customArticles.find((c) => c.id === id);
          if (!existing) return s;
          if (!canDeleteArticle(s.account.role, existing, s.account.email)) return s;
          return { customArticles: s.customArticles.filter((c) => c.id !== id) };
        }),

      enroll: (courseSlug) =>
        set((s) =>
          s.enrolled[courseSlug]
            ? s
            : {
                enrolled: {
                  ...s.enrolled,
                  [courseSlug]: { startDate: todayKey() },
                },
                progress: {
                  ...s.progress,
                  [courseSlug]: s.progress[courseSlug] ?? { days: {}, xp: 0 },
                },
              },
        ),

      completeDay: (courseSlug, dayIndex, correct, total, isReview) =>
        set((s) => {
          const cp = s.progress[courseSlug] ?? { days: {}, xp: 0 };
          const prev = cp.days[dayIndex];
          const alreadyDone = prev?.done;
          const gained = alreadyDone
            ? 0
            : correct * XP_PER_CORRECT +
              (isReview ? XP_REVIEW_BONUS : XP_DAY_BONUS);
          const day: DayProgress = {
            done: true,
            score: total > 0 ? Math.round((correct / total) * 100) : null,
            completedAt: (prev?.completedAt as string) ?? todayKey(),
            shared: prev?.shared ?? false,
          };
          return {
            progress: {
              ...s.progress,
              [courseSlug]: {
                xp: cp.xp + gained,
                days: { ...cp.days, [dayIndex]: day },
              },
            },
            streak: touchStreak(s.streak),
          };
        }),

      markShared: (courseSlug, dayIndex) =>
        set((s) => {
          const cp = s.progress[courseSlug];
          if (!cp) return s;
          const day = cp.days[dayIndex];
          if (!day) return s;
          return {
            progress: {
              ...s.progress,
              [courseSlug]: {
                ...cp,
                days: { ...cp.days, [dayIndex]: { ...day, shared: true } },
              },
            },
          };
        }),

      tickRest: () =>
        set((s) => {
          const today = todayKey();
          if (s.restTicks.includes(today)) return { streak: touchStreak(s.streak) };
          return {
            restTicks: [...s.restTicks, today],
            streak: touchStreak(s.streak),
          };
        }),

      addWeak: (courseSlug, concepts) =>
        set((s) => {
          const cur = s.weakConcepts[courseSlug] ?? [];
          const next = Array.from(new Set([...cur, ...concepts]));
          return { weakConcepts: { ...s.weakConcepts, [courseSlug]: next } };
        }),

      clearWeak: (courseSlug) =>
        set((s) => ({
          weakConcepts: { ...s.weakConcepts, [courseSlug]: [] },
        })),

      reset: () =>
        set((s) => {
          const accountData = { ...s.accountData };
          if (s.account) accountData[s.account.email] = blankData();
          return {
            accountData,
            profile: s.account ? { name: s.account.name, joinedAt: s.account.createdAt } : null,
            enrolled: {},
            progress: {},
            streak: { current: 0, longest: 0, lastActiveDate: null },
            restTicks: [],
            weakConcepts: {},
          };
        }),
    }),
    {
      name: 'uneek-academy-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        theme: s.theme,
        account: s.account,
        accounts: s.accounts,
        accountData: s.accountData,
        profile: s.profile,
        enrolled: s.enrolled,
        progress: s.progress,
        streak: s.streak,
        restTicks: s.restTicks,
        weakConcepts: s.weakConcepts,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) state.hydrated = true;
      },
    },
  ),
);

/* ---------- selectors / helpers ---------- */

export function levelTitle(xp: number, course: { levelTitles: { title: string; xp: number }[] }) {
  let title = course.levelTitles[0]?.title ?? 'Observer';
  for (const l of course.levelTitles) if (xp >= l.xp) title = l.title;
  return title;
}

export function nextLevel(xp: number, course: { levelTitles: { title: string; xp: number }[] }) {
  return course.levelTitles.find((l) => l.xp > xp) ?? null;
}

export function xpForDay(correct: number, isReview: boolean) {
  return correct * XP_PER_CORRECT + (isReview ? XP_REVIEW_BONUS : XP_DAY_BONUS);
}
