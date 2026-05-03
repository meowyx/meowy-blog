import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { format } from "date-fns"
import { getAllSlugs, getPostBySlug } from "@/lib/posts"
import { mdxOptions } from "@/lib/mdx"
import { mdxComponents } from "@/lib/mdx-components"
import "./post.css"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article>
      <header className="post-head">
        <Link href="/" className="crumb">
          ← back to blog
        </Link>
        <h1>{post.title}</h1>
        {post.description && <p className="desc">{post.description}</p>}
        <div className="meta">
          {post.date && (
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMM d, yyyy")}
            </time>
          )}
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </>
          )}
        </div>
      </header>

      <div className="prose-mdx">
        <MDXRemote
          source={post.content}
          options={mdxOptions}
          components={mdxComponents}
        />
      </div>
    </article>
  )
}
