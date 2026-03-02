import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { format } from "date-fns"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <FadeIn>
        <h1 className="text-xl font-semibold mb-8">meowy&apos;s blogs</h1>
      </FadeIn>

      <ul className="space-y-3">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 50}>
            <li>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
              >
                <span className="group-hover:underline">{post.title}</span>
                {post.date && (
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </span>
                )}
              </Link>
            </li>
          </FadeIn>
        ))}

        <FadeIn delay={posts.length * 50}>
          <li
            className="group relative text-muted-foreground/40 cursor-default flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
            title="coming soon"
          >
            <span>Building a Real-Time Courier Assignment Service in Rust</span>
            <span className="shrink-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              coming soon
            </span>
          </li>
        </FadeIn>
      </ul>
    </div>
  )
}
