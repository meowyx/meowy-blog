import type { MDXComponents } from "mdx/types"
import { CopyButton } from "@/components/copy-button"
import { Collapsible } from "@/components/collapsible"
import { Bold } from "@/components/bold"

/**
 * MDX renders inside a `.prose` wrapper (cassette CRT styling in
 * app/globals.css). This map only adds behavior the CSS can't (copy button on
 * code blocks) plus custom components used inside posts.
 */
type HeadingProps = { id?: string; children?: React.ReactNode }

// rehype-slug adds the id; wrap the text in a self-link so sections are shareable.
const linkable =
  (Tag: "h2" | "h3") =>
  ({ id, children }: HeadingProps) =>
    id ? (
      <Tag id={id}>
        <a href={`#${id}`} className="heading-anchor">
          {children}
        </a>
      </Tag>
    ) : (
      <Tag>{children}</Tag>
    )

export const mdxComponents: MDXComponents = {
  pre: ({ children, ...props }) => (
    <div className="code-wrap">
      <CopyButton />
      <pre {...props}>{children}</pre>
    </div>
  ),
  h2: linkable("h2"),
  h3: linkable("h3"),
  Collapsible,
  Bold,
}
