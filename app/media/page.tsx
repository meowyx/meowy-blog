import type { Metadata } from "next"
import { Chassis, type TxItem } from "@/components/chassis"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "media",
  description: "What I've been playing and watching, plus all-time favourites.",
}

const pad2 = (n: number) => String(n).padStart(2, "0")
const pad3 = (n: number) => String(n).padStart(3, "0")

const SPOTIFY_PLAYLIST = "1bhdpU1YWPRVhcCWSfYJw6"

// What I've been on lately. Currently watching nothing, no game in progress.
// Add shows / books / albums here as they come.
const ON_ROTATION = [
  { title: "the author's pov", tag: "[ WEBNOVEL · READING ]" },
  { title: "widow's bay", tag: "[ TV · WATCHING ]" },
  { title: "from · s4", tag: "[ TV · WATCHING ]" },
  { title: "colony", tag: "[ FILM · SOON ]" },
  { title: "call of duty: black ops 7", tag: "[ GAME · RECENT ]" },
  { title: "stardew valley", tag: "[ GAME · RECENT ]" },
  { title: "diablo iv", tag: "[ GAME · RECENT ]" },
  { title: "cyberpunk 2077", tag: "[ GAME · RECENT ]" },
]

// All-time loves. More categories and picks to come.
const LOVES = [
  { cat: "GENRE", picks: "horror (the most) · adventure · slice of life · comedy" },
  { cat: "ANIME", picks: "barakamon · mushishi" },
  { cat: "TV", picks: "the wonderfools" },
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
          <g fill="currentColor">
            {Array.from({ length: 3 }).flatMap((_, row) =>
              Array.from({ length: 9 }).map((_, col) => (
                <rect
                  key={`d-${row}-${col}`}
                  x={13.8 + col * 5}
                  y={9 + row * 5}
                  width="2.4"
                  height="2.4"
                />
              )),
            )}
          </g>
          <g fill="currentColor">
            <polygon points="23,32 29,36 23,40" />
            <polygon points="32,32 38,36 32,40" />
            <polygon points="41,32 47,36 41,40" />
          </g>
        </svg>
        <div>
          <h1 className="h-title">
            CURRENTLY{" "}
            <span className="big">
              ON<span className="cursor">.</span>
            </span>
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> currently reading{" "}
            <b>the author&apos;s pov</b> and watching{" "}
            <b>widow&apos;s bay</b>. a couple things queued up, recent plays, and
            an all-time favs list below.
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
