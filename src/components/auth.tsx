'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useApp, type AuthIntent } from '@/lib/store';
import { Logo } from './illustrations';
import { Arrow } from './ui';
import { X, Lock, Mail, User } from 'lucide-react';

/**
 * Engagement gate: signed-in users go straight to the app;
 * visitors get the sign up / sign in pop-up first.
 */
export function useEngage() {
  const account = useApp((s) => s.account);
  const openAuth = useApp((s) => s.openAuth);
  const enroll = useApp((s) => s.enroll);
  const router = useRouter();
  return (intent: Exclude<AuthIntent, null>) => {
    if (account) {
      if (intent.kind === 'enroll') {
        enroll(intent.slug);
        router.push(`/app/courses/${intent.slug}`);
      } else {
        router.push(intent.href);
      }
    } else {
      openAuth('signup', intent);
    }
  };
}

/**
 * Shared sign up / sign in form.
 * Local accounts only (stored in the browser) — Google sign-in arrives at v3.
 */
export function AuthForm({
  mode,
  onModeChange,
  onSuccess,
  autoFocus = true,
}: {
  mode: 'signup' | 'signin';
  onModeChange: (m: 'signup' | 'signin') => void;
  onSuccess?: () => void;
  autoFocus?: boolean;
}) {
  const signUp = useApp((s) => s.signUp);
  const signIn = useApp((s) => s.signIn);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const isSignup = mode === 'signup';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const err = isSignup
      ? await signUp(name, email, password)
      : await signIn(email, password);
    setBusy(false);
    if (err) {
      setError(err);
      return;
    }
    setPassword('');
    onSuccess?.();
  }

  return (
    <form onSubmit={submit} className="w-full">
      <h2 className="t-h2" style={{ fontSize: 30, lineHeight: '36px' }}>
        {isSignup ? 'Create your profile' : 'Welcome back'}
      </h2>
      <p className="t-small mt-2" style={{ color: 'var(--muted)' }}>
        {isSignup
          ? 'Your profile and progress are saved in this browser for now. Google sign-in arrives at v3.'
          : 'Sign in to pick up your streak and continue learning.'}
      </p>

      <div className="mt-7 space-y-4">
        {isSignup && (
          <Field icon={<User size={16} />} label="Name">
            <input
              required
              autoFocus={autoFocus}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              className="w-full bg-transparent t-body outline-none placeholder:text-soft"
              style={{ color: 'var(--text)' }}
            />
          </Field>
        )}
        <Field icon={<Mail size={16} />} label="Email">
          <input
            required
            type="email"
            autoFocus={!isSignup && autoFocus}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full bg-transparent t-body outline-none placeholder:text-soft"
            style={{ color: 'var(--text)' }}
          />
        </Field>
        <Field icon={<Lock size={16} />} label="Password">
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isSignup ? 'At least 6 characters' : 'Your password'}
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            minLength={isSignup ? 6 : undefined}
            className="w-full bg-transparent t-body outline-none placeholder:text-soft"
            style={{ color: 'var(--text)' }}
          />
        </Field>
      </div>

      {error && (
        <p className="t-small mt-3 rounded-input p-3" style={{ background: 'var(--danger-tint)', color: 'var(--danger-text)' }} role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={busy} className="btn btn-primary mt-6 w-full">
        {busy ? 'One moment…' : isSignup ? 'Create profile' : 'Sign in'} <Arrow />
      </button>

      <button
        type="button"
        disabled
        className="btn btn-ghost mt-3 w-full"
        title="Arriving in v3"
      >
        <GoogleGlyph /> Continue with Google (v3)
      </button>

      <p className="t-small mt-6 text-center" style={{ color: 'var(--muted)' }}>
        {isSignup ? 'Already have a local profile?' : 'New here?'}{' '}
        <button
          type="button"
          className="t-small"
          style={{ color: 'var(--primary)', fontWeight: 600 }}
          onClick={() => onModeChange(isSignup ? 'signin' : 'signup')}
        >
          {isSignup ? 'Sign in' : 'Create one'}
        </button>
      </p>
    </form>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="t-label" style={{ color: 'var(--muted)' }}>
        {label}
      </span>
      <div className="mt-1.5 flex items-center gap-2.5 rounded-input border border-line px-3.5 py-3 focus-within:border-primary tr-micro">
        <span style={{ color: 'var(--soft)' }}>{icon}</span>
        {children}
      </div>
    </label>
  );
}

function GoogleGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 10.5v3.2h4.4c-.4 1.7-1.8 2.9-4.4 2.9a4.7 4.7 0 1 1 3-8.3l2.3-2.2A8 8 0 1 0 12 20c4.6 0 7.7-3.2 7.7-7.8 0-.6-.1-1.1-.2-1.7H12z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/**
 * Auth pop-up — opens when a visitor tries to engage with a course
 * (enroll / start learning) without a local profile.
 */
export function AuthModal() {
  const { authOpen, authMode, authIntent, closeAuth, openAuth, enroll } = useApp();
  const router = useRouter();
  if (!authOpen) return null;

  const handleSuccess = () => {
    const intent: AuthIntent = authIntent;
    if (intent?.kind === 'enroll') {
      enroll(intent.slug);
      router.push(`/app/courses/${intent.slug}`);
    } else if (intent?.kind === 'navigate') {
      router.push(intent.href);
    } else {
      router.push('/app');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Create profile or sign in"
    >
      <div className="absolute inset-0" style={{ background: 'rgba(15,18,38,.55)' }} onClick={closeAuth} />
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-card shadow-md md:grid-cols-2"
        style={{ background: 'var(--bg)', maxHeight: '92vh' }}
      >
        {/* photo side */}
        <div className="relative hidden md:block">
          <img src="/images/auth.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,18,38,.75), rgba(15,18,38,.1))' }} />
          <div className="absolute bottom-0 p-8">
            <Logo light />
            <p className="t-h3 mt-4 text-white" style={{ fontWeight: 300 }}>
              One small lesson a day — visibly tracked.
            </p>
          </div>
        </div>
        {/* form side */}
        <div className="overflow-y-auto p-7 nice-scroll sm:p-10">
          <div className="flex items-start justify-between">
            <div className="md:hidden">
              <Logo />
            </div>
            <button
              onClick={closeAuth}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-line tr-micro hover:opacity-70"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <div className="mt-4 md:mt-8">
            <AuthForm
              mode={authMode}
              onModeChange={(m) => openAuth(m, authIntent)}
              onSuccess={handleSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Standalone route: /auth?mode=signup|signin&next=/app/courses/psychology */
export function AuthPageClient() {
  const params = useSearchParams();
  const router = useRouter();
  const account = useApp((s) => s.account);
  const openAuth = useApp((s) => s.openAuth);
  const [mode, setMode] = useState<'signup' | 'signin'>(
    params.get('mode') === 'signin' ? 'signin' : 'signup',
  );
  const next = params.get('next') || '/app';

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden flex-1 lg:block">
        <img src="/images/auth.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,18,38,.8), rgba(15,18,38,.15))' }} />
        <div className="absolute bottom-0 p-12">
          <Logo light />
          <p className="t-h2 mt-6 max-w-md text-white" style={{ fontWeight: 300 }}>
            Because learning shouldn’t be boring.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <AuthForm
            mode={mode}
            onModeChange={setMode}
            onSuccess={() => router.push(next)}
          />
          <p className="t-small mt-8 text-center" style={{ color: 'var(--muted)' }}>
            Just browsing?{' '}
            <button
              style={{ color: 'var(--primary)', fontWeight: 600 }}
              onClick={() => router.push('/')}
            >
              Back to the academy overview
            </button>
          </p>
          {account && (
            <p className="t-small mt-3 text-center" style={{ color: 'var(--muted)' }}>
              Signed in as {account.name}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
