"use client"

import { usePathname } from "next/navigation"
import { SubscribeForm } from "@/components/subscribe-form"

// The footer renders on every page, but the home page has its own prominent
// subscribe form. Skip the footer copy on "/" so the two never stack.
export function FooterSubscribe() {
  const pathname = usePathname()
  if (pathname === "/") return null
  return <SubscribeForm variant="compact" />
}
