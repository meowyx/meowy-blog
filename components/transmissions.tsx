"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import type { BlogEntry } from "@/lib/blog-data"

const pad2 = (n: number) => String(n).padStart(2, "0")
const pad3 = (n: number) => String(n).padStart(3, "0")

export function Transmissions({ entries }: { entries: BlogEntry[] }) {
  const [activeCat, setActiveCat] = useState<string | null>(null)

  const catCounts = useMemo(() => {
    const c: Record<string, number> = {}
    entries.forEach((e) => (c[e.category] = (c[e.category] || 0) + 1))
    return c
  }, [entries])

  const cats = useMemo(
    () =>
      Object.keys(catCounts).sort(
        (a, b) => catCounts[b] - catCounts[a] || a.localeCompare(b)
      ),
    [catCounts]
  )

  // Number entries by their position in the full newest-first list so the index
  // stays stable when a category filter is applied.
  const numbered = useMemo(
    () => entries.map((e, i) => ({ ...e, idx: pad3(i + 1) })),
    [entries]
  )

  const rows = activeCat
    ? numbered.filter((e) => e.category === activeCat)
    : numbered

  return (
    <>
      <div className="chips">
        <button
          type="button"
          className={`chip${activeCat === null ? " on" : ""}`}
          onClick={() => setActiveCat(null)}
        >
          All <span className="ct">{pad2(entries.length)}</span>
        </button>
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            className={`chip${activeCat === c ? " on" : ""}`}
            onClick={() => setActiveCat(c)}
          >
            {c} <span className="ct">{pad2(catCounts[c])}</span>
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
