import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface PostMeta {
  title: string
  description: string
  date: string
  tags: string[]
  category: string
  type: string
  slug: string
}

export interface Post extends PostMeta {
  content: string
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts")

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const fileContent = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8")
    const { data } = matter(fileContent)

    return {
      title: data.title || slug,
      description: data.description || "",
      date: data.date ? String(data.date) : "",
      tags: data.tags || [],
      category: data.category || "",
      type: data.type || "",
      slug,
    } as PostMeta
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return undefined

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    title: data.title || slug,
    description: data.description || "",
    date: data.date ? String(data.date) : "",
    tags: data.tags || [],
    category: data.category || "",
    type: data.type || "",
    slug,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}
