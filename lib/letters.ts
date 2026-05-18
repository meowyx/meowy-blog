import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Letters are unlisted application notes, one per company. They deliberately
// do NOT go through lib/posts.ts, so they never surface in the blog archive,
// tags, or home feed. This module only ever reads content/letters/.
export interface Letter {
  company: string
  role: string
  date: string
  title: string
  description: string
  slug: string
  content: string
}

const LETTERS_DIR = path.join(process.cwd(), "content", "letters")

export function getAllLetterSlugs(): string[] {
  if (!fs.existsSync(LETTERS_DIR)) return []
  return fs
    .readdirSync(LETTERS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function getLetterBySlug(slug: string): Letter | undefined {
  const filePath = path.join(LETTERS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return undefined

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    company: data.company || "",
    role: data.role || "",
    date: data.date ? String(data.date) : "",
    title: data.title || `Letter to ${data.company || slug}`,
    description: data.description || "",
    slug,
    content,
  }
}
