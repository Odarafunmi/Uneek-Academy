'use client';

import React from 'react';

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-[14px] w-[2px] rounded-full" style={{ background: light ? '#FFB020' : 'var(--primary)' }} />
      <span className="t-label" style={{ color: light ? 'rgba(255,255,255,.75)' : 'var(--muted)' }}>
        {children}
      </span>
    </div>
  );
}

/**
 * Signature two-tone headline (style guide §4):
 * first line Soft Gray / weight 300, second line Ink / weight 400.
 */
export function TwoToneHeadline({
  line1,
  line2,
  highlight,
  className = '',
  light = false,
  as: Tag = 'h2',
}: {
  line1: string;
  line2?: string;
  /** phrase inside line2 rendered in the accent color */
  highlight?: string;
  className?: string;
  light?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}) {
  const renderLine2 = () => {
    if (!highlight || !line2) return line2;
    const idx = line2.indexOf(highlight);
    if (idx === -1) return line2;
    return (
      <>
        {line2.slice(0, idx)}
        <span style={{ color: light ? '#FFB020' : 'var(--primary)' }}>{highlight}</span>
        {line2.slice(idx + highlight.length)}
      </>
    );
  };
  return (
    <Tag className={`t-h2 ${className}`}>
      <span style={{ color: light ? '#c6cbe0' : 'var(--soft)', fontWeight: 300 }}>{line1}</span>
      {line2 ? (
        <>
          <br />
          <span style={{ color: light ? '#fff' : 'var(--text)', fontWeight: 400 }}>{renderLine2()}</span>
        </>
      ) : null}
    </Tag>
  );
}

export function ProgressRing({
  value,
  max = 100,
  size = 56,
  stroke = 5,
  color = 'var(--primary)',
  track = 'var(--primary-tint)',
  label,
  animate = true,
}: {
  value: number;
  max?: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  label?: string;
  animate?: boolean;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, max === 0 ? 0 : value / max);
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className={animate ? 'ring-animate' : undefined}
          style={{ ['--ring-circumference' as string]: `${c}` }}
        />
      </svg>
      <span
        className="absolute font-heading"
        style={{ fontSize: size * 0.26, fontWeight: 300, color: 'var(--text)' }}
      >
        {label ?? `${Math.round(pct * 100)}%`}
      </span>
    </div>
  );
}

export function StreakChip({ days, light = false }: { days: number; light?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 t-label"
      style={{ background: light ? 'rgba(255,176,32,.15)' : 'var(--accent-tint)', color: light ? '#FFB020' : 'var(--ink)' }}
      title="Daily streak — rest days keep it alive"
    >
      <FlameIcon />
      <span style={{ fontWeight: 600 }}>{days}</span>
      <span className="hidden sm:inline" style={{ opacity: 0.75 }}>day streak</span>
    </span>
  );
}

function FlameIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2s4 4.5 4 9a4 4 0 0 1-8 0c0-1.5.5-2.8 1.2-3.8C9.8 8.5 10 10 11 10c1.2 0 1.5-3 1-8z"
        fill="#FFB020"
        stroke="#FFB020"
        strokeWidth="1"
      />
      <path d="M12 22a6 6 0 0 0 6-6c0-2-1-3.5-2-5-.2 2-1.2 3-2.5 3-1.5 0-2-1.5-1.5-4-2 2-3 3.8-3 6a3 3 0 0 0 3 6z" fill="#FFB020" opacity="0.5" />
    </svg>
  );
}

export function PillTag({
  children,
  tone = 'tint',
}: {
  children: React.ReactNode;
  tone?: 'tint' | 'accent' | 'mint' | 'line' | 'coral';
}) {
  const styles: Record<string, React.CSSProperties> = {
    tint: { background: 'var(--primary-tint)', color: 'var(--primary)' },
    accent: { background: 'var(--accent-tint)', color: 'var(--ink)' },
    mint: { background: 'var(--success-tint)', color: 'var(--success-text)' },
    coral: { background: 'var(--danger-tint)', color: 'var(--danger-text)' },
    line: { background: 'transparent', color: 'var(--muted)', border: '1px solid var(--line)' },
  };
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 t-label" style={styles[tone]}>
      {children}
    </span>
  );
}

/** Three-dash marker used above hero display headline (reference design). */
export function DashMarker({ light = true }: { light?: boolean }) {
  return (
    <div className="mb-5 flex items-center gap-2" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-[2px] rounded-full"
          style={{ width: 22 - i * 5, background: light ? '#fff' : 'var(--ink)', opacity: light ? 0.9 - i * 0.2 : 1 }}
        />
      ))}
    </div>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
