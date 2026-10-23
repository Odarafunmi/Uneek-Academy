'use client';

import Link from 'next/link';
import { lessonsForCourse } from '@/content/psychology';
import type { DayProgress, Lesson } from '@/lib/types';
import { Check, Lock, Moon, Flame } from 'lucide-react';

/**
 * Calendar day states (style guide §7):
 * done (Mint + check), today (Indigo ring + tint), missed (Mist + coral dot),
 * rest (Indigo Tint + moon), locked (Mist + muted lock), shared (amber corner dot).
 */
export function CourseCalendar({
  slug,
  days,
  restTicks,
}: {
  slug: string;
  days: Record<number, DayProgress>;
  restTicks: string[];
}) {
  const lessons = lessonsForCourse(slug);
  const todayLesson = lessons.find((l) => !days[l.dayIndex]?.done);

  return (
    <div className="space-y-8">
      {groupByWeek(lessons).map(({ week, month, items }) => (
        <div key={week}>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="t-label" style={{ color: 'var(--muted)' }}>
              Week {week} · Month {month}
            </h3>
            <Legend />
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {items.map((l) => (
              <DayCell
                key={l.dayIndex}
                lesson={l}
                progress={days[l.dayIndex]}
                isToday={todayLesson?.dayIndex === l.dayIndex}
                slug={slug}
                seeded={lessons.length > 0}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DayCell({
  lesson,
  progress,
  isToday,
  slug,
}: {
  lesson: Lesson;
  progress?: DayProgress;
  isToday: boolean;
  slug: string;
  seeded: boolean;
}) {
  const locked = lesson.cards.length === 0 && lesson.type !== 'rest';
  const isRest = lesson.type === 'rest';
  const done = progress?.done;

  let cls = 'day-locked';
  let icon: React.ReactNode = <Lock size={13} strokeWidth={1.5} />;
  if (done && isRest) {
    cls = 'day-rest';
    icon = <Moon size={13} strokeWidth={1.5} />;
  } else if (done) {
    cls = 'day-done';
    icon = <Check size={14} strokeWidth={2.5} />;
  } else if (isToday) {
    cls = 'day-today';
    icon = <Flame size={13} strokeWidth={1.5} />;
  } else if (isRest) {
    cls = 'day-rest';
    icon = <Moon size={13} strokeWidth={1.5} />;
  } else if (!locked) {
    // past, not done → gentle "missed" (still tappable)
    cls = 'day-missed';
    icon = <span className="block h-1.5 w-1.5 rounded-full" style={{ background: '#F25C54' }} />;
  }

  const inner = (
    <div
      className={`relative flex aspect-square flex-col items-center justify-center gap-0.5 rounded-[10px] tr-micro hover:opacity-85 sm:gap-1 ${cls}`}
      title={`Day ${lesson.dayIndex}: ${lesson.title}`}
    >
      {progress?.shared && (
        <span
          className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full"
          style={{ background: '#FFB020' }}
          aria-label="Shared"
        />
      )}
      {icon}
      <span className="text-[10px] font-medium leading-none sm:text-[11px]">{lesson.dayIndex}</span>
    </div>
  );

  if (locked) return inner;
  return (
    <Link href={`/app/courses/${slug}/day/${lesson.dayIndex}`} aria-label={`Day ${lesson.dayIndex}: ${lesson.title}`}>
      {inner}
    </Link>
  );
}

function Legend() {
  const items: [string, string, React.ReactNode][] = [
    ['Done', '#12B886', <Check key="c" size={11} strokeWidth={2.5} color="#fff" />],
    ['Today', 'var(--primary-tint)', <Flame key="t" size={11} strokeWidth={1.5} color="var(--primary)" />],
    ['Rest', 'var(--primary-tint)', <Moon key="r" size={11} strokeWidth={1.5} />],
  ];
  return (
    <div className="hidden items-center gap-3 md:flex">
      {items.map(([label, bg, icon]) => (
        <span key={label} className="t-label flex items-center gap-1.5" style={{ color: 'var(--muted)' }}>
          <span
            className="flex h-4 w-4 items-center justify-center rounded-[5px]"
            style={{ background: bg }}
          >
            {icon}
          </span>
          {label}
        </span>
      ))}
    </div>
  );
}

function groupByWeek(lessons: Lesson[]) {
  const map = new Map<number, { week: number; month: number; items: Lesson[] }>();
  for (const l of lessons) {
    if (!map.has(l.week)) map.set(l.week, { week: l.week, month: l.month, items: [] });
    map.get(l.week)!.items.push(l);
  }
  return Array.from(map.values());
}
