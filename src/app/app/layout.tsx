'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/illustrations';
import { StreakChip } from '@/components/ui';
import { ThemeToggle } from '@/components/theme';
import { MentorChat } from '@/components/mentor-chat';
import { useApp } from '@/lib/store';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';

const navLinks = [
  { href: '/app', label: 'Home' },
  { href: '/app/courses/psychology', label: 'Courses' },
  { href: '/app/assessment', label: 'Knowledge Test' },
  { href: '/app/resources', label: 'Library' },
  { href: '/app/history', label: 'History' },
  { href: '/app/profile', label: 'Profile' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { streak, account, hydrated, signOut } = useApp();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Profile gate: engaging with courses requires a local profile.
  useEffect(() => {
    if (hydrated && !account) {
      router.replace(`/auth?next=${encodeURIComponent(pathname)}`);
    }
  }, [hydrated, account, pathname, router]);

  if (!mounted || !hydrated || !account) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: 'var(--bg)' }}>
        <p className="t-body" style={{ color: 'var(--muted)' }}>
          Checking your profile…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <header className="nav-frost sticky top-0 z-[1000] border-b border-line">
        <div className="container-x flex h-16 items-center justify-between gap-3">
          <Link href="/app" aria-label="Academy home" className="shrink-0">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const active =
                l.href === '/app' ? pathname === '/app' : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`app-nav-link px-4 py-2 t-label ${active ? 'active' : ''}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && <StreakChip days={streak.current} />}
            <ThemeToggle />
            <button
              onClick={() => {
                signOut();
                router.push('/');
              }}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 t-label text-muted hover:text-text hover:border-primary tr-micro"
              aria-label={`Sign out of ${account.name}`}
              title="Sign out"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto px-4 pb-3 lg:hidden">
          {navLinks.map((l) => {
            const active =
              l.href === '/app' ? pathname === '/app' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`app-nav-link whitespace-nowrap px-3.5 py-1.5 t-label ${active ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="container-x py-8 md:py-10">{children}</main>
      <MentorChat />
    </div>
  );
}
