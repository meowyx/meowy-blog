import type { Metadata } from "next"
import { Chassis, type TxItem } from "@/components/chassis"
import { PUBLICATIONS, getPublicationCount } from "@/lib/publications"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "publications",
  description:
    "Pieces I authored for company blogs, talks I've given, and courses I've worked on.",
}

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
      chId="archive"
      tx={recent}
      cassetteTape="SIDE E · ARCHIVE"
    >
      <div className="hero-block">
        <svg
          className="hero-glyph"
          viewBox="0 0 70 50"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect
            x="2"
            y="2"
            width="66"
            height="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="11"
            y1="14"
            x2="59"
            y2="14"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="11"
            y1="22"
            x2="59"
            y2="22"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="11"
            y1="30"
            x2="59"
            y2="30"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="11"
            y1="38"
            x2="59"
            y2="38"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <div>
          <h1 className="h-title">
            PUBLICATIONS<span className="cursor">.</span>
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> pieces i wrote for company blogs,
            talks i&apos;ve given, and courses i&apos;ve worked on. originals live
            where they were published; everything below links to the source.
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
                <span className="amber2">{section.id}</span>
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
