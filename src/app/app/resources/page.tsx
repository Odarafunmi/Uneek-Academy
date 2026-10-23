'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { KIND_LABELS, KIND_COUNTS, KIND_COLORS, libraryArticles } from '@/content/resources';
import { useApp } from '@/lib/store';
import { canDeleteArticle, canEditArticle, canManageContent } from '@/lib/rbac';
import { SectionLabel, PillTag } from '@/components/ui';
import { BookOpen, FileText, Newspaper, PenLine, Trash2, X } from 'lucide-react';
import type { Article, ArticleKind } from '@/lib/types';

const FILTERS: { id: 'all' | ArticleKind; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'blog', label: 'Blogs & articles' },
  { id: 'paper', label: 'Research papers' },
  { id: 'guide', label: 'Study guides' },
];

const KIND_ICON: Record<ArticleKind, React.ReactNode> = {
  blog: <Newspaper size={15} />,
  paper: <FileText size={15} />,
  guide: <BookOpen size={15} />,
};

function ArticleCard({ a, children }: { a: Article; children?: React.ReactNode }) {
  const c = KIND_COLORS[a.kind];
  return (
    <article
      className="cat-hover flex flex-col rounded-card border border-line p-6"
      style={{ ['--card-accent' as string]: c.text }}
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full tr-micro"
          style={{ background: c.text, color: c.tint }}
          aria-hidden="true"
        >
          {KIND_ICON[a.kind]}
        </span>
        <span className="t-label" style={{ color: c.text, fontWeight: 600 }}>
          {KIND_LABELS[a.kind]}
        </span>
        <span className="t-label" style={{ color: 'var(--soft)' }}>
          · {a.minutes} min read
        </span>
      </div>
      <h3 className="t-h3 mt-3">{a.title}</h3>
      <p className="t-label mt-1" style={{ color: 'var(--muted)' }}>
        {a.authors ? `${a.authors} · ` : ''}
        {a.source} · {a.date}
      </p>
      <p className="t-body mt-3 flex-1" style={{ color: 'var(--muted)' }}>
        {a.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <Link
          href={`/app/resources/${a.slug}`}
          className="t-label link-slide inline-flex items-center gap-1"
          style={{ color: c.text, fontWeight: 600 }}
        >
          Read <span aria-hidden="true">→</span>
        </Link>
        <div className="flex items-center gap-2">
          {a.link && (
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="t-label tr-micro"
              style={{ color: 'var(--muted)' }}
            >
              Source ↗
            </a>
          )}
          {children}
        </div>
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  const { account, customArticles, deleteArticle, publishArticle } = useApp();
  const role = account?.role;
  const isAdmin = canManageContent(role);

  const [filter, setFilter] = useState<'all' | ArticleKind>('all');
  const [q, setQ] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const [form, setForm] = useState({ title: '', kind: 'blog' as ArticleKind, source: '', excerpt: '', body: '', tags: '' });
  const [error, setError] = useState<string | null>(null);

  const all = useMemo(
    () => [...customArticles, ...libraryArticles],
    [customArticles],
  );
  const visible = all.filter(
    (a) =>
      (filter === 'all' || a.kind === filter) &&
      (q.trim() === '' ||
        (a.title + a.excerpt + a.tags.join(' ') + a.source)
          .toLowerCase()
          .includes(q.toLowerCase())),
  );

  function submit() {
    const err = publishArticle({
      title: form.title.trim(),
      kind: form.kind,
      source: form.source.trim() || account?.name || 'Uneek Academy',
      date: new Date().toISOString().slice(0, 10),
      minutes: Math.max(2, Math.round(form.body.trim().split(/\s+/).length / 200)),
      excerpt: form.excerpt.trim() || form.body.trim().slice(0, 180) + '…',
      body: form.body
        .split(/\n{2,}|\n/)
        .map((p) => p.trim())
        .filter(Boolean),
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    });
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setEditorOpen(false);
    setForm({ title: '', kind: 'blog', source: '', excerpt: '', body: '', tags: '' });
  }

  return (
    <div>
      <SectionLabel>Academic resources</SectionLabel>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="t-h1">Library</h1>
          <p className="t-body-l mt-2" style={{ color: 'var(--muted)' }}>
            Blogs, research papers, and study guides that back your courses — curated
            reading, no fluff.
          </p>
        </div>
        {isAdmin && (
          <button className="btn btn-primary" onClick={() => setEditorOpen((o) => !o)}>
            <PenLine size={15} /> {editorOpen ? 'Close editor' : 'Publish content'}
          </button>
        )}
      </div>

      {/* admin publish panel */}
      {isAdmin && editorOpen && (
        <div className="mt-6 rounded-card border border-line p-6">
          <h2 className="t-h3">Publish to the library</h2>
          <p className="t-small mt-1" style={{ color: 'var(--muted)' }}>
            Admin-only. Role checks run through <code>lib/rbac.ts</code> — move them
            server-side unchanged when the backend lands.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              className="rounded-input border border-line px-3 py-2.5 t-body md:col-span-2"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <select
              className="rounded-input border border-line px-3 py-2.5 t-body"
              value={form.kind}
              onChange={(e) => setForm({ ...form, kind: e.target.value as ArticleKind })}
              aria-label="Content kind"
            >
              <option value="blog">Blog</option>
              <option value="paper">Research paper</option>
              <option value="guide">Study guide</option>
            </select>
            <input
              className="rounded-input border border-line px-3 py-2.5 t-body"
              placeholder="Source / publication (optional)"
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
            />
            <textarea
              className="rounded-input border border-line px-3 py-2.5 t-body md:col-span-2"
              rows={2}
              placeholder="Excerpt (shown on the card)"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            />
            <textarea
              className="rounded-input border border-line px-3 py-2.5 t-body md:col-span-2"
              rows={8}
              placeholder="Body — one paragraph per line"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
            <input
              className="rounded-input border border-line px-3 py-2.5 t-body md:col-span-2"
              placeholder="Tags, comma separated"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </div>
          {error && (
            <p className="t-small mt-3" style={{ color: 'var(--danger-text, #C2255C)' }}>
              {error}
            </p>
          )}
          <button className="btn btn-primary mt-4" onClick={submit}>
            Publish
          </button>
        </div>
      )}

      {/* filters */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          const c = f.id === 'all' ? null : KIND_COLORS[f.id];
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="tap rounded-full border px-4 py-2 t-label"
              style={{
                borderColor: active ? (c ? c.text : 'var(--primary)') : c ? c.text : 'var(--line)',
                background: active ? (c ? c.text : 'var(--primary)') : 'var(--bg)',
                color: active ? (c ? c.tint : 'var(--on-primary)') : c ? c.text : 'var(--text)',
                fontWeight: active ? 600 : 500,
              }}
              aria-pressed={active}
            >
              {f.label}
              {f.id !== 'all' && (
                <span> · {KIND_COUNTS[f.id] ?? 0}</span>
              )}
            </button>
          );
        })}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the library…"
          className="w-full rounded-full border border-line px-4 py-2 t-body sm:ml-auto sm:w-auto sm:max-w-xs"
          style={{ background: 'var(--bg)', color: 'var(--text)' }}
          aria-label="Search articles"
        />
      </div>

      {/* grid — remounts (and re-animates) when the category changes */}
      <div key={filter} className="animate-fade-up mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((a) => (
          <ArticleCard key={a.id} a={a}>
            {a.custom && (
              <div className="flex items-center gap-2">
                <PillTag tone="line">{a.authorName ?? 'Admin'}</PillTag>
                {account &&
                  canEditArticle(role, { authorEmail: (a as { authorEmail?: string }).authorEmail }, account.email) && (
                    <button
                      className="t-label tap"
                      style={{ color: 'var(--muted)' }}
                      onClick={() => {
                        // inline quick-fix: republish a corrected copy via the editor
                        setForm({
                          title: a.title,
                          kind: a.kind,
                          source: a.source,
                          excerpt: a.excerpt,
                          body: a.body.join('\n'),
                          tags: a.tags.join(', '),
                        });
                        setEditorOpen(true);
                      }}
                      aria-label={`Edit ${a.title}`}
                    >
                      <PenLine size={13} />
                    </button>
                  )}
                {account &&
                  canDeleteArticle(role, { authorEmail: (a as { authorEmail?: string }).authorEmail }, account.email) && (
                    <button
                      className="t-label tr-micro"
                      style={{ color: 'var(--danger-text, #C2255C)' }}
                      onClick={() => deleteArticle(a.id)}
                      aria-label={`Delete ${a.title}`}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
              </div>
            )}
          </ArticleCard>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="mt-10 rounded-card border border-line p-10 text-center">
          <p className="t-body-l">Nothing matches that search.</p>
          <button
            className="btn btn-ghost mt-4"
            onClick={() => {
              setQ('');
              setFilter('all');
            }}
          >
            <X size={15} /> Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
