# PRD: Uneek Academy

A multi-course learning platform. Each course is a structured, gamified, daily-lesson program. The first course is the 6-month Psychology course (working title: "Psychology: How People Think"). More courses can be added later without changing the app.

## 1. Overview

Uneek Academy is the umbrella brand and web app. A learner signs in, sees the course catalog, enrolls in a course, and works through it one short lesson a day. Every course follows the same engine: daily lessons, exercises for retention, a weekly review, a rest day, streaks, and a share panel that turns each completed day into a LinkedIn post and a minimalist hook card.

Built for short attention spans: every day is small, finishable, and visibly tracked.

Primary user at launch: a single learner (the builder), with real accounts so it can be opened to others later.

## 2. Goals

- Provide one home for all courses under the Uneek Academy name.
- Make daily learning small enough to never feel overwhelming.
- Build retention through exercises, weekly reviews, and spaced recall.
- Turn every completed day into shareable content.
- Make adding a new course a content task, not a development task.

## 3. Platform Structure

**Academy Home (Dashboard)**
- Greeting, global streak, and "Today" section listing the next lesson for each enrolled course.
- Course catalog with three states: Enrolled (with progress ring), Available (Enroll button), Coming Soon (locked card, optional "notify me").
- Each course card: cover illustration, title, duration, short description, progress, accent color.

**Course Page**
- Course overview: what you will learn, duration, weekly rhythm, month-by-month outline.
- Calendar view of every day in the course (done, missed, rest, locked, today, shared).
- Continue button that goes straight to today's lesson.

**Per-Course vs Global**
- Per-course: progress, calendar, scores, flashcards, notes, XP, level title.
- Global: account, theme, streak (any lesson completed or rest ticked keeps it alive), badges, learning history across all courses.

**Course Engine (reusable)**
Every course is defined by content and a config, not custom code:
- Slug, title, description, cover, accent colors, total weeks.
- Weekly template (default: 5 learn days, 1 review day, 1 rest day).
- Lessons, exercises, flashcards, and share content per lesson.
- Content lives as structured JSON/MDX per course (`/content/<course-slug>/`) and is seeded into the database. A simple admin panel for authoring can come later.

## 4. Teaching Voice and Level (applies to all courses by default)

- Write as if explaining to a smart 15-year-old: plain language, real examples, no jargon without a definition.
- Every concept: a hook, a simple explanation, an everyday example, then a practice task.
- Every lesson includes at least one illustration or animated diagram.
- Individual courses may override the level in their config.

## 5. Weekly Structure (default template)

| Day | Type | Content |
|---|---|---|
| Mon | Learn | Reading lesson (5–8 min) + 3-question quiz |
| Tue | Learn | Video lesson (embedded YouTube or link-out) + reflection prompt |
| Wed | Learn | Interactive lesson (scenario, drag-and-drop, or flashcards) + quiz |
| Thu | Learn | Reading or video + real-world exercise |
| Fri | Learn | Applied lesson + short retention quiz |
| Sat | Review | Weekly summary, cumulative test (10–15 questions), recap flashcards |
| Sun | Rest | A rest card. The user must tap "I rested" to complete the day. Streak is not broken by rest. |

Each day ends with a "Mark as Done" button, unlocked only after the exercise is completed.

## 6. Course 1: Psychology — How People Think (6 Months)

Goal: take a complete beginner to intermediate or advanced level in understanding how people think, decide, and communicate, including how to read people, understand their mental frameworks, relate to them, and reach guarded people through words and psychology.

Ethics note built into the curriculum: the aim is understanding and connecting with people, not manipulating them. Influence lessons teach approaches that respect the other person.

**Month 1 — Foundations of the Mind**
Weeks 1–4: What psychology is, brain basics, perception, attention, memory, how thoughts form, emotions vs. thoughts.

**Month 2 — Why People Think the Way They Do**
Weeks 5–8: Cognitive biases, mental shortcuts, beliefs and worldview, upbringing and culture, habits and identity.

**Month 3 — Personality and Reading People**
Weeks 9–13: Personality models, temperament, motivation and needs, body language, tone, micro-expressions (with honest limits of what can be read).

**Month 4 — Communication and Connection**
Weeks 14–17: Active listening, questioning, framing, rapport, empathy, finding someone's mental framework through conversation.

**Month 5 — Influence and Difficult People**
Weeks 18–22: Persuasion principles, resistance and defensiveness, approaching guarded people, handling conflict, emotional regulation, ethics of influence.

**Month 6 — Mastery and Application**
Weeks 23–26: Group psychology, decision-making, social dynamics, case studies, a capstone project (analyze a real situation), final assessment.

Level titles for this course: Observer → Analyst → Reader → Strategist → Expert.

Videos are curated from free sources (YouTube etc.), one per video day.

## 7. Core Features

**Lesson Player**
- Step-by-step cards (swipe or tap through), not a wall of text.
- Progress dots at the top; illustrations on most cards.
- Reading, video embed, and interactive modes.

**Exercises**
- Multiple choice, true/false, match-the-pairs, scenario choice, short written reflection, flashcards.
- Instant feedback with a one-line explanation per answer.
- Wrong answers are queued for the weekly review.

**Weekly Review (Saturday)**
- Summary of the week's five concepts, cumulative quiz, score, and weak-topic list.

**Rest Day (Sunday)**
- Calm screen with a rest message and a "Tick rest" checkbox required to complete the day.
- With several courses enrolled, one tick covers the day across all of them.

**Retention Tools**
- Flashcard deck per course, with simple spaced repetition (resurface at 1, 3, 7, 21 days).
- Personal notes per lesson.
- Searchable "Concept library" per course.

**Gamification**
- Global daily streak (rest days protect it), XP per exercise, badges per week/month/course, level titles per course.
- Celebration animations on completing a day, week, or course.

**Share Your Learning (unlocks on Mark as Done)**

Completing a day unlocks a Share panel. One lesson produces three outputs: learning, a LinkedIn post, and a shareable visual. The panel stays locked until the day is marked done.

*A. Hook Card (minimalist image)*
- One idea per card: a single hook or quote from the day's lesson, set large. Nothing else competes with it.
- Fixed elements only: the hook, a small label (e.g. "Day 12 · Psychology"), and "Uneek Academy" in the corner.
- Sizes: 1080x1350 (LinkedIn portrait, default) and 1080x1080.
- Five minimal templates: Big Quote, Concept + One-Line Definition, Question Hook, Myth vs Reality, Minimal Diagram (one simple illustration plus a caption).
- Interactive editor with a live preview:
  - Switch template with one tap.
  - Toggle light/dark card.
  - Pick the accent color (defaults to the course or month color).
  - Edit the hook text inline; adjust text size with a slider.
- Export as PNG (client-side, e.g. html-to-image) and a copy-to-clipboard option.

*B. LinkedIn Write-Up*
- Short: 80–130 words. Structure: hook line, what I learned, one real-life example, one takeaway, one closing question.
- Three tone toggles: Reflective, Direct, Story.
- Editable text box, word counter, one-tap Copy.
- Each lesson stores its own `share_hook` and three post variants in the seed content, so the draft works without any AI call. An optional "Regenerate" via an AI API can come later.
- Plain, formal writing. No emojis by default, hashtags optional (max 3).

*C. Weekly Recap Share (Saturday)*
- After the weekly test, unlock a recap: a 5-slide carousel (one hook per learning day) exported as PDF/PNG set, plus one longer weekly LinkedIn write-up.

*Rules*
- Sharing is optional; skipping it never blocks completion.
- Rest days have no share panel.
- Track which days were shared (`user_shares`) and show a small "Shared" tick on the calendar.

**Account and Sync**
- Email and Google sign-in.
- Profile with name, avatar, courses enrolled, total days completed, streak, scores, badges.
- Progress and notes sync across devices.
- Learning history page: every completed day across all courses, scores, notes, and time spent.

**Theme and UI**
- Light and dark mode with a toggle (remember preference, default to system).
- Uneek Academy has a core brand palette; each course has its own accent color, and each month within a course shifts the accent to make progress feel tangible.
- Playful micro-interactions: card flips, confetti, animated progress ring, haptic-style button feedback.

## 8. Illustrations

- Custom flat/vector illustrations per concept (for Psychology: brain, bias examples, body language poses, conversation diagrams).
- Animated diagrams for key ideas (e.g., how memory forms, how a bias distorts judgment).
- One consistent illustration style across the Academy, with a distinct cover illustration per course (see Style Guidance).

## 9. Suggested Tech Stack

- Next.js + Tailwind CSS
- Supabase (auth, Postgres, row-level security for per-user progress)
- Framer Motion for animations
- Course content stored as JSON or MDX in the repo (`/content/<course-slug>/`), seeded into the database
- Deployed on Vercel

## 10. Data Model (simplified)

- users (id, name, avatar, theme)
- courses (id, slug, title, description, cover, accent, total_weeks, weekly_template, level, status: live / coming_soon)
- enrollments (user_id, course_id, start_date, status, xp, level_title)
- lessons (id, course_id, week, day, type, title, content, video_url, month, share_hook, share_post_reflective, share_post_direct, share_post_story)
- exercises (id, lesson_id, type, question, options, answer, explanation)
- progress (user_id, lesson_id, status, score, completed_at, time_spent)
- notes (user_id, lesson_id, text)
- flashcards (id, lesson_id, front, back)
- user_flashcards (user_id, flashcard_id, next_review_at, interval)
- user_shares (user_id, lesson_id, template, accent, hook_text, shared_at)
- badges / user_badges
- streaks (user_id, current, longest, last_active_date) — global across courses

## 11. Key User Flows

1. Sign up → land on Academy Home → browse catalog → enroll in Psychology → pick start date → Day 1 unlocked.
2. Open today's lesson from the Today section → go through cards → complete exercise → tap Mark as Done → XP and streak update → Share panel unlocks (Hook Card + LinkedIn write-up) → copy/download or skip.
3. Saturday: take the weekly test → see score and weak topics → review flashcards → optional weekly recap share.
4. Sunday: open the app → tick rest → streak preserved.
5. Missed a day: gentle catch-up prompt, no shame messaging; the user can resume without losing the course.
6. Switching courses: from Academy Home, open any enrolled course; progress is kept separately for each.

## 12. Non-Functional Requirements

- Mobile-first, responsive, fast load.
- Works offline for already-opened lessons if feasible (PWA).
- Accessible: readable contrast in both themes, keyboard navigable.
- Secure per-user data.
- Adding a course requires only new content files and a course config entry.

## 13. MVP Scope (Build First)

1. Auth and profile
2. Academy Home with course catalog (Psychology live; one or two "Coming Soon" placeholder cards to show the structure)
3. Course page with day calendar
4. Lesson player with reading, video, and quiz types
5. Mark as Done, global streak, XP
6. Weekly review and rest-day tick
7. Dark/light theme
8. Share panel: Hook Card (3 templates, PNG export) and LinkedIn write-up (copy, edit, tone toggle)
9. Seed Psychology Month 1 (4 weeks) fully, including share hooks and post variants; outline the rest

Later: flashcard spaced repetition, badges, notes, concept library, remaining months, additional courses, admin authoring panel, PWA.

## 14. Style Guidance (Placeholder)

See the separate file `uneek-academy-style-guide.md` and follow it for all visual decisions. Summary:

- Direction: minimalist editorial (large light-weight headlines, generous white space, hairline dividers, pill buttons), derived from the reference learning-platform landing page.
- Palette: Ink `#0F1226`, Indigo `#4F46E5` (primary), Amber `#FFB020` (streak/XP accent), Mint `#12B886` (success), Coral `#F25C54` (attention), Mist `#F5F6FB` (alternate sections). Full dark theme tokens included.
- Per-course and per-month accent colors: Indigo, Violet, Teal, Sky, Orange, Amber.
- Type: Manrope for headings (light weights, two-tone headline pattern), Inter for body.
- Marketing pages are editorial (square images); in-app UI uses 16px cards and pill controls.
- Hook Card, calendar states, progress ring, quiz feedback, and rest-day screen are specified in the style guide.

## 15. Open Questions

- Which courses come after Psychology, and in what order.
- Final title of the Psychology course.
- Video sourcing: embed YouTube or link out only.
- Whether the Academy stays personal or opens to other learners (affects sign-up, pricing, and moderation needs).
