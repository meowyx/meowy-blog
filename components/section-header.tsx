import Link from "next/link"

interface Props {
  title: string
  subtitle?: string
  moreHref?: string
  moreLabel?: string
}

export function SectionHeader({ title, subtitle, moreHref, moreLabel }: Props) {
  return (
    <div className="section-head">
      <h2>
        {title}
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
      </h2>
      {moreHref && moreLabel && (
        <Link href={moreHref} className="more">{moreLabel}</Link>
      )}
    </div>
  )
}
