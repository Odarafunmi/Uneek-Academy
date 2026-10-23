'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/illustrations';
import { StreakChip } from '@/components/ui';
import { ThemeToggle } from '@/components/theme';
import { MentorChat } from '@/components/mentor-chat';
import { useApp } from '@/lib/store';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

/** All section links live in the hamburger menu — the bar itself stays minimal. */
const menuLinks = [
  { href: '/app', label: 'Room' },
  { href: '/app/courses/psychology', label: 'Courses' },
  { href: '/app/assessment', label: 'Knowledge Test' },
  { href: '/app/resources', label: 'Library' },
  { href: '/app/history', label: 'History' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { streak, account, hydrated, signOut } = useApp();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);

  // Profile gate: engaging with courses requires a local profile.
  useEffect(() => {
    if (hydrated && !account) {
      router.replace(`/auth?next=${encodeURIComponent(pathname)}`);
    }
  }, [hydrated, account, pathname, router]);

  // close the menu on navigation / outside click / Escape
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

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
        <div className="container-x flex h-16 items-center justify-between gap-2">
          <Link href="/app" aria-label="Academy home" className="shrink-0">
            <Logo />
          </Link>

          {/* minimal bar: streak · theme · profile · hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && <StreakChip days={streak.current} />}
            <ThemeToggle />
            <button
              onClick={() => router.push('/app/profile')}
              className="flex h-9 items-center gap-2 rounded-full border border-line px-2 t-label text-muted tr-micro hover:border-primary hover:text-text"
              aria-label={`Open profile for ${account.name}`}
              title="Profile"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-white"
                style={{ background: 'var(--primary)', fontSize: 11, fontWeight: 700 }}
                aria-hidden="true"
              >
                {account.name.trim().charAt(0).toUpperCase()}
              </span>
              <span className="hidden max-w-[90px] truncate sm:inline">{account.name}</span>
            </button>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line tr-micro hover:border-primary"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>

              {menuOpen && (
                <nav
                  className="nav-frost absolute right-0 top-11 w-56 overflow-hidden rounded-card border border-line shadow-md"
                  aria-label="Sections"
                >
                  {menuLinks.map((l) => {
                    const active =
                      l.href === '/app' ? pathname === '/app' : pathname.startsWith(l.href);
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`app-nav-link mx-2 my-1 flex items-center justify-between px-3.5 py-2.5 t-label ${active ? 'active' : ''}`}
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                  <button
                    onClick={() => {
                      if (confirm('Sign out of this device? Your local progress stays saved.')) {
                        signOut();
                        router.push('/');
                      }
                    }}
                    className="mx-2 my-1 flex w-[calc(100%-1rem)] items-center px-3.5 py-2.5 t-label tr-micro"
                    style={{ color: 'var(--muted)' }}
                  >
                    Sign out
                  </button>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="container-x py-8 md:py-10">{children}</main>
      <MentorChat />
    </div>
  );
}
