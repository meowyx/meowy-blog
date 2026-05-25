import type { Metadata } from "next"
import { Chassis, type TxItem } from "@/components/chassis"
import { Transmissions } from "@/components/transmissions"
import { SubscribeCrt } from "@/components/subscribe-crt"
import { getAllBlogEntries } from "@/lib/blog-data"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: { absolute: "meowy.xyz - personal terminal" },
}

const ASCII_CAT = " /\\_/\\\n( o.o )\n > ^ <"
const pad2 = (n: number) => String(n).padStart(2, "0")
const pad3 = (n: number) => String(n).padStart(3, "0")

export default function HomePage() {
  const entries = getAllBlogEntries()
  const recent: TxItem[] = getAllPosts()
    .slice(0, 3)
    .map((p, i) => ({
      num: pad3(i + 1),
      title: p.title,
      href: `/blog/${p.slug}`,
    }))

  return (
    <Chassis
      channel={0}
      ch="ch.01"
      now="- home"
      tx={recent}
      cassetteTape="SIDE A · BLOG MMXXVI"
    >
      <div className="hero-block">
        <pre className="ascii">{ASCII_CAT}</pre>
        <div>
          <h1 className="h-title">
            HI. I&apos;M{" "}
            <span className="big">
              MEOWY<span className="cursor">▮</span>
            </span>
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> notes on <b>rust</b>, go, frontend,
            backend, and the cryptography and math.
          </p>
        </div>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="amber2">LATEST TRANSMISSIONS</span>
        </span>
        <span className="count">{pad2(entries.length)} ENTRIES · NEWEST FIRST</span>
      </div>

      <Transmissions entries={entries} />

      <SubscribeCrt />

      <div className="eof">END OF FEED</div>
    </Chassis>
  )
}
