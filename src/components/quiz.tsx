'use client';

import { useState } from 'react';
import type { ExerciseQuestion } from '@/lib/types';
import { Check, X } from 'lucide-react';

/**
 * Exercise runner: MCQ / true-false / scenario.
 * Instant feedback with a one-line explanation (style guide §7 quiz states).
 * onFinish reports correct/total and any weak concepts.
 */
export function Quiz({
  questions,
  onFinish,
}: {
  questions: ExerciseQuestion[];
  onFinish: (correct: number, total: number, weakConcepts: string[]) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [weak, setWeak] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const q = questions[idx];
  if (!q) return null;

  const isLast = idx === questions.length - 1;
  const correct = picked !== null && picked === q.answer;

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) {
      setCorrectCount((c) => c + 1);
    } else {
      setWeak((w) => (w.includes(q.concept) ? w : [...w, q.concept]));
    }
  }

  function next() {
    if (isLast) {
      setFinished(true);
      onFinish(correctCount, questions.length, weak);
    } else {
      setIdx((i) => i + 1);
      setPicked(null);
    }
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="rounded-card p-8 text-center" style={{ background: 'var(--mist)' }}>
        <div className="t-stat" style={{ color: pct >= 70 ? '#12B886' : 'var(--primary)' }}>
          {pct}%
        </div>
        <p className="t-body mt-2" style={{ color: 'var(--muted)' }}>
          {correctCount} of {questions.length} correct
          {weak.length > 0 ? ` · review: ${weak.join(', ')}` : ' · clean sweep!'}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* progress dots */}
      <div className="mb-6 flex items-center gap-2">
        {questions.map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full tr-standard"
            style={{
              width: i === idx ? 24 : 8,
              background:
                i < idx ? 'var(--primary)' : i === idx ? 'var(--primary)' : 'var(--line)',
              opacity: i === idx ? 1 : i < idx ? 0.5 : 1,
            }}
          />
        ))}
        <span className="t-label ml-2" style={{ color: 'var(--muted)' }}>
          {idx + 1} / {questions.length}
        </span>
      </div>

      <h3 className="t-h4">{q.question}</h3>

      <div className="mt-5 space-y-3">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const showCorrect = picked !== null && i === q.answer;
          const showWrong = isPicked && i !== q.answer;
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={picked !== null}
              className="flex w-full items-center gap-3 rounded-input border p-4 text-left t-body tr-micro"
              style={{
                borderColor: showCorrect
                  ? '#12B886'
                  : showWrong
                    ? '#F25C54'
                    : 'var(--line)',
                background: showCorrect
                  ? '#E3F8F0'
                  : showWrong
                    ? '#FDECEB'
                    : isPicked
                      ? 'var(--primary-tint)'
                      : 'var(--bg)',
                opacity: picked !== null && !showCorrect && !showWrong ? 0.55 : 1,
              }}
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full t-label"
                style={{
                  border: '1px solid var(--line)',
                  color: 'var(--muted)',
                  background: 'var(--bg)',
                }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {showCorrect && (
                <span className="flex items-center gap-1.5 t-label" style={{ color: '#0B7A5B' }}>
                  <Check size={16} strokeWidth={2.5} /> Correct
                </span>
              )}
              {showWrong && (
                <span className="flex items-center gap-1.5 t-label" style={{ color: '#C4433C' }}>
                  <X size={16} strokeWidth={2.5} /> Not quite
                </span>
              )}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div
          className={`mt-5 rounded-input p-4 ${correct ? 'feedback-correct' : 'feedback-wrong'}`}
          role="status"
        >
          <div className="flex items-start gap-2.5">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ background: correct ? '#12B886' : '#F25C54', color: '#fff' }}
            >
              {correct ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
            </span>
            <p className="t-small" style={{ color: 'var(--text)' }}>
              {q.explanation}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary" onClick={next}>
              {isLast ? 'Finish' : 'Next question'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
