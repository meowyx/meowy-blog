import type { ReactNode } from "react"

export interface WorkItem {
  name: string
  href?: string
  repo: string
  desc: ReactNode
  status: ReactNode
  shipping?: boolean
}

export function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="work-list">
      {items.map((it) => (
        <li key={it.repo}>
          <div className="work-row">
            <div className="work-name">
              {it.href ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer">
                  {it.name}
                </a>
              ) : (
                it.name
              )}
              <span className="repo">{it.repo}</span>
            </div>
            <div className="work-desc">{it.desc}</div>
            <div className={`work-status${it.shipping ? " shipping" : ""}`}>
              {it.status}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
