import { getAllPosts } from "./posts"

export interface BlogEntry {
  date: string
  title: string
  venue: string
  tags: string[]
  url: string
  external: boolean
}

export function getAllBlogEntries(): BlogEntry[] {
  return getAllPosts()
    .map((p) => {
      const d = p.date ? new Date(p.date) : null
      const year = d && !Number.isNaN(d.getTime()) ? String(d.getFullYear()) : ""
      return {
        date: year,
        title: p.title,
        venue: "",
        tags: p.tags?.length ? p.tags : (p.category ? [p.category] : []),
        url: `/blog/${p.slug}`,
        external: false,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const FEATURED: Array<{
  url: string
  title: string
  description: string
  meta: string
}> = [
  {
    url: "/blog/hackathon-hacks-web3",
    title: "Hackathon hacks: a guide for web3 hackathons",
    description:
      "Practical playbook drawn from running and judging web3 hackathons. Team composition, idea brainstorming, prep, execution, and the boring parts of the demo that actually win. Light on platitudes, heavy on what to do on Friday night.",
    meta: "guide · 8 min",
  },
  {
    url: "/blog/intro-to-foundry",
    title: "Intro to building and testing with Foundry",
    description:
      "Hands-on intro to Foundry, the Rust-based smart-contract toolkit. Forge, cast, anvil, building and testing a tiny contract, plus fuzzing and a local deploy on anvil.",
    meta: "tutorial · 12 min",
  },
]
