import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug } from "@/lib/posts"
import { mdxOptions } from "@/lib/mdx"
import { mdxComponents } from "@/lib/mdx-components"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/fade-in"
import { format } from "date-fns"
import Link from "next/link"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug: slug.split("/"),
  }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const slugStr = slug.join("/")
  const post = getPostBySlug(slugStr)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const slugStr = slug.join("/")
  const post = getPostBySlug(slugStr)
  if (!post) notFound()

  return (
    <article>
      <FadeIn>
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back
          </Link>
        </nav>

        <header className="mb-8 space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-foreground/60">{post.description}</p>
          )}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {post.date && (
              <time dateTime={post.date}>
                {format(new Date(post.date), "MMM d, yyyy")}
              </time>
            )}
            {post.tags.length > 0 && (
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </header>
      </FadeIn>

      <div>
        <MDXRemote
          source={post.content}
          options={mdxOptions}
          components={mdxComponents}
        />
      </div>
    </article>
  )
}
