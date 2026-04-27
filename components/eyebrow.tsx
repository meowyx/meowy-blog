import type { CSSProperties, ReactNode } from "react"

interface Props {
  children: ReactNode
  withDot?: boolean
  className?: string
  style?: CSSProperties
}

export function Eyebrow({ children, withDot, className, style }: Props) {
  return (
    <div className={`eyebrow${className ? ` ${className}` : ""}`} style={style}>
      {withDot && <span className="eyebrow-dot">●</span>}
      {children}
    </div>
  )
}
