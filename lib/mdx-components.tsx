import type { MDXComponents } from "mdx/types"
import { CopyButton } from "@/components/copy-button"
import { Collapsible } from "@/components/collapsible"
import { DesignPrinciples } from "@/components/design-principles"

/**
 * MDX renders inside a `.prose-mdx` wrapper. Styling lives in
 * app/blog/[slug]/post.css; this map only adds behavior the CSS can't
 * (copy button on code blocks) plus custom components used inside posts.
 */
export const mdxComponents: MDXComponents = {
  pre: ({ children, ...props }) => (
    <div className="group relative">
      <CopyButton />
      <pre {...props}>{children}</pre>
    </div>
  ),
  Collapsible,
  DesignPrinciples,
}
