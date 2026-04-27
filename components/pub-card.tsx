export interface PubCardItem {
  org: string
  title: string
  year: string
  href: string
}

export function PubCard({ org, title, year, href }: PubCardItem) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="pub">
      <div className="org">For <b>{org}</b></div>
      <h3>{title}</h3>
      <div className="foot">
        <span>{year}</span>
        <span>↗ external</span>
      </div>
    </a>
  )
}
