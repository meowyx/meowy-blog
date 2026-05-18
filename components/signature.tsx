// A handwritten-style sign-off for letters. Usage in any .mdx letter:
//   Talk soon,
//   <Signature>Sushmita</Signature>
// Styling lives in app/blog/[slug]/post.css (.signature).
export function Signature({ children }: { children: React.ReactNode }) {
  return <span className="signature">{children}</span>
}
