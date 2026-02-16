import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import type { MDXRemoteProps } from "next-mdx-remote/rsc"

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    format: "md",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: false,
        },
      ],
    ],
  },
}
