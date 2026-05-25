import type { Metadata } from "next"
import { Chassis, type TxItem } from "@/components/chassis"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "media",
  description: "What I've been playing and watching, plus all-time favourites.",
}

const ASCII_TV = "┌─────┐\n│ ░░░ │\n│ ▸▸▸ │\n└─────┘"
const pad2 = (n: number) => String(n).padStart(2, "0")
const pad3 = (n: number) => String(n).padStart(3, "0")

const SPOTIFY_PLAYLIST = "1bhdpU1YWPRVhcCWSfYJw6"

// What I've been on lately. Currently watching nothing, no game in progress.
// Add shows / books / albums here as they come.
const ON_ROTATION = [
  { title: "taiwan travelogue", tag: "[ BOOK · READING ]" },
  { title: "from · s4", tag: "[ TV · WATCHING ]" },
  { title: "widow's bay", tag: "[ TV · MAYBE ]" },
  { title: "colony", tag: "[ FILM · SOON ]" },
  { title: "call of duty: black ops 6", tag: "[ GAME · RECENT ]" },
  { title: "stardew valley", tag: "[ GAME · RECENT ]" },
  { title: "diablo iv", tag: "[ GAME · RECENT ]" },
  { title: "cyberpunk 2077", tag: "[ GAME · RECENT ]" },
]

// All-time loves. More categories and picks to come.
const LOVES = [
  { cat: "ANIME", picks: "barakamon · mushishi" },
  { cat: "TV", picks: "more soon" },
]

export default function MediaPage() {
  const posts = getAllPosts()
  const recent: TxItem[] = posts.slice(0, 3).map((p, i) => ({
    num: pad3(i + 1),
    title: p.title,
    href: `/blog/${p.slug}`,
  }))

  return (
    <Chassis
      channel={3}
      ch="ch.04"
      now="- media"
      tx={recent}
      cassetteTape="SIDE D · MEDIA"
    >
      <div className="hero-block">
        <pre className="ascii ascii-screen">{ASCII_TV}</pre>
        <div>
          <h1 className="h-title">
            CURRENTLY{" "}
            <span className="big">
              ON<span className="cursor">.</span>
            </span>
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> currently reading{" "}
            <b>taiwan travelogue</b> and watching <b>from</b> (s4). a couple
            things queued up, recent plays, and an all-time favs list below.
          </p>
        </div>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="amber2">on rotation</span>
        </span>
        <span className="count">{pad2(ON_ROTATION.length)} items</span>
      </div>

      <div className="row-list proj-list">
        {ON_ROTATION.map((it, i) => (
          <div className="row-item" key={it.title}>
            <span className="idx">{pad2(i + 1)}</span>
            <span className="title">{it.title}</span>
            <span className="tag">{it.tag}</span>
            <span className="arr">▸</span>
          </div>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: 20 }}>
        <span className="title-row">
          <span className="amber2">the tape</span>
        </span>
        <span className="count">spinning right now</span>
      </div>

      <div className="tape-frame">
        <div className="tape-frame-head">
          <span>▸ side a · meowy&apos;s mix</span>
          <span>SPOTIFY</span>
        </div>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST}?utm_source=generator&theme=0`}
          width="100%"
          height={352}
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="meowy's mix on Spotify"
          style={{ border: 0, borderRadius: 0, display: "block" }}
        />
      </div>

      <div className="section-head" style={{ marginTop: 24 }}>
        <span className="title-row">
          <span className="amber2">all-time loves</span>
        </span>
        <span className="count">short list</span>
      </div>

      <div className="loves">
        {LOVES.map((l) => (
          <div key={l.cat}>
            <span className="loves-cat">{l.cat}</span> {l.picks}
          </div>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: 24 }}>
        <span className="title-row">
          <span className="amber2">liner notes</span>
        </span>
        <span className="count">essays · coming soon</span>
      </div>

      <div className="term-block">
        <span className="prompt">&gt;</span> longer pieces on the shows, books,
        and games that stuck with me. the first one&apos;s in the works.
      </div>

      <div className="eof">end of feed</div>
    </Chassis>
  )
}
