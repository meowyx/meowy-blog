import type { Metadata } from "next"
import Image from "next/image"
import { Eyebrow } from "@/components/eyebrow"
import { YouTubeLink } from "@/components/youtube-link"
import "./meow.css"

export const metadata: Metadata = {
  title: "Meow",
  description: "This is Piku.",
}

const PHOTOS = [
  { src: "/media/cat-image1.webp", cap: "piku.001 · loaf form" },
  { src: "/media/cat-image2.webp", cap: "piku.002 · sunbeam tax" },
  { src: "/media/cat-image3.png", cap: "piku.003 · keyboard ops" },
  { src: "/media/cat-image4.png", cap: "piku.004 · zoomies" },
  { src: "/media/cat-image-5.png", cap: "piku.005 · concern" },
]

const STATS: Array<[string, string, string]> = [
  ["naps_per_day", "9", "14"],
  ["treat_acceptance", "0.95", "1.00"],
  ["food_acceptance", "0.90", "0.42"],
  ["keyboard_walks_per_pr", "0", "1.7"],
  ["zoom_event_3am", "false", "true"],
  ["cuteness", "0.99", "1.00"],
]

const DOSSIER = `pub struct Piku {
  name:           String,            // "Piku" (a.k.a. Pikachu)
  born:           Date,              // 2018-08-27
  color:          Tabby,             // brown + white, classic
  favorite_food:  Snack,             // not the actual food, just snacks
  sleep_hours:    u8,                // 14..=18, depending on weather
  vocal:          bool,              // true, especially before 7am
  disposition:    Mood::Regal,
}

impl Piku {
  pub fn demand(snack: &str) -> Result<Treat, Yowl> { ... }
  pub fn walk_across_keyboard(&self) -> Commit { ... }
}`

export default function MeowPage() {
  return (
    <>
      <section className="meow-head">
        <div className="head-main">
          <Eyebrow withDot style={{ marginBottom: 18 }}>cat dossier</Eyebrow>
          <h1>This is <em>Piku</em>.</h1>
          <p className="lede">
            Short for Pikachu. Born <strong>27 august, 2018</strong>. Picky eater,
            snack maximalist, professional sunbeam follower. Co-author of every
            late-night refactor on this site, by way of walking across the keyboard.
          </p>
        </div>
        <YouTubeLink />
      </section>

      <section className="dossier">
        <div className="dossier-grid">
          <div className="label">// dossier</div>
          <pre className="struct">{DOSSIER}</pre>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Field photos</h2>
        <p className="sub">Piku, in his natural habitat.</p>
        <div className="gallery">
          {PHOTOS.map((p) => (
            <div key={p.src} className="ph">
              <Image src={p.src} alt={p.cap} fill sizes="(max-width: 760px) 50vw, 33vw" />
              <span className="cap">{p.cap}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section">
        <header>
          <span>// observability ─ piku, sample window: lifetime</span>
          <span className="right">prod</span>
        </header>
        <table className="kv">
          <tbody>
            {STATS.map(([k, expected, observed]) => (
              <tr key={k}>
                <td className="k">{k}</td>
                <td className="expected">expected: {expected}</td>
                <td className="observed">observed: <b>{observed}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="closing">
        end of file.
        <div className="meow-trail">meow · meow · meow · meow · meow</div>
      </div>
    </>
  )
}
