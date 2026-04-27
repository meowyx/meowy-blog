"use client"

import { useEffect, useState } from "react"

const CATS = [
  { id: "all", label: "All" },
  { id: "blogs", label: "Blogs" },
  { id: "talks", label: "Videos & Talks" },
  { id: "courses", label: "Courses" },
] as const

type Cat = (typeof CATS)[number]["id"]

export function PublicationsFilter() {
  const [active, setActive] = useState<Cat>("all")

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-org]").forEach((el) => {
      const org = el.dataset.org
      el.style.display = active === "all" || org === active ? "" : "none"
    })
  }, [active])

  return (
    <div className="org-filter">
      {CATS.map((c) => (
        <button
          key={c.id}
          type="button"
          className={active === c.id ? "active" : ""}
          onClick={() => setActive(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
