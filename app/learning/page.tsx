import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { format } from "date-fns"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Learning",
}

export default function LearningPage() {
  const notes = getAllPosts("notes")

  // Group by category
  const grouped: Record<string, typeof notes> = {}
  for (const note of notes) {
    const cat = note.category || "other"
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push(note)
  }

  const categoryLabels: Record<string, string> = {
    "rust-core": "Rust Core",
    "rust-advanced": "Rust Advanced",
    other: "Other",
  }

  return (
    <div className="space-y-8">
      <FadeIn>
        <h1 className="text-xl font-semibold">learning notes</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Notes and things I&apos;m learning, mostly from books and docs.
        </p>
      </FadeIn>

      {Object.entries(grouped).map(([category, posts], i) => (
        <FadeIn key={category} delay={(i + 1) * 50}>
          <section>
            <h2 className="text-sm font-medium text-muted-foreground mb-3">
              {categoryLabels[category] || category}
            </h2>
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-baseline gap-3"
                  >
                    <span className="group-hover:underline">{post.title}</span>
                    {post.date && (
                      <span className="shrink-0 text-sm text-muted-foreground">
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      ))}
    </div>
  )
}
