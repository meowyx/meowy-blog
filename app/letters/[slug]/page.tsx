import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { format } from "date-fns"
import { getAllLetterSlugs, getLetterBySlug } from "@/lib/letters"
import { mdxOptions } from "@/lib/mdx"
import { mdxComponents } from "@/lib/mdx-components"
// Reuse the blog post prose styles verbatim so a letter renders identically
// to a post. Single source of truth, no duplicated CSS.
import "../../blog/[slug]/post.css"

export function generateStaticParams() {
  return getAllLetterSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const letter = getLetterBySlug(slug)
  // Unlisted: tell crawlers to never index or follow, even if the link leaks.
  const robots = { index: false, follow: false }
  if (!letter) return { title: "Not found", robots }
  return {
    title: letter.title,
    description: letter.description,
    robots,
  }
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const letter = getLetterBySlug(slug)
  if (!letter) notFound()

  return (
    <article>
      <header className="post-head">
        <div className="eyebrow">
          <span className="eyebrow-dot">●</span>a letter
        </div>
        <h1>{letter.company}</h1>
        {letter.role && <p className="desc">{letter.role}</p>}
        {letter.date && (
          <div className="meta">
            <time dateTime={letter.date}>
              {format(new Date(letter.date), "MMM d, yyyy")}
            </time>
          </div>
        )}
      </header>

      <div className="prose-mdx">
        <MDXRemote
          source={letter.content}
          options={mdxOptions}
          components={mdxComponents}
        />
      </div>
    </article>
  )
}
