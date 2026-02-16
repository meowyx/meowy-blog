import type { MDXComponents } from "mdx/types"
import { CopyButton } from "@/components/copy-button"
import { LinkPreview } from "@/components/link-preview"

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="mt-10 mb-4 text-4xl font-bold tracking-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="mt-8 mb-3 text-3xl font-bold tracking-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mt-6 mb-2 text-2xl font-bold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mt-4 mb-2 text-xl font-semibold" {...props}>
      {children}
    </h4>
  ),
  a: ({ children, href, ...props }) => {
    const isExternal = href?.startsWith("http")
    if (isExternal) {
      return (
        <LinkPreview
          href={href}
          className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors"
        >
          {children}
        </LinkPreview>
      )
    }
    return (
      <a
        href={href}
        className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors"
        {...props}
      >
        {children}
      </a>
    )
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-primary pl-4 italic text-foreground/80"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }) => (
    <div className="group relative my-6">
      <CopyButton />
      <pre
        className="overflow-x-auto rounded-lg border border-border p-4 text-sm leading-7"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),
  code: ({ children, ...props }) => {
    if ((props as Record<string, unknown>)["data-language"]) {
      return <code {...props}>{children}</code>
    }
    return (
      <code
        className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    )
  },
  hr: (props) => <hr className="my-8 border-border" {...props} />,
  ul: ({ children, ...props }) => (
    <ul
      className="my-4 list-disc pl-6 space-y-2 text-foreground/80"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="my-4 list-decimal pl-6 space-y-2 text-foreground/80"
      {...props}
    >
      {children}
    </ol>
  ),
  p: ({ children, ...props }) => (
    <p className="my-4 text-foreground/80 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  img: ({ alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 rounded-lg border border-border" alt={alt} {...props} />
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border bg-muted px-4 py-2 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border px-4 py-2" {...props}>
      {children}
    </td>
  ),
}
