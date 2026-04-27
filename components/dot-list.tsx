import type { ReactNode } from "react"

export function DotList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="dot">
      {items.map((node, i) => (
        <li key={i}>{node}</li>
      ))}
    </ul>
  )
}
