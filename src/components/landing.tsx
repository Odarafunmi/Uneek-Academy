'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './illustrations';
import { SectionLabel, TwoToneHeadline, DashMarker, Arrow } from './ui';
import { useEngage } from './auth';
import { allCourses } from '@/lib/courses';
import type { CourseConfig } from '@/lib/types';

/* ============ NAV ============ */

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const engage = useEngage();
  const links = [
    { href: '#about', label: 'About' },
    { href: '#courses', label: 'Courses' },
    { href: '#how', label: 'How It Works' },
    { href: '#mentors', label: 'Mentors' },
  ];
  return (
    <header className="nav-frost-dark sticky top-0 z-[1000]">
      <div className="container-x flex items-center justify-between py-5 md:py-6">
        <Link href="/" aria-label="Uneek Academy home">
          <Logo light />
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link t-label text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <button className="btn btn-white" onClick={() => engage({ kind: 'navigate', href: '/app' })}>
            Get Started
          </button>
        </div>
        <button
          className="t-label text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="container-x flex flex-col gap-4 pb-6 md:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link t-body-l text-white/85 hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            className="btn btn-white w-fit"
            onClick={() => {
              setOpen(false);
              engage({ kind: 'navigate', href: '/app' });
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */

export function Hero() {
  const engage = useEngage();
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden sm:min-h-[720px] md:min-h-[820px]">
      <img
        src="/images/hero.jpg"
        alt="A learner studying at a sunlit desk"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,18,38,.85) 0%, rgba(15,18,38,.45) 38%, rgba(15,18,38,0) 68%)',
        }}
      />
      <div className="container-x relative flex min-h-[640px] flex-col justify-end pb-12 pt-16 sm:min-h-[720px] md:min-h-[820px] md:pb-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <DashMarker />
            <h1 className="t-display text-white">
              Because Learning
              <br />
              Shouldn’t Be Boring
            </h1>
            <p className="t-body-l mt-5 max-w-md text-white/85 md:mt-6">
              Short daily lessons, real psychological insight, and a rhythm you can
              actually keep. One small step a day — visibly tracked.
            </p>
          </div>
          <div className="shrink-0">
            <button
              className="btn btn-white"
              onClick={() => engage({ kind: 'enroll', slug: 'psychology' })}
            >
              Start Course <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT + STAT BAND ============ */

export function AboutStats() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <SectionLabel>About us</SectionLabel>
          </div>
          <div className="md:col-span-9">
            <h2 className="t-h2 max-w-3xl">
              This platform transforms learning with{' '}
              <span style={{ color: 'var(--sky-text)' }}>expert guidance</span> and
              community support for flexible education.
            </h2>
          </div>
        </div>

        {/* Stat band: photo + Mist / Indigo / Amber blocks */}
        <div className="mt-12 grid overflow-hidden md:mt-16 md:grid-cols-2">
          <div className="min-h-[240px] sm:min-h-[320px]">
            <img
              src="/images/about.jpg"
              alt="A learner in an online class"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            {/* Mist block: text must follow the theme (--text), not fixed ink,
                otherwise dark mode renders deep-navy on black */}
            <StatBlock
              bg="var(--mist)"
              fg="var(--text)"
              num="97%"
              label="Learner satisfaction rate"
              text="Most of our learners say the experience is engaging, effective, and genuinely worth their time."
            />
            <StatBlock
              bg="#4F46E5"
              fg="#fff"
              num="130+"
              label="Guided lessons per course"
              text="Each course is a structured program of short lessons, exercises, and weekly reviews — not a playlist."
            />
            <StatBlock
              bg="#FFB020"
              fg="#0F1226"
              num="5 min"
              label="A day is all it takes"
              text="Lessons are small enough to finish before your coffee cools — with a streak that keeps you coming back."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  bg,
  fg,
  num,
  label,
  text,
}: {
  bg: string;
  fg: string;
  num: string;
  label: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-3 p-7 sm:gap-4 md:flex-row md:items-start md:gap-10 md:p-10" style={{ background: bg, color: fg }}>
      <div className="md:w-40">
        <div className="t-stat">{num}</div>
        <div className="t-small mt-1" style={{ opacity: 0.85 }}>
          {label}
        </div>
      </div>
      <p className="t-small md:pt-3" style={{ opacity: 0.92 }}>
        {text}
      </p>
    </div>
  );
}

/* ============ COURSES (overview cards with photography) ============ */

export function CoursesSection() {
  const engage = useEngage();
  return (
    <section id="courses" className="section-pad">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <SectionLabel color="var(--cat-blog)">Courses</SectionLabel>
            <TwoToneHeadline
              line1="Courses That"
              line2="Open Your Future"
              highlight="Future"
              accentColor="var(--cat-blog)"
            />
          </div>
          <div className="md:col-span-8 md:pt-2">
            <p className="t-body-l max-w-2xl" style={{ color: 'var(--muted)' }}>
              Structured daily programs — each one paced a single small lesson at a
              time, with exercises, weekly reviews, and shareable takeaways. Browse
              the overviews below; create your profile when you are ready to start.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {allCourses.map((c) => (
            <CourseOverviewCard
              key={c.slug}
              course={c}
              highlights={
                c.slug === 'psychology'
                  ? c.months.map((m) => m.title)
                  : c.months.map((m) => m.topics.split(',')[0])
              }
              cta={c.status === 'live' ? 'Enroll now' : 'Join the waitlist'}
              onCta={() =>
                c.status === 'live'
                  ? engage({ kind: 'enroll', slug: c.slug })
                  : engage({ kind: 'navigate', href: '/app' })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseOverviewCard({
  course,
  highlights,
  cta,
  onCta,
}: {
  course: CourseConfig;
  highlights: string[];
  cta: string;
  onCta: () => void;
}) {
  const live = course.status === 'live';
  const accent = course.months[0]?.accent ?? '#4F46E5';
  return (
    <article className="flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={course.coverImage}
          alt={course.title}
          className="zoom-on-hover aspect-[4/3] w-full object-cover"
        />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1.5 t-label"
          style={{
            background: live ? accent : '#0F1226',
            color: '#fff',
            fontWeight: 600,
            textShadow: '0 1px 2px rgba(15,18,38,.3)',
          }}
        >
          {live ? 'Enrolling now' : 'Coming soon'}
        </span>
      </div>
      <h3 className="t-h4 mt-5">{course.title}</h3>
      <p className="t-small mt-1.5" style={{ color: 'var(--muted)' }}>
        {course.totalWeeks} weeks · {course.level}
      </p>
      <p className="t-body mt-3">{course.tagline}</p>
      <ul className="mt-4 space-y-2 border-t border-line pt-4">
        {highlights.slice(0, 4).map((h) => (
          <li key={h} className="flex gap-2.5 t-small" style={{ color: 'var(--muted)' }}>
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button className="btn btn-primary w-full sm:w-auto" onClick={onCta}>
          {cta} <Arrow />
        </button>
      </div>
    </article>
  );
}

/* ============ MENTORS ============ */

const mentors = [
  { img: '/images/mentor-1.jpg', name: 'Adaeze Okoro', role: 'Cognitive Psychology' },
  { img: '/images/mentor-2.jpg', name: 'Daniel Reid', role: 'Behavioural Science' },
  { img: '/images/mentor-3.jpg', name: 'Priya Sharma', role: 'Communication & Rapport' },
  { img: '/images/mentor-4.jpg', name: 'Marcus Bell', role: 'Decision-Making' },
];

export function MentorsSection() {
  return (
    <section id="mentors" className="section-pad">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <SectionLabel color="var(--success-text)">Mentor</SectionLabel>
            <TwoToneHeadline
              line1="Learn From"
              line2="Experienced Mentors"
              highlight="Mentors"
              accentColor="var(--success-text)"
            />
          </div>
          <div className="md:col-span-5 md:pt-16 lg:pt-20">
            <p className="t-body" style={{ color: 'var(--muted)' }}>
              Mentors are industry experts and guides who bring real-world experience
              into every lesson — so what you learn works outside the screen.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-px bg-line md:mt-14 md:grid-cols-4">
          {mentors.map((m) => (
            <figure key={m.name} className="group relative bg-bg">
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role}`}
                  className="zoom-on-hover aspect-[3/4] w-full object-cover"
                />
              </div>
              <figcaption className="p-4 sm:p-5">
                <div className="t-h4">{m.name}</div>
                <div className="t-small mt-0.5" style={{ color: 'var(--muted)' }}>
                  {m.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DARK STATEMENT BAND ============ */

export function StatementBand() {
  const engage = useEngage();
  return (
    <section style={{ background: 'var(--ink)' }}>
      <div className="container-x flex flex-col items-start gap-7 py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:py-16">
        <p className="t-body-l max-w-3xl text-white">
          Interactive lessons and real projects build your knowledge and confidence.
          Start small, go at your pace, and watch your progress grow.
        </p>
        <button
          className="btn btn-white shrink-0"
          onClick={() => engage({ kind: 'enroll', slug: 'psychology' })}
        >
          Start today
        </button>
      </div>
    </section>
  );
}

/* ============ HOW IT WORKS ============ */

export function HowItWorks() {
  const engage = useEngage();
  return (
    <section id="how" className="section-pad">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <SectionLabel color="var(--primary)">How It Works</SectionLabel>
          <TwoToneHeadline
            line1="How You’ll"
            line2="Learn With Us"
            highlight="Learn"
            accentColor="var(--primary)"
          />
          <ul className="mt-8 space-y-5">
            {[
              ['Browse the library', 'Choose a course that fits your goal — psychology and networking are live now, with more on the way.'],
              ['Create your profile', 'Sign up once in this browser — your streak, XP, and progress stay with you.'],
              ['Learn one day at a time', 'Access lessons anywhere. Flexible schedules and small steps keep you consistent.'],
              ['Apply what you learn', 'Exercises, weekly reviews, and shareable hook cards turn insight into habit.'],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--primary)' }} />
                <div>
                  <div className="t-h4">{t}</div>
                  <p className="t-body mt-1" style={{ color: 'var(--muted)' }}>
                    {d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary mt-8 md:mt-9"
            onClick={() => engage({ kind: 'enroll', slug: 'psychology' })}
          >
            Start Course <Arrow />
          </button>
        </div>
        <div>
          <img
            src="/images/learn-3.jpg"
            alt="Two learners studying together"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIAL ============ */

const testimonials = [
  {
    quote:
      'I never thought online learning could feel this calm. The lessons are clear, practical, and short enough that I actually finish them — and the weekly reviews make it stick.',
    name: 'Nadiya Nakahara',
    role: 'Psychology learner',
  },
  {
    quote:
      'The hook cards changed how I reflect. One idea a day, written in my own words — my notes have never been this useful.',
    name: 'Tobi Adeyemi',
    role: 'Product designer',
  },
  {
    quote:
      'It respects my time and my attention. Five minutes a day, and three weeks later I was catching my own thought patterns in meetings.',
    name: 'Hannah Osei',
    role: 'Team lead',
  },
];

export function TestimonialSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="section-pad">
      <div className="container-x max-w-3xl text-center">
        <SectionLabel color="var(--danger-text)">Testimonials</SectionLabel>
        <blockquote className="t-h3 font-light">
          “{t.quote}”
        </blockquote>
        <div className="mt-8">
          <div style={{ fontWeight: 600 }}>{t.name}</div>
          <div className="t-small" style={{ color: 'var(--muted)' }}>
            {t.role}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className="h-[3px] rounded-full tr-standard"
              style={{
                width: idx === i ? 28 : 16,
                background: idx === i ? 'var(--primary)' : 'var(--line)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PHOTO MOSAIC ============ */

export function Mosaic() {
  return (
    <section aria-label="Learners around the world">
      <div className="grid grid-cols-2 gap-px">
        {[
          { src: '/images/learn-1.jpg', alt: 'Study group laughing over laptops' },
          { src: '/images/learn-2.jpg', alt: 'Learner taking an online class at a cafe' },
          { src: '/images/learn-4.jpg', alt: 'Friends studying together in a library' },
          { src: '/images/about.jpg', alt: 'Learner in a virtual classroom' },
        ].map((p) => (
          <img key={p.src + p.alt} src={p.src} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
        ))}
      </div>
    </section>
  );
}

/* ============ NEWSLETTER ============ */

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <section className="section-pad">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex justify-center">
          <img
            src="/images/course-communication.jpg"
            alt="A learner sharing an idea with colleagues"
            className="aspect-[4/3] w-full max-w-md object-cover"
          />
        </div>
        <div>
          <h2 className="t-h2">
            Subscribe to learn what
            <br />
            we can do for you!
          </h2>
          <form
            className="mt-8 max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div className="flex items-center gap-3 border-b border-line pb-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="t-body w-full bg-transparent outline-none placeholder:text-soft"
                style={{ color: 'var(--text)' }}
              />
              <button
                type="submit"
                className="icon-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--primary)', color: 'var(--on-primary)' }}
                aria-label="Subscribe"
              >
                <Arrow />
              </button>
            </div>
            <p className="t-small mt-3" style={{ color: done ? '#12B886' : 'var(--muted)' }}>
              {done
                ? 'You’re on the list. Welcome to Uneek Academy.'
                : 'One thoughtful email a week. No noise.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */

const footerCols: { title: string; links: string[] }[] = [
  { title: 'Explore', links: ['Courses', 'Pricing', 'Community', 'Events', 'How It Works'] },
  { title: 'Resources', links: ['Blog & Articles', 'Case Studies', 'Guides & Tutorials', 'Success Stories'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Partnerships', 'Contact Us'] },
  { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'] },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)' }}>
      <div className="container-x py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <Logo light />
            <div className="t-small mt-6 space-y-1" style={{ color: '#A3A8C7' }}>
              <div>Ikeja, Lagos, Nigeria</div>
              <div>hello@uneekacademy.com</div>
              <div>+234 800 000 0000</div>
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="t-label text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="t-small tr-micro hover:text-white" style={{ color: '#A3A8C7' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 md:mt-14" style={{ borderColor: 'rgba(163,168,199,.2)' }}>
          <p className="t-small" style={{ color: 'rgba(163,168,199,.6)' }}>
            © 2026 Uneek Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
