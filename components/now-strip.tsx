export interface NowCell {
  key: string
  val: string
  sub?: string
}

interface Props {
  cells: NowCell[]
  className?: string
}

export function NowStrip({ cells, className }: Props) {
  return (
    <div className={`now${className ? ` ${className}` : ""}`} aria-label="Now">
      {cells.map((c) => (
        <div key={c.key}>
          <div className="key">{c.key}</div>
          <div className="val">
            {c.val}
            {c.sub && <small>{c.sub}</small>}
          </div>
        </div>
      ))}
    </div>
  )
}
