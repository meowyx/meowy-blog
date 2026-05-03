import { getAllPosts } from "./posts"

export const SITE_DOMAIN = "meowy.dev"

export interface BlogEntry {
  date: string
  title: string
  publication: string
  tags: string[]
  url: string
}

export function getAllBlogEntries(): BlogEntry[] {
  return getAllPosts()
    .map((p) => {
      const d = p.date ? new Date(p.date) : null
      const year = d && !Number.isNaN(d.getTime()) ? String(d.getFullYear()) : ""
      const rawTags = p.tags?.length ? p.tags : (p.category ? [p.category] : [])
      return {
        date: year,
        title: p.title,
        publication: SITE_DOMAIN,
        tags: rawTags.map((t) => t.toLowerCase()),
        url: `/blog/${p.slug}`,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}
