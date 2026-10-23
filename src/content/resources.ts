import type { Article } from '@/lib/types';
import { libraryBlogs } from './library-blogs';
import { libraryPapers } from './library-papers';
import { libraryGuides } from './library-guides';

/**
 * Seeded academic library — blogs & articles, research-paper summaries, and
 * study guides. Admin-published items (store.customArticles) merge at render.
 */
export { libraryBlogs, libraryPapers, libraryGuides };

export const libraryArticles: Article[] = [
  ...libraryBlogs,
  ...libraryPapers,
  ...libraryGuides,
];

export function articleBySlug(slug: string): Article | undefined {
  return libraryArticles.find((a) => a.slug === slug);
}

export const KIND_LABELS: Record<Article['kind'], string> = {
  blog: 'Blog',
  paper: 'Research paper',
  guide: 'Study guide',
};

/** Distinct visual identity per library category (tokens defined in globals.css). */
export const KIND_COLORS: Record<Article['kind'], { text: string; tint: string; line: string }> = {
  blog: { text: 'var(--cat-blog)', tint: 'var(--cat-blog-tint)', line: 'var(--cat-blog-line)' },
  paper: { text: 'var(--cat-paper)', tint: 'var(--cat-paper-tint)', line: 'var(--cat-paper-line)' },
  guide: { text: 'var(--cat-guide)', tint: 'var(--cat-guide-tint)', line: 'var(--cat-guide-line)' },
};

export const KIND_COUNTS: Record<Article['kind'], number> = {
  blog: libraryBlogs.length,
  paper: libraryPapers.length,
  guide: libraryGuides.length,
};
