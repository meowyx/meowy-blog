import { getAllPosts } from "@/lib/posts"
import { SITE_URL, SITE_NAME, SITE_DESC } from "@/lib/site"

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export const dynamic = "force-static"

export function GET() {
  const items = getAllPosts()
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`
      const d = p.date ? new Date(p.date) : null
      const pubDate =
        d && !Number.isNaN(d.getTime())
          ? `\n      <pubDate>${d.toUTCString()}</pubDate>`
          : ""
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>${pubDate}
      <description>${esc(p.description || "")}</description>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${esc(SITE_DESC)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
