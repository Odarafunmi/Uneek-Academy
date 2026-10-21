'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { notFound } from 'next/navigation';
import { getCourse, accentForMonth } from '@/lib/courses';
import { lessonForDayInCourse } from '@/content/psychology';
import { useApp, xpForDay } from '@/lib/store';
import { PillTag, Arrow, SectionLabel } from '@/components/ui';
import { Quiz } from '@/components/quiz';
import { SharePanel } from '@/components/share-panel';
import { Illustration } from '@/components/illustrations';
import { ConfettiLayer, Toast, useCelebration } from '@/components/celebration';
import { Check, ChevronLeft, ChevronRight, Lock, Moon } from 'lucide-react';
import type { ContentCard, Lesson, LessonVideo } from '@/lib/types';

export default function LessonPage({ params }: { params: { slug: string; day: string } }) {
  const { slug, day } = params;
  const dayIndex = Number(day);
  const course = getCourse(slug);
  const lesson = lessonForDayInCourse(slug, dayIndex);
  if (!course || !lesson || Number.isNaN(dayIndex)) notFound();
  return <LessonView slug={slug} lesson={lesson} />;
}

function LessonView({ slug, lesson }: { slug: string; lesson: Lesson }) {
  const completeDay = useApp((s) => s.completeDay);
  const addWeak = useApp((s) => s.addWeak);
  const markShared = useApp((s) => s.markShared);
  const progress = useApp((s) => s.progress[slug]);
  const enroll = useApp((s) => s.enroll);
  const enrolled = useApp((s) => s.enrolled[slug]);
  const dayState = progress?.days[lesson.dayIndex];
  const accent = accentForMonth(lesson.month);

  const [step, setStep] = useState(0);
  const [exerciseDone, setExerciseDone] = useState(0); // correct answers
  const [exerciseTotal, setExerciseTotal] = useState(0);
  const [weak, setWeak] = useState<string[]>([]);
  const [restDone, setRestDone] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const { celebrate, pieces } = useCelebration();

  useEffect(() => {
    if (!enrolled) enroll(slug);
    // auto-restore: if day already done, jump to share
    if (dayState?.done) setShowShare(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isRest = lesson.type === 'rest';
  const isReview = lesson.type === 'review';
  const steps = useMemo(() => buildSteps(lesson), [lesson]);
  const current = steps[step];
  const atEnd = step === steps.length - 1;
  const done = dayState?.done ?? false;

  function handleQuizFinish(correct: number, total: number, weakConcepts: string[]) {
    setExerciseDone(correct);
    setExerciseTotal(total);
    setWeak(weakConcepts);
    if (weakConcepts.length) addWeak(slug, weakConcepts);
  }

  function markDone() {
    completeDay(slug, lesson.dayIndex, exerciseDone, exerciseTotal, isReview);
    celebrate();
    setToast(`Day ${lesson.dayIndex} complete · +${xpForDay(exerciseDone, isReview)} XP`);
    setTimeout(() => setShowShare(true), 700);
  }

  function tickRest() {
    setRestDone(true);
    completeDay(slug, lesson.dayIndex, 0, 0, false);
    celebrate();
    setToast(`Rest ticked · streak protected`);
    setTimeout(() => setShowShare(false), 400);
  }

  const prevHref = lesson.dayIndex > 1 ? `/app/courses/${slug}/day/${lesson.dayIndex - 1}` : null;
  const nextHref = `/app/courses/${slug}/day/${lesson.dayIndex + 1}`;

  return (
    <div className="mx-auto max-w-3xl">
      <ConfettiLayer pieces={pieces} />
      <Toast message={toast} onDone={() => setToast(null)} />

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Link
          href={`/app/courses/${slug}`}
          className="t-label flex items-center gap-1 hover:opacity-70"
          style={{ color: 'var(--muted)' }}
        >
          <ChevronLeft size={15} /> {getCourse(slug)?.title}
        </Link>
        <div className="flex items-center gap-2">
          <PillTag tone="line">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: accent.hex }}
              aria-hidden="true"
            />
            Month {lesson.month}
          </PillTag>
          <PillTag tone="tint">{typeLabel(lesson.type)}</PillTag>
        </div>
      </div>

      <div className="mt-8">
        <div className="t-label" style={{ color: 'var(--muted)' }}>
          Day {lesson.dayIndex} · Week {lesson.week} · {lesson.duration}
        </div>
        <h1 className="t-h1 mt-2">{lesson.title}</h1>
        <p className="t-body-l mt-4" style={{ color: 'var(--muted)' }}>
          {lesson.summary}
        </p>
      </div>

      {/* REST DAY */}
      {isRest ? (
        <RestScreen
          message={lesson.restMessage ?? ''}
          done={done || restDone}
          onTick={tickRest}
        />
      ) : showShare && done ? (
        /* SHARE PANEL (unlocks on Mark as Done) */
        <div className="mt-10">
          <SectionLabel>Share your learning</SectionLabel>
          <SharePanel
            share={lesson.share!}
            dayLabel={`Day ${lesson.dayIndex} · ${getCourse(slug)?.title.split(':')[0] ?? 'Uneek'}`}
            accent={accent.hex}
            onShared={() => markShared(slug, lesson.dayIndex)}
          />
          <div className="mt-10 flex items-center justify-between border-t border-line pt-8">
            <button className="btn btn-ghost" onClick={() => setShowShare(false)}>
              Back to lesson
            </button>
            <Link href={`/app/courses/${slug}`} className="btn btn-primary">
              Done for today <Arrow />
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Step progress dots */}
          <div className="mt-10 flex items-center gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full tr-standard"
                style={{
                  width: i === step ? 26 : 10,
                  background: i <= step ? accent.hex : 'var(--line)',
                }}
              />
            ))}
          </div>

          {/* Step card */}
          <div className="mt-6 rounded-card border border-line p-7 md:p-9">
            <StepContent
              step={current}
              onQuizFinish={handleQuizFinish}
              questions={lesson.questions}
              isReview={isReview}
            />
          </div>

          {/* Nav */}
          <div className="mt-6 flex items-center justify-between">
            <button
              className="btn btn-ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ChevronLeft size={15} /> Back
            </button>

            {!atEnd ? (
              <button
                className="btn btn-primary"
                onClick={() => setStep((s) => s + 1)}
              >
                Next <Arrow />
              </button>
            ) : done ? (
              <button className="btn btn-primary" onClick={() => setShowShare(true)}>
                Share your learning <Arrow />
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={markDone}
                disabled={exerciseTotal === 0}
                title={exerciseTotal === 0 ? 'Complete the exercise to unlock' : undefined}
              >
                <Check size={16} /> Mark as Done
              </button>
            )}
          </div>

          {atEnd && !done && exerciseTotal === 0 && (
            <p className="t-small mt-3 text-right" style={{ color: 'var(--muted)' }}>
              Finish the exercise to unlock “Mark as Done”
            </p>
          )}

          {/* Prev / next days */}
          <div className="mt-12 flex items-center justify-between border-t border-line pt-8">
            {prevHref ? (
              <Link href={prevHref} className="t-label flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                <ChevronLeft size={15} /> Previous day
              </Link>
            ) : (
              <span />
            )}
            <Link href={nextHref} className="t-label flex items-center gap-1" style={{ color: 'var(--muted)' }}>
              Next day <ChevronRight size={15} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- Step machinery ---------- */

type Step =
  | { kind: 'cards'; cards: ContentCard[] }
  | { kind: 'video'; video?: LessonVideo }
  | { kind: 'tryon'; prompt: string }
  | { kind: 'reflection'; prompt: string }
  | { kind: 'exercise'; prompt: string }
  | { kind: 'quiz' };

function buildSteps(lesson: Lesson): Step[] {
  const steps: Step[] = [];
  if (lesson.type === 'video') {
    steps.push({ kind: 'video', video: lesson.video });
    steps.push(...chunkCards(lesson.cards));
  } else {
    steps.push(...chunkCards(lesson.cards));
  }
  if (lesson.tryOn) steps.push({ kind: 'tryon', prompt: lesson.tryOn });
  if (lesson.reflection) steps.push({ kind: 'reflection', prompt: lesson.reflection });
  if (lesson.exercise) steps.push({ kind: 'exercise', prompt: lesson.exercise });
  if (lesson.questions.length) steps.push({ kind: 'quiz' });
  return steps;
}

function chunkCards(cards: ContentCard[]): Step[] {
  if (cards.length === 0) return [{ kind: 'cards', cards: [] }];
  const out: Step[] = [];
  for (let i = 0; i < cards.length; i += 2) out.push({ kind: 'cards', cards: cards.slice(i, i + 2) });
  return out;
}

function StepContent({
  step,
  onQuizFinish,
  questions,
  isReview,
}: {
  step: Step;
  onQuizFinish: (c: number, t: number, w: string[]) => void;
  questions: Lesson['questions'];
  isReview: boolean;
}) {
  if (step.kind === 'cards') {
    return (
      <div className="space-y-10">
        {step.cards.map((c, i) => (
          <CardView key={i} card={c} />
        ))}
      </div>
    );
  }
  if (step.kind === 'video') {
    return <VideoCard video={step.video} />;
  }
  if (step.kind === 'tryon') {
    return (
      <div>
        <PillTag tone="accent">Today’s try-on</PillTag>
        <h3 className="t-h3 mt-4">Do it yourself — tiny counts</h3>
        <div className="mt-5 rounded-card p-6" style={{ background: 'var(--accent-tint)' }}>
          <p className="t-body-l" style={{ color: 'var(--ink)' }}>
            {step.prompt}
          </p>
        </div>
        <p className="t-small mt-4" style={{ color: 'var(--muted)' }}>
          Try-ons are the point of the course — reading without doing fades by
          tomorrow. Small and awkward beats big and never.
        </p>
      </div>
    );
  }
  if (step.kind === 'reflection') {
    return (
      <div>
        <PillTag tone="tint">Reflection</PillTag>
        <h3 className="t-h3 mt-4">{step.prompt}</h3>
        <textarea
          rows={4}
          placeholder="Write a few lines… (private, saved to your notes)"
          className="mt-5 w-full rounded-input tr-micro border border-line bg-bg p-4 t-body outline-none focus:border-primary"
          style={{ color: 'var(--text)' }}
          aria-label="Reflection"
        />
      </div>
    );
  }
  if (step.kind === 'exercise') {
    return (
      <div>
        <PillTag tone="accent">Real-world exercise</PillTag>
        <h3 className="t-h3 mt-4">{step.prompt}</h3>
        <p className="t-small mt-4" style={{ color: 'var(--muted)' }}>
          Jot the result below when you have tried it — then continue to the quiz.
        </p>
        <textarea
          rows={3}
          placeholder="What happened?"
          className="mt-3 w-full rounded-input tr-micro border border-line bg-bg p-4 t-body outline-none focus:border-primary"
          style={{ color: 'var(--text)' }}
          aria-label="Exercise notes"
        />
      </div>
    );
  }
  return (
    <div>
      <PillTag tone="tint">
        {isReview ? 'Cumulative test' : 'Quick check'}
      </PillTag>
      <h3 className="t-h3 mt-4">Lock it in</h3>
      <div className="mt-6">
        <Quiz questions={questions} onFinish={onQuizFinish} />
      </div>
    </div>
  );
}

function CardView({ card }: { card: ContentCard }) {
  switch (card.kind) {
    case 'hook':
      return (
        <div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'var(--primary-tint)' }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--primary)' }} />
          </div>
          <p className="t-h3 mt-4 font-light">{card.body}</p>
        </div>
      );
    case 'definition':
      return (
        <div className="rounded-card p-6" style={{ background: 'var(--primary-tint)' }}>
          <div className="t-label" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            {card.title}
          </div>
          <p className="t-body-l mt-2">{card.body}</p>
        </div>
      );
    case 'example':
      return (
        <div>
          <div className="t-label" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            {card.title}
          </div>
          <p className="t-body-l mt-2">{card.body}</p>
        </div>
      );
    case 'practice':
      return (
        <div className="rounded-card border border-line p-6">
          <div className="t-label" style={{ color: 'var(--muted)', fontWeight: 600 }}>
            {card.title}
          </div>
          <p className="t-body mt-2">{card.body}</p>
        </div>
      );
    case 'story':
      return (
        <div className="overflow-hidden rounded-card" style={{ background: 'var(--mist)' }}>
          <div className="flex">
            <div className="w-1 shrink-0" style={{ background: 'var(--primary)' }} aria-hidden="true" />
            <div className="p-6">
              <div className="t-label" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Story{card.title ? ` · ${card.title}` : ''}
              </div>
              <p className="t-body-l mt-3">{card.body}</p>
            </div>
          </div>
        </div>
      );
    case 'list':
      return (
        <div>
          {card.title && <h3 className="t-h4">{card.title}</h3>}
          <ul className="mt-4 space-y-3">
            {card.items?.map((it, i) => (
              <li key={i} className="flex gap-3 t-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--primary)' }} />
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'illustration':
      return (
        <div className="flex flex-col items-center py-4">
          <Illustration name={card.illustration ?? 'brain'} size={160} />
          {card.body && (
            <p className="t-small mt-4 max-w-sm text-center" style={{ color: 'var(--muted)' }}>
              {card.body}
            </p>
          )}
        </div>
      );
    default:
      return (
        <div>
          {card.title && <h3 className="t-h4">{card.title}</h3>}
          <p className="t-body-l mt-3">{card.body}</p>
        </div>
      );
  }
}

function VideoCard({ video }: { video?: LessonVideo }) {
  const [playing, setPlaying] = useState(false);

  // no curated video yet — keep the day fully playable without it
  if (!video) {
    return (
      <div>
        <PillTag tone="tint">Video lesson</PillTag>
        <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-[12px]">
          <img
            src="/images/video-still.jpg"
            alt="A learner taking notes during a video lesson"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: 'rgba(15,18,38,.45)' }}
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: 'rgba(255,255,255,.92)' }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F1226">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="t-label rounded-full px-3.5 py-1.5" style={{ background: 'rgba(15,18,38,.65)', color: '#fff' }}>
              Video coming soon
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="t-small max-w-md" style={{ color: 'var(--muted)' }}>
            We are hosting this lesson’s video ourselves — it lands soon. Nothing is
            blocked: the written lesson below covers everything, and you can complete
            the day now.
          </p>
          <PillTag tone="line">Written lesson is complete</PillTag>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <PillTag tone="tint">Video lesson</PillTag>
        <PillTag tone="line">YouTube · {video.by}</PillTag>
      </div>
      <div className="mt-5 aspect-video w-full overflow-hidden rounded-[12px]" style={{ background: '#0F1226' }}>
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full tr-micro"
            aria-label={`Play video: ${video.title}`}
          >
            <img
              src="/images/video-still.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(15,18,38,.45)' }}
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full tr-micro"
                style={{ background: 'rgba(255,255,255,.92)' }}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F1226">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span className="t-label rounded-full px-3.5 py-1.5" style={{ background: 'rgba(15,18,38,.65)', color: '#fff' }}>
                Play · {video.title}
              </span>
            </div>
          </button>
        )}
      </div>
      <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-xl">
          <p className="t-body">{video.title}</p>
          <p className="t-small mt-1" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--ink)' }}>Why this video:</strong> {video.note}
          </p>
        </div>
        <a
          className="btn btn-ghost"
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open on YouTube
        </a>
      </div>
    </div>
  );
}

function RestScreen({
  message,
  done,
  onTick,
}: {
  message: string;
  done: boolean;
  onTick: () => void;
}) {
  return (
    <div
      className="mt-10 rounded-card p-10 text-center"
      style={{ background: 'var(--primary-tint)' }}
    >
      <Illustration name="rest" size={150} className="mx-auto" />
      <p className="t-body-l mx-auto mt-6 max-w-md">{message}</p>
      <label className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full px-6 py-4" style={{ background: 'var(--bg)' }}>
        <input
          type="checkbox"
          checked={done}
          onChange={onTick}
          disabled={done}
          className="h-5 w-5 rounded accent-indigo"
          aria-label="Tick rest"
        />
        <span className="t-h4" style={{ textDecoration: done ? 'line-through' : 'none', opacity: done ? 0.6 : 1 }}>
          {done ? 'Rest ticked' : 'Tick rest'}
        </span>
        {done && <Check size={18} style={{ color: '#12B886' }} />}
      </label>
    </div>
  );
}

function typeLabel(t: Lesson['type']) {
  return {
    reading: 'Reading',
    video: 'Video',
    interactive: 'Interactive',
    review: 'Weekly review',
    rest: 'Rest day',
  }[t];
}
