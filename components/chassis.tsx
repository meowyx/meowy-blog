"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Fragment, useEffect, useState, type ReactNode } from "react"
import { YouTubeLink } from "@/components/youtube-link"

// Channel knob + crumb nav. Index order is the physical knob order.
const CHANNELS = [
  { short: "BLOG", href: "/" },
  { short: "ABT", href: "/about" },
  { short: "MEW", href: "/meow" },
  { short: "MED", href: "/media" },
]
const CRUMBS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "MEOW", href: "/meow" },
  { label: "MEDIA", href: "/media" },
]
const ANGLES = [-54, -18, 18, 54]
const RIDGES = Array.from({ length: 18 }, (_, i) => i * 20)
const VENTS = Array.from({ length: 20 })

export type TxItem = { num: string; title: string; href: string }

type ChassisProps = {
  /** active channel 0..3 */
  channel: number
  /** top-strip page index, e.g. "ch.01" */
  ch: string
  /** top-strip page label, e.g. "- home" */
  now: string
  /** screen-header left label; defaults to "signal" */
  chId?: string
  /** side mini-display block; defaults to NOW PLAYING */
  nowScreen?: ReactNode
  /** side quick-jump block; defaults to a RECENT TX list built from `tx` */
  txBlock?: ReactNode
  /** rows for the default RECENT TX block */
  tx?: TxItem[]
  /** cassette tape label, e.g. "SIDE A · BLOG MMXXVI" */
  cassetteTape?: string
  /** the .screen-inner content (everything below the screen header) */
  children: ReactNode
}

const DEFAULT_NOW_SCREEN = (
  <div>
    <div className="now-label">NOW PLAYING</div>
    <div className="now-screen">
      <div className="now-row">
        <span className="now-key">BOOK</span>
        <span className="now-val">TAIWAN</span>
      </div>
      <div className="now-row">
        <span className="now-key">TV</span>
        <span className="now-val">FROM S4</span>
      </div>
      <div className="now-row">
        <span className="now-key">GAME</span>
        <span className="now-val">STARDEW</span>
      </div>
      <div className="now-row">
        <span className="now-key">SOUND</span>
        <span className="now-val">THE TAPE</span>
      </div>
    </div>
  </div>
)

export function Chassis({
  channel,
  ch,
  now,
  chId = "freq 82.7",
  nowScreen = DEFAULT_NOW_SCREEN,
  txBlock,
  tx = [],
  cassetteTape = "SIDE A · BLOG MMXXVI",
  children,
}: ChassisProps) {
  const router = useRouter()
  // channel < 0 = off-nav page (e.g. publications): no crumb/knob highlight,
  // knob just points at HOME and clicking it re-enters the channel cycle there.
  const [angleIdx, setAngleIdx] = useState(channel >= 0 ? channel : 0)

  // Toggle state. SSR renders the defaults (amber on, scan on), then the mount
  // effect syncs to localStorage. The pre-paint script in layout already set the
  // matching body classes, so only the switch visuals reconcile here.
  const [amber, setAmber] = useState(true)
  const [scan, setScan] = useState(true)

  useEffect(() => {
    setAmber(localStorage.getItem("meowy-theme") !== "green")
    setScan(localStorage.getItem("meowy-scan") !== "off")
  }, [])

  function turnKnob() {
    const next = (channel + 1) % CHANNELS.length
    setAngleIdx(next)
    // animate the pointer, then navigate (matches the comp's 280ms)
    setTimeout(() => router.push(CHANNELS[next].href), 280)
  }

  function toggleTheme() {
    const next = !amber
    setAmber(next)
    localStorage.setItem("meowy-theme", next ? "amber" : "green")
    document.body.classList.toggle("theme-green", !next)
  }

  function toggleScan() {
    const next = !scan
    setScan(next)
    localStorage.setItem("meowy-scan", next ? "on" : "off")
    document.body.classList.toggle("no-scan", !next)
  }

  const defaultTx = (
    <div className="tx">
      <div className="tx-label">RECENT TX</div>
      {tx.map((t) => (
        <Link key={t.href + t.num} className="tx-row" href={t.href}>
          <span className="num">{t.num}</span>
          <span className="title">{t.title}</span>
        </Link>
      ))}
      <Link className="tx-all" href="/">
        ► ALL ARCHIVES
      </Link>
    </div>
  )

  return (
    <div className="chassis">
      {/* top label tape strip */}
      <div className="top-strip">
        <div className="nameplate">
          <span>meowy</span>
          <span className="sub">build log</span>
        </div>
        <div className="page-index">
          <span>{ch}</span>
          <span className="now">{now}</span>
        </div>
      </div>

      {/* main body: screen + side panel */}
      <div className="body-row">
        <div className="screen-wrap">
          <div className="bezel">
            <div className="screen">
              <div className="screen-inner">
                <div className="screen-header">
                  <span className="ch-id">
                    <span className="status-dot" />
                    {chId}
                  </span>
                  <div className="header-right">
                    <span className="crumbs">
                      {CRUMBS.map((c, i) => (
                        <Fragment key={c.href}>
                          <Link href={c.href} className={i === channel ? "on" : undefined}>
                            {c.label}
                          </Link>
                          {i < CRUMBS.length - 1 && <span className="sep">·</span>}
                        </Fragment>
                      ))}
                    </span>
                    <span className="yt-badge">
                      <YouTubeLink />
                    </span>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>

          <div className="below-plate">
            <div className="vents">
              {VENTS.map((_, i) => (
                <span key={i} className="vent" />
              ))}
            </div>
          </div>
        </div>

        {/* side control panel */}
        <aside className="side">
          <div className="led-row">
            <span className="led-label">PWR</span>
            <span className="led green" />
            <span className="led-label">NET</span>
            <span className="led amber" />
            <span className="led-label">REC</span>
            <span className="led red" />
          </div>

          <div className="knob-wrap">
            <div className="knob-label">CHANNEL</div>
            <button
              type="button"
              className="knob"
              aria-label="Channel selector, advance"
              onClick={turnKnob}
            >
              <div className="knob-ridge">
                {RIDGES.map((deg) => (
                  <span key={deg} style={{ transform: `rotate(${deg}deg)` }} />
                ))}
              </div>
              <div
                className="knob-inner"
                style={{ transform: `rotate(${ANGLES[angleIdx]}deg)` }}
              >
                <div className="knob-pointer" />
              </div>
            </button>
            <div className="knob-scale">
              {CHANNELS.map((c, i) => (
                <Link key={c.href} href={c.href} className={i === channel ? "on" : undefined}>
                  {c.short}
                </Link>
              ))}
            </div>
          </div>

          {nowScreen}

          {txBlock ?? defaultTx}

          <div className="btn-row">
            <button
              type="button"
              className="toggle"
              role="switch"
              aria-checked={scan}
              aria-label="Scanlines"
              onClick={toggleScan}
            >
              <span className="dot" />
            </button>
            <span className="toggle-label">SCAN</span>
            <button
              type="button"
              className="toggle"
              role="switch"
              aria-checked={amber}
              aria-label="Amber theme"
              onClick={toggleTheme}
            >
              <span className="dot" />
            </button>
            <span className="toggle-label">AMBER</span>
          </div>

          <div className="cassette-slot">
            <div className="cassette">
              <div className="cassette-reels">
                <div className="cassette-reel" />
                <div className="cassette-reel" />
              </div>
              <div className="cassette-tape">{cassetteTape}</div>
            </div>
          </div>
        </aside>
      </div>

      <div className="bottom-bar">
        <div className="screws">
          <span className="screw" />
          <span className="screw" />
        </div>
        <div className="bottom-text">meowy.xyz · 2026 · made by a person</div>
        <div className="screws">
          <span className="screw" />
          <span className="screw" />
        </div>
      </div>

      {/* phone-only bottom-tab nav (replaces the knob below 640px) */}
      <nav className="mobile-nav" aria-label="Primary">
        {CRUMBS.map((c, i) => (
          <Link
            key={c.href}
            href={c.href}
            className={i === channel ? "on" : undefined}
          >
            {c.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
