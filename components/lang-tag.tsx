// Inline brand-colored language badges. Deliberately the one place the site
// breaks its bone + forest restraint, used only in the About intro line.
const LANGS = {
  ts: { label: "TS", bg: "#3178C6", fg: "#ffffff" },
  js: { label: "JS", bg: "#F7DF1E", fg: "#1A1A1A" },
  rust: { label: "Rust", bg: "#CE422B", fg: "#ffffff" },
  go: { label: "Go", bg: "#007D9C", fg: "#ffffff" },
  solidity: { label: "Solidity", bg: "#4B4F58", fg: "#ffffff" },
} as const

export type Lang = keyof typeof LANGS

export function LangTag({ lang }: { lang: Lang }) {
  const t = LANGS[lang]
  return (
    <span className="lang-tag" style={{ background: t.bg, color: t.fg }}>
      {t.label}
    </span>
  )
}
