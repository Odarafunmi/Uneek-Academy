'use client';

import { useEffect, useState } from 'react';
import { useApp, levelTitle } from '@/lib/store';
import { allCourses, psychology } from '@/lib/courses';
import { lessonsForCourse } from '@/content/psychology';
import { SectionLabel, ProgressRing, PillTag, StreakChip } from '@/components/ui';
import { ThemeToggle } from '@/components/theme';

export default function ProfilePage() {
  const { profile, setProfile, progress, enrolled, streak, hydrated, reset } = useApp();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    setMounted(true);
    setName(profile?.name ?? '');
  }, [profile?.name]);

  if (!mounted || !hydrated) return <div className="h-64" />;

  const totalXP = Object.values(progress).reduce((a, c) => a + c.xp, 0);
  const totalDone = Object.values(progress).reduce(
    (a, c) => a + Object.values(c.days).filter((d) => d.done).length,
    0,
  );

  return (
    <div className="mx-auto max-w-2xl space-y-12">
      <section>
        <SectionLabel>Profile</SectionLabel>
        <div className="flex items-center gap-5">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full font-heading"
            style={{ background: 'var(--primary-tint)', color: 'var(--primary)', fontSize: 30, fontWeight: 400 }}
            aria-hidden="true"
          >
            {(profile?.name ?? 'U').slice(0, 1).toUpperCase()}
          </div>
          <div>
            <h1 className="t-h2">{profile?.name ?? 'Welcome, learner'}</h1>
            <p className="t-small mt-1" style={{ color: 'var(--muted)' }}>
              {profile?.joinedAt
                ? `Learning since ${profile.joinedAt}`
                : 'Set your name to personalize the academy.'}
            </p>
          </div>
        </div>

        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            if (name.trim())
              setProfile({ name: name.trim(), joinedAt: profile?.joinedAt ?? new Date().toISOString().slice(0, 10) });
          }}
        >
          <label className="t-label" style={{ color: 'var(--muted)' }} htmlFor="name">
            Display name
          </label>
          <div className="mt-2 flex gap-3">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="flex-1 rounded-input border border-line bg-bg px-4 py-3 t-body outline-none focus:border-primary"
              style={{ color: 'var(--text)' }}
            />
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          ['Days done', String(totalDone)],
          ['Total XP', String(totalXP)],
          ['Current streak', `${streak.current}`],
          ['Best streak', `${streak.longest}`],
        ].map(([label, value]) => (
          <div key={label} className="rounded-card border border-line p-5 text-center">
            <div className="t-stat" style={{ fontSize: 32, lineHeight: '36px' }}>
              {value}
            </div>
            <div className="t-label mt-1" style={{ color: 'var(--muted)' }}>
              {label}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="t-h3">Your courses</h2>
        <div className="mt-5 space-y-4">
          {allCourses
            .filter((c) => enrolled[c.slug])
            .map((c) => {
              const cp = progress[c.slug];
              const done = Object.values(cp?.days ?? {}).filter((d) => d.done).length;
              const total = lessonsForCourse(c.slug).length;
              return (
                <div key={c.slug} className="flex items-center gap-5 rounded-card border border-line p-5">
                  <ProgressRing value={done} max={Math.max(total, 1)} size={56} label={`${done}d`} />
                  <div className="flex-1">
                    <div className="t-h4">{c.title}</div>
                    <div className="t-small mt-0.5" style={{ color: 'var(--muted)' }}>
                      {levelTitle(cp?.xp ?? 0, c)} · {cp?.xp ?? 0} XP
                    </div>
                  </div>
                  <PillTag tone="tint">
                    {Math.round((done / Math.max(total, 1)) * 100)}%
                  </PillTag>
                </div>
              );
            })}
          {Object.keys(enrolled).length === 0 && (
            <p className="t-body" style={{ color: 'var(--muted)' }}>
              No courses yet — enroll from the academy home.
            </p>
          )}
        </div>
      </section>

      <section>
        <h2 className="t-h3">Appearance</h2>
        <div className="mt-4 flex items-center justify-between rounded-card border border-line p-5">
          <div>
            <div className="t-body" style={{ fontWeight: 500 }}>
              Theme
            </div>
            <div className="t-small mt-0.5" style={{ color: 'var(--muted)' }}>
              Light, dark, or follow your system. Preference is remembered.
            </div>
          </div>
          <ThemeToggle />
        </div>
      </section>

      <section>
        <h2 className="t-h3">Account</h2>
        <div className="mt-4 rounded-card border border-line p-5">
          <p className="t-small" style={{ color: 'var(--muted)' }}>
            Your profile is stored in this browser for now. Google sign-in and cloud
            sync arrive at v3 — then your progress follows you across devices.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="btn btn-ghost"
              onClick={() => {
                if (confirm('Sign out of this device? Your local progress stays saved.')) {
                  useApp.getState().signOut();
                  window.location.href = '/';
                }
              }}
            >
              Sign out
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                if (confirm('Reset all local progress? This cannot be undone.')) reset();
              }}
            >
              Reset progress
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
