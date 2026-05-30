import type { ReactNode } from "react"

// Chunky extruded "stamp" text in the CRT amber palette. Two modes:
//   <Bold>word</Bold>        inline punch word, sits in a sentence
//   <Bold big>HEADER</Bold>  centered display block, opens a section
// Uses VT323 (pixel chrome) to match the cassette nameplate styling.
export function Bold({
  children,
  big = false,
}: {
  children: ReactNode
  big?: boolean
}) {
  return <span className={big ? "boldfx boldfx-big" : "boldfx"}>{children}</span>
}
