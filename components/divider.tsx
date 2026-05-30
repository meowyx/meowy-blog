import type { CSSProperties } from "react"

// Section dividers for breaking up long posts. Call in MDX as <Divider n={1} />
// through n={5}. Each n is a different center glyph / line treatment, all in the
// CRT amber palette so they adapt to the green-phosphor theme automatically.
const VARIANTS: Record<number, { glyph: string; dotted?: boolean; style?: CSSProperties }> = {
  1: { glyph: "◆" }, // diamond
  2: { glyph: "●" }, // filled dot
  3: { glyph: "│ │ │", style: { letterSpacing: "0.15em" } }, // cassette ridge
  4: { glyph: "●", dotted: true }, // dotted rule + dot
  5: { glyph: "○" }, // hollow circle
}

// n comes from MDX as a string (next-mdx-remote drops `{2}` expression attrs,
// so we pass n="2" and coerce here).
export function Divider({ n = 1 }: { n?: number | string }) {
  const key = Number(n) || 1
  const v = VARIANTS[key] ?? VARIANTS[1]
  return (
    <div
      className={v.dotted ? "divider is-dotted" : "divider"}
      role="separator"
      aria-hidden="true"
    >
      <span className="divider-glyph" style={v.style}>
        {v.glyph}
      </span>
    </div>
  )
}
