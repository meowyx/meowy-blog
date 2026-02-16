import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { format } from "date-fns"
import { FadeIn } from "@/components/fade-in"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  const posts = getAllPosts("posts")

  return (
    <div>
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold">meowy&apos;s blogs</h1>
          <Link
            href="/learning"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="Learning mode"
          >
            <BookOpen className="size-5" />
          </Link>
        </div>
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
      </ul>
    </div>
  )
}
