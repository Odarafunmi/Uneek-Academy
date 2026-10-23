'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { libraryArticles, KIND_LABELS, KIND_COLORS } from '@/content/resources';
import { useApp } from '@/lib/store';
import { SectionLabel, PillTag } from '@/components/ui';
import { Arrow } from '@/components/ui';
import { BookOpen, FileText, Newspaper } from 'lucide-react';

const KIND_ICON = {
  blog: <Newspaper size={14} />,
  paper: <FileText size={14} />,
  guide: <BookOpen size={14} />,
};

/** tiny renderer for **bold** inside article paragraphs */
function Bold({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} style={{ fontWeight: 700 }}>
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

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

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 t-label"
          style={{
            background: KIND_COLORS[article.kind].text,
            color: '#fff',
            fontWeight: 600,
          }}
        >
          {KIND_ICON[article.kind]}
          {KIND_LABELS[article.kind]}
        </span>
        <span className="t-label" style={{ color: 'var(--soft)' }}>
          · {article.minutes} min read
        </span>
      </div>

      <h1 className="t-h1 mt-3">{article.title}</h1>
      <p className="t-body mt-3" style={{ color: 'var(--muted)' }}>
        {article.authors ? `${article.authors} · ` : ''}
        {article.source} · {article.date}
        {article.authorName ? ` · ${article.authorName}` : ''}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {article.tags.map((t) => (
          <PillTag key={t} tone="line">
            {t}
          </PillTag>
        ))}
        {article.link && (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="t-label link-slide inline-flex items-center gap-1"
            style={{ color: KIND_COLORS[article.kind].text, fontWeight: 600 }}
          >
            {article.kind === 'blog' ? 'Further reading ↗' : 'View source ↗'}
          </a>
        )}
      </div>

      <p
        className="t-body-l mt-8 rounded-card p-5"
        style={{
          background: 'var(--mist)',
          color: 'var(--text)',
          borderLeft: `4px solid ${KIND_COLORS[article.kind].text}`,
        }}
      >
        {article.excerpt}
      </p>

      <div className="mt-8 space-y-5">
        {article.body.map((p, i) =>
          p.startsWith('## ') ? (
            <h2 key={i} className="t-h3 pt-3" style={{ color: KIND_COLORS[article.kind].text }}>
              {p.slice(3)}
            </h2>
          ) : (
            <p key={i} className="t-body-l" style={{ lineHeight: 1.75 }}>
              <Bold text={p} />
            </p>
          ),
        )}
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
