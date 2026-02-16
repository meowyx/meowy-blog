import type { Metadata } from "next"
import { FadeIn } from "@/components/fade-in"
import { LinkPreview } from "@/components/link-preview"

export const metadata: Metadata = {
  title: "Publications",
}

const publications = [
  {
    category: "blogs",
    items: [
      { title: "How to Implement MetaMask SDK with Next.js", url: "https://metamask.io/news/developers/how-to-implement-metamask-sdk-with-nextjs/" },
      { title: "How to Build a Simple Gas Tracker App with Gas API and Next.js", url: "https://metamask.io/news/developers/how-to-build-a-simple-gas-tracker-app-with-gas-api-and-nextjs/" },
      { title: "How to Write and Deploy a Simple Stablecoin on Linea", url: "https://metamask.io/news/developers/how-to-write-and-deploy-a-simple-stablecoin-on-linea/" },
      { title: "Viem vs. Ethers.js: A Detailed Comparison", url: "https://metamask.io/news/developers/viem-vs-ethers-js-a-detailed-comparison-for-web-3-developers/" },
      { title: "Hardhat vs. Foundry: Choosing the Right Tool", url: "https://metamask.io/news/developers/hardhat-vs-foundry-choosing-the-right-ethereum-development-tool/" },
      { title: "AI Agents on Linea for Beginners", url: "https://linea.mirror.xyz/SA0svXmNOu9SyhCDBcByiiftjqshtnb1jNJ7CYEt_pM" },
      { title: "Building on Linea: ERC20 & Tokens", url: "https://linea.mirror.xyz/DRjLeGXCE-jD5U2dxUNbHtvnHfDCUVv18p4_RsUj5Sk" },
      { title: "The Linea Prover For Dummies", url: "https://linea.mirror.xyz/h_Y_XazAtqDHODCqFMDs3jY2jn4B-Un8fepRP1xStBg" },
      { title: "Linea Prover in Depth", url: "https://linea.mirror.xyz/zYD75brljMLn8nWudtihqvjd54nLK23P8-cnyvxmvSU" },
      { title: "How to Use Gaia in Any Application", url: "https://x.com/me256ow/status/1907068665725645216" },
      { title: "Developer Guide: Phosphor", url: "https://paragraph.xyz/@phosphor/developer-guide-phosphor" },
      { title: "How to create a Burnable Soulbound NFT", url: "https://meowy.hashnode.dev/how-to-create-a-burnable-soulbound-nft" },
    ],
  },
  {
    category: "videos & talks",
    items: [
      { title: "How To Build with Gaia", url: "https://youtu.be/_56ZlGQJcp0?si=o5rqZ1eyFNz8Qu_0" },
      { title: "Let's Vibe Architect with Gaia", url: "https://www.youtube.com/live/pPgQom5ijec?si=AluGxa3NTQ63-PMp" },
      { title: "Build a Simple Marketplace DApp on Linea", url: "https://www.youtube.com/live/g2pzMa3tcl0?si=BVT3gO85EcpDIcyn" },
      { title: "How To Deploy a Smart Contract on Linea Using Foundry", url: "https://youtu.be/nvRvlel3iTQ?si=GxVp8Xpmu8qisgj2" },
      { title: "How To Build a Decentralized Voting DApp on Linea", url: "https://youtu.be/b5gbbyP6G_8?si=8MQG3o2SIu00sCgJ" },
      { title: "Gaia Engineering Office Hours", url: "https://www.youtube.com/live/bJ0R-V6V2AY?si=ZR_SElamZlFynA-r" },
      { title: "Governance in web3 and the role of Linea", url: "https://www.youtube.com/live/H1vjPkeWDUM?si=GwuwhOfl6o5hEiQV" },
    ],
  },
  {
    category: "courses",
    items: [
      { title: "Blockchain Developer Nanodegree, Udacity", url: "https://www.udacity.com/course/blockchain-developer--nd1310" },
      { title: "Gaia Templates & Examples", url: "https://docs.gaianet.ai/category/-templates--examples" },
    ],
  },
]

export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <FadeIn>
        <h1 className="text-xl font-semibold">publications</h1>
      </FadeIn>

      {publications.map((section, i) => (
        <FadeIn key={section.category} delay={(i + 1) * 50}>
          <section>
            <h2 className="text-sm text-muted-foreground mb-3">
              {section.category}
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              {section.items.map((item) => (
                <li key={item.url}>
                  <LinkPreview
                    href={item.url}
                    className="underline underline-offset-2"
                  >
                    {item.title}
                  </LinkPreview>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      ))}
    </div>
  )
}
