'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type {
  CourseProgress,
  DayProgress,
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

export interface AppState {
  hydrated: boolean;
  theme: ThemePref;
  profile: UserProfile | null;
  enrolled: Record<string, { startDate: string }>;
  progress: Record<string, CourseProgress>;
  streak: { current: number; longest: number; lastActiveDate: string | null };
  restTicks: string[];
  /** wrong-answer queue: concept names flagged during quizzes */
  weakConcepts: Record<string, string[]>;

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

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      theme: 'system',
      profile: null,
      enrolled: {},
      progress: {},
      streak: { current: 0, longest: 0, lastActiveDate: null },
      restTicks: [],
      weakConcepts: {},

      setTheme: (theme) => set({ theme }),
      setProfile: (profile) => set({ profile }),

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
        set({
          profile: null,
          enrolled: {},
          progress: {},
          streak: { current: 0, longest: 0, lastActiveDate: null },
          restTicks: [],
          weakConcepts: {},
        }),
    }),
    {
      name: 'uneek-academy-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        theme: s.theme,
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
