import type { Metadata } from "next"
import { Github, Linkedin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { LinkPreview } from "@/components/link-preview"
import { FolderTabs } from "@/components/folder-tabs"
import { ProjectCardsMarquee } from "@/components/project-cards-marquee"

export const metadata: Metadata = {
  title: "Sushmita R. (aka meowy)",
  description:
    "Backend engineer building real-time systems, observability infrastructure, and agent-facing tools in Rust.",
}

const meContent = (
  <div className="space-y-8">
    <ul className="list-disc pl-5 space-y-2 leading-relaxed">
      <li>
        backend engineer building real-time systems, observability
        infrastructure, and agent-facing tools in rust
      </li>
      <li>
        focused on distributed systems, real-time services, and observability
      </li>
      <li>
        4+ years shipping production software, 7+ apps deployed across solana
        and ethereum
      </li>
      <li>
        open-source contributor, published sdk author, former devrel engineer
        at consensys, gaia, and developer dao
      </li>
      <li>
        authored 15+ technical deep-dives on evm internals, tooling, and zk
        proof systems. developed udacity&apos;s blockchain nanodegree
        curriculum and designed chainlink&apos;s certification exam framework
      </li>
      <li>
        building with rust, tokio, axum, tonic, grpc, typescript, and next.js
      </li>
    </ul>

    <div>
      <h3 className="text-sm text-muted-foreground mb-3">projects</h3>
      <ProjectCardsMarquee />
    </div>
  </div>
)

const currentContent = (
  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
    <li>
      building{" "}
      <LinkPreview
        href="https://github.com/meowyx/gulfwatch"
        className="underline underline-offset-2"
      >
        gulfwatch
      </LinkPreview>
      , a real-time solana program observability platform in rust.
      bounded-channel backpressure, rolling-window metrics, 9+ detection rules
      including token 2022 extension monitoring (transfer hooks, permanent
      delegate, fee authority, default frozen) and cross-program signer
      correlation. 6-tab transaction deep-dive with per-instruction cu
      attribution and balance diffs. 151 workspace tests, zero warnings,
      mainnet-validated. shipping for the colosseum frontier hackathon.
    </li>
    <li>
      shipped an mcp server in rust (rmcp 1.4) wrapping gulfwatch&apos;s rest
      surface so claude and other agents can query transaction history,
      metrics, and recent alerts directly. one binary runs the full stack:
      ingest, http, websocket, prometheus, tui, and mcp.
    </li>
    <li>
      took on helius&apos;s solana wallet-history latency challenge with a
      4-phase parallel fetch pipeline: classify sparse vs busy, density-chunked
      gap fill, paginated parallel fetch, and full balance curve. busy wallets
      drop from ~262s to ~80s with lamport-exact pnl. concurrency knee (16
      parallel) and chunk sizes derived from measured helius behavior, not
      guessed. writeup coming.{" "}
      <LinkPreview
        href="https://github.com/meowyx/computing-sol-algo"
        className="underline underline-offset-2"
      >
        repo
      </LinkPreview>
      .
    </li>
    <li>
      built{" "}
      <LinkPreview
        href="https://github.com/meowyx/solana-contest-platform"
        className="underline underline-offset-2"
      >
        solarena
      </LinkPreview>
      , a decentralized solana contest platform with anchor escrow, pda-tracked
      entries, multisig judging, and fee-sponsored transactions so participants
      enter without holding sol.
    </li>
    <li>
      built mewtui, a terminal-based code editor in rust with a live shell,
      syntax highlighting, and 20 switchable themes
    </li>
    <li>
      built dispatch-router and router-flow, real-time delivery assignment and
      distributed logistics simulation services in rust with gRPC, weighted
      scoring, and live dashboards
    </li>
    <li>
      co-founder of{" "}
      <LinkPreview
        href="https://www.kronos.build/"
        className="underline underline-offset-2"
      >
        kronos guild
      </LinkPreview>
      , solana developer community. built open source templates, developed
      curriculum for the solana campus tour, and host weekly office hours and
      onboarding workshops for builders and students
    </li>
    <li>
      building{" "}
      <LinkPreview
        href="https://templates.solana.com/x402-template"
        className="underline underline-offset-2"
      >
        x402 template
      </LinkPreview>{" "}
      and contributing to{" "}
      <LinkPreview
        href="https://github.com/solana-foundation/framework-kit"
        className="underline underline-offset-2"
      >
        framework-kit
      </LinkPreview>
    </li>
    <li>
      taking on freelance rust and web3 engineering: contract builds, rust code
      review, and open source contributions
    </li>
    <li>
      open to collaborating on rust infrastructure, systems tooling, and
      solana/web3 projects
    </li>
  </ul>
)

const previouslyContent = (
  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
    <li>
      devrel engineer at consensys, built 10+ production dapps, templates, CLI
      tools, and authored 15+ technical blogs for metamask, infura, and linea
    </li>
    <li>
      devrel engineer at{" "}
      <LinkPreview
        href="https://www.gaianet.ai/"
        className="underline underline-offset-2"
      >
        gaia
      </LinkPreview>{" "}
      (ai startup), built developer tooling, CLI tools, and technical docs for
      their decentralized AI infrastructure
    </li>
    <li>
      founded education team at{" "}
      <LinkPreview
        href="https://academy.developerdao.com/"
        className="underline underline-offset-2"
      >
        developer dao
      </LinkPreview>
      , launched the open source web3 academy
    </li>
    <li>
      instructor at{" "}
      <LinkPreview
        href="https://www.udacity.com/course/blockchain-developer--nd1310"
        className="underline underline-offset-2"
      >
        udacity
      </LinkPreview>
      , blockchain developer nanodegree
    </li>
    <li>
      educational consultant at{" "}
      <LinkPreview
        href="https://dev.chain.link/certification"
        className="underline underline-offset-2"
      >
        chainlink labs
      </LinkPreview>
    </li>
  </ul>
)

export default function HomePage() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <h1 className="text-xl font-semibold mb-6">Sushmita R. (aka meowy)</h1>
      </FadeIn>

      <FadeIn delay={50}>
        <FolderTabs
          defaultId="me"
          tabs={[
            { id: "me", label: "me", content: meContent },
            { id: "current", label: "current", content: currentContent },
            { id: "previously", label: "previously", content: previouslyContent },
          ]}
        />
      </FadeIn>

      <FadeIn delay={150}>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://github.com/meowyx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://x.com/me256ow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sushmitaaar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </FadeIn>
    </div>
  )
}
