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

function findMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath))
    } else if (entry.name.endsWith(".mdx")) {
      files.push(fullPath)
    }
  }
  return files
}

function filePathToSlug(filePath: string): string {
  const relative = path.relative(POSTS_DIR, filePath)
  return relative.replace(/\.mdx$/, "").replace(/\\/g, "/")
}

export function getAllPosts(filterType?: string): PostMeta[] {
  const files = findMdxFiles(POSTS_DIR)

  const posts = files.map((filePath) => {
    const slug = filePathToSlug(filePath)
    const fileContent = fs.readFileSync(filePath, "utf-8")
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

  const filtered = filterType
    ? posts.filter((p) => p.type === filterType)
    : posts

  return filtered.sort(
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
  const files = findMdxFiles(POSTS_DIR)
  return files.map((f) => filePathToSlug(f))
}
