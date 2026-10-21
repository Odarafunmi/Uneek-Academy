'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { getCourse, accentForMonth, psychology } from '@/lib/courses';
import { lessonsForCourse } from '@/content/psychology';
import { useApp, levelTitle, nextLevel } from '@/lib/store';
import { SectionLabel, ProgressRing, PillTag, Arrow, TwoToneHeadline } from '@/components/ui';
import { CourseCalendar } from '@/components/calendar';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const course = getCourse(slug);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!course) notFound();
  if (!mounted) return <div className="h-96" />;

  return <CourseView slug={slug} />;
}

function CourseView({ slug }: { slug: string }) {
  const course = getCourse(slug)!;
  const enrolled = useApp((s) => s.enrolled[slug]);
  const progress = useApp((s) => s.progress[slug]);
  const restTicks = useApp((s) => s.restTicks);
  const enroll = useApp((s) => s.enroll);

  const lessons = lessonsForCourse(slug);
  const days = progress?.days ?? {};
  const doneCount = Object.values(days).filter((d) => d.done).length;
  const xp = progress?.xp ?? 0;
  const next = lessons.find((l) => !days[l.dayIndex]?.done) ?? lessons[0];
  const lvl = nextLevel(xp, course);
  const accent = accentForMonth(next?.month ?? 1);

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <SectionLabel>Course</SectionLabel>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="t-h1">{course.title}</h1>
            <p className="t-body-l mt-4" style={{ color: 'var(--muted)' }}>
              {course.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <PillTag tone="tint">{course.totalWeeks} weeks</PillTag>
              <PillTag tone="line">{course.level}</PillTag>
              <PillTag tone="accent">
                {enrolled ? levelTitle(xp, course) : 'Not enrolled'}
              </PillTag>
            </div>
          </div>
          {enrolled ? (
            <div className="flex items-center gap-6">
              <div>
                <ProgressRing
                  value={doneCount}
                  max={lessons.length}
                  size={96}
                  stroke={7}
                  color={accent.hex}
                  label={`${doneCount}d`}
                />
                <div className="t-label mt-2 text-center" style={{ color: 'var(--muted)' }}>
                  {xp} XP{lvl ? ` · next: ${lvl.title}` : ''}
                </div>
              </div>
              <Link href={`/app/courses/${slug}/day/${next.dayIndex}`} className="btn btn-primary">
                {doneCount === 0 ? 'Start Day 1' : 'Continue'} <Arrow />
              </Link>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => enroll(slug)}>
              Enroll — it’s free <Arrow />
            </button>
          )}
        </div>
      </section>

      {enrolled && (
        <section>
          <div className="flex items-end justify-between">
            <h2 className="t-h3">Your calendar</h2>
            <p className="t-small" style={{ color: 'var(--muted)' }}>
              Green means done. Amber dot means shared.
            </p>
          </div>
          <div className="mt-6">
            <CourseCalendar slug={slug} days={days} restTicks={restTicks} />
            {lessons.length < course.totalDays && (
              <p className="t-small mt-6 rounded-card p-4" style={{ background: 'var(--mist)', color: 'var(--muted)' }}>
                Days {lessons.length + 1}–{course.totalDays} unlock as Month 2+ content is published.
                Month 1 is fully live.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Month-by-month outline */}
      <section>
        <TwoToneHeadline line1="What you will" line2="Learn" className="mb-2" />
        <p className="t-body max-w-2xl" style={{ color: 'var(--muted)' }}>
          The weekly rhythm never changes — five learn days, one review, one rest —
          so the habit sticks while the ideas grow.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {course.months.map((m, i) => (
            <div key={m.title} className="rounded-card border border-line p-6">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full t-label"
                  style={{
                    background: m.accent,
                    color: m.accentText === 'white' ? '#fff' : '#0F1226',
                    fontWeight: 600,
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="t-h4">{m.title}</h3>
              </div>
              <p className="t-small mt-3" style={{ color: 'var(--muted)' }}>
                {m.topics}
              </p>
              <div className="t-label mt-4" style={{ color: 'var(--soft)' }}>
                Weeks {weekRange(course.months, i)} · {m.weeks} weeks
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="rounded-card p-8" style={{ background: 'var(--mist)' }}>
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <img
            src="/images/learn-2.jpg"
            alt="A learner following the weekly rhythm"
            className="h-40 w-full rounded-[12px] object-cover md:h-[180px] md:w-[220px]"
          />
          <div>
            <h3 className="t-h4">The weekly rhythm</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Learn × 5', 'Reading, video, and interactive lessons with quizzes'],
                ['Review × 1', 'Weekly summary and a cumulative test'],
                ['Rest × 1', 'A calm screen and one tick to protect the streak'],
                ['Share any day', 'Hook card + LinkedIn write-up when a day is done'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-[12px] bg-bg p-4">
                  <div className="t-label" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    {t}
                  </div>
                  <div className="t-small mt-1.5" style={{ color: 'var(--muted)' }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function weekRange(months: { weeks: number }[], idx: number) {
  let start = 1;
  for (let i = 0; i < idx; i++) start += months[i].weeks;
  return `${start}–${start + months[idx].weeks - 1}`;
}
