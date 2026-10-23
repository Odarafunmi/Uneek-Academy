import type { Article } from '@/lib/types';

/**
 * Seeded academic library — blogs, research-paper summaries, and study guides.
 * Admin-published items (store.customArticles) are merged at render time.
 */
export const libraryArticles: Article[] = [
  {
    id: 'seed-forgetting',
    slug: 'why-you-forget-70-percent',
    title: 'Why you forget 70% of what you learn within a day',
    kind: 'blog',
    source: 'Uneek Learning Lab',
    date: '2026-02-10',
    minutes: 6,
    courseSlug: 'psychology',
    tags: ['memory', 'learning', 'habits'],
    excerpt:
      'Forgetting is not a failure — it is the default setting of a healthy brain. Here is how the forgetting curve works and how to beat it without studying longer.',
    body: [
      'In 1885, a German psychologist named Hermann Ebbinghaus memorised thousands of nonsense syllables and then tested himself over the following days. The pattern he found — the "forgetting curve" — is one of the most replicated findings in psychology: without review, we lose roughly half of new information within an hour, and up to 70% within a day.',
      'That sounds brutal until you realise what forgetting actually is. Your brain is not a hard drive that loses files; it is a filter that decides what deserves to be kept. Information that is never retrieved again is treated as noise. The problem is not your memory — it is that most of us study as if exposure equals learning.',
      'The counter-move is retrieval, not rereading. Every time you pull an idea out of your head — on a walk, in the shower, explaining it to a friend — you rebuild the pathway and flatten the curve. Spaced repetition simply schedules those retrievals at the moments they matter most.',
      'This is exactly why Uneek lessons are short, daily, and cumulative: each day retrieves what the last one taught. The Sunday rest day is not a break from learning — it is when consolidation happens.',
      'Try this today: close your notes and write down three things you remember from anything you read this week. Check afterwards. The gaps you find are not weaknesses; they are your personalised study plan.',
    ],
  },
  {
    id: 'seed-spotlight-paper',
    slug: 'spotlight-effect-paper',
    title: 'The Spotlight Effect in Social Judgment (Gilovich et al., 2000)',
    kind: 'paper',
    source: 'Journal of Personality and Social Psychology',
    date: '2000-03-01',
    minutes: 8,
    courseSlug: 'psychology',
    tags: ['social psychology', 'confidence', 'spotlight effect'],
    excerpt:
      'The classic paper behind "nobody is watching you": people overestimate how much others notice their appearance and blunders — by a wide margin.',
    body: [
      'Thomas Gilovich, Victoria Medvec, and Kenneth Savitsky asked students to wear an embarrassing T-shirt into a room of peers and estimate how many people would notice. Wearers consistently guessed about half the room; the real number was closer to a quarter. We live under a spotlight that exists mostly in our own heads.',
      'Why does it happen? Two mechanisms work together. First, we are the permanent centre of our own experience — every hair, every stumble is vivid to us. Second, we forget that other people are starring in their own films: their attention is on themselves.',
      'The practical consequence is enormous for timid speakers. The fear that "everyone saw me stumble over that sentence" is measurably false — most listeners were tracking meaning, not your delivery, and they forgot the stumble within seconds.',
      'Uneek’s Communication course puts this to work on Day 1: the story of Tobi replaying a meeting for two hours while his colleagues had already moved on. The paper is the evidence; the try-on is the cure.',
    ],
  },
  {
    id: 'seed-pause',
    slug: 'three-second-pause',
    title: 'The 3-second pause that changes every conversation',
    kind: 'blog',
    source: 'Uneek Learning Lab',
    date: '2026-02-24',
    minutes: 5,
    courseSlug: 'communication',
    tags: ['listening', 'confidence', 'conversation'],
    excerpt:
      'Most of what we regret saying happens in the gap between hearing and answering. Three seconds is usually all the space you need.',
    body: [
      'When someone finishes talking, most of us start answering within about half a second. That speed feels attentive — but it means our reply was drafted before their last sentence landed. The words that come out wrong almost always come out fast.',
      'A three-second pause does three things: it lets you actually finish hearing the other person, it gives your brain time to pick the kind response instead of the reflex one, and — surprisingly — it makes you look thoughtful, not slow. Listeners consistently rate paused speakers as more confident and more trustworthy.',
      'If silence feels awkward, borrow a bridge phrase: "Hmm — give me a second with that." It buys the pause without the freeze.',
      'This is the core practice of Communication Day 3. Three seconds, ten times a day, for a week. That is the entire exercise — and it is where most people first feel the difference.',
    ],
  },
  {
    id: 'seed-magical-seven',
    slug: 'magical-number-seven',
    title: 'The Magical Number Seven, Plus or Minus Two (Miller, 1956)',
    kind: 'paper',
    source: 'Psychological Review',
    date: '1956-03-01',
    minutes: 9,
    courseSlug: 'psychology',
    tags: ['working memory', 'cognitive load', 'learning'],
    excerpt:
      'George Miller’s foundational paper on the limits of working memory — why chunking works, and why your brain freezes when too much arrives at once.',
    body: [
      'George Miller observed that human immediate memory hovers around seven items — give or take two — whether the items are numbers, words, or tones. Later research tightened the estimate further (about four chunks), but the core insight stands: there is a hard ceiling on what you can hold in mind at once.',
      'Miller also described the escape hatch: chunking. You cannot remember 9-1-7-4-5-2-8-3-6 as nine digits, but you easily hold it as three three-digit chunks. Experts in any field are mostly people who have learned to see bigger chunks.',
      'This is the science under "cognitive load" (Psychology Day 23). When a meeting dumps six new priorities on you, you do not fail because you are weak — you exceed a biological limit. Write one thing down and you have already changed the maths.',
      'Study implication: never consume new material faster than you can chunk it. Shorter sessions with a thirty-second recall beat marathons of highlighting.',
    ],
  },
  {
    id: 'seed-learning-habit',
    slug: 'learning-habit-that-survives-week-three',
    title: 'How to build a learning habit that survives week three',
    kind: 'guide',
    source: 'Uneek Learning Lab',
    date: '2026-03-05',
    minutes: 7,
    tags: ['habits', 'consistency', 'study skills'],
    excerpt:
      'Almost everyone quits a learning routine in week three. Here is a field guide to the boring middle — the part where identity actually changes.',
    body: [
      'Week one runs on novelty. Week two runs on momentum. Week three runs on nothing — and that is where most learning plans quietly die. The fix is not motivation; it is designing week three in advance.',
      'Step 1 — Shrink the unit. A "study session" is too big to fail-proof. A "one lesson" unit is not. On your worst day, do the smallest version: read the hook card, do the try-on, stop. The chain stays alive.',
      'Step 2 — Attach it to something you already do. After the kettle boils. After the school run. During the commute. Time-of-day intentions ("at 8pm") break; after-action intentions ("after dinner") survive.',
      'Step 3 — Track visibly. The streak chip is deliberately small but permanent: a broken chain is painful precisely because it is visible. Protect the chain on rest days — tick rest, and the habit survives.',
      'Step 4 — Forgive fast. Missing one day is an accident; missing two is a new habit. The 24-hour rule: never skip twice in a row.',
      'Step 5 — Borrow social pressure. Tell one person what you are learning this month. The share card exists for exactly this reason.',
    ],
  },
  {
    id: 'seed-speaking-up-scripts',
    slug: 'scripts-for-speaking-up',
    title: 'Scripts for speaking up when you feel small',
    kind: 'guide',
    source: 'Uneek Learning Lab',
    date: '2026-03-12',
    minutes: 6,
    courseSlug: 'communication',
    tags: ['confidence', 'scripts', 'timid speakers', 'assertiveness'],
    excerpt:
      'You do not need to become "a confident person" to speak up. You need six sentences you can borrow in the moments that matter.',
    body: [
      'The advice "just be confident" is useless for the same reason "just be tall" is. What actually works is having exact words ready before the pressure moment arrives — so you are remembering, not composing.',
      'Entering a meeting: "I have a thought on this — can I share it?" (announcing yourself removes the interruption fear.)',
      'Disagreeing gently: "I see it a bit differently — can I walk you through my thinking?"',
      'Buying time: "That’s important — I’d like to give it a proper answer. Can I come back to you by tomorrow?"',
      'Saying no: "I can’t give this the attention it deserves this week. Can we do next week, or should I hand it to someone else?"',
      'Repairing a stumble: "Let me say that again — the short version is…" (listeners love the short version.)',
      'Each of these appears as a try-on somewhere in Communication Week 1–2. Pick ONE sentence this week and use it three times. That is the whole assignment.',
    ],
  },
  {
    id: 'seed-motivation-myth',
    slug: 'why-just-try-harder-fails',
    title: 'Why "just try harder" fails — and what works instead',
    kind: 'blog',
    source: 'Uneek Learning Lab',
    date: '2026-01-28',
    minutes: 5,
    courseSlug: 'psychology',
    tags: ['motivation', 'habits', 'behaviour change'],
    excerpt:
      'Willpower is the most overrated tool in self-improvement. The people who change reliably change their environment, not their character.',
    body: [
      'When a behaviour fails, we almost always blame effort: I need to try harder, want it more, be more disciplined. But decades of behaviour-change research point somewhere less flattering and more useful — the environment does most of the deciding.',
      'The famous popcorn study (mentioned in Psychology Day 2) found that habitual movie-theatre eaters ate just as much stale popcorn in a conference room when they were handed the box — until the context changed (no box, different room) and the habit simply switched off. The person did not change. The cues did.',
      'This is why "try harder" fails: it asks the slow, conscious brain to win a fight the automatic brain decides before you are consulted. Change the cues and the fight never starts.',
      'The practical stack: remove one trigger for the habit you do not want, add one trigger for the habit you do, and shrink the new habit until it is embarrassingly small. Then let repetition — not resolve — do the building.',
    ],
  },
  {
    id: 'seed-emotional-intel',
    slug: 'emotional-intelligence-at-work',
    title: 'Emotional intelligence at work: the evidence, not the hype',
    kind: 'paper',
    source: 'Annual Review of Organizational Psychology',
    date: '2023-05-01',
    minutes: 10,
    courseSlug: 'psychology',
    tags: ['emotions', 'workplace', 'self-regulation'],
    excerpt:
      'A sober look at what emotional intelligence can and cannot predict — and the one skill from the literature worth practising first.',
    body: [
      'Emotional intelligence (EI) became a management buzzword faster than the evidence could keep up. The careful summary: ability-based EI measures modestly predict job performance and leadership ratings, especially in high-social-load roles — but self-report "EI" questionnaires mostly measure agreeableness.',
      'Under the hype sits a solid core: perceiving emotions in yourself and others, using them to think, understanding how they unfold, and regulating them. The fourth is the trainable one that changes outcomes most.',
      'Regulation is not suppression. Research on expressive suppression shows it backfires — memory suffers and physiology stays activated. What works is reappraisal: changing what the situation means ("the interview is practice, not a verdict") before the body finishes reacting.',
      'This is the quiet spine of the Psychology course — the emotion days build reappraisal as a daily micro-skill, three minutes at a time. It is also what the weekly try-ons are really rehearsing.',
    ],
  },
];

export function articleBySlug(slug: string): Article | undefined {
  return libraryArticles.find((a) => a.slug === slug);
}

export const KIND_LABELS: Record<Article['kind'], string> = {
  blog: 'Blog',
  paper: 'Research paper',
  guide: 'Study guide',
};
