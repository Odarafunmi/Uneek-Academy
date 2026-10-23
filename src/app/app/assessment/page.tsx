'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useApp, type AppState } from '@/lib/store';
import { allCourses, getCourse } from '@/lib/courses';
import type { CourseConfig, ExerciseQuestion } from '@/lib/types';
import { lessonsForCourse } from '@/content/psychology';
import { Quiz } from '@/components/quiz';
import { PillTag, SectionLabel } from '@/components/ui';
import { Brain, RotateCcw, SlidersHorizontal } from 'lucide-react';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Questions strictly within the progress tier: days 1..floor(pct/100 * total). */
function questionsUpTo(slug: string, pct: number): {
  questions: ExerciseQuestion[];
  coveredDays: number;
  totalDays: number;
  concepts: string[];
} {
  const lessons = lessonsForCourse(slug);
  const totalDays = lessons.length || 1;
  const coveredDays = Math.max(1, Math.floor((pct / 100) * totalDays));
  const inTier = lessons.filter((l) => l.dayIndex <= coveredDays && l.questions?.length);
  const questions = shuffle(inTier.flatMap((l) => l.questions)).slice(0, 10);
  const concepts = Array.from(new Set(inTier.flatMap((l) => l.concepts)));
  return { questions, coveredDays, totalDays, concepts };
}

function completionPct(progress: AppState['progress'], enrolled: AppState['enrolled'], slug: string): number {
  const lessons = lessonsForCourse(slug);
  const done = Object.values(progress[slug]?.days ?? {}).filter((d) => d.done).length;
  if (!lessons.length) return 0;
  if (!enrolled[slug] && done === 0) return 0;
  return Math.min(100, Math.round((done / lessons.length) * 100));
}

export default function AssessmentPage() {
  const { enrolled, progress, addWeak } = useApp();
  const enrolledSlugs = Object.keys(enrolled);
  const courseOptions = useMemo<CourseConfig[]>(() => {
    const preferred = enrolledSlugs
      .map((s) => getCourse(s))
      .filter((c): c is CourseConfig => !!c && c.status === 'live');
    return preferred.length ? preferred : allCourses.filter((c) => c.status === 'live');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enrolledSlugs.join(',')]);

  const [slug, setSlug] = useState(courseOptions[0]?.slug ?? 'psychology');
  const course = getCourse(slug) ?? courseOptions[0];

  const actual = completionPct(progress, enrolled, slug);
  const [pct, setPct] = useState(actual || 25);
  const [phase, setPhase] = useState<'setup' | 'test'>('setup');
  const [testKey, setTestKey] = useState(0);

  const tier = useMemo(() => questionsUpTo(slug, pct), [slug, pct]);
  const topicList = tier.concepts.slice(0, 8);

  function start() {
    setTestKey((k) => k + 1);
    setPhase('test');
  }

  return (
    <div className="mx-auto max-w-3xl">
      <SectionLabel>Self-assessment</SectionLabel>
      <h1 className="t-h1 mt-3">Knowledge Test</h1>
      <p className="t-body-l mt-3" style={{ color: 'var(--muted)' }}>
        A standalone test — separate from your daily lesson quizzes. Pick your course,
        tell us how far you’ve come, and we’ll quiz you only on what you’ve already
        covered.
      </p>

      {phase === 'setup' ? (
        <div className="mt-8 rounded-card border border-line p-6 md:p-8">
          {/* course select */}
          <h2 className="t-h3 flex items-center gap-2">
            <SlidersHorizontal size={18} /> Set up your test
          </h2>
          <p className="t-label mt-5" style={{ color: 'var(--muted)' }}>
            1 · Course
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {courseOptions.map((c) => {
              const active = slug === c.slug;
              const cc =
                c.slug === 'communication'
                  ? { border: 'var(--sky)', bg: 'var(--sky-tint)', fg: 'var(--sky-text)' }
                  : { border: 'var(--primary)', bg: 'var(--primary-tint)', fg: 'var(--primary)' };
              return (
                <button
                  key={c.slug}
                  onClick={() => {
                    setSlug(c.slug);
                    setPct(completionPct(progress, enrolled, c.slug) || 25);
                  }}
                  className="tap rounded-full border px-4 py-2 t-label"
                  style={{
                    borderColor: active ? cc.border : 'var(--line)',
                    background: active ? cc.bg : 'var(--bg)',
                    color: active ? cc.fg : 'var(--text)',
                    fontWeight: active ? 600 : 500,
                  }}
                  aria-pressed={active}
                >
                  {c.title.split(':')[0]}
                </button>
              );
            })}
            {enrolledSlugs.length === 0 && (
              <span className="t-label self-center" style={{ color: 'var(--soft)' }}>
                (no enrollments yet — testing from the full syllabus)
              </span>
            )}
          </div>

          {/* progress input */}
          <p className="t-label mt-6" style={{ color: 'var(--muted)' }}>
            2 · How far are you?{' '}
            {actual > 0 && (
              <span style={{ color: 'var(--soft)' }}>
                (tracked progress: {actual}%)
              </span>
            )}
          </p>
          <div className="mt-3 flex items-center gap-4">
            <input
              type="range"
              min={5}
              max={100}
              step={1}
              value={pct}
              onChange={(e) => setPct(Number(e.target.value))}
              className="w-full accent-indigo"
              aria-label="Course progress percentage"
            />
            <div className="flex items-center gap-1">
              <input
                type="number"
                min={5}
                max={100}
                value={pct}
                onChange={(e) =>
                  setPct(Math.min(100, Math.max(5, Number(e.target.value) || 5)))
                }
                className="w-16 rounded-input border border-line px-2 py-1.5 t-label text-center"
                style={{ background: 'var(--bg)', color: 'var(--text)' }}
                aria-label="Progress percent value"
              />
              <span className="t-label" style={{ color: 'var(--muted)' }}>%</span>
            </div>
          </div>

          {/* tier preview */}
          <div className="mt-6 rounded-card p-5" style={{ background: 'var(--mist)' }}>
            <p className="t-label" style={{ color: 'var(--muted)' }}>
              3 · Your test will cover
            </p>
            <p className="t-body-l mt-2">
              <strong>
                {tier.coveredDays} of {tier.totalDays} days
              </strong>{' '}
              ({pct}% tier) · {tier.questions.length} questions
            </p>
            {topicList.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {topicList.map((c) => (
                  <PillTag key={c} tone="line">
                    {c}
                  </PillTag>
                ))}
                {tier.concepts.length > topicList.length && (
                  <PillTag tone="line">+{tier.concepts.length - topicList.length} more</PillTag>
                )}
              </div>
            )}
            {tier.questions.length === 0 && (
              <p className="t-small mt-2" style={{ color: 'var(--muted)' }}>
                This tier has no quiz questions yet — raise the percentage or pick
                another course.
              </p>
            )}
          </div>

          <button
            className="btn btn-primary mt-6"
            onClick={start}
            disabled={tier.questions.length === 0}
          >
            <Brain size={16} /> Generate my test
          </button>
        </div>
      ) : (
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="t-label" style={{ color: 'var(--muted)' }}>
                {course?.title.split(':')[0]} · {pct}% tier · Days 1–{tier.coveredDays}
              </p>
              <h2 className="t-h3 mt-1">Adaptive knowledge test</h2>
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setPhase('setup');
              }}
            >
              <RotateCcw size={15} /> Change setup
            </button>
          </div>
          <div className="mt-6">
            <Quiz
              key={testKey}
              questions={tier.questions}
              onFinish={(correct, total, weak) => {
                if (weak.length) addWeak(slug, weak);
                void correct;
                void total;
              }}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="btn btn-primary"
              onClick={start}
            >
              <RotateCcw size={15} /> Retake (new questions)
            </button>
            <Link className="btn btn-ghost" href="/app">
              Back to home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
