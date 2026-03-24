"use client"

import type { ReactNode } from "react"

export function Collapsible({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <details className="my-6 rounded-lg border border-border">
      <summary className="cursor-pointer px-4 py-3 text-sm font-semibold select-none hover:bg-muted/50 transition-colors">
        {title}
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  )
}
