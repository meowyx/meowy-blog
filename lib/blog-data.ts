import { getAllPosts } from "./posts"

export const SITE_DOMAIN = "meowy"

export interface BlogEntry {
  date: string
  title: string
  publication: string
  category: string
  tags: string[]
  url: string
}

export function getAllBlogEntries(): BlogEntry[] {
  return getAllPosts()
    .map((p) => {
      const d = p.date ? new Date(p.date) : null
      const year = d && !Number.isNaN(d.getTime()) ? String(d.getFullYear()) : ""
      return {
        date: year,
        title: p.title,
        publication: SITE_DOMAIN,
        category: (p.category || "misc").toLowerCase(),
        tags: (p.tags || []).map((t) => t.toLowerCase()),
        url: `/blog/${p.slug}`,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}
