"use client"

import * as React from "react"

interface PreviewData {
  title: string
  description: string
  favicon: string
}

const previewCache = new Map<string, PreviewData>()

export function LinkPreview({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const [preview, setPreview] = React.useState<PreviewData | null>(null)
  const [show, setShow] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const fetchPreview = React.useCallback(async (url: string) => {
    if (previewCache.has(url)) {
      setPreview(previewCache.get(url)!)
      return
    }
    try {
      const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`)
      if (!res.ok) return
      const data = await res.json()
      if (data.title) {
        previewCache.set(url, data)
        setPreview(data)
      }
    } catch {
      // silently fail
    }
  }, [])

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(true)
      fetchPreview(href)
    }, 300)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShow(false)
  }

  return (
    <span className="relative inline">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
      {show && preview && (
        <span
          className="hidden sm:flex absolute left-0 bottom-full z-50 mb-1.5 w-max max-w-[280px] items-start gap-2 rounded-lg bg-[#1a1a1a] px-3 py-2 shadow-lg text-white opacity-0 animate-[fadeIn_150ms_ease-out_forwards]"
          role="tooltip"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview.favicon}
            alt=""
            className="size-4 mt-0.5 rounded-sm shrink-0"
          />
          <span className="min-w-0">
            <span className="block text-[13px] font-medium leading-tight truncate">
              {preview.title}
            </span>
            {preview.description && (
              <span className="block text-[11px] text-neutral-400 mt-0.5 truncate">
                {preview.description}
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  )
}
