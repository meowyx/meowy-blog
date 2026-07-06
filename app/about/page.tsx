import type { Metadata } from "next";
import Link from "next/link";
import { Chassis, type TxItem } from "@/components/chassis";
import { getAllPosts } from "@/lib/posts";
import { getPublicationCount } from "@/lib/publications";

export const metadata: Metadata = {
  title: "about",
  description:
    "Sushmita R (meowy) - full-stack engineer. I build full-stack apps, dev tooling, and on-chain backends.",
};

const ASCII_FACE = " /\\_/\\\n( o.O )\n  >v<";
const pad2 = (n: number) => String(n).padStart(2, "0");
const pad3 = (n: number) => String(n).padStart(3, "0");

// Real project list, ported from the existing /about (with real links).
const PROJECTS: {
  title: string;
  tag: string;
  href: string;
  wide?: boolean;
}[] = [
  {
    title:
      "micro-svm-rollup - minimal rollup that runs txs off-chain through the svm, settling batched state on mainnet",
    tag: "[ RUST · RATATUI · SOLANA-SVM · AGAVE ]",
    href: "https://github.com/meowyx/micro-svm-rollup",
    wide: true,
  },
  {
    title: "constellation-encoder - reed-solomon erasure encoder at 4x redundancy",
    tag: "[ RUST · REED-SOLOMON · ERASURE CODING · SOLANA ]",
    href: "https://github.com/meowyx/constellation-encoder",
    wide: true,
  },
  {
    title: "zero to rust - written companion guide to the video series",
    tag: "[ RUST · GUIDE ]",
    href: "https://www.zerotorust.com/",
    wide: true,
  },
  {
    title:
      "xdp-packet-router - kernel-level packet demultiplexer that sorts consensus traffic by source proposer",
    tag: "[ RUST · EBPF/XDP · AYA · TOKIO · NO_STD · MUSL CROSS-COMPILE · LINUX KERNEL ]",
    href: "https://github.com/meowyx/xdp-packet-router",
    wide: true,
  },
  {
    title:
      "agentic-vault - an agentic app to talk to any kind of notes & documents",
    tag: "[ PYTHON · FASTAPI · LANGGRAPH · LANGCHAIN · CHROMA · REDIS · SQLITE · JWT · LANGFUSE · OPENAI ]",
    href: "https://github.com/meowyx/agentic-vault",
    wide: true,
  },
  {
    title:
      "agave-votor-scope - profiling agave's banking_stage against alpenglow votor's timing budget",
    tag: "[ RUST · TOKIO · AGAVE · SVM · TOKIO-CONSOLE ]",
    href: "https://github.com/meowyx/agave-votor-scope",
    wide: true,
  },
  {
    title: "wiki-rag - tiny rag app to ask notes & get answers with citations",
    tag: "[ PYTHON · FASTAPI · LANGCHAIN · CHROMA · REDIS · SQLITE · LANGFUSE · RAGAS · OPENAI ]",
    href: "https://github.com/meowyx/wiki-rag",
    wide: true,
  },
  {
    title: "gulfwatch - real-time solana program observability",
    tag: "[ RUST · TOKIO · AXUM ]",
    href: "https://github.com/meowyx/gulfwatch",
  },
  {
    title: "raffl.fun - on-chain raffle protocol on solana",
    tag: "[ ANCHOR · VRF · NEXT.JS ]",
    href: "https://raffl.fun",
  },
  {
    title: "mewtui - terminal code editor in rust, on crates.io",
    tag: "[ RUST · TOKIO · RATATUI ]",
    href: "https://crates.io/crates/mewtui",
  },
  {
    title: "solana contest platform - decentralized contests with anchor",
    tag: "[ RUST · ANCHOR · NEXT.JS ]",
    href: "https://github.com/meowyx/solana-contest-platform",
  },
  {
    title: "dispatch router - real-time delivery assignment service",
    tag: "[ RUST · AXUM · TONIC ]",
    href: "https://github.com/meowyx/dispatch-router",
  },
  {
    title: "rust tutorial series - weekly rust tutorials",
    tag: "[ RUST · VIDEO ]",
    href: "https://www.youtube.com/@MeowyTheDev",
  },
  {
    title: "research agent - dual-agent research system on a local llm",
    tag: "[ MULTI-AGENT · LOCAL LLM ]",
    href: "https://github.com/meowyx/research-agent",
  },
  {
    title: "chess agent - chess-playing agent on a local llm",
    tag: "[ NEXT.JS · LOCAL LLM ]",
    href: "https://github.com/meowyx/chess-agent",
  },
  {
    title: "helius latency challenge - wallet history, 262s to 80s",
    tag: "[ RUST · TOKIO · REQWEST ]",
    href: "https://github.com/meowyx/computing-sol-algo",
  },
  {
    title: "local llm picker - cli that picks a local llm for your hardware",
    tag: "[ JS · CLI · LOCAL LLM ]",
    href: "https://github.com/meowyx/gaia-toolkit",
  },
  {
    title: "agentic erc-20 deployer - deploy erc-20s via a language agent",
    tag: "[ NEXT.JS · METAMASK · LLM ]",
    href: "https://github.com/meowyx/metamask-gaia-starter",
  },
  {
    title: "solana amm - constant-product market maker",
    tag: "[ RUST · ANCHOR ]",
    href: "https://github.com/meowyx/solana-amm",
  },
  {
    title: "pinocchio escrow - native solana escrow, no anchor",
    tag: "[ RUST · PINOCCHIO ]",
    href: "https://github.com/meowyx/pinocchio-escrow",
  },
  {
    title: "pinocchio fundraiser - native solana crowdfunder with refunds",
    tag: "[ RUST · PINOCCHIO ]",
    href: "https://github.com/meowyx/pinocchio-fundraiser",
  },
  {
    title: "solana escrow - trustless two-party token swap",
    tag: "[ RUST · ANCHOR ]",
    href: "https://github.com/meowyx/solana-escrow",
  },
  {
    title: "metaplex nft collection - nft program with metaplex core",
    tag: "[ RUST · ANCHOR · METAPLEX ]",
    href: "https://github.com/meowyx/metaplex-nft-collection",
  },
  {
    title: "token-2022 transfer hook - whitelist-gated token transfers",
    tag: "[ RUST · TOKEN-2022 ]",
    href: "https://github.com/meowyx/token2022-transfer-hook",
  },
];

export default function AboutPage() {
  const posts = getAllPosts();
  const recent: TxItem[] = posts.slice(0, 3).map((p, i) => ({
    num: pad3(i + 1),
    title: p.title,
    href: `/blog/${p.slug}`,
  }));

  const nowScreen = (
    <div>
      <div className="now-label">OPERATOR</div>
      <div className="now-screen">
        <div className="now-row">
          <span className="now-key">NAME</span>
          <span className="now-val">SUSHMITA R</span>
        </div>
        <div className="now-row">
          <span className="now-key">ALIAS</span>
          <span className="now-val">MEOWY</span>
        </div>
        <div className="now-row">
          <span className="now-key">STACK</span>
          <span className="now-val">RUST · TS · PY</span>
        </div>
        <div className="now-row">
          <span className="now-key">STAT</span>
          <span className="now-val">SHIPPING</span>
        </div>
      </div>
    </div>
  );

  return (
    <Chassis
      channel={1}
      ch="ch.02"
      now="- about"
      tx={recent}
      nowScreen={nowScreen}
      cassetteTape="SIDE B · DOSSIER MMXXVI"
    >
      <div className="hero-block">
        <pre className="ascii">{ASCII_FACE}</pre>
        <div>
          <h1 className="h-title">
            I&apos;M SUSHMITA
            <br />
            (AKA{" "}
            <span className="big">
              MEOWY<span className="cursor">.</span>
            </span>
            )
          </h1>
          <p className="lede">
            <span className="prompt">&gt;</span> full-stack engineer,{" "}
            <b>5+ years</b> shipping software. i build full-stack apps, dev
            tooling, and on-chain systems down to the validator.
          </p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-cell">
          <div className="k">EXP</div>
          <div className="v">5+yr</div>
        </div>
        <div className="stat-cell">
          <div className="k">PROJECTS</div>
          <div className="v">{PROJECTS.length}+</div>
        </div>
        <div className="stat-cell">
          <div className="k">WRITING</div>
          <div className="v">{posts.length + getPublicationCount()}+</div>
        </div>
        <div className="stat-cell">
          <div className="k">CAT</div>
          <div className="v">×1</div>
        </div>
      </div>

      <div className="bio-grid">
        <div>
          <h3>BIO</h3>
          <article className="prose" style={{ maxWidth: "none" }}>
            <p>
              frontend in <b>next.js</b> with typescript. backends depend on the
              job: <b>rust</b>, <b>go</b>, or <b>python</b>.
            </p>
            <p>
              right now i&apos;m an <b>ai engineer</b> building a production
              agent on a <b>langgraph</b> stack. most of my day is agent
              routing, prompt engineering, and the llm evals that prove a change
              actually works before it ships.
            </p>
            <p>
              and i&apos;m deep in <b>solana&apos;s validator</b>: svm internals,
              alpenglow consensus, kernel-bypass networking, and profiling the
              hot path against a latency budget.
            </p>
            <p>
              i learn and build in public, write technical deep-dives, and make
              video to match. i love teaching what i build. most of my work the
              last 5+ years has been developer relations and developer
              education.
            </p>
          </article>
        </div>
        <div>
          <h3>INTERESTS</h3>
          <ul
            className="prose"
            style={{ margin: 0, paddingLeft: 24, fontSize: 18 }}
          >
            <li>full-stack apps</li>
            <li>dev tooling</li>
            <li>distributed systems &amp; observability</li>
            <li>apis &amp; databases</li>
            <li>ai agents &amp; agentic development</li>
            <li>solana protocol &amp; validator internals</li>
            <li>low-latency systems &amp; kernel bypass</li>
          </ul>
        </div>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 01 ]</span> <span>PROJECTS</span>
        </span>
        <span className="count">{pad2(PROJECTS.length)} SHIPPED</span>
      </div>

      <div className="row-list proj-list">
        {PROJECTS.map((p, i) => (
          <a
            className={`row-item${p.wide ? " row-item--wide" : ""}`}
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="idx">P-{pad2(i + 1)}</span>
            <span className="title">{p.title}</span>
            <span className="tag">{p.tag}</span>
            <span className="arr">▸</span>
          </a>
        ))}
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 02 ]</span> <span>CURRENTLY</span>
        </span>
        <span className="count">CONTRACT + TEACHING</span>
      </div>

      <div className="term-block">
        <ul
          className="prose"
          style={{ margin: 0, paddingLeft: 24, fontSize: 18 }}
        >
          <li>
            <b>
              ai engineer @{" "}
              <a
                href="https://leveor.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                leveor
              </a>
            </b>{" "}
            (contract) - production ai agent on a <b>langgraph</b> stack. agent
            routing, prompt engineering, cosmos db
            backend work, and the llm evals that prove a change works before it
            ships.
          </li>
          <li>
            <b>
              instructor @{" "}
              <a
                href="https://turbin3.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                turbin3
              </a>
            </b>{" "}
            (part-time) - guide cohort members through complex topics, curate
            the learning resources, and give hands-on debugging support.
          </li>
        </ul>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 03 ]</span> <span>PREVIOUSLY</span>
        </span>
        <span className="count">DEVREL + EDUCATION</span>
      </div>

      <div className="term-block">
        <ul
          className="prose"
          style={{ margin: 0, paddingLeft: 24, fontSize: 18 }}
        >
          <li>
            <b>
              devrel engineer @{" "}
              <a
                href="https://consensys.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                consensys
              </a>
            </b>{" "}
            - production dapps, templates, and cli tools, plus technical
            deep-dives for metamask, infura, and linea.
          </li>
          <li>
            <b>
              devrel engineer @{" "}
              <a
                href="https://www.gaianet.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                gaia
              </a>
            </b>{" "}
            - ai infra startup; built dev tooling and docs for their
            decentralized ai stack.
          </li>
          <li>
            <b>
              founded the education team @{" "}
              <a
                href="https://academy.developerdao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                developer dao
              </a>
            </b>{" "}
            - launched the open-source web3 academy, used by 1000+ devs.
          </li>
          <li>
            <b>
              instructor @{" "}
              <a
                href="https://www.udacity.com/course/blockchain-developer--nd1310"
                target="_blank"
                rel="noopener noreferrer"
              >
                udacity
              </a>
            </b>{" "}
            - blockchain developer nanodegree.
          </li>
          <li>
            <b>
              education consultant @{" "}
              <a
                href="https://dev.chain.link/certification"
                target="_blank"
                rel="noopener noreferrer"
              >
                chainlink labs
              </a>
            </b>{" "}
            - designed their certification exam framework.
          </li>
        </ul>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 04 ]</span>{" "}
          <span>PUBLICATIONS ELSEWHERE</span>
        </span>
      </div>

      <article className="prose">
        <p>
          a lot of my technical writing lives on other people&apos;s sites. the
          main venues:
        </p>
        <ul>
          <li>
            <b>metamask</b> dev blog - tutorials on the sdk, gas api, viem vs
            ethers, hardhat vs foundry, and stablecoins on linea.{" "}
            <a
              href="https://metamask.io/news/developers"
              target="_blank"
              rel="noopener noreferrer"
            >
              metamask.io/news/developers
            </a>
          </li>
          <li>
            <b>linea</b> on mirror.xyz - deep-dives on the prover, ai agents on
            linea, ERC20 walkthroughs, and a workshop series.{" "}
            <a
              href="https://linea.mirror.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              linea.mirror.xyz
            </a>
          </li>
        </ul>
        <p>
          <Link href="/publications">► see the full list on publications</Link>
        </p>
      </article>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 05 ]</span> <span>HACKATHONS · 2022</span>
        </span>
        <span className="count">×2 BOUNTY WINS</span>
      </div>

      <div className="term-block">
        <ul
          className="prose"
          style={{ margin: 0, paddingLeft: 24, fontSize: 18 }}
        >
          <li>
            <b>glitch</b> - web3con hackathon, livepeer killer web3 video app
            bounty winner. a decentralized video streaming platform with
            tokengated functionality for live and on-demand video. (
            <a
              href="https://github.com/e-roy/glitch"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
            )
          </li>
          <li>
            <b>building blocks</b> - chainlink hackathon, top 40 chainlink
            projects bounty. on-demand multisig with horizontal governance:
            every member votes, every action is persistent on-chain. (
            <a
              href="https://github.com/diegoalzate/building-blocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
            )
          </li>
        </ul>
      </div>

      <div className="section-head">
        <span className="title-row">
          <span className="num">[ 06 ]</span> <span>REACH ME</span>
        </span>
        <span className="count">FASTEST: BE SPECIFIC IN ¶1</span>
      </div>

      <div
        className="stat-grid"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <a
          href="https://github.com/meowyx"
          target="_blank"
          rel="noopener noreferrer"
          className="stat-cell"
          style={{ textDecoration: "none" }}
        >
          <div className="k">GITHUB</div>
          <div className="v" style={{ fontSize: 22 }}>
            @meowyx
          </div>
        </a>
        <a
          href="https://x.com/me256ow"
          target="_blank"
          rel="noopener noreferrer"
          className="stat-cell"
          style={{ textDecoration: "none" }}
        >
          <div className="k">X / TWITTER</div>
          <div className="v" style={{ fontSize: 22 }}>
            @me256ow
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/sushmitaaar/"
          target="_blank"
          rel="noopener noreferrer"
          className="stat-cell"
          style={{ textDecoration: "none" }}
        >
          <div className="k">LINKEDIN</div>
          <div className="v" style={{ fontSize: 22 }}>
            sushmitaaar
          </div>
        </a>
      </div>

      <div className="eof">END OF DOSSIER</div>
    </Chassis>
  );
}
