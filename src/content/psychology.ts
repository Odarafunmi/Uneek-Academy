import type { Lesson } from '../lib/types';
import { weeks1to2 } from './psychology-weeks1-2';
import { weeks3to4 } from './psychology-weeks3-4';
import { communicationLessons } from './communication';
import { networkingLessons } from './networking';

/** Psychology: How People Think — Month 1 is fully seeded (weeks 1–4, days 1–28). */
export const psychologyLessons: Lesson[] = [...weeks1to2, ...weeks3to4];

export function lessonForDay(dayIndex: number): Lesson | undefined {
  return psychologyLessons.find((l) => l.dayIndex === dayIndex);
}

/** Day lookup that works for every seeded course (used by the lesson player). */
export function lessonForDayInCourse(slug: string, dayIndex: number): Lesson | undefined {
  return lessonsForCourse(slug).find((l) => l.dayIndex === dayIndex);
}

export function lessonsForCourse(slug: string): Lesson[] {
  if (slug === 'psychology') return psychologyLessons;
  if (slug === 'communication') return communicationLessons;
  if (slug === 'networking') return networkingLessons;
  return [];
}
