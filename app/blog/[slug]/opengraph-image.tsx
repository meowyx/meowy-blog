import { ImageResponse } from "next/og"
import { format } from "date-fns"
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/posts"

// Per-post social card in the cassette / amber-CRT look. Rendered to PNG at
// build time (one per post) into .next output, never committed to the repo.
// Mirrors the on-site post header: ch label, NOW-READING-style meta, title,
// tags, and the SIDE A tape strip. Shares the palette with app/globals.css.
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "meowy.xyz transmission"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

const pad3 = (n: number) => String(n).padStart(3, "0")

// Amber CRT palette (from globals.css :root)
const C = {
  shell: "#1a1208",
  screen: "#0a0604",
  amber1: "#ffb347",
  amber2: "#ffd47a",
  amber3: "#ffe0a0",
  dim: "#a07d3a",
  low: "#6a4d18",
  green: "#4eff8a",
}

// Scale the headline down as the title gets longer so it never overflows.
function titleSize(len: number) {
  if (len > 46) return 56
  if (len > 32) return 70
  if (len > 20) return 84
  return 96
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === slug)
  const num = pad3(idx >= 0 ? idx + 1 : all.length + 1)
  const post = getPostBySlug(slug)

  const title = (post?.title ?? "transmission").toUpperCase()
  const words = post
    ? post.content.trim().split(/\s+/).filter(Boolean).length
    : 0
  const readMin = Math.max(1, Math.round(words / 200))

  const date = post?.date ? new Date(post.date) : null
  const dateShort =
    date && !Number.isNaN(date.getTime()) ? format(date, "dd.MM.yy") : ""
  const tags = (post?.tags ?? []).slice(0, 4)

  const metaParts = [`TX-${num}`, `${readMin} MIN`, dateShort].filter(Boolean)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: C.shell,
          padding: 52,
          fontFamily: "monospace",
        }}
      >
        {/* chassis header bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: C.dim,
            fontSize: 26,
            letterSpacing: 4,
          }}
        >
          <span>ch.01 / {num}</span>
          <span>freq 82.7</span>
        </div>

        {/* CRT screen */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginTop: 24,
            marginBottom: 24,
            padding: 48,
            background: C.screen,
            border: `2px solid ${C.low}`,
            borderRadius: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              color: C.dim,
              fontSize: 28,
              letterSpacing: 6,
            }}
          >
            {metaParts.join("  ·  ")}
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              color: C.amber3,
              fontSize: titleSize(title.length),
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            {title}
            <span style={{ color: C.amber1 }}>_</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              {tags.map((t) => (
                <span key={t} style={{ color: C.amber2, fontSize: 26 }}>
                  {`[ ${t} ]`}
                </span>
              ))}
            </div>
            <span style={{ color: C.dim, fontSize: 26, letterSpacing: 2 }}>
              meowy.xyz
            </span>
          </div>
        </div>

        {/* tape strip */}
        <div
          style={{
            display: "flex",
            color: C.amber1,
            fontSize: 24,
            letterSpacing: 6,
          }}
        >
          {`SIDE A · TX-${num} PLAYING`}
        </div>
      </div>
    ),
    { ...size }
  )
}
