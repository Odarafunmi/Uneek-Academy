'use client';

import { useCallback, useEffect, useState } from 'react';

const COLORS = ['#4F46E5', '#FFB020', '#12B886', '#8B5CF6', '#0EA5E9'];

/** Small palette-confetti burst (style guide §9). Respects prefers-reduced-motion. */
export function useCelebration() {
  const [pieces, setPieces] = useState<
    { id: number; left: number; delay: number; color: string; rotate: number; size: number }[]
  >([]);

  const celebrate = useCallback(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const next = Array.from({ length: 28 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.35,
      color: COLORS[i % COLORS.length],
      rotate: Math.random() * 360,
      size: 7 + Math.random() * 7,
    }));
    setPieces(next);
    setTimeout(() => setPieces([]), 2600);
  }, []);

  return { celebrate, pieces };
}

export function ConfettiLayer({
  pieces,
}: {
  pieces: { id: number; left: number; delay: number; color: string; rotate: number; size: number }[];
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            background: p.color,
            width: p.size,
            height: p.size * 0.6,
            borderRadius: 2,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}

/** Transient toast, bottom-center. */
export function Toast({ message, onDone }: { message: string | null; onDone: () => void }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [message, onDone]);
  if (!message) return null;
  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 rounded-full px-5 py-3 t-label shadow-md"
      style={{ background: 'var(--ink)', color: '#fff' }}
    >
      {message}
    </div>
  );
}
