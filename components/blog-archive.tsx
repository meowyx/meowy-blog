"use client"

import { Fragment, useMemo, useState } from "react"
import type { BlogEntry } from "@/lib/blog-data"

type SortMode = "newest" | "oldest"

function Highlighted({ text, q }: { text: string; q: string }) {
  if (!q) return <>{text}</>
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const parts = text.split(new RegExp(`(${escaped})`, "ig"))
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i % 2 === 1 ? <mark>{part}</mark> : part}
        </Fragment>
      ))}
    </>
  )
}

export function BlogArchive({ entries }: { entries: BlogEntry[] }) {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortMode>("newest")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const tagCounts = useMemo(() => {
    const c: Record<string, number> = {}
    entries.forEach((e) => e.tags.forEach((t) => (c[t] = (c[t] || 0) + 1)))
    return c
  }, [entries])

  const tagsSorted = useMemo(
    () =>
      Object.keys(tagCounts).sort(
        (a, b) => tagCounts[b] - tagCounts[a] || a.localeCompare(b)
      ),
    [tagCounts]
  )

  const rows = useMemo(() => {
    let r = entries.slice()
    if (activeTag) r = r.filter((p) => p.tags.includes(activeTag))
    const q = query.trim().toLowerCase()
    if (q) {
      r = r.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    r.sort((a, b) => {
      if (sort === "oldest") return a.date.localeCompare(b.date)
      return b.date.localeCompare(a.date)
    })
    return r
  }, [entries, activeTag, query, sort])

  const q = query.trim().toLowerCase()

  return (
    <>
      <div className="archive-toolbar">
        <label className={`search-box ${query ? "has-value" : ""}`}>
          <span className="ico">⌕</span>
          <input
            type="search"
            placeholder="search titles or topics…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button
            className="clear"
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            clear
          </button>
        </label>
        <div className="sort-box">
          sort
          <select value={sort} onChange={(e) => setSort(e.target.value as SortMode)}>
            <option value="newest">newest first</option>
            <option value="oldest">oldest first</option>
          </select>
        </div>
      </div>

      <div className="filter-chips">
        <button
          className="chip"
          type="button"
          aria-pressed={activeTag === null}
          onClick={() => setActiveTag(null)}
        >
          all <span className="n">{entries.length}</span>
        </button>
        {tagsSorted.map((t) => (
          <button
            key={t}
            className="chip"
            type="button"
            aria-pressed={activeTag === t}
            onClick={() => setActiveTag(t)}
          >
            {t} <span className="n">{tagCounts[t]}</span>
          </button>
        ))}
      </div>

      <ul className="posts">
        {rows.map((p) => (
          <li key={p.url + p.title}>
            <a href={p.url} className="post-row">
              <span className="date">{p.date}</span>
              <span className="title">
                <Highlighted text={p.title} q={q} />
                {p.tags[0] && <span className="tag">{p.tags[0]}</span>}
              </span>
              <span className="where">on <b>{p.publication}</b></span>
              <span className="ext">read →</span>
            </a>
          </li>
        ))}
      </ul>

      {rows.length === 0 && (
        <div className="empty">
          nothing matches{" "}
          <mark>{q ? `"${q}"` : "these filters"}</mark>. try a different word, or clear filters.
        </div>
      )}
    </>
  )
}
