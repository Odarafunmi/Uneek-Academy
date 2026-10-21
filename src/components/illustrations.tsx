import React from 'react';

/* ---------- Flat-vector illustrations (style guide: 2-3 palette colors, no heavy gradients) ---------- */

type IlluProps = { className?: string; size?: number };

const P = {
  indigo: '#4F46E5',
  indigoTint: '#ECEBFE',
  amber: '#FFB020',
  amberTint: '#FFF4DC',
  mint: '#12B886',
  mintTint: '#E3F8F0',
  ink: '#0F1226',
  mist: '#F5F6FB',
};

export function Illustration({ name, className = '', size = 120 }: IlluProps & { name: string }) {
  const map: Record<string, React.ReactNode> = {
    brain: <Brain />,
    perception: <Eye />,
    attention: <Spotlight />,
    memory: <MemoryCards />,
    thought: <ThoughtBubble />,
    emotion: <HeartWave />,
    loop: <Loop />,
    breath: <Breath />,
    desk: <Desk />,
    schema: <Folders />,
    story: <BookPen />,
    speech: <Speech />,
    coins: <Coins />,
    hook: <Envelope />,
    rest: <MoonRest />,
  };
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {map[name] ?? map.brain}
    </svg>
  );
}

function Brain() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.indigoTint} />
      <path
        d="M60 30c-10 0-16 6-16 13-6 1-10 6-10 12 0 5 3 9 7 11 0 8 7 14 16 14h3c9 0 16-6 16-14 4-2 7-6 7-11 0-6-4-11-10-12 0-7-6-13-13-13z"
        fill={P.indigo}
      />
      <path d="M60 34v42" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 46c4 2 8 2 12 0M48 58c7 3 13 3 20 0" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="88" cy="36" r="8" fill={P.amber} />
    </g>
  );
}

function Eye() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.mist} />
      <path d="M22 60c12-18 26-27 38-27s26 9 38 27c-12 18-26 27-38 27s-26-9-38-27z" fill="#fff" stroke={P.ink} strokeWidth="3" />
      <circle cx="60" cy="60" r="13" fill={P.indigo} />
      <circle cx="60" cy="60" r="5" fill={P.ink} />
      <circle cx="65" cy="55" r="3" fill="#fff" />
    </g>
  );
}

function Spotlight() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.ink} />
      <path d="M45 22h30l18 58H27z" fill={P.amber} opacity="0.9" />
      <circle cx="60" cy="42" r="7" fill="#fff" />
      <rect x="30" y="86" width="60" height="8" rx="4" fill="#fff" opacity="0.35" />
    </g>
  );
}

function MemoryCards() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.indigoTint} />
      <rect x="30" y="34" width="44" height="54" rx="6" fill="#fff" stroke={P.indigo} strokeWidth="3" transform="rotate(-8 52 61)" />
      <rect x="46" y="30" width="44" height="54" rx="6" fill="#fff" stroke={P.indigo} strokeWidth="3" transform="rotate(6 68 57)" />
      <rect x="38" y="42" width="28" height="6" rx="3" fill={P.amber} transform="rotate(6 52 45)" />
      <rect x="38" y="54" width="22" height="6" rx="3" fill={P.mint} transform="rotate(6 49 57)" />
    </g>
  );
}

function ThoughtBubble() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.mist} />
      <path d="M40 44a18 18 0 0 1 36 0c0 12-10 18-18 22-8-4-18-10-18-22z" fill={P.indigo} />
      <circle cx="44" cy="76" r="6" fill={P.indigo} />
      <circle cx="33" cy="87" r="4" fill={P.indigo} opacity="0.6" />
      <path d="M52 44h12M52 52h8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function HeartWave() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill="#FDECEB" />
      <path d="M20 60h16l8-16 12 32 10-24 8 8h26" stroke={P.ink} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="44" r="0" fill="none" />
    </g>
  );
}

function Loop() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.indigoTint} />
      <circle cx="60" cy="60" r="26" stroke={P.indigo} strokeWidth="4" fill="none" strokeDasharray="40 12" strokeLinecap="round" />
      <path d="M86 60l-7-7v14z" fill={P.indigo} />
      <circle cx="60" cy="34" r="6" fill={P.amber} />
      <circle cx="86" cy="60" r="0" fill="none" />
      <circle cx="60" cy="86" r="6" fill={P.mint} />
      <circle cx="34" cy="60" r="6" fill={P.indigo} />
    </g>
  );
}

function Breath() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.mintTint} />
      <circle cx="60" cy="60" r="10" fill={P.mint} />
      <circle cx="60" cy="60" r="20" stroke={P.mint} strokeWidth="3" fill="none" opacity="0.7" />
      <circle cx="60" cy="60" r="30" stroke={P.mint} strokeWidth="3" fill="none" opacity="0.35" />
    </g>
  );
}

function Desk() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.amberTint} />
      <rect x="24" y="70" width="72" height="8" rx="4" fill={P.ink} />
      <rect x="36" y="44" width="34" height="22" rx="3" fill="#fff" stroke={P.ink} strokeWidth="3" />
      <rect x="40" y="50" width="18" height="3" rx="1.5" fill={P.indigo} />
      <rect x="40" y="56" width="12" height="3" rx="1.5" fill={P.indigo} />
      <circle cx="82" cy="56" r="10" fill={P.amber} />
      <rect x="30" y="78" width="6" height="14" rx="2" fill={P.ink} />
      <rect x="84" y="78" width="6" height="14" rx="2" fill={P.ink} />
    </g>
  );
}

function Folders() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.mist} />
      <rect x="26" y="38" width="68" height="18" rx="4" fill={P.indigo} />
      <rect x="26" y="58" width="68" height="18" rx="4" fill={P.indigo} opacity="0.6" />
      <rect x="26" y="78" width="68" height="18" rx="4" fill={P.indigo} opacity="0.3" />
      <rect x="34" y="32" width="22" height="10" rx="3" fill={P.amber} />
    </g>
  );
}

function BookPen() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.indigoTint} />
      <path d="M30 34h44c4 0 6 2 6 6v40c0-3-2-5-6-5H30z" fill="#fff" stroke={P.indigo} strokeWidth="3" />
      <path d="M30 34v47h44" stroke={P.indigo} strokeWidth="3" fill="none" />
      <path d="M78 40l10 10-22 22-12 2 2-12z" fill={P.amber} stroke={P.ink} strokeWidth="2.5" strokeLinejoin="round" />
    </g>
  );
}

function Speech() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.mintTint} />
      <path d="M28 38h64a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H52l-14 12v-12h-10a6 6 0 0 1-6-6V44a6 6 0 0 1 6-6z" fill="#fff" stroke={P.ink} strokeWidth="3" />
      <path d="M40 52h40M40 62h26" stroke={P.ink} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Coins() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.amberTint} />
      <ellipse cx="52" cy="76" rx="24" ry="9" fill={P.amber} stroke={P.ink} strokeWidth="2.5" />
      <rect x="28" y="58" width="48" height="18" fill={P.amber} stroke={P.ink} strokeWidth="2.5" />
      <ellipse cx="52" cy="58" rx="24" ry="9" fill="#FFC95C" stroke={P.ink} strokeWidth="2.5" />
      <ellipse cx="72" cy="44" rx="18" ry="7" fill={P.amber} stroke={P.ink} strokeWidth="2.5" />
      <rect x="54" y="34" width="36" height="10" fill={P.amber} stroke={P.ink} strokeWidth="2.5" />
      <ellipse cx="72" cy="34" rx="18" ry="7" fill="#FFC95C" stroke={P.ink} strokeWidth="2.5" />
    </g>
  );
}

function Envelope() {
  return (
    <g>
      <rect x="14" y="34" width="76" height="52" rx="4" fill="#fff" stroke={P.ink} strokeWidth="3" />
      <path d="M14 38l38 26 38-26" fill="none" stroke={P.ink} strokeWidth="3" />
      <rect x="70" y="22" width="34" height="26" rx="3" fill={P.amber} transform="rotate(8 87 35)" />
      <path d="M76 30h20M76 38h14" stroke={P.ink} strokeWidth="2.5" strokeLinecap="round" transform="rotate(8 87 35)" />
    </g>
  );
}

function MoonRest() {
  return (
    <g>
      <rect x="10" y="10" width="100" height="100" rx="16" fill={P.indigoTint} />
      <path d="M74 64a18 18 0 1 1-22-22 14 14 0 0 0 22 22z" fill={P.indigo} />
      <circle cx="40" cy="38" r="3" fill={P.indigo} opacity="0.7" />
      <circle cx="84" cy="40" r="2.5" fill={P.indigo} opacity="0.5" />
      <circle cx="88" cy="82" r="3" fill={P.amber} />
    </g>
  );
}

/* ---------- Logo ---------- */

export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="1" y="1" width="26" height="26" rx="8" fill={light ? '#fff' : P.indigo} />
        <path
          d="M8 18c2-3 4-4 6-4s4 1 6 4M10 10h.01M18 10h.01"
          stroke={light ? P.indigo : '#fff'}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M9 8.5c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" stroke={light ? P.indigo : '#fff'} strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
      <span
        className="font-heading font-semibold tracking-tight"
        style={{ color: light ? '#fff' : P.ink, fontSize: 19 }}
      >
        Uneek Academy
      </span>
    </span>
  );
}
