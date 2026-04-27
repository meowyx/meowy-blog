import type { ReactNode } from "react"

export interface MetaEntry {
  label: string
  value: ReactNode
}

interface Props {
  entries: MetaEntry[]
  ariaLabel?: string
  className?: string
}

export function MetaCard({ entries, ariaLabel = "At a glance", className }: Props) {
  return (
    <aside
      className={`meta-card${className ? ` ${className}` : ""}`}
      aria-label={ariaLabel}
    >
      <dl>
        {entries.map((e) => (
          <div key={e.label}>
            <dt>{e.label}</dt>
            <dd>{e.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
