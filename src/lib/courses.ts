import type { CourseConfig } from './types';

export const MONTH_ACCENTS = [
  { month: 1, name: 'Indigo', hex: '#4F46E5', text: 'white' as const },
  { month: 2, name: 'Violet', hex: '#8B5CF6', text: 'white' as const },
  { month: 3, name: 'Teal', hex: '#14B8A6', text: 'ink' as const },
  { month: 4, name: 'Sky', hex: '#0EA5E9', text: 'ink' as const },
  { month: 5, name: 'Orange', hex: '#FF7A45', text: 'ink' as const },
  { month: 6, name: 'Amber', hex: '#FFB020', text: 'ink' as const },
];

export const psychology: CourseConfig = {
  slug: 'psychology',
  title: 'Psychology: How People Think',
  tagline: 'Understand people. Read situations. Connect without pretending.',
  description:
    'A six-month daily program that takes a complete beginner to a confident, practical understanding of how people think, decide, and communicate — including how to read situations and reach guarded people with respect, not tricks.',
  level: 'Beginner to advanced',
  totalWeeks: 26,
  totalDays: 182,
  levelTitles: [
    { title: 'Observer', xp: 0 },
    { title: 'Analyst', xp: 500 },
    { title: 'Reader', xp: 1500 },
    { title: 'Strategist', xp: 3000 },
    { title: 'Expert', xp: 5000 },
  ],
  months: [
    {
      title: 'Foundations of the Mind',
      weeks: 4,
      topics:
        'What psychology is, brain basics, perception, attention, memory, how thoughts form, emotions vs. thoughts.',
      accent: '#4F46E5',
      accentText: 'white',
    },
    {
      title: 'Why People Think the Way They Do',
      weeks: 4,
      topics:
        'Cognitive biases, mental shortcuts, beliefs and worldview, upbringing and culture, habits and identity.',
      accent: '#8B5CF6',
      accentText: 'white',
    },
    {
      title: 'Personality and Reading People',
      weeks: 5,
      topics:
        'Personality models, temperament, motivation and needs, body language, tone, micro-expressions (with honest limits).',
      accent: '#14B8A6',
      accentText: 'ink',
    },
    {
      title: 'Communication and Connection',
      weeks: 4,
      topics:
        'Active listening, questioning, framing, rapport, empathy, finding someone’s mental framework through conversation.',
      accent: '#0EA5E9',
      accentText: 'ink',
    },
    {
      title: 'Influence and Difficult People',
      weeks: 5,
      topics:
        'Persuasion principles, resistance and defensiveness, approaching guarded people, handling conflict, emotional regulation, ethics of influence.',
      accent: '#FF7A45',
      accentText: 'ink',
    },
    {
      title: 'Mastery and Application',
      weeks: 4,
      topics:
        'Group psychology, decision-making, social dynamics, case studies, a capstone project, final assessment.',
      accent: '#FFB020',
      accentText: 'ink',
    },
  ],
  status: 'live',
  coverIllustration: 'brain',
  coverImage: '/images/course-psychology.jpg',
};

export const comingSoon: CourseConfig[] = [
  {
    slug: 'communication',
    title: 'Communication: Say It So It Lands',
    tagline: 'Clarity, presence, and words that work in real rooms.',
    description:
      'A daily program on speaking clearly, listening deeply, and handling hard conversations — built on the same weekly rhythm as Psychology.',
    level: 'Beginner to intermediate',
    totalWeeks: 16,
    totalDays: 112,
    levelTitles: [
      { title: 'Beginner', xp: 0 },
      { title: 'Speaker', xp: 600 },
      { title: 'Connector', xp: 1800 },
    ],
    months: [
      {
        title: 'Foundations of Clear Speech',
        weeks: 4,
        topics: 'Clarity, structure, listening, presence.',
        accent: '#14B8A6',
        accentText: 'ink',
      },
    ],
    status: 'coming_soon',
    coverIllustration: 'speech',
    coverImage: '/images/course-communication.jpg',
  },
  {
    slug: 'finance',
    title: 'Personal Finance: Money With Intention',
    tagline: 'Build calm, durable money habits one small lesson a day.',
    description:
      'Budgeting, saving, investing basics, and the psychology of spending — practical, jargon-free, and paced for real life.',
    level: 'Beginner',
    totalWeeks: 12,
    totalDays: 84,
    levelTitles: [
      { title: 'Starter', xp: 0 },
      { title: 'Planner', xp: 500 },
      { title: 'Builder', xp: 1500 },
    ],
    months: [
      {
        title: 'Money Basics',
        weeks: 4,
        topics: 'Cash flow, habits, goals, simple investing.',
        accent: '#FFB020',
        accentText: 'ink',
      },
    ],
    status: 'coming_soon',
    coverIllustration: 'coins',
    coverImage: '/images/course-finance.jpg',
  },
];

export const allCourses: CourseConfig[] = [psychology, ...comingSoon];

export function getCourse(slug: string): CourseConfig | undefined {
  return allCourses.find((c) => c.slug === slug);
}

export function monthForWeek(course: CourseConfig, week: number): number {
  let start = 1;
  for (let i = 0; i < course.months.length; i++) {
    const m = course.months[i];
    if (week >= start && week < start + m.weeks) return i + 1;
    start += m.weeks;
  }
  return 1;
}

export function accentForMonth(month: number) {
  return MONTH_ACCENTS[(month - 1) % MONTH_ACCENTS.length];
}
