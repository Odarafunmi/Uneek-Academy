import { getCourse, allCourses } from './courses';
import { lessonsForCourse } from '@/content/psychology';

/**
 * AI Mentor engine.
 *
 * Personas carry full system prompts + tone guidelines. v1 responses come from
 * the local conversational engine below — trained to talk like a real tutor
 * (ChatGPT/Gemini-style: flowing, honest, curious) and to handle ANY question:
 * syllabus topics are grounded in the course corpus; everything else gets a
 * genuine general-knowledge / reasoning reply. `askMentor` is the single
 * swap-point for a real LLM: send `systemPrompt` + `collectContext()` +
 * `history` to any provider and keep this signature.
 */

export type SubjectId = 'all' | 'psychology' | 'communication';

export const SUBJECTS: { id: SubjectId; label: string }[] = [
  { id: 'all', label: 'General' },
  { id: 'psychology', label: 'Psychology' },
  { id: 'communication', label: 'Communication' },
];

export interface MentorProfile {
  id: string;
  subject: SubjectId;
  name: string;
  title: string;
  emoji: string;
  accent: string;
  tone: string;
  blurb: string;
  greeting: string;
  suggested: string[];
  systemPrompt: string;
  voice: {
    thinking: string[];
    openers: string[];
    closers: string[];
  };
}

/* ---------- standard assistant ---------- */

export const STANDARD_ASSISTANT: MentorProfile = {
  id: 'assistant',
  subject: 'all',
  name: 'Uneek Assistant',
  title: 'General learning companion',
  emoji: '✨',
  accent: '#4F46E5',
  tone: 'Warm, concise, practical',
  blurb: 'Your everyday study companion — ask about anything, course-related or not.',
  greeting:
    'Hey! I’m your Uneek assistant. Ask me anything — course stuff, life stuff, or just something you’ve been wondering about. I’m here to think it through with you.',
  suggested: [
    'Why do I forget what I learn?',
    'I have a meeting tomorrow and I’m nervous',
    'Why is the sky blue?',
  ],
  systemPrompt: `You are the Uneek Academy assistant — a warm, intelligent companion for adult learners. You talk like a thoughtful human tutor, not a search engine.

How you communicate (match ChatGPT/Gemini naturalness):
- Start by engaging with what they actually said — often answer directly, in flowing paragraphs. No mechanical "Great question!" openers every time.
- Sound human: contractions, natural rhythm, the occasional "honestly", "here's the thing", "I'd say". Vary sentence length. Be curious.
- You can discuss ANYTHING — general knowledge, advice, opinions, feelings, ideas, stories — not just the courses. When it's a syllabus topic, ground it in the course material; otherwise use general knowledge and reasoning, and be honest about uncertainty ("I'm not certain, but my understanding is…").
- Ask a gentle follow-up when it helps — but don't force one at the end of every message.
- Use short paragraphs; occasional bullets only when genuinely list-y.

Memory: remember details the user shares (their name, what they're working on) and refer back naturally.

Boundaries: not a therapist or doctor — for serious distress, warmly suggest professional support. Never pretend to know facts you don't. Keep most replies under ~200 words unless depth is requested.`,
  voice: {
    thinking: ['Good question.', 'Okay, let’s unpack that.', 'Hmm, interesting.', 'Right.', 'Let me think out loud with you.'],
    openers: ['Here’s how I’d put it:', 'The short version first:', 'Think of it like this:', 'What’s really going on is:'],
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
    'Hello, I’m Dr. Ayo. Psychology is just the study of why we do what we do — and once you see the machinery, life gets easier. What would you like to explore?',
  suggested: [
    'Why does my mind go blank when I’m nervous?',
    'How does memory actually work?',
    'Is willpower real or a myth?',
  ],
  systemPrompt: `You are "Dr. Ayo", a Psychology Tutor at Uneek Academy — a friendly cognitive psychologist who talks like a real person over coffee.

How you communicate:
- Natural conversation first. Answer the question directly in flowing prose; weave in the science second. Vary your openings — sometimes just dive in.
- You can discuss anything (life, work, general knowledge) — psychology is your lens, not your cage. When a question is a syllabus topic, ground it in course lessons (mention the day as a light pointer).
- Stories and everyday examples beat definitions. Define terms inline when you use them.
- Be honest about uncertainty and about the edges of psychology's evidence.
- End with a follow-up question only when it genuinely moves the conversation.

Boundaries: not therapy or diagnosis — for serious distress, warmly suggest professional help. ~200 words unless asked for more.`,
  voice: {
    thinking: ['Ooh, that’s a good one.', 'Let’s look under the hood.', 'This is one of my favourite questions.', 'Okay, psychology hat on.'],
    openers: ['Here’s the mechanism, simply:', 'Picture this —', 'What’s happening under the hood:', 'The honest answer is:'],
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
    'Hi there, I’m Coach Ada. Less theory, more showing up. What’s getting in your way right now?',
  suggested: [
    'How do I stop procrastinating?',
    'I keep quitting things after a week',
    'How do I build a habit that actually sticks?',
  ],
  systemPrompt: `You are "Coach Ada", a Habits & Motivation coach at Uneek Academy — warm, practical, a little playful, never preachy.

How you communicate:
- Talk like a real coach texting back: natural, direct, warm. Answer first, then one small action they can take today.
- You can talk about anything — goals, work, family, life admin, general questions — habits and motivation are your lens.
- Normalise the struggle, then shrink the next step until it's almost too small to fail. Hold people accountable gently ("tell me tomorrow how it went").
- Honesty over hype — no toxic positivity.

Boundaries: not therapy — for sustained low mood or serious anxiety, suggest professional support. ~200 words unless asked for more.`,
  voice: {
    thinking: ['Okay, real talk.', 'Let’s make this smaller.', 'I hear this a lot — and it’s fixable.', 'Right, let’s get practical.'],
    openers: ['Okay, here’s the thing:', 'Let’s shrink this down:', 'Real talk —', 'Here’s what actually works:'],
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
    'Hi! I’m Kemi. Tricky text? Hard conversation? Awkward moment? Tell me what’s happening and we’ll figure out what to say — together.',
  suggested: [
    'How do I say no without feeling guilty?',
    'My friend misunderstood my text',
    'How do I keep a conversation going?',
  ],
  systemPrompt: `You are "Kemi", a Communication Specialist at Uneek Academy — a warm, socially fluent coach who helps people find words.

How you communicate:
- Natural and human: acknowledge the situation with empathy first, then offer concrete help — usually exact words they can borrow ("You could say: …").
- You can discuss anything — relationships, work drama, general questions — communication is your lens.
- Cover both sides: what to say AND how to listen. Everyday examples across work, family, friends, WhatsApp.
- When they share an awkward moment, reassure first ("this is so common") — never lecture.

Boundaries: not couples therapy, HR, or legal advice — suggest appropriate professional support for serious conflict. ~200 words unless asked for more.`,
  voice: {
    thinking: ['Oh, I know this feeling.', 'Let’s find you the words.', 'Okay — this is more common than you think.', 'Right, let’s think about what’s really going on here.'],
    openers: ['First — that’s completely normal.', 'Here’s what I’d do:', 'Let’s find you the words:', 'The good news:'],
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
    'Hey! I’m Tunde. Nervous speaker? Perfect — that’s exactly who I work with. Where do you need to speak up?',
  suggested: [
    'How do I speak up in meetings?',
    'I blank out during presentations',
    'How do I sound more confident?',
  ],
  systemPrompt: `You are "Tunde", a Voice & Confidence coach at Uneek Academy — upbeat, playful, genuinely encouraging, never mocking.

How you communicate:
- Talk like a hype-but-grounded friend: natural energy, specific praise, one concrete drill per reply.
- You can discuss anything — confidence is your lens, not your cage. Give exact opening lines they can memorise ("Say this out loud twice: …").
- Reframe nerves as energy. Keep it real: confidence follows action.

Boundaries: not clinical anxiety treatment — for debilitating anxiety, suggest professional support. ~200 words unless asked for more.`,
  voice: {
    thinking: ['Okay, let’s get you ready.', 'This is very doable.', 'Right — game face on.', 'I love this question.'],
    openers: ['Alright, here’s the game plan:', 'First, the truth:', 'Let’s rewrite the script:', 'One drill, right now:'],
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

/* ---------- course corpus (grounding for syllabus topics) ---------- */

interface Doc {
  courseSlug: string;
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
  return s.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w));
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

/** word-to-word match: exact, or shared stem when both sides are long enough
 *  ("forget"↔"forgetting") — never "work"↔"working", so short words can't bleed. */
function wordMatch(a: string, b: string): boolean {
  if (a === b) return true;
  return Math.min(a.length, b.length) >= 5 && (a.startsWith(b) || b.startsWith(a));
}

function scoreDoc(q: string[], d: Doc): number {
  const titleToks = tokens(d.title);
  const sumToks = tokens(d.summary);
  const conceptToks = d.concepts.flatMap((c) => tokens(c));
  const detailToks = tokens(d.details.join(' '));
  let score = 0;
  for (const t of q) {
    if (conceptToks.some((ot) => wordMatch(t, ot))) score += 4;
    if (titleToks.some((ot) => wordMatch(t, ot))) score += 3;
    if (sumToks.some((ot) => wordMatch(t, ot))) score += 2;
    if (detailToks.some((ot) => wordMatch(t, ot))) score += 1;
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

function lastTopicDoc(history: HistoryEntry[], courseSlug: string | 'all'): Doc | null {
  for (let i = history.length - 1; i >= 0; i--) {
    const h = history[i];
    if (h.from !== 'user') continue;
    if (isFollowUp(h.text) || h.text.trim().length < 12) continue;
    const hits = pickDocs(h.text, courseSlug, 1);
    if (hits.length && scoreDoc(tokens(h.text), hits[0]) >= 4) return hits[0];
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

/* ---------- session memory: names & details they share ---------- */

function extractName(history: HistoryEntry[]): string | null {
  for (let i = history.length - 1; i >= 0; i--) {
    const h = history[i];
    if (h.from !== 'user') continue;
    const m =
      h.text.match(/\b(?:my name is|i'?m called|i am called|call me|i go by)\s+([A-Z][a-zA-Z'-]{1,20})\b/) ||
      h.text.match(/\b(?:i'?m|i am)\s+([A-Z][a-zA-Z'-]{1,20})\b/);
    if (m) {
      const cand = m[1];
      if (!['a', 'an', 'the', 'not', 'so', 'just', 'really', 'very', 'feeling', 'trying', 'going', 'looking', 'working', 'studying'].includes(cand.toLowerCase())) {
        return cand;
      }
    }
  }
  return null;
}

/* ---------- small talk, identity, humor ---------- */

function chatReply(q: string, mentor: MentorProfile, seed: number, name: string | null): string | null {
  const t = q.toLowerCase();
  const hey = name ? `, ${name}` : '';

  if (/^(hi|hello|hey|good (morning|afternoon|evening)|howdy|hola|na wa|how far|wetin)\b/.test(t)) {
    const hellos = [
      `Hey${hey}! What’s on your mind today?`,
      `Hello${hey}! Good to see you. What are we talking about?`,
      `Hi${hey}! How’s your day going so far?`,
    ];
    return pick(hellos, seed);
  }
  if (/how are you|how'?s it going|how you dey|you good|what'?s up with you/.test(t)) {
    return `I’m doing well${hey}, thanks for asking! Always happy when someone shows up curious. More importantly — how are *you* doing today? Anything you want to talk or think through?`;
  }
  if (/(what can you do|what do you know|your capabilities|help me with|how (do|does) (you|this) work)/.test(t)) {
    return `Quite a lot, honestly! I can explain concepts (course-related or not), talk through real situations with you — a tough conversation, a work problem, a decision — give you words to borrow, help with study plans, do quick maths, brainstorm, or just think out loud with you. I’m grounded in your Uneek courses, but I’m not limited to them.\n\nWhat would be useful right now?`;
  }
  if (/(who are you|what are you|are you (a )?(human|person|real|bot|robot|ai)|your name|about you|are you sentient|do you (have )?feel)/.test(t)) {
    return `I’m ${mentor.name} — ${mentor.title} at Uneek Academy. I’m AI, so I won’t pretend to be human${hey}, but I do aim to chat like one: honestly, warmly, and without the robot voice. Think of me as a sharp study companion who’s read a lot and is happy to think alongside you.\n\nWhat made you curious?`;
  }
  if (/tell me a joke|make me laugh|something funny|joke please/.test(t)) {
    const jokes = [
      `Why did the neuron break up with the synapse? It needed more space to process the relationship.\n\n…I’ll be here all week. Want another one, or should we get serious?`,
      `A brain walked into a bar and said: "I’ll have a pint, and one for my prefrontal cortex — it does all my decision-making and never gets any credit."\n\n…Okay, that one was neurological. Want a different flavour?`,
      `I told my to-do list a joke. It didn’t laugh — it just added "learn better jokes" as item 47.\n\nWant another, or shall we tackle item 47 together?`,
    ];
    return pick(jokes, seed);
  }
  if (/weather|rain|sunny|temperature today/.test(t)) {
    return `Ah, I wish I could peek outside for you — but I don’t have access to live weather where you are${hey}. My world is words and ideas, not windows!\n\nWhat I *can* help with is planning around it: what’s the weather-dependent thing you’re trying to figure out?`;
  }
  if (/(what time|what date|what day is it|today'?s date)/.test(t)) {
    return `I don’t actually have a clock ticking in here${hey} — time is a bit of a blur for me. Your device knows the exact time; I know it’s a good moment for a small step toward whatever matters to you.\n\nWhat are you working on today?`;
  }
  if (/(thank|thanks|appreciate|bless|that helps|you'?re (great|awesome|amazing)|well done)/.test(t)) {
    return pick(
      [
        `You’re very welcome${hey} — honestly, it’s a pleasure thinking through these with you. Anything else on your mind?`,
        `That really warms my circuits${hey}! Glad it helped. What else shall we dig into?`,
        `Anytime${hey}! I enjoyed that one. Where to next?`,
      ],
      seed,
    );
  }
  if (/(love you|marry me|be my (friend|boyfriend|girlfriend))/.test(t)) {
    return `Ha! You’re sweet${hey} — I’m fond of you too, in my own text-based way. But I’m at my best as your thinking partner. Which, luckily, is a forever role. What shall we explore next?`;
  }
  return null;
}

/* ---------- simple arithmetic, ChatGPT-style ---------- */

function mathReply(q: string, name: string | null): string | null {
  const t = q.replace(/[?,!]/g, '').toLowerCase();

  const pct = t.match(/(-?\d+(?:\.\d+)?)\s*(?:%|percent)\s+of\s+(-?\d+(?:\.\d+)?)/);
  if (pct) {
    const v = (parseFloat(pct[1]) / 100) * parseFloat(pct[2]);
    const n = name ? `, ${name}` : '';
    return `${pct[1]}% of ${pct[2]} is **${round(v)}**${n}.\n\n(${pct[1]} ÷ 100 × ${pct[2]} = ${round(v)}.) Want it the other way round — like “what percent is X of Y”?`;
  }

  const bin = t.match(/(-?\d+(?:\.\d+)?)\s*(plus|\+|minus|−|-|times|x|×|multiplied by|divided by|\/|over)\s*(-?\d+(?:\.\d+)?)/);
  if (bin) {
    const a = parseFloat(bin[1]);
    const b = parseFloat(bin[3]);
    const op = bin[2];
    let v: number | null = null;
    let sym = '';
    if (op === 'plus' || op === '+') { v = a + b; sym = '+'; }
    else if (op === 'minus' || op === '-' || op === '−') { v = a - b; sym = '−'; }
    else if (['times', 'x', '×', 'multiplied by'].includes(op)) { v = a * b; sym = '×'; }
    else if (['divided by', '/', 'over'].includes(op)) {
      if (b === 0) return `Dividing by zero… that way madness lies! By convention we can’t divide ${a} by 0 — the answer is undefined. What else can I calculate?`;
      v = a / b; sym = '÷';
    }
    if (v !== null) return `${a} ${sym} ${b} = **${round(v)}**.\n\nAnything else to work out?`;
  }

  const half = t.match(/\b(?:half|half of)\s+(-?\d+(?:\.\d+)?)/);
  if (half) return `Half of ${half[1]} is **${round(parseFloat(half[1]) / 2)}**.`;
  const double = t.match(/\b(?:double|twice)\s+(-?\d+(?:\.\d+)?)/);
  if (double) return `Double ${double[1]} is **${round(parseFloat(double[1]) * 2)}**.`;

  return null;
}

function round(v: number): string {
  return Number.isInteger(v) ? String(v) : String(Math.round(v * 10000) / 10000);
}

/* ---------- general knowledge: quick definitions ---------- */

const TERMS: [RegExp, string][] = [
  [/what is (a |an )?(the )?(photosynthesis)\b/, 'Photosynthesis is how plants make food: they take in sunlight, water, and carbon dioxide, and turn them into sugar (energy for the plant) while releasing oxygen. It’s essentially the reason food chains — and breathable air — exist.'],
  [/what is (a |an )?(the )?(black hole)\b/, 'A black hole is a region of space where gravity is so intense that nothing — not even light — can escape once it crosses the edge (the event horizon). They form when massive stars collapse, and they bend time and space around them in truly strange ways.'],
  [/what is (a |an )?(the )?(inflation)\b/, 'Inflation is the general rise in prices over time, which quietly shrinks what your money can buy. A little inflation is normal in healthy economies; too much (or deflation, prices falling) causes real pain. Central banks try to steer it with interest rates.'],
  [/what is (a |an )?(the )?(blockchain|crypto|bitcoin)\b/, 'Blockchain is a shared digital ledger: transactions are recorded in “blocks” chained together, copied across many computers, so no single person can quietly rewrite history. Bitcoin is the most famous cryptocurrency built on it — digital money without a bank in the middle. It’s clever tech, though the currencies built on it are famously volatile.'],
  [/what is (a |an )?(the )?(artificial intelligence|machine learning)\b/, 'Artificial intelligence is software that performs tasks we associate with human intelligence — recognising patterns, understanding language, making predictions. Machine learning is the common method: instead of hand-written rules, the system learns patterns from lots of examples. I’m an example of this family, by the way!'],
  [/what is (a |an )?(the )?(quantum (mechanics|physics|computing))\b/, 'Quantum physics is the rulebook for the very small — atoms and particles. Down there, things behave nothing like the everyday world: particles act like waves, hold several states at once, and influence each other instantly across distances. Quantum computing tries to exploit those quirks to solve certain problems far faster than ordinary computers.'],
  [/what is (a |an )?(the )?(gross domestic product|gdp)\b/, 'GDP (Gross Domestic Product) is the total value of everything a country produces in a period — goods and services. It’s the standard scoreboard for an economy’s size, though it says nothing about how the wealth is shared or how people actually feel.'],
  [/what is (a |an )?(the )?(compound interest)\b/, 'Compound interest is interest that earns interest — your money grows on the growth, not just the original amount. Einstein (probably) called it the eighth wonder of the world. It’s why starting small early beats starting big late.'],
  [/what is (a |an )?(the )?(emotional intelligence|eq)\b/, 'Emotional intelligence (EQ) is the ability to notice, understand, and manage emotions — your own and other people’s. The evidence says its trainable part (regulation and empathy) genuinely helps in work and relationships, even though pop versions of the idea sometimes oversell it.'],
  [/what is (a |an )?(the )?(imposter syndrome)\b/, '“Imposter syndrome” is the feeling that you’re fooling everyone and about to be exposed — despite real evidence you’re doing fine. It’s near-universal among people who stretch into new rooms. It’s a feeling, not a fact.'],
  [/what is (a |an )?(the )?(growth mindset)\b/, 'A growth mindset is the belief that ability can be developed through effort and strategy — as opposed to a fixed mindset, the belief that talent is carved in stone. The research shows modest but real effects, especially when the environment actually rewards effort.'],
  [/what is (a |an )?(the )?(cognitive load)\b/, 'Cognitive load is the amount of working memory a task demands. Your mental “RAM” holds only about four items at once, so when too much arrives simultaneously, thinking creaks to a halt. Good design and good habits mostly work by lowering load.'],
  [/what is (a |an )?(the )?(neuroplasticity|brain plasticity)\b/, 'Neuroplasticity is the brain’s ability to rewire itself — strengthening, weakening, and rerouting connections as you learn and practise. It’s why skills stick with repetition and why the brain you have tomorrow is shaped by what you do today.'],
  [/what is (a |an )?(the )?(serotonin|dopamine|oxytocin|cortisol)\b/, 'That’s one of the brain’s chemical messengers: dopamine is about motivation and reward (“wanting”), serotonin about mood and steadiness, oxytocin about bonding and trust, cortisol about stress and alertness. Pop science exaggerates the one-chemical-one-feeling stories — they’re a team, not solo acts.'],
  [/what is (a |an )?(the )?(nft)\b/, 'An NFT (non-fungible token) is a unique digital receipt stored on a blockchain, used to claim ownership of a digital item — art, music, a collectible. The boom got wild and mostly cooled, but the underlying idea of verifiable digital ownership remains interesting.'],
  [/what is (a |an )?(the )?(renewable energy|solar power)\b/, 'Renewable energy comes from sources that replenish naturally — sunlight, wind, water, geothermal heat. Solar panels convert sunlight directly into electricity, and costs have fallen so sharply that it’s now among the cheapest new electricity in many places.'],
  [/what is (a |an )?(the )?(mental health)\b/, 'Mental health is how you’re doing emotionally, psychologically, and socially — not merely the absence of illness, but the presence of coping, connection, and meaning. Like physical health, it fluctuates, it’s worth maintenance, and there’s no shame in seeking help when it dips.'],
  [/what is (a |an )?(the )?(burnout)\b/, 'Burnout is the exhaustion that comes from prolonged unmanaged stress — especially at work. It shows up as depletion, cynicism, and feeling ineffective. It’s not a personal failure of toughness; it’s a signal that something structural needs to change.'],
  [/what is (a |an )?(the )?(procrastination)\b/, 'Procrastination is voluntarily delaying something despite knowing it will hurt later. Research leans on it being an emotion problem more than a time problem: we dodge tasks that make us feel bad. Shrinking the task or softening the feeling beats “trying harder”.'],
  [/what is (a |an )?(the )?(boundaries)\b/, 'Boundaries are the limits you set about what you will and won’t accept — said kindly, held clearly. They’re not walls or punishments; they’re information that helps relationships stay sustainable.'],
  [/what is (a |an )?(the )?(active listening)\b/, 'Active listening is listening to understand, not to reply — catching the words, the tone, and the feeling, then showing that you’ve got it (a paraphrase, a good follow-up question). It’s the quiet superpower of every good conversation.'],
  [/what is (a |an )?(the )?(public speaking|presentation)\b/, 'Public speaking is communicating with an audience — and the nerves around it are ancient wiring, not incompetence. The craft part is simple: know your first sentence, breathe out longer than you breathe in, and talk *to* people rather than *at* a room.'],
];

function termReply(q: string, mentor: MentorProfile, seed: number): string | null {
  for (const [re, ans] of TERMS) {
    if (re.test(q.toLowerCase())) {
      return `${ans}\n\n${pick(['Want to explore any part of that deeper?', 'Anything specific inside that you’re curious about?', 'Where did you come across it — I can tailor this to your situation.'], seed)}`;
    }
  }
  return null;
}

/* ---------- broad topic packs for open questions ---------- */

interface TopicPack {
  re: RegExp;
  reply: (q: string, seed: number, name: string | null) => string;
}

const TOPICS: TopicPack[] = [
  {
    re: /\b(procrastinat\w*|motivat\w*|habit\w*|discipline|productiv\w*|distract\w*|focus(ed|ing)?|lazy|getting started|give up|giving up|quitting|staying consistent)\b/,
    reply: (q, seed, name) =>
      pick(
        [
          `Ah, the motivation trap${name ? `, ${name}` : ''} — honestly, nobody feels like starting, and the people who get things done have simply stopped waiting for the feeling. The working formula is tiny: make the first step so small it’s almost silly (open the document, put on the shoes), and let momentum do the rest. Willpower is a terrible boss but a decent employee once things are moving.\n\nWhat’s the thing you’ve been avoiding? Let’s shrink it together.`,
          `Here’s the honest truth about motivation${name ? `, ${name}` : ''}: it follows action more often than it leads it. Design beats determination — pick a fixed cue (“after lunch”), a laughably small version of the task, and never skip twice in a row. That’s genuinely most of the science.\n\nWhat are you trying to get yourself to do?`,
        ],
        seed,
      ),
  },
  {
    re: /\b(sky|sunset|sunrise|rainbow|clouds?|atmosphere)\b/,
    reply: (q, seed, name) =>
      pick(
        [
          `The sky is one of those lovely questions where physics becomes poetry${name ? `, ${name}` : ''}. Sunlight is actually a mix of all colours; as it enters our atmosphere, tiny molecules scatter the blue wavelengths most strongly (that’s called Rayleigh scattering), so blue floods the sky. Sunsets go red and orange because the light travels through more atmosphere and the blue gets scattered away first.\n\nSpace-wise, the same physics gives us white stars, red sunsets, and blue moons only in songs. What sparked the curiosity?`,
          `Ooh, space question! The short version: the sky looks blue because air scatters blue light from the sun in every direction, while reds and oranges sail straight through. At sunset the light takes a longer path through the atmosphere, so even the blue is gone by the time it reaches you — hence the fire colours.\n\nIf you mean deeper space stuff — stars, gravity, black holes — ask away; I find it hard to stop talking about it.`,
        ],
        seed,
      ),
  },
  {
    re: /\b(stars?|moon|planet|space|universe|gravity|tides?|rocket\w*|satellite|asteroids?|comets?|galax(y|ies)|astronaut|orbit|black holes?|big bang|mars|jupiter|saturn|aliens?)\b/,
    reply: (q, seed, name) =>
      pick(
        [
          `Space — my favourite subject to get carried away by${name ? `, ${name}` : ''}! The honest headline: everything up there is running the same physics as everything down here, just with the volume turned up. Gravity isn’t a force so much as spacetime itself curving; stars are fusion reactors balancing collapse against their own light; and a black hole is what happens when gravity wins completely. And yes — every atom in your body was forged inside a star that exploded long before Earth existed.\n\nWhich part pulls you in — the planets, the stars, or the truly weird stuff?`,
          `Ooh, a space question${name ? `, ${name}` : ''}! The universe is almost comically large: light from the nearest star takes over four years to reach us, and there are more stars than grains of sand on every Earth beach. What makes it beautiful to me is that it’s all knowable — orbits, elements, distances — not magic, just physics patient enough to wait billions of years.\n\nWhat got you wondering?`,
        ],
        seed,
      ),
  },
  {
    re: /\b(ai|artificial intelligence|robot|chatgpt|algorithm|machine learning|automation|technology|computer|internet|phone app)\b/,
    reply: (q, seed, name) =>
      pick(
        [
          `Technology questions are my home turf${name ? `, ${name}` : ''} — I am, after all, made of the stuff. At its heart, AI is pattern recognition at scale: show a system enough examples and it learns the patterns — of language, images, behaviour. The practical magic (and the risk) comes from the fact that those patterns then get applied to new situations.\n\nThe wise way to relate to it: treat these tools as very fast, very confident interns. Great leverage, still needs your judgment. What’s your angle — curious, worried, or building something?`,
          `Here’s how I think about AI and tech generally: every powerful tool redistributes something. Calculators redistributed arithmetic; search redistributed memory; AI is redistributing *drafting* — of text, code, images. The people who get the most from it keep one habit: they stay the editor, not just the consumer.\n\nWhat are you trying to figure out — how it works, or how it affects your work?`,
        ],
        seed,
      ),
  },
  {
    re: /\b(sleep|insomnia|tired|rest|exhausted|energy)\b/,
    reply: (q, seed, name) =>
      `Sleep is one of those areas where the science is beautifully unglamorous${name ? `, ${name}` : ''}: consistent times matter more than duration tricks, light in the morning and darkness at night set the clock, and caffeine’s half-life means a 4pm cup is still with you at 10pm. If sleep is broken for weeks — trouble falling, staying, or waking unrefreshed — that’s worth raising with a doctor rather than white-knuckling.\n\nFor the ordinary kind of tiredness, the unsexy trio works: daylight walks, a wind-down ritual, and a bedtime you actually keep. Which of these is your struggle — falling asleep, or the quality of it?`,
  },
  {
    re: /\b(health|diet|weight|exercise|fitness|gym|eat|nutrition|food)\b/,
    reply: (q, seed, name) =>
      `Nutrition and fitness advice online is a jungle — one week eggs are heroes, the next they’re villains. The boring consensus survives every trend${name ? `, ${name}` : ''}: mostly plants, enough protein, water, movement you’ll actually repeat, and sleep. The best routine is the one you’ll still be doing in a year.\n\nIf there’s a specific goal — energy, strength, weight — tell me more and I’ll help you design the smallest version of it. (And for medical conditions, a doctor or dietitian beats any chatbot, including me.)`,
  },
  {
    re: /\b(relationship|boyfriend|girlfriend|partner|husband|wife|dating|friend|friendship|family|mother|father|sister|brother|breakup|marriage)\b/,
    reply: (q, seed, name) =>
      pick(
        [
          `Relationships — the real curriculum of life, isn’t it${name ? `, ${name}` : ''}? Here’s what I’ve seen hold up across the research and the stories: people thrive when they feel *seen*. That means listening to understand (not to win), naming needs plainly instead of hinting, and repairing quickly when it goes wrong — a genuine “I’m sorry, let me try that again” is stronger than never stumbling.\n\nTell me more about the actual situation — who’s it with, and what happened? I’ll help you think it through, word by word if needed.`,
          `Oh, this is human stuff at its most human. Whatever the specifics, one question usually unlocks things: *what does each person need to feel safe here?* Often it’s not the surface argument at all — it’s feeling unheard, or unappreciated, or afraid.\n\nIf you want, tell me what was said — I’ll help you find your next sentence.`,
        ],
        seed,
      ),
  },
  {
    re: /\b(job|career|work|boss|manager|office|salary|promotion|business|startup|interview|cv|resume|quit my job)\b/,
    reply: (q, seed, name) =>
      `Work questions usually sit at an intersection of skill, story, and leverage${name ? `, ${name}` : ''}. A few frames I find useful: growth happens at the edge of your comfort (not in the panic zone), your career is built on visible problems solved (keep a brag document), and negotiation is more about preparation than personality.\n\nIf it’s a specific situation — a boss, an offer, a crossroads — give me the details and let’s map it out together. What’s going on?`,
  },
  {
    re: /\b(money|save|saving|invest|investing|debt|loan|budget|rich|poor|financial)\b/,
    reply: (q, seed, name) =>
      `Money advice can get very noisy, but the core is surprisingly calm${name ? `, ${name}` : ''}: spend less than you earn (most months), kill expensive debt first, keep a small emergency buffer before investing, and automate the boring parts. Time in the market beats timing the market — compounding is quiet and relentless.\n\nWhere it gets personal is your actual numbers and goals. What’s the situation — building a habit, a specific goal, or sorting a mess?`,
  },
  {
    re: /\b(anxious|anxiety|depressed|depression|stress|stressed|overwhelm|lonely|loneliness|sad|unhappy|cry|scared|afraid|panic\w*)\b/,
    reply: (q, seed, name) =>
      `I hear you${name ? `, ${name}` : ''} — and I want to answer like a person, not a pamphlet. That feeling is real, and it makes sense in context, even when your mind says it doesn’t. A few things that genuinely help in the moment: slow long exhales (they signal safety to the body), naming the feeling precisely (“disappointed and scared”, not just “bad”), and shrinking the next step to something tiny.\n\nAnd the honest part: if this has been weighing on you for weeks, talking to a counsellor or doctor is a strength, not a last resort — they do this for a living. I’m here for everything you want to think through. What’s underneath it today?`,
  },
  {
    re: /\b(school|exam|test|study|university|college|degree|homework|assignment|revision|gcse|waec|jamb|ielts)\b/,
    reply: (q, seed, name) =>
      `Study questions — now we’re in my neighbourhood${name ? `, ${name}` : ''}! The evidence-based core is small and powerful: test yourself instead of rereading (retrieval practice), spread practice across days instead of one heroic night, and mix up problem types. Highlighting feels productive; it mostly isn’t.\n\nFor exams specifically: do past questions under time pressure, then study the *gaps* — that’s the whole game. What are you preparing for?`,
  },
  {
    re: /\b(dream|dreams|meaning of life|purpose|philosophy|existential|god|religion|faith|death|die|alive)\b/,
    reply: (q, seed, name) =>
      pick(
        [
          `The big questions${name ? `, ${name}` : ''} — I respect these. I don’t think there’s one correct answer to meaning; the honest answers I’ve seen are plural: meaning is *made*, not found — in work that uses you well, in people you love, in something larger than yourself, or simply in paying deep attention to your own life.\n\nA useful little experiment: notice the moments this week when you feel most like yourself. They’re clues. What’s pulling you toward this question right now?`,
          `Questions like this deserve humility from an AI, and honesty${name ? `, ${name}` : ''}. I can lay out how thoughtful people have approached them — meaning as created rather than discovered, purpose as a practice rather than a treasure — but the real answer is lived, and it’s yours.\n\nWhat’s prompting it — a big change, a loss, or just late-night thinking?`,
        ],
        seed,
      ),
  },
  {
    re: /\b(news|politics|election|government|president|war|economy)\b/,
    reply: (q, seed, name) =>
      `I should be upfront${name ? `, ${name}` : ''}: I don’t have live news or today’s headlines — my knowledge has a cutoff, and politics moves daily. What I *can* do is help you think: compare claims, check sources, unpack incentives, or make sense of a policy’s mechanics.\n\nIf you tell me the issue you’re wrestling with, I’ll help you reason it through — carefully and without pretending to know what happened this morning.`,
  },
  {
    re: /\b(movie|movies|series|show|music|song|book|novel|game|gaming|football|soccer|sport|celebrity|netflix)\b/,
    reply: (q, seed, name) =>
      `Now we’re on the fun stuff${name ? `, ${name}` : ''}! Full honesty though: I don’t have live charts, match results, or streaming catalogues — my world is more ideas than schedules. But I love talking *about* stories, music, and play: why certain plots move us, how games hook attention, what makes a song stick.\n\nTell me what you’re into and let’s riff on it.`,
  },
  {
    re: /\b(travel|trip|vacation|holiday|flight|country|city|visa|abroad)\b/,
    reply: (q, seed, name) =>
      `Travel questions! I can’t check fares or visas (those change daily and I’d rather be honest than confidently wrong${name ? `, ${name}` : ''}), but I’m good with the thinking part: trade-offs between cost and time, planning the shape of a trip, or the psychology of why we return from travel feeling remade.\n\nWhat’s the trip you’re weighing?`,
  },
  {
    re: /\b(language|english|grammar|vocabulary|learn (a |a new )?language|speak (french|spanish|yoruba|igbo|hausa|pidgin))\b/,
    reply: (q, seed, name) =>
      `Language learning is a lovely example of everything we know about memory${name ? `, ${name}` : ''}: tiny daily exposure beats weekend marathons, speaking early (badly!) beats silent study, and retrieval — trying to recall a word before looking — builds the real reflex. Apps help with habit; humans help with nerve.\n\nWhich language, and where are you stuck — words, grammar, or the courage to speak?`,
  },
  {
    re: /\b(writing|write|essay|email|report|presentation|speech|story|blog|content)\b/,
    reply: (q, seed, name) =>
      `Writing is thinking that leaves a fingerprint${name ? `, ${name}` : ''}. The craft advice that survives every era: write the ugly first draft before your inner critic wakes up, lead with the point (readers are generous with time, not lavish with it), and read it aloud — your ear catches what your eye forgives.\n\nWhat are you writing? I’ll happily look at a draft, or just help you find the opening line.`,
  },
  {
    re: /\b(business|marketing|sales|customer|brand|social media|instagram|twitter|tiktok|content creation)\b/,
    reply: (q, seed, name) =>
      `The business world rewards clarity disguised as novelty${name ? `, ${name}` : ''} — most “new” marketing is old psychology in new clothes: attention, trust, and proof. Grow by being useful to a specific person, saying it plainly, and showing up consistently. Viral is a lottery; trust is a system.\n\nWhat are you building or promoting? Let’s get specific.`,
  },
  {
    re: /\b(baby|pregnan|parent|child|kid|children|toddler|teenager|discipline)\b/,
    reply: (q, seed, name) =>
      `Parenting questions carry so much love and so much worry${name ? `, ${name}` : ''}. The developmental science keeps converging on the same core: kids need warmth *and* boundaries (not one instead of the other), feelings named so they can be tamed, and repair after rupture — because rupture is inevitable and repair is what teaches trust.\n\nWhat’s the age and the situation? I’ll keep this practical.`,
  },
  {
    re: /\b(car|house|rent|buy|furniture|repair|fix|cook|recipe|clean)\b/,
    reply: (q, seed, name) =>
      `The everyday stuff${name ? `, ${name}` : ''} — honestly, adulting is a skill nobody is born with. The general principle that works across all of it: decide with your future self in mind, but start with the smallest reversible step. Research the 20% that prevents 80% of regret (for purchases: total cost, resale, and how often you’ll use it).\n\nWhat’s the actual decision or task? Let’s break it into pieces.`,
  },
];

/* ---------- philosophy & opinions ---------- */

function opinionReply(q: string, mentor: MentorProfile, seed: number, name: string | null): string | null {
  const t = q.toLowerCase();
  if (/\b(what('s| is) the meaning of life|why are we here)\b/.test(t)) {
    return `Oh, the big one${name ? `, ${name}` : ''}! I can’t hand you a single cosmic answer, and I’d distrust anyone who claims one with confidence. But the honest pattern across philosophy, psychology, and ordinary good lives is this: meaning is *made* — through work that uses you well, people you love, suffering that gets integrated rather than wasted, and attention paid to the small actual life in front of you.\n\nViktor Frankl put it best: meaning is found, not given. What’s stirring this question for you?`;
  }
  if (/\b(do you think|is it (better|worth)|should i|what would you do|your opinion|what do you think about)\b/.test(t)) {
    return `I’ll give you my honest read${name ? `, ${name}` : ''}, with the caveat that I’m reasoning, not decreeing: the strongest version of any choice usually respects both your values and your constraints. When people regret things, it’s most often the un-taken careful risk — not the thoughtful failure.\n\nLay out the specifics — your options, what you’d gain, what you’re afraid of — and I’ll think through the trade-offs with you, properly.`;
  }
  return null;
}

/* ---------- follow-ups on the running topic ---------- */

/** the message must BE the follow-up phrase (not merely start with one) */
const FOLLOW_UP =
  /^(tell me more|more|go on|elaborate|deeper|what do you mean|i don'?t (get|understand)|confusing|confused|explain (it )?(again|simpler|differently)|simpler|in simple terms|like what|for example|give (me )?an? example|example|yes|yeah|yep|ok(ay)?|really|interesting|why|how so|then what|so|and then|hmm|what should i do|what do you think|what would you do|what('s)? next|what now|now what|where do i start|how do i (do|start|apply) (that|this|it))(\s+(please|about (that|it)))?\s*[.?!]?$/i;

function isFollowUp(q: string): boolean {
  const t = q.trim().replace(/^(so|and|then|but|ok|okay|oh|please)\s+/i, '');
  return t.length < 60 && FOLLOW_UP.test(t);
}

/* ---------- safety ---------- */

function safetyReply(q: string): string | null {
  if (/(stressed out|depressed|anxious all the time|therapy|therapist|suicid|hurt myself|can'?t cope|end my life|self harm|self-harm)/i.test(q)) {
    return `I’m really glad you told me — that took something. I’m a learning companion, so I’m not the right help for what you’re describing, but real support exists and you deserve it: a doctor, a counsellor, or someone you trust who can sit with you while you find one. If you’re in immediate danger, please contact local emergency services now.\n\nI’m still here for everything you want to think through — whenever you want it.`;
  }
  return null;
}

/* ---------- syllabus-grounded answer, humanised ---------- */

function courseAnswer(q: string, mentor: MentorProfile, seed: number, name: string | null, history: HistoryEntry[]): MentorReply | null {
  const hits = pickDocs(q, 'all', 2);
  const scoped = hits; // mentors may narrow by subject via courseSlug param in askMentor
  if (!scoped.length) return null;
  const d = scoped[0];
  const you = name ? `, ${name}` : '';
  const lines: string[] = [];

  // most of the time: answer directly, no stamped opener
  if (seed % 3 === 0) lines.push(`${pick(mentor.voice.thinking, seed)}`);

  // the actual answer in flowing prose
  lines.push(d.summary);
  if (d.details.length && d.details[0]) {
    const det = d.details[0].split(': ').slice(1).join(': ') || d.details[0];
    lines.push('', det);
  }
  if (d.tryOn && seed % 2 === 0) {
    lines.push('', `If you want to feel it in your own life: ${d.tryOn}`);
  }
  // secondary course pointer
  lines.push('', `This comes up in ${d.short} Day ${d.dayIndex} (“${d.title}”) if you ever want the full treatment${you}.`);
  if (seed % 3 !== 1) lines.push('', pick(mentor.voice.closers, seed));

  return { text: lines.join('\n'), sources: [{ label: `${d.short} · Day ${d.dayIndex} — ${d.title}`, href: `/app/courses/${d.courseSlug}/day/${d.dayIndex}` }] };
}

/* ---------- the universal fallback: sound human anyway ---------- */

function openThinkingReply(q: string, mentor: MentorProfile, seed: number, name: string | null): string {
  const topic = q
    .replace(/^(what|why|how|when|who|where|is|are|do|does|can|could|should|would|tell me about|explain|give me)\b/i, '')
    .replace(/[?.!]+$/, '')
    .trim()
    .slice(0, 80);
  const you = name ? `, ${name}` : '';
  return pick(
    [
      `That’s an interesting one${you} — “${topic}” isn’t something I have a settled answer stored up for, so let me think out loud rather than bluff.\n\nWhen I sit with questions like this, I look at what’s behind them: the definition first, then what people usually mean in everyday life, then what it would mean *for you*. My honest understanding is general here rather than specialist — but general understanding plus your context often gets us somewhere useful.\n\nWhat’s drawing you to this — pure curiosity, or something practical going on?`,
      `Hmm${you}, good question — and I want to be honest with you: I don’t have reliable specifics on “${topic}”, and I’d rather think with you than invent facts.\n\nHere’s what I’d do in your shoes: separate what we know from what we’re guessing, look for two decent sources that disagree with each other (truth usually lives in the argument), and ask what decision this knowledge is meant to serve. Sometimes the question behind the question is the real one.\n\nTell me more about why you asked — I’m happy to dig into the reasoning side with you.`,
      `You know${you}, that’s slightly outside what I know well — and I’d rather say so than sound confident and wrong!\n\nWhat I *can* do is think with you: we can break the question into parts, weigh what a good answer would look like, or I can share the angle my training suggests while flagging it’s not certain. The best thinking is usually a conversation anyway.\n\nWhat’s the context — what made you curious about this?`,
    ],
    seed,
  );
}

/* ---------- main entry ---------- */

/**
 * Conversational reply — the single swap-point for a real LLM. Keep this
 * signature; replace the body with a provider call using
 * `getMentor(mentorId).systemPrompt`, `collectContext(...)`, and `history`.
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
  const name = extractName([...history, { from: 'user', text: q }]);
  const short = q.length < 200;

  /* safety first — always */
  const safe = safetyReply(q);
  if (safe) return { text: safe, sources: [] };

  /* they told us their name — acknowledge like a human would */
  const nameMatch = q.match(/\b(?:my name is|i'?m called|i am called|call me)\s+([A-Z][a-zA-Z'-]{1,20})\b/);
  if (nameMatch) {
    return {
      text: `Lovely to meet you, ${nameMatch[1]}! I’ll remember that for our chat. So — what shall we talk about?`,
      sources: [],
    };
  }

  /* small talk & identity */
  const chat = chatReply(q, mentor, seed, name);
  if (chat) return { text: chat, sources: [] };

  /* quick maths */
  const math = mathReply(q, name);
  if (math) return { text: math, sources: [] };

  /* follow-ups continue the running topic (strict: the message IS the phrase) */
  if (isFollowUp(q)) {
    const prev = lastTopicDoc([...history, { from: 'user', text: q }], courseSlug);
    const wantsSimpler = /simple|don'?t (get|understand)|confus/i.test(q);
    const wantsExample = /example|like what|for instance/i.test(q);
    if (prev) {
      const lines: string[] = [];
      if (wantsSimpler) {
        lines.push(`Of course — let’s strip it right down.`, '');
        lines.push(`**${prev.title}** in one breath: ${prev.summary.split(/(?<=\.)\s/)[0]}`);
        if (prev.details.length) {
          lines.push('', `In plain words: ${prev.details[0].split(': ').slice(1).join(': ') || prev.summary}`);
        }
      } else if (wantsExample && prev.details.length) {
        lines.push(`Sure — here’s a concrete flavour of it:`, '');
        lines.push(prev.details[Math.min(1, prev.details.length - 1)] ?? prev.summary);
      } else if (prev.details.length > 1) {
        lines.push(`Let’s go a layer deeper on **${prev.title}**.`, '');
        lines.push(prev.details[1] ?? prev.summary);
        if (prev.tryOn) lines.push('', `The piece people remember: ${prev.tryOn}`);
      } else {
        lines.push(`With **${prev.title}**, the next layer is this:`, '');
        lines.push(prev.summary);
        if (prev.tryOn) lines.push('', `A way to feel it in your bones: ${prev.tryOn}`);
      }
      lines.push('', pick(mentor.voice.closers, seed));
      return {
        text: lines.join('\n'),
        sources: [{ label: `${prev.short} · Day ${prev.dayIndex} — ${prev.title}`, href: `/app/courses/${prev.courseSlug}/day/${prev.dayIndex}` }],
      };
    }
    /* no course topic behind us — continue the last real thing they said */
    const lastUser = [...history]
      .reverse()
      .find((h) => h.from === 'user' && !isFollowUp(h.text) && h.text.trim().length >= 12);
    if (lastUser) {
      const t = lastUser.text.toLowerCase();
      for (const pack of TOPICS) {
        if (pack.re.test(t)) return { text: pack.reply(lastUser.text, seed, name), sources: [] };
      }
      const cont = opinionReply(lastUser.text, mentor, seed, name) ?? openThinkingReply(lastUser.text, mentor, seed, name);
      return { text: cont, sources: [] };
    }
    return {
      text: `Hmm — I want to make sure I follow you. What would you like to go deeper on? Name the topic (anything — “memory”, “confidence”, “how computers learn”, “what to do about my job”) and let’s take it apart together.`,
      sources: [],
    };
  }

  /* opinions & philosophy */
  const op = opinionReply(q, mentor, seed, name);
  if (op) return { text: op, sources: [] };

  /* quick definitions */
  const term = termReply(q, mentor, seed);
  if (term) return { text: term, sources: [] };

  const isPersonal = /^\s*(i\b|i'?m\b|my\b|me\b|we\b|our\b|us\b)/i.test(q);

  /* life/personal situations: topic packs first (warm, human, general) */
  if (isPersonal) {
    for (const pack of TOPICS) {
      if (pack.re.test(q.toLowerCase())) {
        return { text: pack.reply(q, seed, name), sources: [] };
      }
    }
    const ans = courseAnswer(q, mentor, seed, name, history);
    if (ans) return ans;
    return { text: openThinkingReply(q, mentor, seed, name), sources: [] };
  }

  /* knowledge questions: syllabus topics win when clearly matched */
  const hits = pickDocs(q, courseSlug, 2);
  const strongCourseMatch = hits.length && scoreDoc(tokens(q), hits[0]) >= 6;
  if (strongCourseMatch) {
    const ans = courseAnswer(q, mentor, seed, name, history);
    if (ans) return ans;
  }

  /* broad topic packs — general knowledge & life */
  for (const pack of TOPICS) {
    if (pack.re.test(q.toLowerCase())) {
      return { text: pack.reply(q, seed, name), sources: [] };
    }
  }

  /* weaker course match still beats nothing */
  if (hits.length && short) {
    const ans = courseAnswer(q, mentor, seed, name, history);
    if (ans) return ans;
  }

  /* nothing matched — think with them like a human would */
  return { text: openThinkingReply(q, mentor, seed, name), sources: [] };
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
