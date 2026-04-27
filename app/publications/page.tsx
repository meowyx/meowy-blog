import type { Metadata } from "next"
import { Eyebrow } from "@/components/eyebrow"
import { MetaCard } from "@/components/meta-card"
import { EraSection, type Era } from "@/components/era-section"
import { PublicationsFilter } from "@/components/publications-filter"
import "./publications.css"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Pieces I authored for company blogs, talks I've given, and courses I've worked on.",
}

const ERAS: Era[] = [
  {
    org: "blogs",
    catName: "blogs",
    where: (
      <>
        For <b>MetaMask</b>, <b>Linea</b>, <b>Gaia</b>, and others
      </>
    ),
    role: "Long-form technical pieces on EVM tooling, zk proof systems, and developer ergonomics.",
    items: [
      {
        url: "https://metamask.io/news/developers/how-to-implement-metamask-sdk-with-nextjs/",
        title: "How to Implement MetaMask SDK with Next.js",
        venue: "MetaMask",
        meta: "sdk · nextjs",
        year: "2024",
      },
      {
        url: "https://metamask.io/news/developers/how-to-build-a-simple-gas-tracker-app-with-gas-api-and-nextjs/",
        title: "How to Build a Simple Gas Tracker App with Gas API and Next.js",
        venue: "MetaMask",
        meta: "tutorial · gas-api",
        year: "2024",
      },
      {
        url: "https://metamask.io/news/developers/how-to-write-and-deploy-a-simple-stablecoin-on-linea/",
        title: "How to Write and Deploy a Simple Stablecoin on Linea",
        venue: "MetaMask",
        meta: "linea · stablecoin",
        year: "2024",
      },
      {
        url: "https://metamask.io/news/developers/viem-vs-ethers-js-a-detailed-comparison-for-web-3-developers/",
        title: "Viem vs. Ethers.js: A Detailed Comparison",
        venue: "MetaMask",
        meta: "libraries · comparison",
        year: "2024",
      },
      {
        url: "https://metamask.io/news/developers/hardhat-vs-foundry-choosing-the-right-ethereum-development-tool/",
        title: "Hardhat vs. Foundry: Choosing the Right Tool",
        venue: "MetaMask",
        meta: "tooling · comparison",
        year: "2024",
      },
      {
        url: "https://linea.mirror.xyz/SA0svXmNOu9SyhCDBcByiiftjqshtnb1jNJ7CYEt_pM",
        title: "AI Agents on Linea for Beginners",
        venue: "Linea",
        meta: "ai · agents",
        year: "2024",
      },
      {
        url: "https://linea.mirror.xyz/DRjLeGXCE-jD5U2dxUNbHtvnHfDCUVv18p4_RsUj5Sk",
        title: "Building on Linea: ERC20 & Tokens",
        venue: "Linea",
        meta: "erc20 · tutorial",
        year: "2024",
      },
      {
        url: "https://linea.mirror.xyz/h_Y_XazAtqDHODCqFMDs3jY2jn4B-Un8fepRP1xStBg",
        title: "The Linea Prover for Dummies",
        venue: "Linea",
        meta: "zk · explainer",
        year: "2024",
      },
      {
        url: "https://linea.mirror.xyz/zYD75brljMLn8nWudtihqvjd54nLK23P8-cnyvxmvSU",
        title: "Linea Prover, in Depth",
        venue: "Linea",
        meta: "zk · deep-dive",
        year: "2024",
      },
      {
        url: "https://x.com/me256ow/status/1907068665725645216",
        title: "How to Use Gaia in Any Application",
        venue: "Gaia",
        meta: "ai-infra · tutorial",
        year: "2024",
      },
      {
        url: "https://paragraph.xyz/@phosphor/developer-guide-phosphor",
        title: "Developer Guide: Phosphor",
        venue: "Phosphor",
        meta: "guide",
        year: "2023",
      },
      {
        url: "https://meowy.hashnode.dev/how-to-create-a-burnable-soulbound-nft",
        title: "How to Create a Burnable Soulbound NFT",
        venue: "Hashnode",
        meta: "nft · solidity",
        year: "2022",
      },
    ],
  },
  {
    org: "talks",
    catName: "videos & talks",
    where: <>YouTube live streams &amp; recorded sessions</>,
    role: "Workshops, office hours, and developer-facing builds, most for Gaia and Linea.",
    items: [
      {
        url: "https://youtu.be/_56ZlGQJcp0?si=o5rqZ1eyFNz8Qu_0",
        title: "How to Build with Gaia",
        venue: "Gaia",
        meta: "youtube · build",
        year: "video",
      },
      {
        url: "https://www.youtube.com/live/pPgQom5ijec?si=AluGxa3NTQ63-PMp",
        title: "Let's Vibe Architect with Gaia",
        venue: "Gaia",
        meta: "youtube · live",
        year: "live",
      },
      {
        url: "https://www.youtube.com/live/g2pzMa3tcl0?si=BVT3gO85EcpDIcyn",
        title: "Build a Simple Marketplace DApp on Linea",
        venue: "Linea",
        meta: "workshop",
        year: "live",
      },
      {
        url: "https://youtu.be/nvRvlel3iTQ?si=GxVp8Xpmu8qisgj2",
        title: "How To Deploy a Smart Contract on Linea Using Foundry",
        venue: "Linea",
        meta: "tutorial",
        year: "video",
      },
      {
        url: "https://youtu.be/b5gbbyP6G_8?si=8MQG3o2SIu00sCgJ",
        title: "How To Build a Decentralized Voting DApp on Linea",
        venue: "Linea",
        meta: "tutorial · dapp",
        year: "video",
      },
      {
        url: "https://www.youtube.com/live/bJ0R-V6V2AY?si=ZR_SElamZlFynA-r",
        title: "Gaia Engineering Office Hours",
        venue: "Gaia",
        meta: "office hours",
        year: "live",
      },
      {
        url: "https://www.youtube.com/live/H1vjPkeWDUM?si=GwuwhOfl6o5hEiQV",
        title: "Governance in Web3 and the Role of Linea",
        venue: "Linea",
        meta: "governance · talk",
        year: "live",
      },
    ],
  },
  {
    org: "courses",
    catName: "courses",
    where: <>Curriculum &amp; teaching</>,
    role: "Long-form educational material designed for builders new to web3.",
    items: [
      {
        url: "https://www.udacity.com/course/blockchain-developer--nd1310",
        title: "Blockchain Developer Nanodegree",
        venue: "Udacity",
        meta: "curriculum · instructor",
        year: "2023",
      },
      {
        url: "https://docs.gaianet.ai/category/-templates--examples",
        title: "Gaia Templates & Examples",
        venue: "Gaia",
        meta: "templates · docs",
        year: "2024",
      },
    ],
  },
]

export default function PublicationsPage() {
  const total = ERAS.reduce((n, e) => n + e.items.length, 0)
  return (
    <>
      <section className="pub-head">
        <div>
          <Eyebrow style={{ marginBottom: 18 }}>, elsewhere</Eyebrow>
          <h1>Publications.</h1>
          <p>
            Pieces I authored for company blogs, talks I&#39;ve given, and courses I&#39;ve
            worked on. Most are about web3 internals, EVM tooling, zk, and AI infrastructure.
            Originals live where they were published, these are the canonical links.
          </p>
        </div>
        <MetaCard
          entries={[
            { label: "Total", value: `${total} pieces · ${ERAS.length} categories` },
            { label: "Range", value: "2022 to 2025" },
            { label: "Topics", value: "evm · linea · gaia · zk · solana" },
          ]}
        />
      </section>

      <PublicationsFilter />

      {ERAS.map((era) => <EraSection key={era.org} era={era} />)}

      <div className="pub-foot">
        Hunting for a piece that isn&#39;t here, or want me to write something?{" "}
        <a href="https://x.com/me256ow" target="_blank" rel="noopener noreferrer" className="link">
          DM me on X
        </a>{" "}
        or reach out via{" "}
        <a href="/about" className="link">
          the about page
        </a>
        .
      </div>
    </>
  )
}
