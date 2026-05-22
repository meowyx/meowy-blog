import type { Metadata } from "next"
import { BlogArchive } from "@/components/blog-archive"
import { Eyebrow } from "@/components/eyebrow"
import { SubscribeForm } from "@/components/subscribe-form"
import { YouTubeLink } from "@/components/youtube-link"
import { getAllBlogEntries } from "@/lib/blog-data"
import "./blog/blog.css"

export const metadata: Metadata = {
  title: "meowy",
  description:
    "Notes on Rust, Go, frontend, backend, and the cryptography and math.",
}

export default function HomePage() {
  const entries = getAllBlogEntries()

  return (
    <>
      <section className="blog-head">
        <div>
          <Eyebrow style={{ marginBottom: 18 }}>writing</Eyebrow>
          <h1>The blog.</h1>
          <p>
            Notes on Rust, Go, frontend, backend, and the cryptography and math.
          </p>
        </div>
        <YouTubeLink />
      </section>

      <section className="archive-wrap">
        <div className="row-head">
          <h2>archive</h2>
          <span className="count">{entries.length} posts</span>
        </div>
        <BlogArchive entries={entries} />
      </section>

      <SubscribeForm />
    </>
  )
}
