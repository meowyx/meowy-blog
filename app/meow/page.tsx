import type { Metadata } from "next"
import Image from "next/image"
import { Chassis, type TxItem } from "@/components/chassis"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "meow",
  description: "This is Piku.",
}

const ASCII_PIKU = " /\\___/\\\n( =^.^= )\n (\")_(\")"
const pad3 = (n: number) => String(n).padStart(3, "0")

const PHOTOS = [
  { src: "/media/cat-image1.webp", cap: "piku.001 · sunbeam tax" },
  { src: "/media/cat-image2.webp", cap: "piku.002 · concern" },
  { src: "/media/cat-image3.png", cap: "piku.003 · loaf form" },
  { src: "/media/cat-image4.png", cap: "piku.004 · zoomies" },
  { src: "/media/cat-image-5.png", cap: "piku.005 · keyboard ops" },
]

// expected vs observed - the joke is the gap between the two
const STATS: Array<[string, string, string]> = [
  ["naps_per_day", "9", "14"],
  ["treat_acceptance", "0.95", "1.00"],
  ["food_acceptance", "0.90", "0.42"],
  ["keyboard_walks_per_pr", "0", "1.7"],
  ["zoom_event_3am", "false", "true"],
  ["cuteness", "0.99", "1.00"],
]

export default function MeowPage() {
  const posts = getAllPosts()
  const recent: TxItem[] = posts.slice(0, 3).map((p, i) => ({
    num: pad3(i + 1),
    title: p.title,
    href: `/blog/${p.slug}`,
  }))

  const nowScreen = (
    <div>
      <div className="now-label">SUBJECT STATUS</div>
      <div className="now-screen">
        <div className="now-row">
          <span className="now-key">NAME</span>
          <span className="now-val">PIKU</span>
        </div>
        <div className="now-row">
          <span className="now-key">AGE</span>
          <span className="now-val">7 YR</span>
        </div>
        <div className="now-row">
          <span className="now-key">MODE</span>
          <span className="now-val">LOAF</span>
        </div>
        <div className="now-row">
          <span className="now-key">PWR</span>
          <span className="now-val">100%</span>
        </div>
      </div>
    </div>
  )

  return (
    <Chassis
      channel={2}
      ch="ch.03"
      now="- meow"
      tx={recent}
      nowScreen={nowScreen}
      cassetteTape="SIDE C · PIKU.EXE LIVE"
    >
      <div className="hero-block">
        <pre className="ascii">{ASCII_PIKU}</pre>
        <div>
          <h1 className="h-title">
            THIS IS{" "}
            <span className="big">
              PIKU<span className="cursor">.</span>
            </span>
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> short for <b>pikachu</b>. born{" "}
            <b>27 august 2018</b>. picky eater, snack maximalist, professional
            sunbeam follower. co-author of every late-night refactor, by way of
            walking across the keyboard.
          </p>
        </div>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 01 ]</span> <span>FIELD PHOTOS</span>
        </span>
        <span className="count">PIKU IN HIS NATURAL HABITAT</span>
      </div>

      <div
        className="shelf-grid"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}
      >
        {PHOTOS.map((p) => (
          <div className="card" key={p.src}>
            <div className="cover photo">
              <Image
                src={p.src}
                alt={p.cap}
                fill
                sizes="(max-width: 980px) 50vw, 200px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="ttl">{p.cap}</div>
          </div>
        ))}
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 02 ]</span> <span>OBSERVABILITY</span>
        </span>
        <span className="count">SAMPLE WINDOW: LIFETIME · PROD</span>
      </div>

      <table className="list-table">
        <thead>
          <tr>
            <th>metric</th>
            <th>expected</th>
            <th>observed</th>
          </tr>
        </thead>
        <tbody>
          {STATS.map(([k, expected, observed]) => (
            <tr key={k}>
              <td className="title-cell">{k}</td>
              <td className="dim">{expected}</td>
              <td className="num-cell">{observed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="meow-trail">meow · meow · meow · meow · meow</div>

      <div className="eof">END OF FILE</div>
    </Chassis>
  )
}
