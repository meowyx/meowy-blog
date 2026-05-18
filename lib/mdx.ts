import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import type { MDXRemoteProps } from "next-mdx-remote/rsc"

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    format: "mdx",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // Single theme (string), not a { light, dark } object. Dual-theme
          // mode emits CSS vars and writes no inline color, so without
          // matching CSS every token renders monochrome. Site is light-only.
          theme: "github-light",
          keepBackground: false,
        },
      ],
    ],
  },
}
