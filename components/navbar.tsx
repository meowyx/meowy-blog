"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/publications", label: "Publications" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="mb-12 flex items-center justify-between">
      <nav className="flex items-center gap-4 sm:gap-6">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
      <ThemeToggle />
    </header>
  )
}
