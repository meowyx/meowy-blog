import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import type { MDXRemoteProps } from "next-mdx-remote/rsc"

// Custom Shiki theme tuned to the amber CRT. keepBackground is false, so the
// code-block background comes from `.prose pre` in globals.css; only token
// foregrounds come from here. Palette mirrors the design comp:
// comments dim-italic, strings green, numbers blue, keywords salmon, types amber.
const crtTheme = {
  name: "crt-amber",
  type: "dark",
  colors: {
    "editor.background": "#0a0604",
    "editor.foreground": "#ffe4b3",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#6a4d18", fontStyle: "italic" },
    },
    {
      scope: [
        "string",
        "string.quoted",
        "string.template",
        "constant.character",
        "constant.other.symbol",
      ],
      settings: { foreground: "#4eff8a" },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.language.boolean",
      ],
      settings: { foreground: "#5fb5ff" },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator.new",
        "storage",
        "storage.type",
        "storage.modifier",
        "variable.language",
      ],
      settings: { foreground: "#ff8e6e" },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call.generic"],
      settings: { foreground: "#ffd47a" },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
        "entity.name.namespace",
      ],
      settings: { foreground: "#ffe0a0" },
    },
    { scope: ["entity.name.tag"], settings: { foreground: "#ff8e6e" } },
    { scope: ["entity.other.attribute-name"], settings: { foreground: "#ffd47a" } },
    {
      scope: ["keyword.operator", "punctuation", "meta.brace"],
      settings: { foreground: "#ffb347" },
    },
    {
      scope: ["variable", "variable.other", "meta.definition.variable", "support.variable"],
      settings: { foreground: "#ffe4b3" },
    },
  ],
}

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    format: "mdx",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: crtTheme,
          keepBackground: false,
        },
      ],
    ],
  },
}
