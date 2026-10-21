'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo, Illustration } from './illustrations';
import { SectionLabel, TwoToneHeadline, DashMarker, Arrow } from './ui';
import { psychology, comingSoon } from '@/lib/courses';

/* ============ NAV ============ */

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#about', label: 'About' },
    { href: '#courses', label: 'Courses' },
    { href: '#how', label: 'How It Works' },
    { href: '/app', label: 'Academy' },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between py-6">
        <Link href="/" aria-label="Uneek Academy home">
          <Logo light />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="t-label text-white/90 transition-opacity hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/app" className="btn btn-white">
            Get Started
          </Link>
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
            <a key={l.label} href={l.href} className="t-body-l text-white" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link href="/app" className="btn btn-white w-fit" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */

export function Hero() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden md:min-h-[820px]">
      <img
        src="/images/hero.jpg"
        alt="A learner studying at a sunlit desk"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,18,38,.82) 0%, rgba(15,18,38,.45) 38%, rgba(15,18,38,0) 68%)',
        }}
      />
      <div className="container-x relative flex min-h-[720px] flex-col justify-end pb-16 pt-32 md:min-h-[820px] md:pb-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <DashMarker />
            <h1 className="t-display text-white">
              Because Learning
              <br />
              Shouldn’t Be Boring
            </h1>
            <p className="t-body-l mt-6 max-w-md text-white/85">
              Short daily lessons, real psychological insight, and a rhythm you can
              actually keep. One small step a day — visibly tracked.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/app" className="btn btn-white">
              Start Course <Arrow />
            </Link>
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
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel>About us</SectionLabel>
          </div>
          <div className="md:col-span-9">
            <h2 className="t-h2 max-w-3xl">
              This platform transforms learning with{' '}
              <span style={{ color: 'var(--primary)' }}>expert guidance</span> and
              community support for flexible education.
            </h2>
          </div>
        </div>

        {/* Stat band: photo + Mist / Indigo / Amber blocks */}
        <div className="mt-16 grid overflow-hidden md:grid-cols-2">
          <div className="min-h-[320px]">
            <img
              src="/images/about.jpg"
              alt="A learner in an online class"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <StatBlock
              bg="var(--mist)"
              fg="var(--ink)"
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
    <div className="flex flex-col gap-4 p-8 md:flex-row md:items-start md:gap-10 md:p-10" style={{ background: bg, color: fg }}>
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

/* ============ COURSES ============ */

export function CoursesSection() {
  return (
    <section id="courses" className="section-pad">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel>Courses</SectionLabel>
          <TwoToneHeadline line1="Courses That" line2="Open Your Future" />
          <p className="t-body mt-6" style={{ color: 'var(--muted)' }}>
            Explore skills from psychology to personal growth — each program paced
            one small lesson at a time, with exercises that make it stick.
          </p>
          <Link href="/app" className="btn btn-ghost mt-8">
            Learn more
          </Link>
        </div>
        <div className="md:col-span-8">
          <CourseRow
            title={psychology.title}
            meta="26 weeks · 130 lessons · Beginner to advanced"
            desc={psychology.tagline}
            status="Enrolling now"
            href="/app/courses/psychology"
          />
          {comingSoon.map((c) => (
            <CourseRow
              key={c.slug}
              title={c.title}
              meta={`${c.totalWeeks} weeks · ${Math.round(c.totalDays * 0.72)} lessons · ${c.level}`}
              desc={c.tagline}
              status="Coming soon"
              href="/app"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseRow({
  title,
  meta,
  desc,
  status,
  href,
}: {
  title: string;
  meta: string;
  desc: string;
  status: string;
  href: string;
}) {
  return (
    <div className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h3 className="t-h4">{title}</h3>
          <p className="t-small mt-1.5" style={{ color: 'var(--muted)' }}>
            {meta}
          </p>
          <p className="t-body mt-3">{desc}</p>
        </div>
        <div className="flex items-center gap-5">
          <span className="t-label whitespace-nowrap" style={{ color: 'var(--muted)' }}>
            {status}
          </span>
          <Link href={href} className="btn btn-primary">
            {status === 'Enrolling now' ? 'Enroll' : 'Notify me'} <Arrow />
          </Link>
        </div>
      </div>
    </div>
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
    <section className="section-pad">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>Mentor</SectionLabel>
            <TwoToneHeadline line1="Learn From" line2="Experienced Mentors" />
          </div>
          <div className="md:col-span-5 md:pt-20">
            <p className="t-body" style={{ color: 'var(--muted)' }}>
              Mentors are industry experts and guides who bring real-world experience
              into every lesson — so what you learn works outside the screen.
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {mentors.map((m) => (
            <figure key={m.name} className="group relative bg-bg">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role}`}
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="p-5">
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
  return (
    <section style={{ background: 'var(--ink)' }}>
      <div className="container-x flex flex-col items-start gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <p className="t-body-l max-w-3xl text-white">
          Interactive lessons and real projects build your knowledge and confidence.
          Start small, go at your pace, and watch your progress grow.
        </p>
        <Link href="/app" className="btn btn-white shrink-0">
          Start today
        </Link>
      </div>
    </section>
  );
}

/* ============ HOW IT WORKS ============ */

export function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionLabel>How It Works</SectionLabel>
          <TwoToneHeadline line1="How You’ll" line2="Learn With Us" />
          <ul className="mt-8 space-y-5">
            {[
              ['Browse the library', 'Choose a course that fits your goal — psychology is live now, with more on the way.'],
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
          <Link href="/app" className="btn btn-primary mt-9">
            Start Course <Arrow />
          </Link>
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
        <SectionLabel>Testimonials</SectionLabel>
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
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <Illustration name="hook" size={220} />
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full tr-micro hover:opacity-80"
                style={{ background: 'var(--primary)', color: '#fff' }}
                aria-label="Subscribe"
              >
                <Arrow />
              </button>
            </div>
            <p className="t-small mt-3" style={{ color: done ? 'var(--success)' : 'var(--muted)' }}>
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
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
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
                    <a href="#" className="t-small transition-opacity hover:opacity-70" style={{ color: '#A3A8C7' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t pt-8" style={{ borderColor: 'rgba(163,168,199,.2)' }}>
          <p className="t-small" style={{ color: 'rgba(163,168,199,.6)' }}>
            © 2026 Uneek Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
