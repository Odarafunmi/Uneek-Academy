import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uneek Academy — Because Learning Shouldn’t Be Boring',
  description:
    'Short daily lessons, real psychological insight, and a rhythm you can actually keep. Uneek Academy is a multi-course learning platform built for short attention spans.',
};

export const viewport: Viewport = {
  themeColor: '#0F1226',
  width: 'device-width',
  initialScale: 1,
};

const themeInit = `
try {
  var t = JSON.parse(localStorage.getItem('uneek-academy-v1') || '{}');
  var pref = (t && t.state && t.state.theme) || 'system';
  var dark = pref === 'dark' || (pref === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
