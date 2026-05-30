import type { ReactNode } from "react"

// Chunky extruded "stamp" text in the CRT amber palette, an inline punch word
// that sits in a sentence. Uses VT323 (pixel chrome) to match the cassette
// nameplate styling.
export function Bold({ children }: { children: ReactNode }) {
  return <span className="boldfx">{children}</span>
}
