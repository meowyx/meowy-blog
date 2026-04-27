import type { ReactNode } from "react"

export interface PubItem {
  url: string
  title: string
  venue: string
  meta: string
  year: string
}

export interface Era {
  org: string
  catName: string
  where: ReactNode
  role: string
  items: PubItem[]
}

export function EraSection({ era }: { era: Era }) {
  return (
    <section className="era" data-org={era.org}>
      <div className="era-meta">
        <h2 className="cat-name">{era.catName}</h2>
        <div className="where">{era.where}</div>
        <div className="role">{era.role}</div>
      </div>
      <div className="pub-list">
        {era.items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-item"
          >
            <div>
              <h3>{item.title}</h3>
              <div className="meta">
                <span><b>{item.venue}</b></span>
                <span>{item.meta}</span>
              </div>
            </div>
            <div className="ext">
              {item.year}
              <span className="arrow">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
