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

export default function AboutPage() {
  return (
    <>
      <section className="about-head">
        <div className="head-main">
          <Eyebrow style={{ marginBottom: 18 }}>about</Eyebrow>
          <h1>
            I&#39;m <em>meowy</em>. These days, I&#39;m a rust dev.
          </h1>
          <p className="lede">
            A longer version of who I am, where I&#39;ve been, and what I&#39;m into now.
            I spent the last four years in web3 devrel, writing tutorials and shipping
            templates across a bunch of teams. Now I&#39;m focused on backend, distributed
            systems, and getting deeper into rust.
          </p>
        </div>
        <YouTubeLink />
      </section>

      <section className="prose">
        <h2>Now</h2>
        <div className="body">
          <p>
            Rust is the thing I want to be really good at. Backend systems, distributed
            services, observability, and the parts of solana that live below the program
            layer. I&#39;m reading source, shipping side projects, and writing about what I
            learn as I learn it.
          </p>
          <p>
            Day-to-day I&#39;m working in <strong>rust, tokio, axum, tonic, and gRPC</strong>.
            Co-founding{" "}
            <a href="https://www.kronos.build/" target="_blank" rel="noopener noreferrer">
              kronos guild
            </a>
            , a small solana developer community, and building{" "}
            <a href="https://github.com/meowyx/gulfwatch" target="_blank" rel="noopener noreferrer">
              gulfwatch
            </a>{" "}
            as my main side project. Open to full-time backend / rust roles, freelance,
            and code-review work.
          </p>
        </div>
      </section>

      <section className="prose">
        <h2>Previously</h2>
        <div className="body">
          <p>
            Most of my work the last four years has been developer relations and developer
            education. Some of the highlights:
          </p>
          <ul className="dot">
            <li>
              <strong>Devrel engineer at Consensys</strong>, building production dapps,
              templates, and CLI tools, and writing technical deep-dives for MetaMask,
              Infura, and Linea.
            </li>
            <li>
              <strong>Devrel engineer at{" "}
                <a href="https://www.gaianet.ai/" target="_blank" rel="noopener noreferrer">
                  Gaia
                </a>
              </strong>
              , an AI infra startup, where I built developer tooling and technical docs for
              their decentralized AI stack.
            </li>
            <li>
              <strong>Founded the education team at{" "}
                <a href="https://academy.developerdao.com/" target="_blank" rel="noopener noreferrer">
                  Developer DAO
                </a>
              </strong>{" "}
              and launched the open-source web3 academy.
            </li>
            <li>
              <strong>Instructor at{" "}
                <a href="https://www.udacity.com/course/blockchain-developer--nd1310" target="_blank" rel="noopener noreferrer">
                  Udacity
                </a>
              </strong>{" "}
              on the Blockchain Developer Nanodegree.
            </li>
            <li>
              <strong>Educational consultant at{" "}
                <a href="https://dev.chain.link/certification" target="_blank" rel="noopener noreferrer">
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
            A lot of my technical writing lives on other people&#39;s sites. The full set is
            scattered, but here are the main venues if you want to dig:
          </p>
          <ul className="dot">
            <li>
              <strong>MetaMask</strong> developer blog — tutorials on the metamask sdk, gas
              api, viem vs ethers, hardhat vs foundry, and deploying stablecoins on linea.{" "}
              <a
                href="https://metamask.io/news/developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                metamask.io/news/developers
              </a>
            </li>
            <li>
              <strong>Linea</strong> on mirror.xyz — deep-dives on the linea prover, ai
              agents on linea, ERC20 walkthroughs, and a series of workshops.{" "}
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
