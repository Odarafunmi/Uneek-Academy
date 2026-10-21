'use client';

import { Suspense } from 'react';
import { AuthPageClient } from '@/components/auth';

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AuthPageClient />
    </Suspense>
  );
}
