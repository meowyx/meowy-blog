import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/posts"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/meow", "/media", "/publications"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })
  )

  const posts = getAllPosts().map((p) => {
    const d = p.date ? new Date(p.date) : null
    return {
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: d && !Number.isNaN(d.getTime()) ? d : new Date(),
    }
  })

  return [...routes, ...posts]
}
