const projects = [
  {
    href: "https://github.com/meowyx/gulfwatch",
    title: "gulfwatch",
    description:
      "real-time solana program observability in rust. bounded channels, 9+ detection rules, 6-tab transaction deep-dive, and an mcp server for agents. one binary, five surfaces (tui, web, rest, websocket, mcp)",
    stack: "rust · tokio · axum · ratatui · rmcp",
  },
  {
    href: "https://github.com/meowyx/solana-contest-platform",
    title: "solarena",
    description:
      "decentralized solana contest platform. anchor escrow, pda-tracked entries, multisig judging, and fee-sponsored transactions so participants enter without holding sol",
    stack: "rust · anchor · next.js",
  },
  {
    href: "https://github.com/meowyx/mewtui-editor",
    title: "mewtui",
    description:
      "a three-pane terminal code editor built in rust. shell on the left, code editor in the middle, file tree on the right. runs inside your existing terminal",
    stack: "rust · ratatui · crates.io",
  },
  {
    href: "https://github.com/meowyx/dispatch-router",
    title: "dispatch-router",
    description:
      "real-time delivery assignment service with task-to-worker matching with scoring algorithms, gRPC, and axum",
    stack: "rust · tokio · axum · tonic · dashmap",
  },
  {
    href: "https://github.com/meowyx/router-flow",
    title: "router-flow",
    description:
      "distributed logistics simulator with 4 microservices communicating via gRPC with opentelemetry tracing and prometheus observability",
    stack: "rust · tonic · tokio · ratatui · dashmap",
  },
  {
    href: "https://github.com/meowyx/pinocchio-fundraiser",
    title: "pinocchio-fundraiser",
    description:
      "native solana fundraiser program built with pinocchio. create fundraisers with targets and deadlines, back with tokens, claim funds or refunds",
    stack: "rust · solana · pinocchio",
  },
  {
    href: "https://github.com/meowyx/pinocchio-escrow",
    title: "pinocchio-escrow",
    description:
      "native solana token escrow program built with pinocchio. no anchor, no borsh, raw account manipulation with minimal compute overhead for two-party token swaps",
    stack: "rust · solana · pinocchio",
  },
]

const loop = [...projects, ...projects]

export function ProjectCardsMarquee() {
  return (
    <div className="relative -mx-6 sm:-mx-8 overflow-hidden mask-fade-x">
      <div className="flex w-max gap-4 px-6 sm:px-8 pb-2 animate-marquee hover:[animation-play-state:paused]">
        {loop.map((project, i) => (
          <a
            key={`${project.href}-${i}`}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-72 border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors bg-background/40"
          >
            <h3 className="font-medium text-sm">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-1.5 line-clamp-3">
              {project.description}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-3">
              {project.stack}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
