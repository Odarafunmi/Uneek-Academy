export type LessonType = 'reading' | 'video' | 'interactive' | 'review' | 'rest';

export type QuestionKind = 'mcq' | 'truefalse' | 'scenario';

export interface ExerciseQuestion {
  kind: QuestionKind;
  question: string;
  options: string[];
  /** index of the correct option */
  answer: number;
  /** one-line explanation shown on feedback */
  explanation: string;
  /** concept tag used for weak-topic tracking on weekly review */
  concept: string;
}

export type CardKind =
  | 'hook'
  | 'text'
  | 'definition'
  | 'example'
  | 'practice'
  | 'list'
  | 'quote'
  | 'illustration';

export interface ContentCard {
  kind: CardKind;
  title?: string;
  body?: string;
  items?: string[];
  /** key of the flat-vector illustration to render (see components/illustrations) */
  illustration?: string;
}

export interface SharePosts {
  reflective: string;
  direct: string;
  story: string;
}

export interface LessonShare {
  /** short hook used by the Hook Card templates */
  hook: string;
  /** concept name for the "Concept + definition" template */
  concept?: string;
  definition?: string;
  /** question hook template */
  question?: string;
  posts: SharePosts;
}

export interface Lesson {
  id: string;
  month: number;
  week: number;
  /** 1-7 within the week (Mon-Sun) */
  day: number;
  /** 1-based absolute day index across the whole course */
  dayIndex: number;
  type: LessonType;
  title: string;
  duration: string;
  summary: string;
  cards: ContentCard[];
  questions: ExerciseQuestion[];
  /** reflection prompt (video days) */
  reflection?: string;
  /** real-world exercise prompt (applied days) */
  exercise?: string;
  /** concept names covered this day (used by the weekly review) */
  concepts: string[];
  share?: LessonShare;
  /** review days: the five concepts of the week */
  reviewTopics?: string[];
  /** rest days */
  restMessage?: string;
}

export interface CourseMonth {
  title: string;
  weeks: number;
  topics: string;
  /** month accent from the style guide */
  accent: string;
  accentText: 'white' | 'ink';
}

export interface CourseConfig {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: string;
  totalWeeks: number;
  totalDays: number;
  levelTitles: { title: string; xp: number }[];
  months: CourseMonth[];
  status: 'live' | 'coming_soon';
  coverIllustration: string;
  /** realistic cover photography used on course cards */
  coverImage: string;
}

export interface DayProgress {
  done: boolean;
  score: number | null;
  completedAt: string | null;
  shared: boolean;
}

export interface CourseProgress {
  days: Record<number, DayProgress>;
  xp: number;
}

export interface UserProfile {
  name: string;
  joinedAt: string;
}

export type ThemePref = 'light' | 'dark' | 'system';
