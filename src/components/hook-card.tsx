'use client';

import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Download, Copy, Check } from 'lucide-react';
import type { LessonShare } from '@/lib/types';

type Template = 'quote' | 'definition' | 'question';
type StyleMode = 'minimalist' | 'interactive';

/** Minimalist: clean text on a background — gradients and solids, user-selectable. */
const MINIMALIST_PRESETS = [
  {
    id: 'indigo-dusk',
    name: 'Indigo Dusk',
    bg: 'linear-gradient(135deg, #0F1226 0%, #4F46E5 55%, #8B5CF6 100%)',
    fg: '#FFFFFF',
    sub: 'rgba(255,255,255,0.72)',
  },
  {
    id: 'violet-haze',
    name: 'Violet Haze',
    bg: 'linear-gradient(135deg, #1D2147 0%, #7A73FF 100%)',
    fg: '#FFFFFF',
    sub: 'rgba(255,255,255,0.72)',
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    bg: 'linear-gradient(135deg, #0B0D1E 0%, #14B8A6 130%)',
    fg: '#FFFFFF',
    sub: 'rgba(255,255,255,0.72)',
  },
  {
    id: 'warm-sun',
    name: 'Warm Sun',
    bg: 'linear-gradient(135deg, #FFB020 0%, #FF7A45 100%)',
    fg: '#0F1226',
    sub: 'rgba(15,18,38,0.72)',
  },
  {
    id: 'mist',
    name: 'Mist',
    bg: '#F5F6FB',
    fg: '#0F1226',
    sub: '#5B6078',
  },
  {
    id: 'ink',
    name: 'Ink',
    bg: '#0F1226',
    fg: '#FFFFFF',
    sub: 'rgba(255,255,255,0.65)',
  },
];

/**
 * Interactive: photography with a rising overlay and text at the bottom.
 * Each photo illustrates a theme the card text is usually about; `keys` power
 * the wording matcher so the default photo aligns with what the card says.
 */
const PHOTOS = [
  {
    id: 'courage',
    src: '/images/card-courage.jpg',
    name: 'Speaking up',
    keys: ['courage', 'brave', 'voice', 'speak up', 'first step', 'nervous', 'fear', 'quiet', 'hand', 'meeting', 'ask'],
  },
  {
    id: 'conversation',
    src: '/images/card-conversation.jpg',
    name: 'Real conversation',
    keys: ['conversation', 'talk', 'listen', 'say', 'words', 'question', 'pause', 'silence', 'friend', 'wrong', 'response'],
  },
  {
    id: 'reflection',
    src: '/images/card-reflection.jpg',
    name: 'Quiet reflection',
    keys: ['story', 'tell yourself', 'reflect', 'journal', 'yourself', 'think', 'mindset', 'belief', 'inner'],
  },
  {
    id: 'habits',
    src: '/images/card-habits.jpg',
    name: 'Daily habits',
    keys: ['habit', 'routine', 'practice', 'every day', 'daily', 'small', 'again', 'start', 'finish', 'discipline', 'show up'],
  },
  {
    id: 'learning',
    src: '/images/card-learning.jpg',
    name: 'Deep learning',
    keys: ['learn', 'study', 'book', 'curious', 'read', 'skill', 'grow', 'attention', 'focus', 'memory', 'smart', 'iq'],
  },
  {
    id: 'feelings',
    src: '/images/card-feelings.jpg',
    name: 'Sitting with feelings',
    keys: ['feel', 'emotion', 'mood', 'tired', 'battery', 'energy', 'rest', 'calm', 'anxious', 'sad', 'happy', 'safe', 'emotional'],
  },
];

/** Best-matching photo for the current card wording (default: reflection). */
function suggestPhotoId(text: string, concept?: string): string {
  const hay = `${text} ${concept ?? ''}`.toLowerCase();
  let best = 'reflection';
  let bestScore = 0;
  for (const p of PHOTOS) {
    const score = p.keys.reduce((n, k) => n + (hay.includes(k) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = p.id;
    }
  }
  return bestScore > 0 ? best : 'reflection';
}

const ACCENTS = ['#4F46E5', '#8B5CF6', '#14B8A6', '#0EA5E9', '#FF7A45', '#FFB020'];

/**
 * Hook Card (1080×1350) — the learner's "course completion card" excerpt.
 * Two design styles:
 *  - Minimalist: clean text on a selectable gradient/solid background
 *  - Interactive: photo background with a rising overlay, text on top
 * Fixed elements: accent bar, hook text, "Day N · Course" label, brand.
 */
export function HookCardEditor({
  share,
  dayLabel,
  defaultAccent = '#4F46E5',
  onShared,
}: {
  share: LessonShare;
  dayLabel: string;
  defaultAccent?: string;
  onShared?: () => void;
}) {
  const [style, setStyle] = useState<StyleMode>('minimalist');
  const [presetId, setPresetId] = useState('indigo-dusk');
  const [photoId, setPhotoId] = useState('reflection');
  // once the user picks a photo by hand, stop auto-matching
  const [photoTouched, setPhotoTouched] = useState(false);
  const [template, setTemplate] = useState<Template>('quote');
  const [accent, setAccent] = useState(defaultAccent);
  const [text, setText] = useState(share.hook);
  const [scale, setScale] = useState(1);
  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  // preview display scale: fit the 1080px-wide card to whatever space is available
  const [previewScale, setPreviewScale] = useState(0.32);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth || 340;
      setPreviewScale(Math.min(0.38, Math.max(0.16, (w - 4) / 1080)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // keep the photo illustrating the card's wording — until the user overrides it
  useEffect(() => {
    if (photoTouched) return;
    setPhotoId(suggestPhotoId(text, share.concept));
  }, [text, template, share.concept, photoTouched]);

  const preset = MINIMALIST_PRESETS.find((p) => p.id === presetId) ?? MINIMALIST_PRESETS[0];
  const photo = PHOTOS.find((p) => p.id === photoId) ?? PHOTOS[0];
  const isInteractive = style === 'interactive';
  const fg = isInteractive ? '#FFFFFF' : preset.fg;
  const sub = isInteractive ? 'rgba(255,255,255,0.75)' : preset.sub;

  const exportPng = async () => {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        width: 1080,
        height: 1350,
        pixelRatio: 1,
        cacheBust: true,
      });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `uneek-hook-${style}-${dayLabel.replace(/[^0-9a-z]+/gi, '-').toLowerCase()}.png`;
      a.click();
      onShared?.();
    } finally {
      setExporting(false);
    }
  };

  const copyImage = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { width: 1080, height: 1350, pixelRatio: 1 });
      const blob = await (await fetch(dataUrl)).blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setCopied(true);
      onShared?.();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard images unsupported in some browsers — export still works
      exportPng();
    }
  };

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Editor controls */}
      <div className="lg:w-64">
        <h4 className="t-label" style={{ color: 'var(--muted)' }}>
          Design style
        </h4>
        <div className="mt-2 flex gap-2">
          {(
            [
              ['minimalist', 'Minimalist'],
              ['interactive', 'Interactive'],
            ] as [StyleMode, string][]
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setStyle(id)}
              className="flex-1 rounded-input border px-3 py-2.5 t-label tr-micro"
              style={{
                borderColor: style === id ? 'var(--primary)' : 'var(--line)',
                background: style === id ? 'var(--primary-tint)' : 'var(--bg)',
                color: style === id ? 'var(--primary)' : 'var(--text)',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {!isInteractive ? (
          <>
            <h4 className="t-label mt-6" style={{ color: 'var(--muted)' }}>
              Background
            </h4>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {MINIMALIST_PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPresetId(p.id)}
                  aria-label={p.name}
                  title={p.name}
                  className="h-11 rounded-[10px] border tr-micro"
                  style={{
                    background: p.bg,
                    borderColor: presetId === p.id ? 'var(--primary)' : 'var(--line)',
                    boxShadow: presetId === p.id ? '0 0 0 2px var(--primary)' : 'none',
                  }}
                />
              ))}
            </div>
            <p className="t-label mt-2" style={{ color: 'var(--soft)' }}>
              {preset.name}
            </p>
          </>
        ) : (
          <>
            <h4 className="t-label mt-6" style={{ color: 'var(--muted)' }}>
              Photo
            </h4>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {PHOTOS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPhotoId(p.id);
                    setPhotoTouched(true);
                  }}
                  aria-label={p.name}
                  title={p.name}
                  className="h-11 overflow-hidden rounded-[10px] border tr-micro"
                  style={{
                    borderColor: photoId === p.id ? 'var(--primary)' : 'var(--line)',
                    boxShadow: photoId === p.id ? '0 0 0 2px var(--primary)' : 'none',
                  }}
                >
                  <img src={p.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="t-label" style={{ color: 'var(--soft)' }}>
                {photo.name} · text on the dark base
              </p>
              <button
                className="t-label tr-micro underline"
                style={{ color: 'var(--primary)' }}
                onClick={() => {
                  setPhotoTouched(false);
                  setPhotoId(suggestPhotoId(text, share.concept));
                }}
              >
                Match to wording
              </button>
            </div>
          </>
        )}

        <h4 className="t-label mt-6" style={{ color: 'var(--muted)' }}>
          Template
        </h4>
        <div className="mt-2 space-y-2">
          {(
            [
              ['quote', 'Big Quote'],
              ['definition', 'Concept + Definition'],
              ['question', 'Question Hook'],
            ] as [Template, string][]
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => {
                setTemplate(id);
                setText(
                  id === 'quote'
                    ? share.hook
                    : id === 'definition'
                      ? share.definition ?? share.hook
                      : share.question ?? share.hook,
                );
              }}
              className="flex w-full items-center justify-between rounded-input border px-4 py-2.5 t-label tr-micro"
              style={{
                borderColor: template === id ? 'var(--primary)' : 'var(--line)',
                background: template === id ? 'var(--primary-tint)' : 'var(--bg)',
                color: template === id ? 'var(--primary)' : 'var(--text)',
              }}
            >
              {label}
              {template === id && <Check size={14} />}
            </button>
          ))}
        </div>

        <h4 className="t-label mt-6" style={{ color: 'var(--muted)' }}>
          Accent bar
        </h4>
        <div className="mt-2 flex gap-2">
          {ACCENTS.map((c) => (
            <button
              key={c}
              onClick={() => setAccent(c)}
              aria-label={`Accent ${c}`}
              className="h-7 w-7 rounded-full tr-micro"
              style={{
                background: c,
                boxShadow: accent === c ? '0 0 0 2px var(--bg), 0 0 0 4px ' + c : 'none',
              }}
            />
          ))}
        </div>

        <h4 className="t-label mt-6" style={{ color: 'var(--muted)' }}>
          Text size
        </h4>
        <input
          type="range"
          min={0.8}
          max={1.15}
          step={0.05}
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          className="mt-2 w-full accent-indigo"
          aria-label="Hook text size"
        />

        <div className="mt-6 flex gap-2">
          <button className="btn btn-primary" onClick={exportPng} disabled={exporting}>
            <Download size={15} /> {exporting ? 'Exporting…' : 'PNG'}
          </button>
          <button className="btn btn-ghost" onClick={copyImage}>
            {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Live preview — card is a true 1080×1350 node, scaled down to fit the screen */}
      <div className="flex min-w-0 flex-1 flex-col items-center gap-4">
        <div
          ref={wrapRef}
          className="w-full"
          style={{
            height: 1350 * previewScale,
            overflow: 'hidden',
            borderRadius: 8,
          }}
        >
          <div
            ref={cardRef}
            style={{
              width: 1080,
              height: 1350,
              transform: `scale(${previewScale})`,
              transformOrigin: 'top left',
              background: isInteractive ? '#0F1226' : preset.bg,
              color: fg,
              position: 'relative',
              padding: 96,
              boxSizing: 'border-box',
              fontFamily: 'Manrope, system-ui, sans-serif',
            }}
          >
            {/* Interactive: photo + rising overlay (text sits on the dark base) */}
            {isInteractive && (
              <>
                <img
                  src={photo.src}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(15,18,38,0.97) 0%, rgba(15,18,38,0.92) 26%, rgba(15,18,38,0.58) 46%, rgba(15,18,38,0.14) 72%, rgba(15,18,38,0.02) 90%)',
                  }}
                />
              </>
            )}

            {/* content — minimalist starts at top; interactive sits on the dark bottom base */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isInteractive ? 'flex-end' : 'flex-start',
              }}
            >
              {/* accent bar — the one constant decoration */}
              <div
                style={{
                  width: 220,
                  height: 6,
                  background: accent,
                  marginBottom: isInteractive ? 36 : 0,
                }}
              />
              <div
                style={{
                  marginTop: isInteractive ? 0 : 110,
                  fontSize: (isInteractive ? 72 : 78) * scale,
                  lineHeight: 1.12,
                  fontWeight: template === 'quote' ? 300 : 400,
                  letterSpacing: '-0.025em',
                }}
              >
                {template === 'definition' && (
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 600,
                      color: accent,
                      marginBottom: 28,
                      letterSpacing: 0,
                    }}
                  >
                    {share.concept ?? 'Concept'}
                  </div>
                )}
                {template === 'question' && (
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 600,
                      color: accent,
                      marginBottom: 28,
                      letterSpacing: 0,
                    }}
                  >
                    Question
                  </div>
                )}
                {text}
              </div>

              {isInteractive ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginTop: 56,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      color: sub,
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    {dayLabel}
                  </span>
                  <span style={{ fontSize: 28, fontWeight: 600, color: fg }}>
                    Uneek Academy
                  </span>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: -8,
                      fontSize: 28,
                      color: sub,
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    {dayLabel}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      bottom: -8,
                      fontSize: 28,
                      fontWeight: 600,
                      color: fg,
                    }}
                  >
                    Uneek Academy
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
