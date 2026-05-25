import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { format } from "date-fns"
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/posts"
import { mdxOptions } from "@/lib/mdx"
import { mdxComponents } from "@/lib/mdx-components"
import { Chassis } from "@/components/chassis"

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
  return { title: post.title, description: post.description }
}

const pad3 = (n: number) => String(n).padStart(3, "0")

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === slug)
  const num = pad3(idx + 1)
  const total = pad3(all.length)
  const newer = idx > 0 ? all[idx - 1] : null
  const older = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null

  const words = post.content.trim().split(/\s+/).filter(Boolean).length
  const readMin = Math.max(1, Math.round(words / 200))

  const date = post.date ? new Date(post.date) : null
  const dateLong =
    date && !Number.isNaN(date.getTime())
      ? format(date, "d MMM yyyy").toUpperCase()
      : ""
  const dateShort =
    date && !Number.isNaN(date.getTime()) ? format(date, "dd.MM.yy") : ""

  const otherTx = all.filter((p) => p.slug !== slug).slice(0, 3)

  const nowScreen = (
    <div>
      <div className="now-label">NOW READING</div>
      <div className="now-screen">
        <div className="now-row">
          <span className="now-key">POST</span>
          <span className="now-val">TX-{num}</span>
        </div>
        <div className="now-row">
          <span className="now-key">LEN</span>
          <span className="now-val">{readMin} MIN</span>
        </div>
        {dateShort && (
          <div className="now-row">
            <span className="now-key">DATE</span>
            <span className="now-val">{dateShort}</span>
          </div>
        )}
        <div className="now-row">
          <span className="now-key">TAGS</span>
          <span className="now-val">×{post.tags.length}</span>
        </div>
      </div>
    </div>
  )

  const txBlock = (
    <div className="tx">
      <div className="tx-label">OTHER TX</div>
      {otherTx.map((p) => (
        <Link key={p.slug} className="tx-row" href={`/blog/${p.slug}`}>
          <span className="num">
            {pad3(all.findIndex((x) => x.slug === p.slug) + 1)}
          </span>
          <span className="title">{p.title}</span>
        </Link>
      ))}
      <Link className="tx-all" href="/">
        ► ALL ARCHIVES
      </Link>
    </div>
  )

  return (
    <Chassis
      channel={0}
      ch={`ch.01 / ${num}`}
      now="- post"
      chId={`MEOWY.XYZ // CH.01 / POST-${num}`}
      nowScreen={nowScreen}
      txBlock={txBlock}
      cassetteTape={`SIDE A · TX-${num} PLAYING`}
    >
      <div className="post-meta-row">
        <Link href="/">◂ BACK TO FEED</Link>
        <span className="dim">
          POST {num}/{total}
          {dateLong && ` · ${dateLong}`} · {readMin} MIN READ
        </span>
      </div>

      <h1 className="h-title post-title">
        {post.title}
        <span className="cursor">.</span>
      </h1>

      <div className="post-pills">
        {post.tags.map((t) => (
          <span key={t} className="pill done">
            [ {t} ]
          </span>
        ))}
        <span className="dim read">// EST. READ: {readMin} MIN</span>
      </div>

      <article className="prose">
        <MDXRemote
          source={post.content}
          options={mdxOptions}
          components={mdxComponents}
        />
      </article>

      <div className="post-nav">
        {newer ? (
          <Link className="prev" href={`/blog/${newer.slug}`}>
            <div className="lbl dim">◂ NEWER</div>
            <div className="ttl">{newer.title}</div>
          </Link>
        ) : (
          <div className="prev empty">
            <div className="lbl dim">◂ NEWER</div>
            <div className="ttl">(this is the latest)</div>
          </div>
        )}
        {older ? (
          <Link className="next" href={`/blog/${older.slug}`}>
            <div className="lbl dim">OLDER ▸</div>
            <div className="ttl">{older.title}</div>
          </Link>
        ) : (
          <div className="next empty">
            <div className="lbl dim">OLDER ▸</div>
            <div className="ttl">(this is the oldest)</div>
          </div>
        )}
      </div>

      <div className="eof">END OF TRANSMISSION</div>
    </Chassis>
  )
}
