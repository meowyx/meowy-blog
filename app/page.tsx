import type { Metadata } from "next"
import { BlogArchive } from "@/components/blog-archive"
import { Eyebrow } from "@/components/eyebrow"
import { YouTubeLink } from "@/components/youtube-link"
import { getAllBlogEntries } from "@/lib/blog-data"
import "./blog/blog.css"

export const metadata: Metadata = {
  title: "meowy",
  description:
    "Notes on rust, backends, and the unglamorous middle of building software.",
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
            Notes on rust, backends, and the unglamorous middle of building software.
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
    </>
  )
}
