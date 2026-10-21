'use client';

import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Download, Copy, Check } from 'lucide-react';
import type { LessonShare } from '@/lib/types';

type Template = 'quote' | 'definition' | 'question';

/**
 * Hook Card (style guide §7): 1080×1350 minimalist share image.
 * Fixed elements only: accent bar (6px), hook, bottom-left label, bottom-right brand.
 * MVP templates: Big Quote, Concept + One-Line Definition, Question Hook.
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
  const [template, setTemplate] = useState<Template>('quote');
  const [dark, setDark] = useState(false);
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

  const accentChoices = ['#4F46E5', '#8B5CF6', '#14B8A6', '#0EA5E9', '#FF7A45', '#FFB020'];

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
      a.download = `uneek-hook-day-${dayLabel.replace(/[^0-9a-z]+/gi, '-').toLowerCase()}.png`;
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
          Appearance
        </h4>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => setDark(false)}
            className="rounded-full border px-3.5 py-1.5 t-label"
            style={{
              borderColor: !dark ? 'var(--primary)' : 'var(--line)',
              color: !dark ? 'var(--primary)' : 'var(--muted)',
            }}
          >
            Light
          </button>
          <button
            onClick={() => setDark(true)}
            className="rounded-full border px-3.5 py-1.5 t-label"
            style={{
              borderColor: dark ? 'var(--primary)' : 'var(--line)',
              color: dark ? 'var(--primary)' : 'var(--muted)',
            }}
          >
            Dark
          </button>
        </div>

        <h4 className="t-label mt-6" style={{ color: 'var(--muted)' }}>
          Accent
        </h4>
        <div className="mt-2 flex gap-2">
          {accentChoices.map((c) => (
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
            background: dark ? '#0F1226' : '#F5F6FB',
            color: dark ? '#FFFFFF' : '#0F1226',
            position: 'relative',
            padding: 96,
            boxSizing: 'border-box',
            fontFamily: 'Manrope, system-ui, sans-serif',
          }}
        >
          {/* accent bar — the only decoration */}
          <div style={{ width: 220, height: 6, background: accent }} />
          <div
            style={{
              marginTop: 110,
              fontSize: 78 * scale,
              lineHeight: 1.12,
              fontWeight: template === 'quote' ? 300 : 400,
              letterSpacing: '-0.025em',
            }}
          >
            {template === 'definition' && (
              <>
                <div style={{ fontSize: 34, fontWeight: 600, color: accent, marginBottom: 28, letterSpacing: 0 }}>
                  {share.concept ?? 'Concept'}
                </div>
              </>
            )}
            {template === 'question' && (
              <div style={{ fontSize: 32, fontWeight: 600, color: accent, marginBottom: 28, letterSpacing: 0 }}>
                Question
              </div>
            )}
            {text}
          </div>

          <div
            style={{
              position: 'absolute',
              left: 96,
              bottom: 88,
              fontSize: 28,
              color: dark ? '#A3A8C7' : '#5B6078',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            {dayLabel}
          </div>
          <div
            style={{
              position: 'absolute',
              right: 96,
              bottom: 88,
              fontSize: 28,
              fontWeight: 600,
              color: dark ? '#FFFFFF' : '#0F1226',
            }}
          >
            Uneek Academy
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
