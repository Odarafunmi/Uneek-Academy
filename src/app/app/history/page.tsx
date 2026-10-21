'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useApp } from '@/lib/store';
import { allCourses, accentForMonth } from '@/lib/courses';
import { lessonsForCourse } from '@/content/psychology';
import { SectionLabel, PillTag } from '@/components/ui';
import { Check, Flame } from 'lucide-react';

export default function HistoryPage() {
  const { progress, streak, restTicks, weakConcepts, hydrated } = useApp();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !hydrated) return <div className="h-64" />;

  const rows: {
    dayIndex: number;
    title: string;
    type: string;
    score: number | null;
    date: string | null;
    shared: boolean;
    slug: string;
    month: number;
  }[] = [];

  for (const course of allCourses) {
    const cp = progress[course.slug];
    if (!cp) continue;
    for (const l of lessonsForCourse(course.slug)) {
      const d = cp.days[l.dayIndex];
      if (d?.done) {
        rows.push({
          dayIndex: l.dayIndex,
          title: l.title,
          type: l.type,
          score: d.score,
          date: d.completedAt,
          shared: d.shared,
          slug: course.slug,
          month: l.month,
        });
      }
    }
  }
  rows.reverse();

  const totalXP = Object.values(progress).reduce((a, c) => a + c.xp, 0);

  return (
    <div className="space-y-10">
      <section>
        <SectionLabel>Learning history</SectionLabel>
        <h1 className="t-h1">Every day counts</h1>
        <p className="t-body-l mt-3" style={{ color: 'var(--muted)' }}>
          Your complete record across all courses — scores, shares, and rest days.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <PillTag tone="tint">
            <Check size={13} /> {rows.length} days completed
          </PillTag>
          <PillTag tone="accent">
            <Flame size={13} /> {streak.current} day streak · best {streak.longest}
          </PillTag>
          <PillTag tone="line">{totalXP} XP total</PillTag>
          <PillTag tone="line">{restTicks.length} rest days ticked</PillTag>
        </div>
      </section>

      <section>
        <h2 className="t-h3">Completed days</h2>
        {rows.length === 0 ? (
          <div className="mt-5 rounded-card border border-line p-10 text-center">
            <p className="t-body" style={{ color: 'var(--muted)' }}>
              Nothing yet — complete your first day and it will appear here.
            </p>
            <Link href="/app" className="btn btn-primary mt-5">
              Go to today
            </Link>
          </div>
        ) : (
          <div className="mt-5 overflow-x-auto rounded-card border border-line">
            <table className="nice-table w-full min-w-[640px] text-left">
              <thead>
                <tr style={{ background: 'var(--mist)' }}>
                  {['Day', 'Lesson', 'Type', 'Score', 'Date', 'Shared'].map((h) => (
                    <th key={h} className="t-label px-5 py-3.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={`${r.slug}-${r.dayIndex}`} className="border-t border-line">
                    <td className="px-5 py-4">
                      <Link
                        href={`/app/courses/${r.slug}/day/${r.dayIndex}`}
                        className="t-label"
                        style={{ color: accentForMonth(r.month).hex, fontWeight: 600 }}
                      >
                        Day {r.dayIndex}
                      </Link>
                    </td>
                    <td className="t-small px-5 py-4">{r.title}</td>
                    <td className="px-5 py-4">
                      <PillTag tone="line">{r.type}</PillTag>
                    </td>
                    <td className="t-small px-5 py-4">
                      {r.score !== null ? `${r.score}%` : '—'}
                    </td>
                    <td className="t-small px-5 py-4" style={{ color: 'var(--muted)' }}>
                      {r.date ?? '—'}
                    </td>
                    <td className="px-5 py-4">
                      {r.shared ? (
                        <Check size={16} style={{ color: '#12B886' }} />
                      ) : (
                        <span style={{ color: 'var(--soft)' }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {Object.entries(weakConcepts).some(([, v]) => v.length > 0) && (
        <section>
          <h2 className="t-h3">Weak topics to review</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(weakConcepts).flatMap(([slug, concepts]) =>
              concepts.map((c) => (
                <Link key={`${slug}-${c}`} href={`/app/courses/${slug}`}>
                  <PillTag tone="coral">{c}</PillTag>
                </Link>
              )),
            )}
          </div>
          <p className="t-small mt-4" style={{ color: 'var(--muted)' }}>
            Wrong answers are queued here — they resurface in weekly reviews. No shame,
            just reps.
          </p>
        </section>
      )}
    </div>
  );
}
