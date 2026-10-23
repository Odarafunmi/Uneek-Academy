'use client';

import { AuthModal } from './auth';

/** Mounts global client UI (auth pop-up) on every page. */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AuthModal />
    </>
  );
}
