import type { Metadata } from "next"
import Link from "next/link"
import { Eyebrow } from "@/components/eyebrow"
import { YouTubeLink } from "@/components/youtube-link"
import "./about.css"

export const metadata: Metadata = {
  title: "About",
  description:
    "A longer version of who I am, where I've been, and what I'm into now.",
}

type CardKind =
  | "Project"
  | "Smart Contract"
  | "Agent"
  | "Tool"
  | "Experiment"
  | "Tutorial"

type WorkCard = {
  kind: CardKind
  title: string
  description: string
  tech: string[]
  links: { label: string; href: string; primary?: boolean }[]
}

const workCards: WorkCard[] = [
  {
    kind: "Project",
    title: "GulfWatch",
    description:
      "Real-time Solana program observability. Bounded mpsc backpressure, 9+ exploit detection rules, and an MCP server in Rust so agents can query mainnet directly.",
    tech: ["Rust", "Tokio", "Axum", "ratatui", "rmcp", "Helius"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/gulfwatch", primary: true },
    ],
  },
  {
    kind: "Project",
    title: "raffl.fun",
    description:
      "On-chain raffle protocol on Solana. Escrowed prize vaults and Switchboard VRF for verifiable winner selection. No operator, no admin override.",
    tech: ["Anchor", "Switchboard VRF", "Next.js", "Privy"],
    links: [
      { label: "raffl.fun", href: "https://raffl.fun", primary: true },
      { label: "View Code", href: "https://github.com/meowyx/raffl" },
    ],
  },
  {
    kind: "Project",
    title: "mewtui",
    description:
      "Terminal-based code editor in Rust. Real PTY shell, tree-sitter highlighting, 20 themes. Published on crates.io.",
    tech: ["Rust", "Tokio", "ratatui", "tree-sitter"],
    links: [
      { label: "crates.io", href: "https://crates.io/crates/mewtui", primary: true },
      { label: "View Code", href: "https://github.com/meowyx/mewtui" },
    ],
  },
  {
    kind: "Project",
    title: "Solana Contest Platform",
    description:
      "Decentralized contest platform on Solana. Anchor escrow, PDA-tracked entries, fee-sponsored transactions so participants can enter without holding SOL.",
    tech: ["Rust", "Anchor", "Next.js"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/solana-contest-platform",
        primary: true,
      },
    ],
  },
  {
    kind: "Project",
    title: "Dispatch Router",
    description:
      "Real-time delivery assignment service. Weighted scoring (proximity, capacity, rating, priority), REST + gRPC server-streaming APIs, live WebSocket dashboard.",
    tech: ["Rust", "Axum", "Tonic", "DashMap", "Prometheus"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/dispatch-router",
        primary: true,
      },
    ],
  },
  {
    kind: "Tutorial",
    title: "Rust Tutorial Series",
    description:
      "Intro video on X passed 20K views. Weekly YouTube tutorials on ownership, async, lifetimes, and traits.",
    tech: ["Rust", "Video"],
    links: [
      {
        label: "View on X (20K+ views)",
        href: "https://x.com/me256ow/status/2051811337886716408",
        primary: true,
      },
      { label: "YouTube", href: "https://www.youtube.com/@MeowyTheDev" },
    ],
  },
  {
    kind: "Agent",
    title: "Research Agent",
    description:
      "Dual-agent research system. One agent searches online sources and analyzes, another evaluates and synthesizes findings. Runs on a local LLM.",
    tech: ["Multi-agent", "Local LLM", "Web search"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/research-agent", primary: true },
    ],
  },
  {
    kind: "Agent",
    title: "Chess Agent",
    description:
      "Chess-playing agent powered by a local LLM. Reads the board state and plans moves.",
    tech: ["Next.js", "Local LLM"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/chess-agent", primary: true },
    ],
  },
  {
    kind: "Experiment",
    title: "Helius Latency Challenge",
    description:
      "Solana wallet-history latency challenge. 4-phase parallel fetch pipeline drops busy wallets from 262s to 80s with lamport-exact PnL.",
    tech: ["Rust", "Tokio", "reqwest"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/computing-sol-algo",
        primary: true,
      },
    ],
  },
  {
    kind: "Tool",
    title: "Local LLM Picker",
    description:
      "CLI that scans your hardware and picks a local LLM you can actually run. Saves you the manual setup math.",
    tech: ["JavaScript", "CLI", "Local LLM"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/gaia-toolkit", primary: true },
    ],
  },
  {
    kind: "Agent",
    title: "Agentic ERC-20 Deployer",
    description:
      "Agentic Ethereum app. Deploy ERC-20 contracts via natural-language agent control. MetaMask for signing, local LLM for the agent loop.",
    tech: ["Next.js", "MetaMask", "Local LLM"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/metamask-gaia-starter",
        primary: true,
      },
    ],
  },
  {
    kind: "Smart Contract",
    title: "Solana AMM",
    description:
      "Simplified automated market maker on Solana. Constant product formula (x * y = k) for swaps, liquidity provision, and removal.",
    tech: ["Rust", "Anchor"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/solana-amm", primary: true },
    ],
  },
  {
    kind: "Smart Contract",
    title: "Pinocchio Escrow",
    description:
      "Native Solana escrow built with Pinocchio. No Anchor, no Borsh. Two-party token swap with cancel-before-fill on either side.",
    tech: ["Rust", "Pinocchio", "Native Solana"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/pinocchio-escrow", primary: true },
    ],
  },
  {
    kind: "Smart Contract",
    title: "Pinocchio Fundraiser",
    description:
      "Native Solana crowdfunder built with Pinocchio. Target plus deadline; if the goal misses, backers reclaim refunds.",
    tech: ["Rust", "Pinocchio", "Native Solana"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/pinocchio-fundraiser",
        primary: true,
      },
    ],
  },
  {
    kind: "Smart Contract",
    title: "Solana Escrow",
    description: "Trustless two-party token swap on Solana. Anchor-based escrow.",
    tech: ["Rust", "Anchor"],
    links: [
      { label: "View Code", href: "https://github.com/meowyx/solana-escrow", primary: true },
    ],
  },
  {
    kind: "Smart Contract",
    title: "Metaplex NFT Collection",
    description:
      "NFT collection program on Solana with Metaplex Core. Whitelist creator system plus mint, freeze, thaw, and update.",
    tech: ["Rust", "Anchor", "Metaplex Core"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/metaplex-nft-collection",
        primary: true,
      },
    ],
  },
  {
    kind: "Smart Contract",
    title: "Token-2022 Transfer Hook",
    description:
      "SPL Token-2022 transfer hook enforcing a whitelist. Only approved addresses can move hook-enabled tokens.",
    tech: ["Rust", "SPL Token-2022"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/meowyx/token2022-transfer-hook",
        primary: true,
      },
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="about-head">
        <div className="head-main">
          <Eyebrow style={{ marginBottom: 14 }}>about</Eyebrow>
          <h1>
            I&#39;m Sushmita R (aka <em>meowy</em>). I ship full-stack apps,
            rust backends, on-chain protocols, and AI agents.
          </h1>
          <p className="lede">
            <strong>Full-stack engineer</strong>,{" "}
            <strong>5+ years</strong> in web3. Rust backends, Next.js +
            TypeScript frontends, smart contracts on both Solana and EVM, AI
            agents, plus the technical writing and teaching that surrounds
            them. Recent ships:{" "}
            <a
              href="https://github.com/meowyx/gulfwatch"
              target="_blank"
              rel="noopener noreferrer"
            >
              gulfwatch
            </a>{" "}
            (Rust observability),{" "}
            <a
              href="https://raffl.fun"
              target="_blank"
              rel="noopener noreferrer"
            >
              raffl.fun
            </a>{" "}
            (full-stack on-chain raffle: Anchor + Next.js + Privy), and{" "}
            <a
              href="https://crates.io/crates/mewtui"
              target="_blank"
              rel="noopener noreferrer"
            >
              mewtui
            </a>{" "}
            (Rust terminal editor on crates.io).
          </p>
          <p className="lede">
            Developer-facing side at <strong>Consensys</strong> (MetaMask,
            Infura, Linea) and <strong>Gaia</strong>: built reference
            integrations, ran weekly debugging calls with builders, wrote{" "}
            <Link href="/publications">15+ technical blogs</Link>. Earlier
            built curriculum for{" "}
            <a
              href="https://www.udacity.com/course/blockchain-developer--nd1310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Udacity</strong>
            </a>
            ,{" "}
            <a
              href="https://dev.chain.link/certification"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Chainlink</strong>
            </a>
            , and{" "}
            <a
              href="https://academy.developerdao.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Developer DAO</strong>
            </a>{" "}
            (academy used by <strong>1000+ developers</strong>).
          </p>
          <p className="into-label">What I&#39;m into</p>
          <ul className="into-list">
            <li>Real-time and streaming systems</li>
            <li>Distributed systems and observability</li>
            <li>Low-level Rust (down to Pinocchio on Solana)</li>
            <li>Smart contracts on Solana and EVM</li>
            <li>Full-stack apps end-to-end</li>
            <li>AI agents and MCP servers</li>
          </ul>
          <p className="lede">
            What I love: building things end-to-end, teaching what I ship, and
            picking up whatever a project actually needs. Curiosity is my fuel.
            When interest sparks, energy follows.
          </p>
          <details className="stack-details">
            <summary>
              <div className="head-strip">
                <span className="head-strip-label">stack</span>
                <span>
                  Rust · Next.js · Solana + EVM · AI-native
                  <span className="stack-chevron" aria-hidden="true">
                    ▸
                  </span>
                  <span className="stack-hint" aria-hidden="true">
                    <svg
                      className="stack-hint-arrow"
                      width="68"
                      height="22"
                      viewBox="0 0 68 22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className="stack-hint-curve"
                        d="M 64 4 C 52 4, 32 12, 14 14 C 10 14.4, 7 14.4, 4 13.6"
                      />
                      <path
                        className="stack-hint-tip"
                        d="M 4 13.6 L 9 10 M 4 13.6 L 9 17"
                      />
                    </svg>
                    <span className="stack-hint-text">click to see all</span>
                  </span>
                </span>
              </div>
            </summary>
            <div className="stack-details-body">
              <div className="head-strip">
                <span className="head-strip-label">rust</span>
                <span>
                  Rust · Tokio · Axum · Tonic · Prost · DashMap · ratatui ·
                  rmcp · Prometheus · tracing · criterion · flamegraph
                </span>
              </div>
              <div className="head-strip">
                <span className="head-strip-label">frontend</span>
                <span>
                  TypeScript · JavaScript · Next.js · React · Tailwind ·
                  shadcn/ui · Astro · Privy
                </span>
              </div>
              <div className="head-strip">
                <span className="head-strip-label">web3</span>
                <span>
                  <strong>Solana:</strong> Anchor · Pinocchio · Native · SPL
                  Token + Token-2022 · Switchboard VRF · Helius.{" "}
                  <strong>EVM:</strong> Solidity · Foundry · Hardhat · Viem ·
                  Wagmi · OpenZeppelin · Chainlink
                </span>
              </div>
              <div className="head-strip">
                <span className="head-strip-label">ai-native</span>
                <span>
                  Claude Code · Cursor · MCP servers (built in Rust) ·
                  agent-facing API design · prompt engineering
                </span>
              </div>
            </div>
          </details>
          <div className="head-strip">
            <span className="head-strip-label">open to</span>
            <span>
              Software, full-stack, rust backend, frontend, founding,
              solutions, forward deployed, devrel, AI-native product. Any
              timezone, any hours.
            </span>
          </div>
          <div className="head-strip">
            <span className="head-strip-label">extras</span>
            <span>
              Rust intro on X passed{" "}
              <a
                href="https://x.com/me256ow/status/2051811337886716408"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>20K+ views</strong>
              </a>
              . Weekly Rust tutorials on{" "}
              <a
                href="https://www.youtube.com/@MeowyTheDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              .
            </span>
          </div>
        </div>
        <YouTubeLink />
      </section>

      <section className="work">
        <div className="work-head">
          <h2>Selected Work</h2>
          <p className="work-intro">
            Projects, smart contracts, agents, and tools. Hover to pause.
          </p>
        </div>
        <div className="carousel-wrap" aria-label="Selected work carousel">
          <div className="carousel-track">
            {[...workCards, ...workCards].map((card, i) => (
              <article
                key={`${card.title}-${i}`}
                className="work-card"
                aria-hidden={i >= workCards.length ? true : undefined}
              >
                <div className="work-card-kind">[ {card.kind} ]</div>
                <h3 className="work-card-title">{card.title}</h3>
                <p className="work-card-desc">{card.description}</p>
                <div className="work-card-tech">
                  {card.tech.map((t) => (
                    <span key={t} className="work-card-tech-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-card-links">
                  {card.links.map((link, j) => (
                    <a
                      key={`${link.label}-${j}`}
                      className={`work-card-link${link.primary ? " primary" : ""}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prose">
        <h2>Previously</h2>
        <div className="body">
          <p>
            Most of my work the last 5+ years has been developer relations and
            developer education. Some of the highlights:
          </p>
          <ul className="dot">
            <li>
              <strong>Devrel engineer at Consensys</strong>, building production
              dapps, templates, and CLI tools, and writing technical deep-dives
              for MetaMask, Infura, and Linea.
            </li>
            <li>
              <strong>
                Devrel engineer at{" "}
                <a
                  href="https://www.gaianet.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gaia
                </a>
              </strong>
              , an AI infra startup, where I built developer tooling and
              technical docs for their decentralized AI stack.
            </li>
            <li>
              <strong>
                Founded the education team at{" "}
                <a
                  href="https://academy.developerdao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer DAO
                </a>
              </strong>{" "}
              and launched the open-source web3 academy, used by 1000+
              developers.
            </li>
            <li>
              <strong>
                Instructor at{" "}
                <a
                  href="https://www.udacity.com/course/blockchain-developer--nd1310"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Udacity
                </a>
              </strong>{" "}
              on the Blockchain Developer Nanodegree.
            </li>
            <li>
              <strong>
                Educational consultant at{" "}
                <a
                  href="https://dev.chain.link/certification"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chainlink Labs
                </a>
              </strong>
              , designed their certification exam framework.
            </li>
          </ul>
        </div>
      </section>

      <section className="prose">
        <h2>Publications elsewhere</h2>
        <div className="body">
          <p>
            A lot of my technical writing lives on other people&#39;s sites. The
            full set is scattered, but here are the main venues if you want to
            dig:
          </p>
          <ul className="dot">
            <li>
              <strong>MetaMask</strong> developer blog: tutorials on the
              metamask sdk, gas api, viem vs ethers, hardhat vs foundry, and
              deploying stablecoins on linea.{" "}
              <a
                href="https://metamask.io/news/developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                metamask.io/news/developers
              </a>
            </li>
            <li>
              <strong>Linea</strong> on mirror.xyz: deep-dives on the linea
              prover, ai agents on linea, ERC20 walkthroughs, and a series of
              workshops.{" "}
              <a
                href="https://linea.mirror.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                linea.mirror.xyz
              </a>
            </li>
          </ul>
          <p style={{ marginTop: 8 }}>
            <Link href="/publications" className="more">
              See the full list on publications&nbsp;→
            </Link>
          </p>
        </div>
      </section>

      <section className="prose" id="reach-me">
        <h2>Reach me</h2>
        <div className="body" style={{ maxWidth: "100%" }}>
          <p style={{ fontSize: 16, color: "var(--ink-2)", marginBottom: 0 }}>
            The fastest way to get a response is to make the first paragraph
            specific. Freelance, collab, code review, or just to say hi, all
            welcome.
          </p>
          <div className="contact">
            <a
              href="https://github.com/meowyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="key">GitHub</div>
              <div className="val">@meowyx</div>
            </a>
            <a
              href="https://x.com/me256ow"
              target="_blank"
              rel="noopener noreferrer"
            >
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
