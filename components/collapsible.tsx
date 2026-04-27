import type { ReactNode } from "react"

export function Collapsible({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <details className="cb">
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  )
}
