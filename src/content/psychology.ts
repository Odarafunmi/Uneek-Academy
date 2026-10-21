import type { Lesson } from '../lib/types';
import { weeks1to2 } from './psychology-weeks1-2';
import { weeks3to4 } from './psychology-weeks3-4';

/** Psychology: How People Think — Month 1 is fully seeded (weeks 1–4, days 1–28). */
export const psychologyLessons: Lesson[] = [...weeks1to2, ...weeks3to4];

export function lessonForDay(dayIndex: number): Lesson | undefined {
  return psychologyLessons.find((l) => l.dayIndex === dayIndex);
}

export function lessonsForCourse(slug: string): Lesson[] {
  if (slug === 'psychology') return psychologyLessons;
  return [];
}
