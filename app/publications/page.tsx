import type { Metadata } from "next"
import { Chassis, type TxItem } from "@/components/chassis"
import { PUBLICATIONS, getPublicationCount } from "@/lib/publications"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "publications",
  description:
    "Pieces I authored for company blogs, talks I've given, and courses I've worked on.",
}

const ASCII_ARCHIVE = "┌───┐\n│≡≡≡│\n│≡≡≡│\n└───┘"
const pad2 = (n: number) => String(n).padStart(2, "0")
const pad3 = (n: number) => String(n).padStart(3, "0")

export default function PublicationsPage() {
  const posts = getAllPosts()
  const recent: TxItem[] = posts.slice(0, 3).map((p, i) => ({
    num: pad3(i + 1),
    title: p.title,
    href: `/blog/${p.slug}`,
  }))
  const total = getPublicationCount()

  return (
    <Chassis
      channel={-1}
      ch="ch.05"
      now="- archive"
      chId="// archive"
      tx={recent}
      cassetteTape="SIDE E · ARCHIVE"
    >
      <div className="hero-block">
        <pre className="ascii">{ASCII_ARCHIVE}</pre>
        <div>
          <h1 className="h-title">
            PUBLICATIONS<span className="cursor">.</span>
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> pieces i wrote for company blogs,
            talks i&apos;ve given, and courses i&apos;ve worked on. originals live
            where they were published; these are the canonical links.
          </p>
        </div>
      </div>

      {PUBLICATIONS.map((section, si) => {
        const offset = PUBLICATIONS.slice(0, si).reduce(
          (a, s) => a + s.items.length,
          0
        )
        return (
          <div key={section.id}>
            <div className="section-head">
              <span className="title-row">
                <span className="amber2">// {section.id}</span>
              </span>
              <span className="count">{pad2(section.items.length)} pieces</span>
            </div>
            <div className="row-list">
              {section.items.map((it, ii) => (
                <a
                  className="row-item"
                  key={it.url}
                  href={it.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="idx">{pad3(offset + ii + 1)}</span>
                  <span className="yr">{it.year}</span>
                  <span className="title">{it.title}</span>
                  <span className="tag">
                    [ {it.venue} · {it.meta} ]
                  </span>
                  <span className="arr">▸</span>
                </a>
              ))}
            </div>
          </div>
        )
      })}

      <div className="eof">END OF ARCHIVE · {pad2(total)} PIECES</div>
    </Chassis>
  )
}
