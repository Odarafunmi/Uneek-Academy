# Uneek Academy — Style Guide

Derived from the reference landing page (minimalist editorial learning site). Layout, typography behavior, and component patterns are kept. Colors are changed from black / orange / yellow to an indigo, amber, and mint system suited to a learning platform.

## 1. Design Principles

1. **Quiet and editorial.** Large light type, generous white space, thin lines. The content leads, not the decoration.
2. **One bold move per section.** A single colored block, a single highlighted phrase, or a single full-bleed image.
3. **Warm energy, calm base.** Cool indigo and ink for focus; amber and mint only for progress, streaks, and success.
4. **Two contexts, one system.** Marketing pages are editorial (square images, big type). The app is softer (16px cards, rounded controls). Both share the same palette and type.

## 2. What Changed From the Reference

| Reference | Uneek Academy | Reason |
|---|---|---|
| Near-black `#111` | Ink `#0F1226` | Deep navy-black feels focused, not harsh |
| Orange CTA / highlight | Indigo `#4F46E5` (amber on dark) | Indigo signals trust and thinking; orange text on white has weak contrast |
| Yellow stat block | Amber `#FFB020` | Kept as the energy color, now tied to streaks and XP |
| Orange stat block | Indigo block | Primary brand color carries the stat band |
| Neutral gray sections | Mist `#F5F6FB` | Slight cool tint ties to the indigo |
| No semantic colors | Mint (success), Coral (attention) | Needed for quizzes, calendar, and progress |

## 3. Color

### Brand and semantic

| Token | Hex | Use |
|---|---|---|
| Ink | `#0F1226` | Primary text, dark sections, dark footer |
| Indigo | `#4F46E5` | Primary buttons, links, highlighted words, progress |
| Indigo Deep | `#3F37C9` | Hover / pressed |
| Indigo Tint | `#ECEBFE` | Selected states, soft badges, rest-day cards |
| Amber | `#FFB020` | Streak, XP, accent button, highlight on dark |
| Amber Tint | `#FFF4DC` | Streak chip background |
| Mint | `#12B886` | Correct answers, completed days, success |
| Mint Tint | `#E3F8F0` | Success backgrounds |
| Coral | `#F25C54` | Wrong answers, errors, gentle "missed" marker |
| Coral Tint | `#FDECEB` | Error backgrounds |

### Neutrals (light theme)

| Token | Hex | Use |
|---|---|---|
| White | `#FFFFFF` | Page background |
| Mist | `#F5F6FB` | Alternate sections, cards, hook card background |
| Line | `#E3E5EF` | Hairline dividers, borders |
| Slate | `#5B6078` | Body and secondary text |
| Soft Gray | `#9AA0B8` | First line of two-tone headlines only (large display text, decorative) |

### Dark theme

| Token | Hex |
|---|---|
| Background | `#0B0D1E` |
| Surface | `#141733` |
| Surface 2 | `#1D2147` |
| Line | `#2A2F5A` |
| Text | `#F2F3FA` |
| Muted text | `#A3A8C7` |
| Primary (lifted for contrast) | `#8B85FF` |
| Accent | `#FFB020` (unchanged) |

### Month accents (Psychology course; reusable for other courses)

| Month | Color | Hex | Text on it |
|---|---|---|---|
| 1 | Indigo | `#4F46E5` | White |
| 2 | Violet | `#8B5CF6` | White, bold or 18px+ only |
| 3 | Teal | `#14B8A6` | Ink |
| 4 | Sky | `#0EA5E9` | Ink |
| 5 | Orange | `#FF7A45` | Ink |
| 6 | Amber | `#FFB020` | Ink |

Each course picks one base accent from this set. Within a course, the month accent replaces the primary on progress bars, the calendar, and the share card bar.

### Color rules
- Never use Soft Gray or Amber for small text on white.
- Highlighted words in headlines: Indigo on light backgrounds, Amber on dark.
- Use at most one accent color per section.

## 4. Typography

**Headings:** Manrope (300, 400, 600). **Body and UI:** Inter (400, 500, 600). Fallback: `system-ui, sans-serif`. Both are on Google Fonts.

| Style | Desktop | Mobile | Weight | Tracking |
|---|---|---|---|---|
| Display | 72 / 76 | 40 / 44 | 300 | -0.03em |
| H1 | 56 / 60 | 36 / 40 | 300 | -0.025em |
| H2 | 40 / 46 | 28 / 34 | 400 | -0.02em |
| H3 | 28 / 34 | 22 / 28 | 400 | -0.01em |
| H4 | 20 / 28 | 18 / 26 | 600 | 0 |
| Body L | 18 / 28 | 17 / 27 | 400 | 0 |
| Body | 16 / 26 | 16 / 26 | 400 | 0 |
| Small | 14 / 22 | 14 / 22 | 400 | 0 |
| Label | 13 / 18 | 13 / 18 | 500 | 0.01em |
| Stat number | 48 / 52 | 40 / 44 | 300 | -0.02em |

**Two-tone headline (signature):** first line in Soft Gray at weight 300, second line in Ink at weight 400.
Example: "Courses That" (gray) / "Open Your Future" (ink). On dark: first line Muted, second line white.

## 5. Layout and Spacing

- 8pt scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 120.
- Container: max 1280px. Side margins: 64 (desktop), 32 (tablet), 20 (mobile).
- 12-column grid, 24px gutter. Section headline on the left columns, supporting text or list on the right.
- Section padding (vertical): 120 / 80 / 56 (desktop / tablet / mobile).
- Radii: pill `999px` for buttons and chips, `16px` app cards, `12px` inputs, `0` editorial photography, full circle for avatars.
- Elevation is minimal: use 1px Line borders first. Shadow-sm `0 1px 2px rgba(15,18,38,.06)`, shadow-md `0 8px 24px rgba(15,18,38,.08)` for lifted cards only.

## 6. Components

**Section label**
A 2px-wide, 14px-tall Indigo bar followed by a 14px Slate label ("About us", "Courses", "How it works"). Sits above each section headline.

**Buttons (all pills)**
- Primary: Indigo fill, white text, 14px/500, height 40–48, horizontal padding 24. Hover: Indigo Deep, small arrow nudges 2px right.
- Accent: Amber fill, Ink text. Used sparingly (streak, "Start today").
- Ghost: 1px Ink outline, transparent, Ink text.
- On dark: white fill, Ink text.

**Hero**
Full-bleed photo with an Ink gradient overlay (about 60% at the bottom fading to 0 at the top). Transparent nav on top, white text. Headline bottom-left in Display light weight with a short three-dash marker above it; CTA pill bottom-right.

**Course row (list pattern)**
Title (H4), meta in Small Slate ("26 weeks · 130 lessons"), price or progress on the right, pill button at the far right, hairline Line divider between rows. In the app, the price slot becomes a progress ring or "Enroll".

**Stat band**
Three equal blocks beside a photo: Mist, Indigo, Amber. Large light number, small label under it, a short sentence on the right of each block. Text is Ink on Mist and Amber, white on Indigo.

**Dark statement band**
Ink background, one sentence at Body L in white, a white pill button on the right.

**Photo strip and mosaic**
Square-cornered, full-bleed rows. Mentor portraits in a single row; learner photos in a 2-row mosaic.

**Testimonial**
Centered quote (H3, light), name in 600, role in Slate, three-dash pager in Indigo (active) and Line (inactive).

**Newsletter**
Illustration left, headline right, underline-only input with an arrow button. No box border.

**Footer**
Ink background, five columns (Contact, Explore, Resources, Company, Legal), 14px Muted links, copyright in Muted at 60%.

## 7. App Extensions (not in the reference)

**Progress ring**
Indigo (or month accent) stroke on an Indigo Tint track, number inside in Manrope 300. Animates on load.

**Streak chip**
Amber Tint background, Amber flame icon, Ink number. Pill shape.

**Lesson card**
16px radius, Mist background (Surface in dark), 24px padding, small label for lesson type (Reading, Video, Interactive), title in H4, duration in Small. Tap area is the whole card.

**Calendar day states**
- Done: Mint fill with white check.
- Today: Indigo ring with Indigo Tint fill.
- Missed: Mist with a small Coral dot (soft, no shaming).
- Rest done: Indigo Tint with a moon icon.
- Locked: Mist with a muted lock icon.
- Shared: small Amber dot in the corner.

**Quiz feedback**
Correct: Mint Tint background, Mint border, one-line explanation. Wrong: Coral Tint background, Coral border, one-line explanation. Always pair color with an icon.

**Rest day screen**
Indigo Tint (dark: Surface 2) background, a calm illustration, one line of text, and a large "Tick rest" checkbox.

**Hook Card (share image, 1080 x 1350)**
- Light: Mist background, Ink text. Dark: Ink background, white text.
- Hook in Manrope 300–400, 72–88px, left-aligned, 96px margins.
- One decoration only: a 6px-tall accent bar (month accent) above the hook.
- Bottom-left label "Day 12 · Psychology" (28px, Slate). Bottom-right "Uneek Academy".
- Nothing else on the card.

## 8. Imagery and Illustration

- Photography: natural light, real people studying or working, warm tones, candid rather than posed.
- Illustration: flat vector, two to three palette colors per illustration (Indigo, Amber, Mint on Ink or Mist), no heavy gradients, consistent shape language. One cover illustration per course.
- Icons: line icons, 1.5px stroke, rounded caps (Lucide).

## 9. Motion

- Durations: 150ms (micro), 250ms (standard), 600ms (celebration).
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Hover: buttons darken, arrows nudge 2px; cards lift 2px with shadow-md.
- Progress rings and bars animate their stroke/width on load.
- Completing a day: check animation, then confetti in the palette colors.
- Respect `prefers-reduced-motion`: replace movement with a simple fade.

## 10. Tokens (paste into the project)

```css
:root {
  --ink: #0F1226;
  --bg: #FFFFFF;
  --mist: #F5F6FB;
  --line: #E3E5EF;
  --text: #0F1226;
  --muted: #5B6078;
  --soft: #9AA0B8;
  --primary: #4F46E5;
  --primary-deep: #3F37C9;
  --primary-tint: #ECEBFE;
  --accent: #FFB020;
  --accent-tint: #FFF4DC;
  --success: #12B886;
  --success-tint: #E3F8F0;
  --danger: #F25C54;
  --danger-tint: #FDECEB;
  --radius-pill: 999px;
  --radius-card: 16px;
  --radius-input: 12px;
}

[data-theme="dark"] {
  --bg: #0B0D1E;
  --mist: #141733;
  --line: #2A2F5A;
  --text: #F2F3FA;
  --muted: #A3A8C7;
  --soft: #A3A8C7;
  --primary: #8B85FF;
  --primary-deep: #A19CFF;
  --primary-tint: #1D2147;
}
```

```js
// tailwind.config.js (extend)
theme: {
  extend: {
    colors: {
      ink: '#0F1226', mist: '#F5F6FB', line: '#E3E5EF',
      indigo: { DEFAULT: '#4F46E5', deep: '#3F37C9', tint: '#ECEBFE' },
      amber: { DEFAULT: '#FFB020', tint: '#FFF4DC' },
      mint: { DEFAULT: '#12B886', tint: '#E3F8F0' },
      coral: { DEFAULT: '#F25C54', tint: '#FDECEB' },
    },
    fontFamily: { heading: ['Manrope', 'system-ui'], body: ['Inter', 'system-ui'] },
    borderRadius: { card: '16px', input: '12px' },
  },
}
```

## 11. Do and Don't

- Do keep headlines light weight and large; let white space do the work.
- Do use one accent per section.
- Do pair every color signal (correct, wrong, done) with an icon or label.
- Don't use more than two font families.
- Don't put Amber or Soft Gray text on white at small sizes.
- Don't add borders and shadows together on the same card.
- Don't decorate the Hook Card beyond the accent bar.
