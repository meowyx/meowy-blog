"use client"

import { useState } from "react"

export function CopyButton() {
  const [copied, setCopied] = useState(false)

  async function handleCopy(e: React.MouseEvent) {
    const pre = (e.currentTarget as HTMLElement)
      .closest(".code-wrap")
      ?.querySelector("pre")
    const code = pre?.querySelector("code")
    if (!code) return

    await navigator.clipboard.writeText(code.textContent || "")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={handleCopy}
      aria-label="Copy code"
    >
      {copied ? "COPIED" : "COPY"}
    </button>
  )
}
