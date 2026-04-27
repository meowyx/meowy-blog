interface Props {
  title: string
  hint?: string
}

export function RowHead({ title, hint }: Props) {
  return (
    <div className="row-head">
      <h2>{title}</h2>
      {hint && <span className="count">{hint}</span>}
    </div>
  )
}
