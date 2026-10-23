/** Uneek Academy — Tailwind theme (see docs/uneek-academy-style-guide.md) */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        text: 'var(--text)',
        mist: 'var(--mist)',
        line: 'var(--line)',
        muted: 'var(--muted)',
        soft: 'var(--soft)',
        primary: {
          DEFAULT: 'var(--primary)',
          deep: 'var(--primary-deep)',
          tint: 'var(--primary-tint)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          tint: 'var(--accent-tint)',
        },
        mint: {
          DEFAULT: '#12B886',
          tint: '#E3F8F0',
        },
        coral: {
          DEFAULT: '#F25C54',
          tint: '#FDECEB',
        },
        // Month / course accents (constant across themes)
        indigo: { DEFAULT: '#4F46E5', deep: '#3F37C9', tint: '#ECEBFE' },
        violet: '#8B5CF6',
        teal: '#14B8A6',
        sky: '#0EA5E9',
        orange: '#FF7A45',
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        input: '12px',
      },
      boxShadow: {
        'shadow-sm': '0 1px 2px rgba(15,18,38,.06)',
        'shadow-md': '0 8px 24px rgba(15,18,38,.08)',
      },
      maxWidth: {
        container: '1280px',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
