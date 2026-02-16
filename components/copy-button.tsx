"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CopyButton() {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    const pre = (e.currentTarget as HTMLElement)
      .closest(".group")
      ?.querySelector("pre")
    const code = pre?.querySelector("code")
    if (!code) return

    await navigator.clipboard.writeText(code.textContent || "")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 z-10 size-8 opacity-0 transition-opacity group-hover:opacity-100 text-neutral-400 hover:text-neutral-200"
      onClick={handleCopy}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span className="sr-only">Copy code</span>
    </Button>
  )
}
