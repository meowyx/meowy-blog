import type { Metadata } from "next"
import { Github, Linkedin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { LinkPreview } from "@/components/link-preview"

export const metadata: Metadata = {
  title: "Sushmita R. (aka meowy)",
  description:
    "Frontend engineer and Solana developer, focused on building polished, high-performance interfaces and developer tools.",
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <h1 className="text-xl font-semibold mb-6">
          Sushmita R. (aka meowy)
        </h1>
      </FadeIn>

      <FadeIn delay={50}>
        <section>
          <h2 className="text-sm text-muted-foreground mb-3">me</h2>
          <ul className="list-disc pl-5 space-y-2 leading-relaxed">
            <li>
              frontend engineer and solana developer, focused on building
              polished, high-performance interfaces and developer tools
            </li>
            <li>deep focus in ux and visual craft</li>
            <li>
              been diving deep into rust, solana internals, pinocchio, and
              low-level systems programming
            </li>
            <li>
              core contributor to solana foundation open-source projects,
              second-highest contributor to{" "}
              <LinkPreview
                href="https://github.com/solana-foundation/solana-com"
                className="underline underline-offset-2"
              >
                solana-foundation/templates
              </LinkPreview>
            </li>
            <li>
              published sdk author, former devrel engineer at consensys
            </li>
            <li>
              building with next.js, react native, rust, typescript, anchor,
              and @solana/kit
            </li>
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section>
          <h2 className="text-sm text-muted-foreground mb-3">current</h2>
          <ul className="list-disc pl-5 space-y-2 leading-relaxed">
            <li>
              freelance software engineer, building performance-critical
              blockchain infrastructure for web3 projects
            </li>
            <li>
              co-founder of{" "}
              <LinkPreview
                href="https://www.kronos.build/"
                className="underline underline-offset-2"
              >
                kronos guild
              </LinkPreview>
              , solana developer community with open source templates and
              tooling
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
              open to collaborating with anyone building or educating about
              solana
            </li>
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={150}>
        <section>
          <h2 className="text-sm text-muted-foreground mb-3">previously</h2>
          <ul className="list-disc pl-5 space-y-2 leading-relaxed">
            <li>
              devrel engineer at consensys, built 10+ production dapps,
              templates, CLI tools, and authored 15+ technical blogs for
              metamask, infura, and linea
            </li>
            <li>
              devrel engineer at{" "}
              <LinkPreview
                href="https://www.gaianet.ai/"
                className="underline underline-offset-2"
              >
                gaia
              </LinkPreview>{" "}
              (ai startup), built developer tooling, CLI tools, and technical
              docs for their decentralized AI infrastructure
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
                <LinkPreview href="https://dev.chain.link/certification">chainlink labs</LinkPreview>
              </li>
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
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
