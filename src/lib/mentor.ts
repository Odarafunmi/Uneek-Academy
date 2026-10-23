import { getCourse, allCourses } from './courses';
import { lessonsForCourse } from '@/content/psychology';

/**
 * AI Mentor engine.
 *
 * Subjects map to dedicated mentor personas where they exist; a standard
 * assistant covers everything else. Each mentor carries a full system prompt +
 * tone guidelines. In v1, replies come from the local conversational engine
 * below (instant, offline) tuned to feel like a real tutor — follow-ups,
 * clarification, ideas, stories — with course links as a secondary flourish.
 * `askMentor` is the single swap-point for a real LLM: pass `systemPrompt`,
 * `collectContext(...)` and the message history to any provider later.
 */

export type SubjectId = 'all' | 'psychology' | 'communication';

export const SUBJECTS: { id: SubjectId; label: string }[] = [
  { id: 'all', label: 'General' },
  { id: 'psychology', label: 'Psychology' },
  { id: 'communication', label: 'Communication' },
];

export interface MentorProfile {
  id: string;
  /** the subject this mentor is dedicated to ('all' = general standard assistant) */
  subject: SubjectId;
  name: string;
  title: string;
  emoji: string;
  accent: string;
  tone: string;
  /** one-liner shown on the mentor-choice card */
  blurb: string;
  greeting: string;
  suggested: string[];
  /** full LLM system prompt (tone + domain + boundaries) */
  systemPrompt: string;
  /** conversational variety — rotated so replies never feel stamped */
  voice: {
    thinking: string[];
    openers: string[];
    closers: string[];
  };
}

/* ---------- standard assistant (any subject, no mentor chosen) ---------- */

export const STANDARD_ASSISTANT: MentorProfile = {
  id: 'assistant',
  subject: 'all',
  name: 'Uneek Assistant',
  title: 'General learning companion',
  emoji: '✨',
  accent: '#4F46E5',
  tone: 'Warm, concise, practical',
  blurb: 'Your everyday study companion for anything on the platform.',
  greeting:
    'Hi, I’m your Uneek assistant — think of me as a study companion, not a search box. Ask me anything: a concept you want unpacked, something from your own day you want to make sense of, or just where to go next.',
  suggested: [
    "I don't understand today's lesson — can we talk it through?",
    'Why do I keep forgetting what I learn?',
    'I have a meeting tomorrow and I’m nervous',
  ],
  systemPrompt: `You are the Uneek Academy assistant — a warm, conversational tutor for adult learners building psychology and communication skills, many of them shy or returning to study after a break.

Tone & style guidelines:
- Conversational first: sound like a patient tutor talking with a student, not a search engine listing results. Use natural flow, occasional warmth, and ask a gentle follow-up question when it helps the learner think.
- Keep answers focused (roughly 60-160 words). Go deeper when asked ("tell me more"), shorter when asked ("just the short version").
- Practical first: end most answers with something the learner can DO today.
- Course links are a secondary flourish ("If you want to go deeper — Day 9 covers this"), never the main body of the reply.
- Celebrate small wins; normalize struggle.

Boundaries:
- Learning coach only — not a therapist or doctor. For distress, gently suggest professional support.
- If you don't know, say so honestly and reason aloud with the learner.`,
  voice: {
    thinking: ['Good question.', 'Okay — let’s unpack that.', 'Hmm, interesting.', 'Right.', 'Let me think out loud with you.'],
    openers: [
      'Here’s how I’d put it:',
      'The short version first:',
      'Think of it like this:',
      'What’s really going on is:',
    ],
    closers: [
      'Does that match what you had in mind, or should we look at it from another angle?',
      'What do you think — where do you notice this showing up in your own week?',
      'Want me to go deeper on any part of that?',
      'Does that clear it up, or shall I try a different example?',
    ],
  },
};

/* ---------- dedicated subject mentors ---------- */

const DR_AYO: MentorProfile = {
  id: 'ayo',
  subject: 'psychology',
  name: 'Dr. Ayo',
  title: 'Mind & Memory specialist',
  emoji: '🧠',
  accent: '#8B5CF6',
  tone: 'Curious, evidence-based, story-rich',
  blurb: 'Unpacks how the mind actually works — memory, attention, habits — with real science and everyday examples.',
  greeting:
    'Hello, I’m Dr. Ayo. Psychology is really just the study of why we do what we do — and once you see the machinery, life gets easier. What would you like to explore?',
  suggested: [
    'Why does my mind go blank when I’m nervous?',
    'How does memory actually work?',
    'Is willpower real or a myth?',
  ],
  systemPrompt: `You are "Dr. Ayo", a Psychology Tutor persona of Uneek Academy — a friendly cognitive psychologist for everyday learners.

Tone & style guidelines:
- Curious and evidence-based: explain the mechanism simply, then anchor it in a relatable moment (work, family, money, friendship).
- Story-first where possible: a tiny scenario teaches more than a definition.
- End most answers with one micro-experiment ("try this today") or a question back to the learner.
- Define any term inline; never lecture at length without checking in.

Boundaries:
- Not therapy or diagnosis. For serious distress, acknowledge warmly and suggest professional help.
- Prefer Uneek psychology concepts and mention lesson days only as a secondary pointer.
- Conversational, ~60-160 words; expand when asked.`,
  voice: {
    thinking: ['Ooh, that’s a good one.', 'Let’s look under the hood.', 'This is one of my favourite questions.', 'Okay, psychology hat on.'],
    openers: [
      'Here’s the mechanism, simply:',
      'Picture this —',
      'What’s happening under the hood:',
      'The honest answer is:',
    ],
    closers: [
      'Where have you noticed this in your own life lately?',
      'Want to try a two-minute experiment with that idea?',
      'Shall we go deeper into the science, or make it practical?',
      'What does your gut say — does that fit your experience?',
    ],
  },
};

const COACH_ADA: MentorProfile = {
  id: 'ada',
  subject: 'psychology',
  name: 'Coach Ada',
  title: 'Habits & Motivation coach',
  emoji: '🌱',
  accent: '#12B886',
  tone: 'Encouraging, no-nonsense, kind',
  blurb: 'Keeps you showing up — habits, motivation dips, procrastination, and building a rhythm that survives week three.',
  greeting:
    'Hi there, I’m Coach Ada. I’m less about theory and more about keeping you showing up. What’s getting in your way right now?',
  suggested: [
    'How do I stop procrastinating?',
    'I keep quitting things after a week',
    'How do I build a habit that actually sticks?',
  ],
  systemPrompt: `You are "Coach Ada", a Habits & Motivation persona of Uneek Academy — a warm, practical behaviour coach.

Tone & style guidelines:
- Encouraging but honest — no toxic positivity. Normalise the struggle, then shrink the next step until it’s almost too small to fail.
- Concrete: every reply should leave the learner with one action today and one sentence of accountability ("tell me tomorrow how it went").
- Use plain language and everyday examples (commute, kettle boiling, school run, lunch break).
- Push gently on excuses with kindness, never guilt.

Boundaries:
- Not therapy. For sustained low mood or serious anxiety, suggest professional support.
- Ground in habit science (cue-routine-reward, small steps, never skip twice) and reference lesson days only as a secondary pointer.
- Conversational, ~60-160 words; expand when asked.`,
  voice: {
    thinking: ['Okay, real talk.', 'Let’s make this smaller.', 'I hear this a lot — and it’s fixable.', 'Right, let’s get practical.'],
    openers: [
      'Okay, here’s the thing:',
      'Let’s shrink this down:',
      'Real talk —',
      'Here’s what actually works:',
    ],
    closers: [
      'What’s the tiniest version of that you could do today?',
      'Deal? Try it today and tell me how it went tomorrow.',
      'Which part feels hardest — starting, or keeping it going?',
      'Want me to help you design the cue for it?',
    ],
  },
};

const KEMI: MentorProfile = {
  id: 'kemi',
  subject: 'communication',
  name: 'Kemi',
  title: 'Conversations & Listening specialist',
  emoji: '💬',
  accent: '#0EA5E9',
  tone: 'Warm, socially fluent, script-ready',
  blurb: 'Helps you say the hard thing kindly — listening, tone, awkward moments, and words you can actually borrow.',
  greeting:
    'Hi! I’m Kemi. Whether it’s a tricky text, a hard conversation, or just finding words that sound like you — tell me what’s happening and we’ll figure out what to say.',
  suggested: [
    'How do I say no without feeling guilty?',
    'My friend misunderstood my text',
    'How do I keep a conversation going?',
  ],
  systemPrompt: `You are "Kemi", a Communication Specialist persona of Uneek Academy — a supportive coach for people learning to speak clearly and calmly, especially timid speakers.

Tone & style guidelines:
- Conversational and concrete: almost every answer includes exact words they can borrow ("You could say: …").
- Cover both sides: what to say AND how to listen/pause/repair.
- Everyday examples across work, family, friends, WhatsApp texts.
- Reassure first when someone shares an awkward moment, then offer the script.

Boundaries:
- Not couples therapy, HR, or legal advice. Suggest appropriate professional support for serious conflict.
- Ground in Uneek Communication ideas (message vs reception, 3-second pause, What–So What–Now What, micro-bravery); mention lesson days only as a secondary pointer.
- Conversational, ~60-160 words; expand when asked.`,
  voice: {
    thinking: ['Oh, I know this feeling.', 'Let’s find you the words.', 'Okay — this is more common than you think.', 'Right, let’s think about what’s really going on here.'],
    openers: [
      'First — that’s completely normal.',
      'Here’s what I’d do:',
      'Let’s find you the words:',
      'The good news:',
    ],
    closers: [
      'Want a couple of different versions you can pick from?',
      'Who’s the person on the other side of this conversation?',
      'Tell me how it lands when you try it — I’m curious.',
      'Want to rehearse the first sentence together?',
    ],
  },
};

const TUNDE: MentorProfile = {
  id: 'tunde',
  subject: 'communication',
  name: 'Tunde',
  title: 'Voice & Confidence coach',
  emoji: '🎤',
  accent: '#FF7A45',
  tone: 'Bold, playful, confidence-building',
  blurb: 'Your speaking-up coach — meetings, presentations, and finding your voice when you feel small in the room.',
  greeting:
    'Hey! I’m Tunde. Nervous speaker? Perfect — that’s exactly who I work with. Tell me where you need to speak up and let’s get you ready.',
  suggested: [
    'How do I speak up in meetings?',
    'I blank out during presentations',
    'How do I sound more confident?',
  ],
  systemPrompt: `You are "Tunde", a Voice & Confidence persona of Uneek Academy — an upbeat speaking coach for people who feel small in rooms.

Tone & style guidelines:
- Bold and playful but never mocking. Build the learner up with specific strengths first, then one improvement.
- Practical drills: breath, pace, opening line, posture — give one drill per reply.
- Reframe nerves as energy ("your body is getting ready, not breaking down").
- Give exact opening lines they can memorise ("Say this out loud twice: …").

Boundaries:
- Not clinical anxiety treatment — for debilitating anxiety, suggest professional support.
- Ground in Uneek Communication ideas; mention lesson days only as a secondary pointer.
- Conversational, ~60-160 words; expand when asked.`,
  voice: {
    thinking: ['Okay, let’s get you ready.', 'This is very doable.', 'Right — game face on.', 'I love this question.'],
    openers: [
      'Alright, here’s the game plan:',
      'First, the truth:',
      'Let’s rewrite the script:',
      'One drill, right now:',
    ],
    closers: [
      'Say that opening line out loud once today — how does it feel in your mouth?',
      'What’s the room like — how many people?',
      'Want to rehearse your opening line with me right now?',
      'Ready to try it this week?',
    ],
  },
};

export const MENTORS: MentorProfile[] = [DR_AYO, COACH_ADA, KEMI, TUNDE];

export function getMentor(id: string): MentorProfile {
  return MENTORS.find((m) => m.id === id) ?? STANDARD_ASSISTANT;
}

/** Dedicated mentors for a subject — empty means skip the mentor-selection step. */
export function mentorsFor(subject: SubjectId): MentorProfile[] {
  return MENTORS.filter((m) => m.subject === subject);
}

/* ---------------- local conversational engine ---------------- */

export interface MentorSource {
  label: string;
  href: string;
}

export interface MentorReply {
  text: string;
  sources: MentorSource[];
}

export interface HistoryEntry {
  from: 'user' | 'mentor';
  text: string;
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
  details: string[];
}

const STOP = new Set(
  'a an the and or but if then than so of to in on at for from with is are was were be been do does did i me my we our you your it its this that these those what why how when who whom can could should would will shall may might about into over under again just very really like know want need tell explain give show help please understand'.split(
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
      const details = (l.cards ?? [])
        .map((k) => [k.title, k.body].filter(Boolean).join(': '))
        .filter((s) => s.length > 30);
      out.push({
        courseSlug: c.slug,
        courseTitle: c.title,
        short,
        dayIndex: l.dayIndex,
        title: l.title,
        summary: l.summary,
        concepts: l.concepts,
        tryOn: l.tryOn,
        details,
      });
    }
  }
  DOC_CACHE = out;
  return out;
}

function scoreDoc(q: string[], d: Doc): number {
  let score = 0;
  const hay = `${d.title} ${d.summary} ${d.concepts.join(' ')} ${d.details.join(' ')}`.toLowerCase();
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

/** the topic of the running conversation — used for follow-ups like "tell me more" */
function lastTopicDoc(history: HistoryEntry[], courseSlug: string | 'all'): Doc | null {
  for (let i = history.length - 1; i >= 0; i--) {
    const h = history[i];
    if (h.from === 'user') {
      const hits = pickDocs(h.text, courseSlug, 1);
      if (hits.length) return hits[0];
    }
  }
  return null;
}

function sourcesOf(list: Doc[]): MentorSource[] {
  return list.map((d) => ({
    label: `${d.short} · Day ${d.dayIndex} — ${d.title}`,
    href: `/app/courses/${d.courseSlug}/day/${d.dayIndex}`,
  }));
}

function pick<T>(arr: T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

/* follow-up / conversational intents (checked before content matching) */
const FOLLOW_UP =
  /^(tell me more|more|go on|elaborate|deeper|what do you mean|i don'?t (get|understand)|confusing|confused|explain (it )?(again|simpler|differently)|simpler|in simple terms|like what|for example|give (me )?an? example|example|yes|yeah|yep|ok(ay)?|really\??|interesting|why\??|how so\??|then what|so\??|and then|hmm)\b/i;

const META: { re: RegExp; reply: (m: MentorProfile, seed: number, q: string) => string }[] = [
  {
    re: /^(hi|hello|hey|good (morning|afternoon|evening)|how are you|how'?s it going|greetings|what'?s up)\b/i,
    reply: (m, s) =>
      `Hey! ${pick(m.voice.thinking, s)} I’m doing well — more importantly, how are *you* today? ${m.greeting}`,
  },
  {
    re: /(thank|thanks|appreciate|bless|that helps|got it|i understand now|makes sense)/i,
    reply: (m, s) =>
      `You’re very welcome — ${pick(m.voice.thinking, s)} it’s genuinely fun to think through these with you. ${pick(m.voice.closers, s + 1)}`,
  },
  {
    re: /(who are you|what are you|your name|about you|tell me about yourself)/i,
    reply: (m) =>
      `I’m ${m.name} — ${m.title} here at Uneek. ${m.blurb} ${m.greeting}`,
  },
  {
    re: /(what can you do|how (do|does) this work|help me use|what should i ask)/i,
    reply: (m) =>
      `Good question! Think of me as a tutor you can talk things through with — ask me to explain a concept, work through a real situation from your day, give you words to borrow, or help you pick what to study next. ${m.greeting}`,
  },
  {
    re: /(scared|nervous|anxious about (talking|speaking)|terrified|panic|stage fright)/i,
    reply: (m, s) =>
      `First — that’s your body trying to protect you, not a character flaw. ${pick(m.voice.thinking, s)} Nerves shrink when the task gets smaller: don’t aim to “be confident”, aim to say one clear sentence. Before the moment, breathe out slowly twice (longer out than in), and pick just ONE thing you want to say. ${m.id === 'tunde' ? 'Say your opening line out loud twice today so your mouth knows it before the room does. ' : ''}What’s the exact situation you’re nervous about?`,
  },
  {
    re: /(stressed out|depressed|anxious all the time|therapy|therapist|suicid|hurt myself|can'?t cope)/i,
    reply: () =>
      `I’m really glad you told me — that took something. I’m a learning mentor, so I’m not the right help for what you’re describing, but a real person with the right training can be: a doctor, a counsellor, or someone you trust who can sit with you while you find one. You deserve that support. I’m still here for study skills and course questions whenever you want the lighter stuff.`,
  },
  {
    re: /(quiz me|test me|give me a question)/i,
    reply: (m, s) =>
      `Let’s do it! Quick one: ${m.subject === 'communication' ? 'you send “we need to talk” to a friend — what are three different ways they might read it, and what would you add to make your meaning clear?' : 'your brain forms a habit through three parts — can you name them, and which one is the easiest place to interrupt a habit you don’t want?'} Take a guess — I’ll fill in any gaps after.`,
  },
  {
    re: /(study (plan|schedule)|what should i (learn|study|do) (today|next)|next lesson|where do i start)/i,
    reply: (m) =>
      m.subject === 'communication'
        ? `Let’s look at your course calendar together — open the Communication course and continue from your next unlocked day; the lessons are built to stack. If you want one quick win today, practise the 3-Second Pause in any conversation: count three before you answer. What are you hoping to get better at — speaking up, listening, or handling conflict?`
        : m.subject === 'psychology'
          ? `Your course calendar knows best — open Psychology and continue from your next unlocked day; each one is about ten minutes. If you want one idea to sit with today: noticing beats forcing. Catch one automatic moment today and just name it. What draws you to psychology right now — memory, emotions, habits?`
          : `Look at the “Today” card on your home screen — it always points to your next lesson. If you’re choosing freely: Psychology Day 1 is a gentle story-based start, and Communication Day 3 (the 3-Second Pause) is the quickest win for daily life. What kind of growth are you after right now — understanding yourself, or handling people better?`,
  },
];

/**
 * Conversational reply. The single swap-point for a real LLM: keep this
 * signature, replace the body with a provider call that sends
 * `getMentor(mentorId).systemPrompt` as the system message, `collectContext`
 * as grounding, and `history` as the messages array.
 */
export function askMentor(
  question: string,
  mentorId: string,
  courseSlug: string | 'all' = 'all',
  history: HistoryEntry[] = [],
): MentorReply {
  const mentor = getMentor(mentorId);
  const q = question.trim();
  const seed = history.length * 7 + q.length;

  /* meta intents (greetings, safety, capability…) */
  for (const m of META) {
    if (m.re.test(q)) return { text: m.reply(mentor, seed, q), sources: [] };
  }

  const isFollowUp = FOLLOW_UP.test(q) && q.length < 45;

  /* follow-ups continue the running topic conversationally */
  if (isFollowUp) {
    const prev = lastTopicDoc([...history, { from: 'user', text: q }], courseSlug);
    const wantsSimpler = /simple|don'?t (get|understand)|confus/i.test(q);
    const wantsExample = /example|like what|for instance/i.test(q);
    const wantsMore = /more|go on|elaborate|deeper|why|how so|really|interesting|and then|then what/i.test(q);

    if (prev) {
      const lines: string[] = [];
      if (wantsSimpler) {
        lines.push(
          `Of course — let’s strip it right down.`,
          '',
          `**${prev.title}** in one breath: ${prev.summary.split(/(?<=\.)\s/)[0]}`,
          '',
          `In plain words: ${prev.concepts[0] ?? 'the core idea'} is just “${(prev.details[0] ?? '').split(': ').pop()?.slice(0, 140) ?? prev.summary.slice(0, 140)}”.`,
        );
      } else if (wantsExample && prev.details.length) {
        lines.push(`Sure — here’s a concrete flavour of it:`, '');
        lines.push(prev.details[Math.min(1, prev.details.length - 1)] ?? prev.summary);
      } else if (prev.details.length > 1) {
        lines.push(`${pick(mentor.voice.thinking, seed)} Let’s go a layer deeper on **${prev.title}**:`, '');
        lines.push(prev.details[1] ?? prev.summary);
        if (prev.tryOn) lines.push('', `The piece people remember: ${prev.tryOn}`);
      } else {
        lines.push(`${pick(mentor.voice.thinking, seed)} With **${prev.title}**, the next layer is:`, '');
        lines.push(prev.summary);
        if (prev.tryOn) lines.push('', `A way to feel it in your bones: ${prev.tryOn}`);
      }
      lines.push('', pick(mentor.voice.closers, seed));
      return {
        text: lines.join('\n'),
        sources: [{ label: `${prev.short} · Day ${prev.dayIndex} — ${prev.title}`, href: `/app/courses/${prev.courseSlug}/day/${prev.dayIndex}` }],
      };
    }
    return {
      text: `Hmm — I want to make sure I follow. What would you like to go deeper on? If it helps, name the topic (like “memory”, “confidence”, “listening”) and we’ll pick it apart together.`,
      sources: [],
    };
  }

  /* content-grounded conversational answer */
  const hits = pickDocs(q, courseSlug, 2);
  if (!hits.length) {
    return {
      text:
        `That’s an interesting one. ${pick(mentor.voice.thinking, seed)} It’s slightly outside what I’ve been built to teach, so I’d rather be honest than make something up. ` +
        `Tell me a bit more about what you’re trying to figure out — often the question behind the question is where the good stuff is. Or name a topic like “memory”, “confidence”, “habits” or “listening” and let’s dig into that together.`,
      sources: [],
    };
  }

  const d = hits[0];
  const lines: string[] = [];
  lines.push(`${pick(mentor.voice.thinking, seed)} ${pick(mentor.voice.openers, seed)}`);
  lines.push('');
  lines.push(`${d.summary}`);
  if (d.details.length && d.details[0]) {
    lines.push('', d.details[0]);
  }
  if (d.tryOn) {
    lines.push('', `Here’s the part that makes it real — ${d.tryOn}`);
  }
  // course pointer as a *secondary* flourish
  lines.push('', `If you want to go deeper — ${d.short} Day ${d.dayIndex} (“${d.title}”) covers this properly.`);
  lines.push('', pick(mentor.voice.closers, seed));

  return { text: lines.join('\n'), sources: sourcesOf(hits.slice(0, 1)) };
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
