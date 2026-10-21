'use client';

import { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import type { LessonShare } from '@/lib/types';
import { HookCardEditor } from './hook-card';

type Tone = 'reflective' | 'direct' | 'story';

const toneLabels: Record<Tone, string> = {
  reflective: 'Reflective',
  direct: 'Direct',
  story: 'Story',
};

/**
 * Share panel — unlocks on Mark as Done.
 * A: Hook Card editor (PNG export / copy)
 * B: LinkedIn write-up (tone toggles, word counter, editable, one-tap copy)
 */
export function SharePanel({
  share,
  dayLabel,
  accent = '#4F46E5',
  onShared,
}: {
  share: LessonShare;
  dayLabel: string;
  accent?: string;
  onShared?: () => void;
}) {
  const [tone, setTone] = useState<Tone>('reflective');
  const [texts, setTexts] = useState({ ...share.posts });
  const [copied, setCopied] = useState(false);

  const text = texts[tone];
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    onShared?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12">
      <HookCardCard share={share} dayLabel={dayLabel} accent={accent} onShared={onShared} />

      {/* LinkedIn write-up */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="t-h4">LinkedIn write-up</h3>
            <p className="t-small mt-1" style={{ color: 'var(--muted)' }}>
              Hook → what I learned → a real-life example → one takeaway → a closing
              question. Edit freely.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {(Object.keys(toneLabels) as Tone[]).map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className="rounded-full border px-3.5 py-1.5 t-label tr-micro"
                style={{
                  borderColor: tone === t ? 'var(--primary)' : 'var(--line)',
                  background: tone === t ? 'var(--primary-tint)' : 'transparent',
                  color: tone === t ? 'var(--primary)' : 'var(--muted)',
                }}
              >
                {toneLabels[t]}
              </button>
            ))}
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) => setTexts((s) => ({ ...s, [tone]: e.target.value }))}
          rows={8}
          className="mt-4 w-full rounded-input tr-micro border border-line bg-bg p-4 t-body outline-none focus:border-primary"
          style={{ color: 'var(--text)', resize: 'vertical' }}
          aria-label="LinkedIn post draft"
        />
        <div className="mt-3 flex items-center justify-between">
          <span
            className="t-label"
            style={{ color: words >= 80 && words <= 130 ? '#12B886' : 'var(--muted)' }}
          >
            {words} words {words < 80 ? '· a little short' : words > 130 ? '· a little long' : '· perfect length'}
          </span>
          <button className="btn btn-primary" onClick={copy}>
            {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy post'}
          </button>
        </div>
      </div>
    </div>
  );
}

function HookCardCard({
  share,
  dayLabel,
  accent,
  onShared,
}: {
  share: LessonShare;
  dayLabel: string;
  accent: string;
  onShared?: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Sparkles size={18} style={{ color: 'var(--primary)' }} />
        <h3 className="t-h4">Hook card</h3>
      </div>
      <p className="t-small mt-1" style={{ color: 'var(--muted)' }}>
        One idea per card. Switch template, toggle light/dark, adjust the accent — then
        export a 1080×1350 PNG for LinkedIn.
      </p>
      <div className="mt-6 rounded-card border border-line p-6">
        <HookCardEditor share={share} dayLabel={dayLabel} defaultAccent={accent} onShared={onShared} />
      </div>
    </div>
  );
}
