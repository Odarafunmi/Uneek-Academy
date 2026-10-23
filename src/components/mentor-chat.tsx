'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Send, X, Sparkles } from 'lucide-react';
import { Arrow } from '@/components/ui';
import {
  STANDARD_ASSISTANT,
  getMentor,
  mentorsFor,
  askMentor,
  type MentorSource,
  type SubjectId,
} from '@/lib/mentor';

interface ChatMsg {
  from: 'user' | 'mentor';
  text: string;
  sources?: MentorSource[];
  /** which mentor wrote it (for the accent bar) */
  mentorId?: string;
}

/** tiny renderer for **bold** + line breaks */
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
  const [subject, setSubject] = useState<SubjectId>('all');
  const [mentorId, setMentorId] = useState<string>('assistant');
  /** 'pick' = show the mentor list (only when the subject has dedicated mentors) */
  const [stage, setStage] = useState<'pick' | 'chat'>('chat');
  const [sessions, setSessions] = useState<Record<string, ChatMsg[]>>({});
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [typingHint, setTypingHint] = useState<'typing' | 'looking'>('typing');
  const hintTimer = useRef<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const greeted = useRef<Set<string>>(new Set());

  const mentor = getMentor(mentorId);
  const sessionKey = `${subject}:${mentorId}`;
  const msgs = sessions[sessionKey] ?? [];
  const subjectMentors = mentorsFor(subject);

  // subject change → mentor-selection step when dedicated mentors exist
  function chooseSubject(next: SubjectId) {
    setSubject(next);
    const list = mentorsFor(next);
    if (list.length > 0) {
      setStage('pick');
    } else {
      setMentorId('assistant');
      setStage('chat');
    }
  }

  function startWith(id: string) {
    setMentorId(id);
    setStage('chat');
    const key = `${subject}:${id}`;
    if (!greeted.current.has(key)) {
      greeted.current.add(key);
      const g = getMentor(id).greeting;
      setSessions((s) => ({ ...s, [key]: [...(s[key] ?? []), { from: 'mentor', text: g, mentorId: id }] }));
    }
  }

  // standard-assistant greeting when a mentor-less subject is opened directly
  useEffect(() => {
    if (!open || stage !== 'chat') return;
    const key = sessionKey;
    if (!greeted.current.has(key)) {
      greeted.current.add(key);
      const g = getMentor(mentorId).greeting;
      setSessions((s) => ({ ...s, [key]: [...(s[key] ?? []), { from: 'mentor', text: g, mentorId }] }));
    }
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, stage, sessionKey]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing, open, stage]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || typing) return;
    const key = sessionKey;
    const history = (sessions[key] ?? []).map((m) => ({ from: m.from, text: m.text }));
    setSessions((s) => ({ ...s, [key]: [...(s[key] ?? []), { from: 'user', text: q }] }));
    setInput('');
    setTyping(true);
    setTypingHint('typing');
    // if it takes a beat (live lookups), show that we're fetching — feels honest
    if (hintTimer.current) window.clearTimeout(hintTimer.current);
    hintTimer.current = window.setTimeout(() => setTypingHint('looking'), 1300);
    let reply: { text: string; sources?: MentorSource[] };
    try {
      reply = await askMentor(q, mentorId, subject, history);
    } catch {
      reply = {
        text: 'Oops — something glitched on my end just then. Say that again for me?',
        sources: [],
      };
    }
    if (hintTimer.current) window.clearTimeout(hintTimer.current);
    // a short beat of "typing" so answers arrive like a person, not a stamp
    const delay = Math.min(1200, 350 + reply.text.length * 2);
    window.setTimeout(() => {
      setTyping(false);
      setSessions((s) => ({
        ...s,
        [key]: [
          ...(s[key] ?? []),
          { from: 'mentor', text: reply.text, sources: reply.sources, mentorId },
        ],
      }));
    }, delay);
  }

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="mentor-launcher fixed z-[300] flex h-14 w-14 items-center justify-center rounded-full shadow-md tr-micro hover:scale-105"
        style={{ background: 'var(--primary)', color: '#fff' }}
        aria-label={open ? 'Close mentor chat' : 'Open mentor chat'}
        title="Chat with Nova"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* panel — sized to sit below the navbar at every viewport */}
      {open && (
        <div
          className="mentor-panel fixed right-2 z-[300] flex w-[calc(100vw-1rem)] max-w-[420px] flex-col overflow-hidden rounded-card shadow-md sm:right-5"
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--line)',
          }}
          role="dialog"
          aria-label="Companion chat"
        >
          {/* header */}
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg"
              style={{ background: mentor.accent + '22' }}
              aria-hidden="true"
            >
              {mentor.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <p className="t-label truncate" style={{ fontWeight: 700 }}>
                {stage === 'pick' ? 'Choose your mentor' : mentor.name}
              </p>
              <p className="t-label truncate" style={{ color: 'var(--muted)' }}>
                {stage === 'pick' ? 'Dedicated tutors for this subject' : mentor.title}
              </p>
            </div>
            <select
              value={subject}
              onChange={(e) => chooseSubject(e.target.value as SubjectId)}
              className="t-label rounded-full border border-line px-2 py-1"
              style={{ background: 'var(--bg)', color: 'var(--text)' }}
              aria-label="Subject"
            >
              <option value="all">General</option>
              <option value="psychology">Psychology</option>
              <option value="communication">Communication</option>
            </select>
          </div>

          {stage === 'pick' ? (
            /* ---------- mentor selection (only when mentors exist) ---------- */
            <div className="flex-1 space-y-2.5 overflow-y-auto px-4 py-4 nice-scroll">
              <p className="t-small" style={{ color: 'var(--muted)' }}>
                Pick the mentor you’d like to learn with — each has their own style.
              </p>
              {subjectMentors.map((m) => (
                <button
                  key={m.id}
                  onClick={() => startWith(m.id)}
                  className="flex w-full items-start gap-3 rounded-card border border-line p-3.5 text-left tr-micro hover:border-primary"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl"
                    style={{ background: m.accent + '22' }}
                    aria-hidden="true"
                  >
                    {m.emoji}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="t-label block" style={{ fontWeight: 700 }}>
                      {m.name}
                    </span>
                    <span className="t-label block" style={{ color: m.accent }}>
                      {m.title}
                    </span>
                    <span className="t-small mt-1 block" style={{ color: 'var(--muted)' }}>
                      {m.blurb}
                    </span>
                  </span>
                  <Arrow size={15} />
                </button>
              ))}
              <button
                onClick={() => startWith('assistant')}
                className="t-label w-full rounded-card border border-dashed border-line px-3.5 py-3 tr-micro hover:border-primary"
                style={{ color: 'var(--muted)' }}
              >
                ✨ Just chat with Nova instead
              </button>
            </div>
          ) : (
            /* ---------- conversation ---------- */
            <>
              {subjectMentors.length > 0 && (
                <button
                  onClick={() => setStage('pick')}
                  className="t-label flex items-center gap-1.5 border-b border-line px-4 py-2 tr-micro"
                  style={{ color: 'var(--muted)' }}
                >
                  <Arrow size={12} /> Switch mentor
                </button>
              )}
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
                              borderLeft: `3px solid ${getMentor(m.mentorId ?? mentorId).accent}`,
                            }
                      }
                    >
                      <Rich text={m.text} />
                      {m.sources && m.sources.length > 0 && (
                        <div className="mt-2 space-y-1 border-t pt-2" style={{ borderColor: 'var(--line)' }}>
                          {m.sources.map((s) =>
                            /^https?:\/\//.test(s.href) ? (
                              <a
                                key={s.href + s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block t-label underline tr-micro"
                                style={{ color: 'var(--primary)' }}
                              >
                                ↗ {s.label}
                              </a>
                            ) : (
                              <Link
                                key={s.href + s.label}
                                href={s.href}
                                onClick={() => setOpen(false)}
                                className="block t-label underline tr-micro"
                                style={{ color: 'var(--primary)' }}
                              >
                                → {s.label}
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {typing && (
                  <p className="t-label" style={{ color: 'var(--muted)' }}>
                    {typingHint === 'looking' ? `${mentor.name} is looking that up…` : `${mentor.name} is typing…`}
                  </p>
                )}
                {msgs.filter((m) => m.from === 'user').length === 0 && !typing && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mentor.suggested.map((s) => (
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
                  placeholder={`Talk to ${mentor.name}…`}
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
                <Sparkles size={11} /> A little companion — not a therapist
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
