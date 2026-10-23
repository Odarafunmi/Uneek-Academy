'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { libraryArticles, KIND_LABELS } from '@/content/resources';
import { useApp } from '@/lib/store';
import { SectionLabel, PillTag } from '@/components/ui';
import { Arrow } from '@/components/ui';
import { FileText } from 'lucide-react';

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const customArticles = useApp((s) => s.customArticles);

  const article =
    customArticles.find((a) => a.slug === slug) ??
    libraryArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/app/resources"
        className="t-label inline-flex items-center gap-1.5 tr-micro"
        style={{ color: 'var(--muted)' }}
      >
        <Arrow size={14} /> <span>Back to library</span>
      </Link>

      <div className="mt-6 flex items-center gap-2">
        <span style={{ color: 'var(--primary)' }}>
          <FileText size={15} />
        </span>
        <SectionLabel>{KIND_LABELS[article.kind]}</SectionLabel>
        <span className="t-label" style={{ color: 'var(--soft)' }}>
          · {article.minutes} min read
        </span>
      </div>

      <h1 className="t-h1 mt-3">{article.title}</h1>
      <p className="t-body mt-3" style={{ color: 'var(--muted)' }}>
        {article.source} · {article.date}
        {article.authorName ? ` · ${article.authorName}` : ''}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {article.tags.map((t) => (
          <PillTag key={t} tone="line">
            {t}
          </PillTag>
        ))}
      </div>

      <p
        className="t-body-l mt-8 rounded-card p-5"
        style={{ background: 'var(--mist)', color: 'var(--ink)' }}
      >
        {article.excerpt}
      </p>

      <div className="mt-8 space-y-5">
        {article.body.map((p, i) => (
          <p key={i} className="t-body-l" style={{ lineHeight: 1.75 }}>
            {p}
          </p>
        ))}
      </div>

      {article.courseSlug && (
        <div className="mt-10 rounded-card border border-line p-6">
          <p className="t-label" style={{ color: 'var(--muted)' }}>
            Related course
          </p>
          <Link
            href={`/app/courses/${article.courseSlug}`}
            className="t-h3 mt-2 inline-flex items-center gap-2 tr-micro"
            style={{ color: 'var(--primary)' }}
          >
            Open the {article.courseSlug === 'psychology' ? 'Psychology' : 'Communication'} course{' '}
            <Arrow size={18} />
          </Link>
        </div>
      )}
    </article>
  );
}
