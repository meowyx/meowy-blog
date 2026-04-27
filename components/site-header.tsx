"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "About" },
  { href: "/meow", label: "Meow" },
]

function CatGlyph() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 26"
      width="28"
      height={Math.round((28 * 26) / 32)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 23 L 5 12 L 8 8 L 10 11 L 12 9 L 14 11 L 14 14 C 18 12, 22 12, 22 18 L 22 23" />
      <path d="M22 23 C 26 22, 28 16, 26 12" />
    </svg>
  )
}

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function SiteHeader() {
  const pathname = usePathname() || "/"
  return (
    <header className="site-header">
      <div className="shell">
        <Link href="/" className="brand" aria-label="Home">
          <span className="brand-cat" aria-hidden="true">
            <CatGlyph />
          </span>
          <span>meowy</span>
          <small>rust · systems · web3</small>
        </Link>
        <nav className="primary" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={isActive(n.href, pathname) ? "active" : ""}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
