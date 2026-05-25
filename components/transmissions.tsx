"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import type { BlogEntry } from "@/lib/blog-data"

const pad2 = (n: number) => String(n).padStart(2, "0")
const pad3 = (n: number) => String(n).padStart(3, "0")

export function Transmissions({ entries }: { entries: BlogEntry[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const tagCounts = useMemo(() => {
    const c: Record<string, number> = {}
    entries.forEach((e) => e.tags.forEach((t) => (c[t] = (c[t] || 0) + 1)))
    return c
  }, [entries])

  const tags = useMemo(
    () =>
      Object.keys(tagCounts).sort(
        (a, b) => tagCounts[b] - tagCounts[a] || a.localeCompare(b)
      ),
    [tagCounts]
  )

  // Number entries by their position in the full newest-first list so the index
  // stays stable when a tag filter is applied.
  const numbered = useMemo(
    () => entries.map((e, i) => ({ ...e, idx: pad3(i + 1) })),
    [entries]
  )

  const rows = activeTag
    ? numbered.filter((e) => e.tags.includes(activeTag))
    : numbered

  return (
    <>
      <div className="chips">
        <button
          type="button"
          className={`chip${activeTag === null ? " on" : ""}`}
          onClick={() => setActiveTag(null)}
        >
          All <span className="ct">{pad2(entries.length)}</span>
        </button>
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={`chip${activeTag === t ? " on" : ""}`}
            onClick={() => setActiveTag(t)}
          >
            {t} <span className="ct">{pad2(tagCounts[t])}</span>
          </button>
        ))}
      </div>

      <div className="row-list">
        {rows.map((e) => (
          <Link key={e.url} className="row-item" href={e.url}>
            <span className="idx">{e.idx}</span>
            <span className="yr">{e.date}</span>
            <span className="title">{e.title}</span>
            <span className="tag">[{(e.tags[0] || "").toUpperCase()}]</span>
            <span className="arr">▸</span>
          </Link>
        ))}
      </div>
    </>
  )
}
