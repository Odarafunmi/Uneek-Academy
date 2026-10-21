# Uneek Academy

A multi-course learning platform. Each course is a structured, gamified, daily-lesson
program. The first course is the 6-month **Psychology: How People Think** — Month 1
(28 days) is fully seeded.

Built per the [PRD](docs/psychology-course-prd.md) and the
[Style Guide](docs/uneek-academy-style-guide.md) (indigo / amber / mint editorial
system, Manrope + Inter).

## What's here

**Landing page** (`/`) — information only: what the academy is, course overviews and
lists with real photography, mentors, how-it-works, testimonials, and a newsletter.
No learning happens here.

**Local profiles (v1)** — anyone who wants to engage with a course (enroll / start)
gets a **sign up / sign in pop-up** first. Profiles are stored in the browser
(localStorage) with hashed passwords — no server, no accounts database. Google
sign-in and cloud sync are planned for v3. The learning app (`/app`) is gated: no
profile → redirected to `/auth`.

**Learning app** (`/app`)

- **Academy Home** — greeting, global streak chip, Today card (next lesson + course
  photo + progress ring), course catalog with photo cards and
  Enrolled / Available / Coming Soon states.
- **Course page** (`/app/courses/psychology`) — month-by-month outline with month accent
  colors, day calendar (done / today / missed / rest / locked / shared states), and
  Continue CTA.
- **Lesson player** (`/app/courses/psychology/day/:n`) — step cards with progress dots,
  reading / video / interactive lessons, quizzes with instant Mint/Coral feedback and
  one-line explanations, reflection + real-world exercise prompts.
- **Mark as Done** — unlocked only after the exercise; awards XP, updates the global
  streak (rest days protect it), fires palette confetti, and unlocks the **Share panel**.
- **Share panel** — Hook Card editor (3 templates, light/dark, accent picker, text-size
  slider, 1080×1350 PNG export + copy via `html-to-image`) and LinkedIn write-up
  (Reflective / Direct / Story tones, editable, word counter, one-tap copy).
- **Weekly review days** (Saturday) — cumulative tests with weak-topic tracking;
  **rest days** (Sunday) — calm screen with "Tick rest".
- **History** — every completed day across courses, scores, shares, weak topics.
- **Profile** — name, XP, level titles (Observer → Analyst → Reader → Strategist →
  Expert), theme preference (light / dark / system), sign out, local reset.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 with the style-guide tokens as CSS variables (`[data-theme="dark"]`)
- Zustand + `persist` for local-first state (accounts, progress, XP, streak, shares)
- Lucide icons, `html-to-image` for PNG export
- Fonts bundled via `@fontsource` (Manrope 300/400/600, Inter 400/500/600)
- Photography on all cards; flat-vector illustrations only where the style guide
  calls for them (rest-day screen)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (stop the dev server first — they share .next)
```

## Content

Course content lives in `src/content/` as structured data (`Lesson`, `ExerciseQuestion`,
`LessonShare` types in `src/lib/types.ts`). Adding a course = adding content files + a
`CourseConfig` entry in `src/lib/courses.ts` — no custom UI code.

Psychology Month 1 is fully seeded: 20 learn days + 4 weekly reviews + 4 rest days,
each learn day with content cards, a 3-question quiz (with explanations and concept
tags), and share content (hook + Reflective / Direct / Story post variants). Weeks 5–26
follow the same weekly template and are outlined on the course page.

## Notes

- Profiles and progress live in this browser only (v1). When v3 lands, local accounts
  migrate to Google sign-in + Supabase sync.
- Video days use a curated link-out placeholder (the PRD's embed-vs-linkout question is
  still open).
- Responsive from 320px to ultrawide: cards, calendar, tables, and the Hook Card editor
  all adapt (the hook-card preview auto-scales to the available width).
