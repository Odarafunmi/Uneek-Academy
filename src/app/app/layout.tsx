'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/illustrations';
import { StreakChip } from '@/components/ui';
import { ThemeToggle } from '@/components/theme';
import { useApp } from '@/lib/store';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/app', label: 'Home' },
  { href: '/app/courses/psychology', label: 'Courses' },
  { href: '/app/history', label: 'History' },
  { href: '/app/profile', label: 'Profile' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const streak = useApp((s) => s.streak);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <header className="sticky top-0 z-40 border-b border-line" style={{ background: 'var(--bg)' }}>
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/app" aria-label="Academy home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => {
              const active =
                l.href === '/app' ? pathname === '/app' : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-4 py-2 t-label tr-micro"
                  style={{
                    background: active ? 'var(--primary-tint)' : 'transparent',
                    color: active ? 'var(--primary)' : 'var(--muted)',
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            {mounted && <StreakChip days={streak.current} />}
            <ThemeToggle />
          </div>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto px-4 pb-3 md:hidden">
          {navLinks.map((l) => {
            const active =
              l.href === '/app' ? pathname === '/app' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded-full px-3.5 py-1.5 t-label"
                style={{
                  background: active ? 'var(--primary-tint)' : 'transparent',
                  color: active ? 'var(--primary)' : 'var(--muted)',
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="container-x py-10">{children}</main>
    </div>
  );
}
