import Link from "next/link"
import { Eyebrow } from "@/components/eyebrow"
import { MetaCard } from "@/components/meta-card"
import { SectionHeader } from "@/components/section-header"
import { NowStrip, type NowCell } from "@/components/now-strip"
import { WorkList, type WorkItem } from "@/components/work-list"
import { PubCard, type PubCardItem } from "@/components/pub-card"
import { PanicToast } from "@/components/panic-toast"
import "./home.css"

const ELSEWHERE: PubCardItem[] = [
  {
    org: "MetaMask",
    title: "Viem vs. Ethers.js: a detailed comparison",
    year: "2024",
    href: "https://metamask.io/news/developers/viem-vs-ethers-js-a-detailed-comparison-for-web-3-developers/",
  },
  {
    org: "Linea",
    title: "The Linea prover, in depth",
    year: "2024",
    href: "https://linea.mirror.xyz/zYD75brljMLn8nWudtihqvjd54nLK23P8-cnyvxmvSU",
  },
  {
    org: "MetaMask",
    title: "Hardhat vs. Foundry: choosing the right tool",
    year: "2024",
    href: "https://metamask.io/news/developers/hardhat-vs-foundry-choosing-the-right-ethereum-development-tool/",
  },
]

const NOW_CELLS: NowCell[] = [
  { key: "Building", val: "gulfwatch", sub: "solana observability, in rust" },
  { key: "Hacked on", val: "helius latency challenge", sub: "262s → 80s, shipped" },
  { key: "Mentoring", val: "HER DAO rust cohort", sub: "upcoming" },
  { key: "Co-running", val: "kronos guild", sub: "solana dev community" },
  { key: "Available", val: "full-time + freelance", sub: "rust / systems / web3" },
]

const WORK: WorkItem[] = [
  {
    name: "gulfwatch",
    href: "https://github.com/meowyx/gulfwatch",
    repo: "github.com/meowyx/gulfwatch",
    desc: (
      <>
        Real-time Solana program observability platform. Bounded-channel backpressure,
        rolling-window metrics, 9+ detection rules including Token-2022 extension monitoring
        (transfer hooks, permanent delegate, fee authority, default frozen) and cross-program
        signer correlation. 6-tab transaction deep-dive with per-instruction CU attribution
        and balance diffs. 151 workspace tests, zero warnings, mainnet-validated.
      </>
    ),
    status: <>shipping<br />colosseum frontier</>,
    shipping: true,
  },
  {
    name: "gulfwatch MCP server",
    repo: "rust · rmcp 1.4",
    desc: (
      <>
        An MCP server in rust wrapping gulfwatch&#39;s REST surface so Claude and other agents
        can query transaction history, metrics, and recent alerts directly. One binary
        runs the full stack: ingest, http, websocket, prometheus, tui, and mcp.
      </>
    ),
    status: "shipped",
  },
  {
    name: "helius wallet-history latency",
    href: "https://github.com/meowyx/computing-sol-algo",
    repo: "github.com/meowyx/computing-sol-algo",
    desc: (
      <>
        A 4-phase parallel fetch pipeline: classify sparse vs busy, density-chunked gap fill,
        paginated parallel fetch, and full balance curve. Busy wallets drop from ~262s to ~80s
        with lamport-exact PnL. Concurrency knee (16 parallel) and chunk sizes derived from
        measured Helius behavior, not guessed. Shipped.
      </>
    ),
    status: "shipped",
  },
  {
    name: "solarena",
    href: "https://github.com/meowyx/solana-contest-platform",
    repo: "anchor · escrow · multisig",
    desc: (
      <>
        Decentralized Solana contest platform with anchor escrow, PDA-tracked entries,
        multisig judging, and fee-sponsored transactions so participants enter without
        holding SOL.
      </>
    ),
    status: "shipped",
  },
  {
    name: "mewtui & dispatch-router",
    repo: "rust · tui · grpc",
    desc: (
      <>
        mewtui is a terminal-based code editor in rust with a live shell, syntax highlighting,
        and 20 switchable themes. dispatch-router and router-flow are real-time delivery assignment
        and distributed logistics simulation services in rust with gRPC, weighted scoring, and live dashboards.
      </>
    ),
    status: "side projects",
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <Eyebrow withDot className="rise" style={{ marginBottom: 22 }}>
              sushmita r. · aka meowy
            </Eyebrow>

            <h1 className="rise d1">
              I build <em>quietly fast</em>
              <br />
              backends.
            </h1>

            <p className="intro rise d2">
              Mostly observability infrastructure and agent-facing tools, mostly on{" "}
              <strong>Solana</strong>, increasingly in rust. Tokio, axum, tonic, and a healthy
              respect for bounded channels. Open-source contributor; previously devrel at
              Consensys, Gaia, and Developer DAO. I write, mentor, and occasionally co-run a
              Solana dev guild.
            </p>
          </div>

          <MetaCard
            className="rise d3"
            entries={[
              { label: "Status", value: <><span className="pulse" />open to full-time + freelance</> },
              { label: "Working on", value: "gulfwatch · solana observability" },
              { label: "Stack", value: "rust · tokio · axum · tonic · grpc" },
              { label: "Background", value: "4+ years building in web3" },
            ]}
          />
        </div>

        <NowStrip cells={NOW_CELLS} className="rise d4" />
      </section>

      {/* CURRENT WORK */}
      <section>
        <SectionHeader
          title="Currently"
          subtitle="/ what I'm shipping"
          moreHref="/about"
          moreLabel="full story →"
        />

        <WorkList items={WORK} />
      </section>

      {/* PUBLICATIONS PREVIEW */}
      <section>
        <SectionHeader
          title="Elsewhere"
          subtitle="/ pieces I wrote for other places"
          moreHref="/publications"
          moreLabel="full archive →"
        />

        <div className="pubs">
          {ELSEWHERE.map((p) => <PubCard key={p.href} {...p} />)}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="about-teaser">
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>in the longer version</Eyebrow>
          <h2>
            Four years of shipping software, a detour through devrel, and a slow but stubborn
            move toward systems work in rust.
          </h2>
        </div>
        <div>
          <p>
            I came to rust through web3. First as a devrel engineer building dapps, templates,
            and tooling for MetaMask, Linea, and Gaia, then as the kind of engineer who reads
            other people&#39;s flamegraphs for fun. These days I&#39;m focused on observability,
            real-time pipelines, and the unglamorous middle of distributed systems.
          </p>
          <p>
            If you want the long version (the projects, the talks, the things I&#39;ve shipped)
            the about page has it all.
          </p>
          <Link
            href="/about"
            className="link"
            style={{ fontSize: 15, color: "var(--accent)" }}
          >
            read the longer version&nbsp;→
          </Link>
        </div>
      </section>

      <p className="konami">
        try typing <span style={{ color: "var(--accent)" }}>`panic`</span>
      </p>

      <PanicToast />
    </>
  )
}
