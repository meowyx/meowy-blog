import type { Metadata } from "next"
import { BlogArchive } from "@/components/blog-archive"
import { Eyebrow } from "@/components/eyebrow"
import { MetaCard } from "@/components/meta-card"
import { RowHead } from "@/components/row-head"
import { FEATURED, getAllBlogEntries } from "@/lib/blog-data"
import "./blog.css"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Long-form notes on rust, web3 tooling, and the unglamorous middle of building software.",
}

export default function BlogPage() {
  const entries = getAllBlogEntries()

  return (
    <>
      <section className="blog-head">
        <div>
          <Eyebrow style={{ marginBottom: 18 }}>writing</Eyebrow>
          <h1>The blog.</h1>
          <p>
            Long-form notes on rust, web3 tooling, and the unglamorous middle of building
            software. For pieces I wrote elsewhere (MetaMask, Linea, Gaia, talks, courses)
            see <a href="/publications" className="link" style={{ color: "var(--accent)" }}>publications</a>.
          </p>
        </div>
        <MetaCard
          entries={[
            { label: "Total posts", value: `${entries.length} in archive` },
            { label: "Topics", value: "rust · solana · evm · zk · tutorials" },
            { label: "Coming up", value: "gulfwatch design notes · helius latency writeup" },
          ]}
        />
      </section>

      <section>
        <RowHead title="Featured" hint="hand-picked · most recent on top" />
        <div className="featured-grid">
          {FEATURED.map((f) => (
            <a key={f.url} href={f.url} className="feat">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <div className="foot">
                <span>{f.meta}</span>
                <span className="arrow">read →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="archive-wrap">
        <RowHead title="Archive" hint={`${entries.length} posts`} />
        <BlogArchive entries={entries} />
      </section>

      <div className="draft-note">
        <strong>In drafts:</strong> a writeup of the gulfwatch design decisions, and the
        helius wallet-history latency challenge (262s → 80s). Follow on{" "}
        <a href="https://x.com/me256ow" target="_blank" rel="noopener noreferrer">X</a> or
        watch the{" "}
        <a href="https://github.com/meowyx" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
        for these.
      </div>
    </>
  )
}
