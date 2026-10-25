import type { Lesson } from '../lib/types';
import { networkingWeek1 } from './networking-week1';
import { networkingWeek2 } from './networking-week2';
import { networkingWeek3 } from './networking-week3';
import { networkingWeek4 } from './networking-week4';
import { networkingWeek5 } from './networking-week5';
import { networkingWeek6 } from './networking-week6';
import { networkingWeek7 } from './networking-week7';
import { networkingWeek8 } from './networking-week8';

/**
 * Networking: The Psychology of Connection — fully seeded (weeks 1–8, days 1–56).
 * The complete mastery program: connect, start, convert, keep, lead — with the
 * capstone network map and 30-day plan in week 8.
 */
export const networkingLessons: Lesson[] = [
  ...networkingWeek1,
  ...networkingWeek2,
  ...networkingWeek3,
  ...networkingWeek4,
  ...networkingWeek5,
  ...networkingWeek6,
  ...networkingWeek7,
  ...networkingWeek8,
];
