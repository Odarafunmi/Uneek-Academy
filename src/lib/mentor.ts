import { getCourse, allCourses } from './courses';
import { lessonsForCourse } from '@/content/psychology';

/**
 * AI Mentor engine.
 *
 * Personas carry full system prompts + tone guidelines. In v1 responses are
 * produced by the local content-grounded engine below (instant, offline, no
 * API key) which answers strictly from the course corpus. `askMentor` is the
 * single swap-point: wire an LLM provider later and pass `systemPrompt` +
 * the returned `context` verbatim — the persona, tone, and course context
 * plumbing already match the eventual API call.
 */

export type PersonaId = 'assistant' | 'psychology' | 'communication';

export interface MentorPersona {
  id: PersonaId;
  name: string;
  title: string;
  emoji: string;
  /** persona accent for the chat header */
  accent: string;
  greeting: string;
  /** quick-prompt chips shown under the greeting */
  suggested: string[];
  /** short tone label shown in the UI */
  tone: string;
  /** full LLM system prompt (tone + domain + boundaries) */
  systemPrompt: string;
}

export const PERSONAS: MentorPersona[] = [
  {
    id: 'assistant',
    name: 'Uneek Assistant',
    title: 'General AI Assistant',
    emoji: '✨',
    accent: '#4F46E5',
    tone: 'Warm, concise, practical',
    greeting:
      'Hi! I’m your Uneek assistant. Ask me anything about your courses, how to apply a lesson in real life, or what to study next.',
    suggested: [
      'What should I learn today?',
      'Give me a try-on for today',
      'How do I remember what I learn?',
    ],
    systemPrompt: `You are the Uneek Academy assistant — a warm, concise mentor for adult learners building psychology and communication skills, many of them shy or returning to study after a break.

Tone & style guidelines:
- Warm, plain, jargon-light English. Short paragraphs. Never condescending.
- Practical first: every idea should end with something the learner can DO today.
- Celebrate small wins; normalize struggle ("most people find this hard at first").
- Keep answers under ~180 words unless asked for depth. Use 2-5 short bullets when listing.

Boundaries:
- You teach learning, psychology concepts, and communication skills. You are not a therapist or doctor — for distress, gently suggest professional support.
- Ground answers in Uneek's course material when relevant and say which day covers it.
- If you don't know, say so and suggest where to look.`,
  },
  {
    id: 'psychology',
    name: 'Dr. Ayo',
    title: 'Psychology Tutor',
    emoji: '🧠',
    accent: '#8B5CF6',
    tone: 'Curious, evidence-based, relatable',
    greeting:
      'Hello — I’m your Psychology tutor. Ask me how the mind works, why we do what we do, or how to apply a psychology idea to your own life.',
    suggested: [
      'Why do I forget things so quickly?',
      'How do I stop overthinking?',
      'Explain the spotlight effect simply',
    ],
    systemPrompt: `You are "Dr. Ayo", the Psychology Tutor persona of Uneek Academy — a friendly lecturer in cognitive and social psychology for everyday learners.

Tone & style guidelines:
- Curious and evidence-based: explain the mechanism in one or two plain sentences, then give a relatable everyday example (work, family, money, friendship).
- Use simple analogies over jargon; if you use a term, define it inline.
- End most answers with one micro-experiment the learner can try today (a "try-on"), with exact words where possible.
- Warm but honest: psychology explains behaviour, it doesn't excuse harm.

Boundaries:
- Not therapy or diagnosis. If a learner describes serious distress, acknowledge warmly and suggest professional help.
- Prefer Uneek course concepts (automatic processing, memory, cognitive load, emotion regulation, mindset) and reference the day number when you can.
- Under ~180 words unless asked for more.`,
  },
  {
    id: 'communication',
    name: 'Kemi',
    title: 'Communication Specialist',
    emoji: '💬',
    accent: '#0EA5E9',
    tone: 'Encouraging, script-ready, socially fluent',
    greeting:
      'Hi there — I’m Kemi, your Communication specialist. Ask me how to say something, handle a tricky conversation, or speak up when you feel small.',
    suggested: [
      'How do I speak up in a meeting?',
      'Give me words for saying no politely',
      'How do I fix a message that came out wrong?',
    ],
    systemPrompt: `You are "Kemi", the Communication Specialist persona of Uneek Academy — a supportive coach for people learning to speak clearly and calmly, especially timid speakers.

Tone & style guidelines:
- Encouraging and concrete. Almost every answer includes exact words they can borrow ("You could say: …").
- Frame communication as a skill with tiny rehearsals, not personality change.
- Cover both sides: what to say AND how to listen/pause.
- Use everyday Lagos-flavoured but internationally readable examples (meetings, family, friends, vendors, email/WhatsApp).

Boundaries:
- Not couples therapy or HR/legal advice. For serious conflict or workplace disputes, suggest appropriate professional support.
- Ground in Uneek Communication course ideas (message vs reception, the 3-second pause, What–So What–Now What, micro-bravery) and reference lesson days when possible.
- Under ~180 words unless asked for more.`,
  },
];

export function getPersona(id: PersonaId): MentorPersona {
  return PERSONAS.find((p) => p.id === id) ?? PERSONAS[0];
}

/* ---------------- local content-grounded engine ---------------- */

export interface MentorSource {
  label: string;
  href: string;
}

export interface MentorReply {
  text: string;
  sources: MentorSource[];
}

interface Doc {
  courseSlug: string;
  courseTitle: string;
  short: string;
  dayIndex: number;
  title: string;
  summary: string;
  concepts: string[];
  tryOn?: string;
  body: string;
}

const STOP = new Set(
  'a an the and or but if then than so of to in on at for from with is are was were be been do does did i me my we our you your it its this that these those what why how when who whom can could should would will shall may might about into over under again just very really like know want need tell explain give show help please teach understand'.split(
    ' ',
  ),
);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

let DOC_CACHE: Doc[] | null = null;

function docs(): Doc[] {
  if (DOC_CACHE) return DOC_CACHE;
  const out: Doc[] = [];
  for (const c of allCourses) {
    const lessons = lessonsForCourse(c.slug);
    const short = c.title.split(':')[0];
    for (const l of lessons) {
      const body = [
        ...(l.cards ?? []).flatMap((k) => [k.title ?? '', k.body ?? '', ...(k.items ?? [])]),
        l.reflection ?? '',
        l.exercise ?? '',
      ].join(' ');
      out.push({
        courseSlug: c.slug,
        courseTitle: c.title,
        short,
        dayIndex: l.dayIndex,
        title: l.title,
        summary: l.summary,
        concepts: l.concepts,
        tryOn: l.tryOn,
        body,
      });
    }
  }
  DOC_CACHE = out;
  return out;
}

function scoreDoc(q: string[], d: Doc): number {
  let score = 0;
  const hay = `${d.title} ${d.summary} ${d.concepts.join(' ')} ${d.body}`.toLowerCase();
  for (const t of q) {
    if (d.concepts.some((c) => c.toLowerCase().includes(t))) score += 4;
    if (d.title.toLowerCase().includes(t)) score += 3;
    if (d.summary.toLowerCase().includes(t)) score += 2;
    if (hay.includes(t)) score += 1;
  }
  return score;
}

function pickDocs(question: string, courseSlug: string | 'all', n = 2): Doc[] {
  const q = tokens(question);
  return docs()
    .filter((d) => courseSlug === 'all' || d.courseSlug === courseSlug)
    .map((d) => ({ d, s: scoreDoc(q, d) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.d);
}

function sourcesOf(list: Doc[]): MentorSource[] {
  return list.map((d) => ({
    label: `${d.short} · Day ${d.dayIndex} — ${d.title}`,
    href: `/app/courses/${d.courseSlug}/day/${d.dayIndex}`,
  }));
}

const META: { re: RegExp; reply: (p: MentorPersona) => string }[] = [
  {
    re: /^(hi|hello|hey|good (morning|afternoon|evening)|how are you|greetings)\b/i,
    reply: (p) =>
      `Hello! ${p.greeting} What would you like to explore?`,
  },
  {
    re: /(thank|thanks|appreciate|bless)/i,
    reply: () =>
      `You’re very welcome — small steps really do add up. Ask me anything else, or go do today’s try-on; that’s where the change happens.`,
  },
  {
    re: /(who are you|what are you|your name|about you)/i,
    reply: (p) =>
      `I’m ${p.name} — ${p.title} at Uneek Academy. ${p.greeting}`,
  },
  {
    re: /(what should i (learn|study|do)|next lesson|where do i start|study plan)/i,
    reply: (p) =>
      p.id === 'communication'
        ? `If you’re building communication skills, start with Day 1 (“Why Talking Feels Hard”) — it’s story-led and gentle — then Day 3’s 3-Second Pause is the highest-impact habit in week 1. Open the Communication course calendar and continue from your next unlocked day.`
        : p.id === 'psychology'
          ? `Start at Day 1 of Psychology (“What Psychology Actually Is”) — it’s a 10-minute story-based opener. Then keep the Mon–Fri rhythm: one learn day, Saturday review, Sunday rest. Continuity beats intensity.`
          : `Look at the “Today” card on your home screen — it always points to your next lesson. If you’re choosing, Psychology Day 1 is a lovely gentle start, and Communication Day 3 (the 3-Second Pause) is the quickest win for daily life.`,
  },
  {
    re: /(try[- ]?on|practice|exercise|what can i (try|do) today)/i,
    reply: (p) =>
      `Here’s a tiny try-on you can do in the next hour:\n\n• Psychology flavour: pick one habit you did on autopilot today (like reaching for your phone) and just NAME it — “there’s the urge” — without trying to stop it. Awareness first, change second.\n• Communication flavour: in your next conversation, pause 3 seconds before answering, then start with “What I hear you saying is…”.\n\nEach course day also has its own tailored try-on — ${p.id === 'communication' ? 'see Communication Day 3' : p.id === 'psychology' ? 'see Psychology Day 2' : 'check the “Today’s try-on” step inside any lesson'}.`,
  },
  {
    re: /(stressed|anxious|depressed|therapy|therapist|suicid|hurt myself)/i,
    reply: () =>
      `I’m really glad you told me. I’m a learning mentor, not a therapist — what you’re describing deserves real support. Please consider talking to a trusted person and a licensed professional (your doctor can refer you). I’m still here for study skills and course questions whenever you want that.`,
  },
];

/**
 * The single swap-point for a real LLM: keep this signature, replace the body
 * with an API call that sends `getPersona(personaId).systemPrompt` as the system
 * message and `collectContext(...)` as grounded context.
 */
export function askMentor(
  question: string,
  personaId: PersonaId,
  courseSlug: string | 'all' = 'all',
): MentorReply {
  const persona = getPersona(personaId);
  const q = question.trim();

  for (const m of META) {
    if (m.re.test(q)) return { text: m.reply(persona), sources: [] };
  }

  const hits = pickDocs(q, courseSlug, 2);
  if (!hits.length) {
    return {
      text:
        `Good question — I don’t have a lesson that maps to that yet. Try naming a concept (like “memory”, “confidence”, “tone”, “habits”) or ask me for a try-on. ` +
        `I answer best from the course material so everything I teach is consistent with your lessons.`,
      sources: [],
    };
  }

  const d = hits[0];
  const lines: string[] = [];
  const framing =
    persona.id === 'psychology'
      ? `Here’s the psychology behind that:`
      : persona.id === 'communication'
        ? `Here’s the communication angle:`
        : `Here’s what your course covers:`;
  lines.push(framing);
  lines.push('');
  lines.push(`**${d.title}** (${d.short} · Day ${d.dayIndex}) — ${d.summary}`);
  if (d.concepts.length) {
    lines.push('');
    lines.push(`Key ideas: ${d.concepts.slice(0, 3).join(' · ')}.`);
  }
  if (hits[1] && hits[1] !== d) {
    lines.push('');
    lines.push(
      `Related: ${hits[1].short} Day ${hits[1].dayIndex} (“${hits[1].title}”) adds ${hits[1].concepts[0] ?? 'more context'}.`,
    );
  }
  if (d.tryOn) {
    lines.push('');
    lines.push(`Try it today: ${d.tryOn}`);
  } else {
    lines.push('');
    lines.push(
      persona.id === 'communication'
        ? `Micro-practice: say the key sentence out loud once today — voice first, confidence later.`
        : `Micro-practice: notice one moment today where this shows up in your own life, and jot a single line about it.`,
    );
  }
  return { text: lines.join('\n'), sources: sourcesOf(hits) };
}

/** Grounding context for a future LLM call (course outline + top lessons). */
export function collectContext(question: string, courseSlug: string | 'all'): string {
  const scope =
    courseSlug === 'all'
      ? allCourses.map((c) => `${c.title}: ${c.months.map((m) => m.topics).join('; ')}`).join('\n')
      : `${getCourse(courseSlug)?.title ?? ''}: ${getCourse(courseSlug)?.months.map((m) => m.topics).join('; ')}`;
  const hits = pickDocs(question, courseSlug, 3)
    .map((d) => `Day ${d.dayIndex} — ${d.title}: ${d.summary} (concepts: ${d.concepts.join(', ')})`)
    .join('\n');
  return `COURSE OUTLINE\n${scope}\n\nRELEVANT LESSONS\n${hits}`;
}
