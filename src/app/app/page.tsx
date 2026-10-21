'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useApp, levelTitle, nextLevel } from '@/lib/store';
import { psychology, comingSoon, accentForMonth } from '@/lib/courses';
import { lessonForDay, lessonsForCourse } from '@/content/psychology';
import { SectionLabel, ProgressRing, StreakChip, PillTag, Arrow } from '@/components/ui';
import type { CourseConfig, Lesson } from '@/lib/types';

export default function AcademyHome() {
  const { profile, enrolled, progress, streak, hydrated, enroll } = useApp();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !hydrated) {
    return <HomeSkeleton />;
  }

  const enrolledCourses = [psychology, ...comingSoon].filter((c) => enrolled[c.slug]);

  return (
    <div className="space-y-14">
      {/* Greeting + streak */}
      <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel>Academy Home</SectionLabel>
          <h1 className="t-h1">
            {greeting()},{' '}
            <span style={{ fontWeight: 400 }}>{profile?.name ?? 'learner'}</span>
          </h1>
          <p className="t-body-l mt-3" style={{ color: 'var(--muted)' }}>
            Small steps, visible progress. Here is where you left off.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <StreakChip days={streak.current} />
          <PillTag tone="accent">
            <span style={{ fontWeight: 600 }}>{longestLabel(streak.longest)}</span>
          </PillTag>
        </div>
      </section>

      {/* Today */}
      <section>
        <h2 className="t-h3">Today</h2>
        {enrolledCourses.length === 0 ? (
          <div className="mt-5 rounded-card border border-line p-10 text-center">
            <img
              src="/images/learn-1.jpg"
              alt="Learners studying together"
              className="mx-auto aspect-[16/9] w-full max-w-sm rounded-[12px] object-cover"
            />
            <h3 className="t-h4 mt-6">Your journey starts with one lesson</h3>
            <p className="t-body mx-auto mt-2 max-w-md" style={{ color: 'var(--muted)' }}>
              Enroll in a course below — the first day unlocks immediately, and every
              day after that is small enough to finish.
            </p>
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            {enrolledCourses.map((c) => (
              <TodayCard key={c.slug} course={c} />
            ))}
          </div>
        )}
      </section>

      {/* Catalog */}
      <section>
        <h2 className="t-h3">Course catalog</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <CatalogCard course={psychology} />
          {comingSoon.map((c) => (
            <CatalogCard key={c.slug} course={c} />
          ))}
        </div>
      </section>
    </div>
  );
}

function TodayCard({ course }: { course: CourseConfig }) {
  const progress = useApp((s) => s.progress[course.slug]);
  const lessons = lessonsForCourse(course.slug);
  const days = progress?.days ?? {};
  const next = lessons.find((l) => !days[l.dayIndex]?.done) ?? lessons[0];
  const doneCount = Object.values(days).filter((d) => d.done).length;
  const accent = accentForMonth(next?.month ?? 1);
  const xp = progress?.xp ?? 0;

  return (
    <div className="rounded-card border border-line p-5 sm:p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4 sm:gap-5">
          <img
            src={course.coverImage}
            alt=""
            className="hidden h-20 w-20 shrink-0 rounded-[12px] object-cover sm:block"
          />
          <div className="min-w-0">
            <div className="t-label" style={{ color: 'var(--muted)' }}>
              {course.title} · Day {next.dayIndex} of {course.totalDays}
            </div>
            <h3 className="t-h4 mt-1">{next.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <PillTag tone="tint">{typeLabel(next.type)}</PillTag>
              <PillTag tone="line">{next.duration}</PillTag>
              <PillTag tone="accent">{levelTitle(xp, course)}</PillTag>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProgressRing
            value={doneCount}
            max={lessons.length}
            size={56}
            label={`${Math.round((doneCount / lessons.length) * 100)}%`}
            color={accent.hex}
          />
          <Link
            href={`/app/courses/${course.slug}/day/${next.dayIndex}`}
            className="btn btn-primary shrink-0"
          >
            {doneCount === 0 ? 'Start Day 1' : 'Continue'} <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CatalogCard({ course }: { course: CourseConfig }) {
  const enrolled = useApp((s) => s.enrolled[course.slug]);
  const progress = useApp((s) => s.progress[course.slug]);
  const enroll = useApp((s) => s.enroll);
  const lessons = lessonsForCourse(course.slug);
  const doneCount = Object.values(progress?.days ?? {}).filter((d) => d.done).length;
  const isLive = course.status === 'live';
  const accent = course.months[0]?.accent ?? '#4F46E5';

  return (
    <div className="hover-lift flex flex-col overflow-hidden rounded-card border border-line">
      <div className="relative">
        <img
          src={course.coverImage}
          alt={course.title}
          className="zoom-on-hover aspect-[16/10] w-full object-cover"
        />
        {!isLive && (
          <span
            className="absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 t-label"
            style={{ background: 'rgba(15,18,38,.72)', color: '#fff' }}
          >
            Coming soon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="t-h4">{course.title}</h3>
            <p className="t-small mt-1" style={{ color: 'var(--muted)' }}>
              {course.totalWeeks} weeks · {course.level}
            </p>
          </div>
          <span
            className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
            style={{ background: accent }}
            aria-hidden="true"
          />
        </div>
        <p className="t-small mt-3 flex-1" style={{ color: 'var(--muted)' }}>
          {course.tagline}
        </p>
        <div className="mt-5">
          {!isLive ? (
            <div className="flex items-center justify-between">
              <PillTag tone="line">Coming soon</PillTag>
              <button className="btn btn-ghost" disabled>
                Notify me
              </button>
            </div>
          ) : enrolled ? (
            <div className="flex items-center justify-between">
              <div>
                <ProgressRing
                  value={doneCount}
                  max={Math.max(lessons.length, 1)}
                  size={44}
                  stroke={4}
                  label={`${doneCount}d`}
                />
              </div>
              <Link href={`/app/courses/${course.slug}`} className="btn btn-primary">
                Open course <Arrow />
              </Link>
            </div>
          ) : (
            <button className="btn btn-primary w-full" onClick={() => enroll(course.slug)}>
              Enroll <Arrow />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function HomeSkeleton() {
  return (
    <div className="space-y-10 animate-pulse">
      <div>
        <div className="h-4 w-24 rounded-full" style={{ background: 'var(--mist)' }} />
        <div className="mt-4 h-10 w-72 rounded-lg" style={{ background: 'var(--mist)' }} />
      </div>
      <div className="h-32 rounded-card" style={{ background: 'var(--mist)' }} />
    </div>
  );
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

function longestLabel(longest: number) {
  return longest > 0 ? `Best: ${longest} days` : 'No streak yet';
}

function typeLabel(t: Lesson['type']) {
  return { reading: 'Reading', video: 'Video', interactive: 'Interactive', review: 'Weekly review', rest: 'Rest day' }[t];
}
