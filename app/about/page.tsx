import type { Metadata } from "next"
import { Eyebrow } from "@/components/eyebrow"
import { DotList } from "@/components/dot-list"
import "./about.css"

export const metadata: Metadata = {
  title: "About",
  description:
    "A longer version of who I am, what I'm working on, and where I've been.",
}

export default function AboutPage() {
  return (
    <>
      <section className="about-head">
        <Eyebrow style={{ marginBottom: 18 }}>hi.</Eyebrow>
        <h1>
          I&#39;m <em>meowy</em>. I build real-time systems in rust.
        </h1>
        <p className="lede">
          A longer version of who I am, what I&#39;m working on, and where I&#39;ve been.
          Backend engineer focused on distributed systems, observability, and agent-facing
          tools. Open to freelance work and interesting collabs.
        </p>
      </section>

      <section className="prose">
        <h2>Me</h2>
        <div className="body">
          <DotList items={[
            <>Backend engineer building <strong>real-time systems</strong>, <strong>observability infrastructure</strong>, and <strong>agent-facing tools</strong> in rust.</>,
            <>Focused on distributed systems, real-time services, and observability.</>,
            <><strong>4+ years</strong> building in web3 across Solana and Ethereum.</>,
            <>Open-source contributor, published SDK author, former devrel engineer at <strong>Consensys</strong>, <strong>Gaia</strong>, and <strong>Developer DAO</strong>.</>,
            <>Authored 15+ technical deep-dives on EVM internals, tooling, and zk proof systems. Developed Udacity&#39;s Blockchain Nanodegree curriculum and designed Chainlink&#39;s certification exam framework.</>,
            <>Building with <strong>rust, tokio, axum, tonic, gRPC, TypeScript, and Next.js</strong>.</>,
          ]} />
        </div>
      </section>

      <section className="prose">
        <h2>Current</h2>
        <div className="body">
          <DotList items={[
            <>Building <a href="https://github.com/meowyx/gulfwatch" target="_blank" rel="noopener noreferrer">gulfwatch</a>, a real-time Solana program observability platform in rust. Bounded-channel backpressure, rolling-window metrics, 9+ detection rules including Token-2022 extension monitoring (transfer hooks, permanent delegate, fee authority, default frozen) and cross-program signer correlation. 6-tab transaction deep-dive with per-instruction CU attribution and balance diffs. 151 workspace tests, zero warnings, mainnet-validated. Shipping for the Colosseum Frontier hackathon.</>,
            <>Shipped an <strong>MCP server</strong> in rust (rmcp 1.4) wrapping gulfwatch&#39;s REST surface so Claude and other agents can query transaction history, metrics, and recent alerts directly. One binary runs the full stack: ingest, http, websocket, prometheus, tui, and mcp.</>,
            <>Took on Helius&#39;s Solana wallet-history latency challenge with a 4-phase parallel fetch pipeline: classify sparse vs busy, density-chunked gap fill, paginated parallel fetch, and full balance curve. Busy wallets drop from <strong>~262s to ~80s</strong> with lamport-exact PnL. Concurrency knee (16 parallel) and chunk sizes derived from measured Helius behavior, not guessed. Shipped. <a href="https://github.com/meowyx/computing-sol-algo" target="_blank" rel="noopener noreferrer">repo</a>.</>,
            <><strong>Mentoring at the HER DAO rust cohort</strong> (upcoming), helping a new wave of women builders ramp up on rust and systems work.</>,
            <>Built <a href="https://github.com/meowyx/solana-contest-platform" target="_blank" rel="noopener noreferrer">solarena</a>, a decentralized Solana contest platform with anchor escrow, PDA-tracked entries, multisig judging, and fee-sponsored transactions so participants enter without holding SOL.</>,
            <>Built <strong>mewtui</strong>, a terminal-based code editor in rust with a live shell, syntax highlighting, and 20 switchable themes.</>,
            <>Built <strong>dispatch-router</strong> and <strong>router-flow</strong>, real-time delivery assignment and distributed logistics simulation services in rust with gRPC, weighted scoring, and live dashboards.</>,
            <>Co-founder of <a href="https://www.kronos.build/" target="_blank" rel="noopener noreferrer">kronos guild</a>, a Solana developer community. Built open-source templates, developed curriculum for the Solana campus tour, and host weekly office hours and onboarding workshops for builders and students.</>,
            <>Building <a href="https://templates.solana.com/x402-template" target="_blank" rel="noopener noreferrer">x402 template</a> and contributing to <a href="https://github.com/solana-foundation/framework-kit" target="_blank" rel="noopener noreferrer">framework-kit</a>.</>,
            <>Open to <strong>full-time roles</strong> as well as freelance rust and web3 engineering: contract builds, rust code review, and open-source contributions.</>,
            <>Open to collaborating on rust infrastructure, systems tooling, and Solana / web3 projects.</>,
          ]} />
        </div>
      </section>

      <section className="prose">
        <h2>Previously</h2>
        <div className="body">
          <DotList items={[
            <><strong>Devrel engineer at Consensys</strong>, built 10+ production dapps, templates, and CLI tools; authored 15+ technical blogs for MetaMask, Infura, and Linea.</>,
            <><strong>Devrel engineer at <a href="https://www.gaianet.ai/" target="_blank" rel="noopener noreferrer">Gaia</a></strong> (AI startup), built developer tooling, CLI tools, and technical docs for their decentralized AI infrastructure.</>,
            <><strong>Founded the education team at <a href="https://academy.developerdao.com/" target="_blank" rel="noopener noreferrer">Developer DAO</a></strong>, launched the open-source Web3 Academy.</>,
            <><strong>Instructor at <a href="https://www.udacity.com/course/blockchain-developer--nd1310" target="_blank" rel="noopener noreferrer">Udacity</a></strong>, Blockchain Developer Nanodegree.</>,
            <><strong>Educational consultant at <a href="https://dev.chain.link/certification" target="_blank" rel="noopener noreferrer">Chainlink Labs</a></strong>, certification exam framework.</>,
          ]} />
        </div>
      </section>

      <section className="prose" id="reach-me">
        <h2>Reach me</h2>
        <div className="body" style={{ maxWidth: "100%" }}>
          <p style={{ fontSize: 16, color: "var(--ink-2)", marginBottom: 0 }}>
            The fastest way to get a response is to make the first paragraph specific.
            Freelance, collab, code review, or just to say hi, all welcome.
          </p>
          <div className="contact">
            <a href="https://github.com/meowyx" target="_blank" rel="noopener noreferrer">
              <div className="key">GitHub</div>
              <div className="val">@meowyx</div>
            </a>
            <a href="https://x.com/me256ow" target="_blank" rel="noopener noreferrer">
              <div className="key">X / Twitter</div>
              <div className="val">@me256ow</div>
            </a>
            <a
              href="https://www.linkedin.com/in/sushmitaaar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="key">LinkedIn</div>
              <div className="val">sushmitaaar</div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
