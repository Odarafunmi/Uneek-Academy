'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Send, X, Sparkles } from 'lucide-react';
import {
  PERSONAS,
  askMentor,
  getPersona,
  type MentorSource,
  type PersonaId,
} from '@/lib/mentor';

interface ChatMsg {
  from: 'user' | 'mentor';
  text: string;
  sources?: MentorSource[];
  persona?: PersonaId;
}

/** tiny renderer for **bold** + line breaks + • bullets */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === '\n') return <br key={i} />;
        if (p.startsWith('**') && p.endsWith('**')) {
          return (
            <strong key={i} style={{ fontWeight: 600 }}>
              {p.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export function MentorChat() {
  const [open, setOpen] = useState(false);
  const [persona, setPersona] = useState<PersonaId>('assistant');
  const [scope, setScope] = useState<'all' | 'psychology' | 'communication'>('all');
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const seenPersona = useRef<Set<PersonaId>>(new Set());

  const p = getPersona(persona);

  // greet when a persona is first opened
  useEffect(() => {
    if (!open) return;
    if (!seenPersona.current.has(persona)) {
      seenPersona.current.add(persona);
      setMsgs((m) => [...m, { from: 'mentor', text: p.greeting, persona }]);
    }
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, persona]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing, open]);

  function send(text: string) {
    const q = text.trim();
    if (!q || typing) return;
    setMsgs((m) => [...m, { from: 'user', text: q }]);
    setInput('');
    setTyping(true);
    const reply = askMentor(q, persona, scope);
    window.setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [
        ...m,
        { from: 'mentor', text: reply.text, sources: reply.sources, persona },
      ]);
    }, 450);
  }

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[300] flex h-14 w-14 items-center justify-center rounded-full shadow-md tr-micro hover:scale-105"
        style={{ background: 'var(--primary)', color: '#fff' }}
        aria-label={open ? 'Close mentor chat' : 'Open mentor chat'}
        title="AI Mentor"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* panel */}
      {open && (
        <div
          className="fixed bottom-24 right-2 z-[300] flex w-[calc(100vw-1rem)] max-w-[420px] flex-col overflow-hidden rounded-card shadow-md sm:right-5"
          style={{
            height: 'min(640px, calc(100vh - 8rem))',
            background: 'var(--bg)',
            border: '1px solid var(--line)',
          }}
          role="dialog"
          aria-label="AI Mentor chat"
        >
          {/* header */}
          <div
            className="flex items-center gap-3 border-b border-line px-4 py-3"
            style={{ background: 'var(--surface)', backgroundBlendMode: 'overlay' }}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg"
              style={{ background: p.accent + '22' }}
              aria-hidden="true"
            >
              {p.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <p className="t-label truncate" style={{ fontWeight: 700 }}>
                {p.name}
              </p>
              <p className="t-label truncate" style={{ color: 'var(--muted)' }}>
                {p.title} · {p.tone}
              </p>
            </div>
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value as typeof scope)}
              className="t-label rounded-full border border-line px-2 py-1"
              style={{ background: 'var(--bg)', color: 'var(--text)' }}
              aria-label="Course context"
            >
              <option value="all">All courses</option>
              <option value="psychology">Psychology</option>
              <option value="communication">Communication</option>
            </select>
          </div>

          {/* persona switcher */}
          <div className="flex gap-1.5 border-b border-line px-3 py-2">
            {PERSONAS.map((x) => (
              <button
                key={x.id}
                onClick={() => setPersona(x.id)}
                className="flex-1 rounded-full px-2 py-1.5 t-label tr-micro"
                style={{
                  background: persona === x.id ? x.accent + '1f' : 'transparent',
                  color: persona === x.id ? x.accent : 'var(--muted)',
                  border: `1px solid ${persona === x.id ? x.accent : 'var(--line)'}`,
                  fontWeight: persona === x.id ? 700 : 500,
                }}
                aria-pressed={persona === x.id}
              >
                <span aria-hidden="true">{x.emoji}</span>{' '}
                {x.id === 'assistant' ? 'Assistant' : x.id === 'psychology' ? 'Psychology' : 'Communication'}
              </button>
            ))}
          </div>

          {/* messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4 nice-scroll">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === 'user' ? 'flex justify-end' : ''}>
                <div
                  className="max-w-[88%] rounded-2xl px-3.5 py-2.5 t-small"
                  style={
                    m.from === 'user'
                      ? { background: 'var(--primary)', color: '#fff', borderBottomRightRadius: 6 }
                      : {
                          background: 'var(--surface)',
                          color: 'var(--text)',
                          borderBottomLeftRadius: 6,
                          borderLeft: `3px solid ${getPersona(m.persona ?? persona).accent}`,
                        }
                  }
                >
                  <Rich text={m.text} />
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2 space-y-1 border-t pt-2" style={{ borderColor: 'var(--line)' }}>
                      {m.sources.map((s) => (
                        <Link
                          key={s.href + s.label}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="block t-label underline tr-micro"
                          style={{ color: 'var(--primary)' }}
                        >
                          → {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <p className="t-label" style={{ color: 'var(--muted)' }}>
                {p.name} is thinking…
              </p>
            )}
            {/* starter chips — only before the first user message */}
            {msgs.filter((m) => m.from === 'user').length === 0 && !typing && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.suggested.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-line px-3 py-1.5 t-label tr-micro hover:border-primary"
                    style={{ color: 'var(--muted)' }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* composer */}
          <form
            className="flex items-center gap-2 border-t border-line p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${p.name}…`}
              className="t-body min-w-0 flex-1 rounded-full border border-line px-4 py-2.5"
              style={{ background: 'var(--bg)', color: 'var(--text)' }}
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full tr-micro disabled:opacity-40"
              style={{ background: 'var(--primary)', color: '#fff' }}
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
          <p className="flex items-center gap-1 px-4 pb-2 t-label" style={{ color: 'var(--soft)' }}>
            <Sparkles size={11} /> Grounded in your Uneek lessons · not a therapist
          </p>
        </div>
      )}
    </>
  );
}
