"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const principles = [
  {
    number: "01",
    title: "No guilt",
    description:
      'Unfinished work is "carried forward," never "missed." Celebrate wins first, even tiny ones.',
    color: "text-emerald-500",
    border: "border-emerald-500/40 group-hover:border-emerald-500",
    bg: "group-hover:bg-emerald-500/5",
    glow: "group-hover:bg-emerald-500/10",
  },
  {
    number: "02",
    title: "Energy-aware",
    description:
      "Low energy? Process inbox. High energy? Build the next milestone. The system meets you where you are.",
    color: "text-amber-500",
    border: "border-amber-500/40 group-hover:border-amber-500",
    bg: "group-hover:bg-amber-500/5",
    glow: "group-hover:bg-amber-500/10",
  },
  {
    number: "03",
    title: "Choices, not commands",
    description:
      '"You could start with..." not "you should do..." My brain rebels against commands. Choices feel like freedom.',
    color: "text-sky-500",
    border: "border-sky-500/40 group-hover:border-sky-500",
    bg: "group-hover:bg-sky-500/5",
    glow: "group-hover:bg-sky-500/10",
  },
  {
    number: "04",
    title: "Tiny first steps",
    description:
      'Not "work on the pipeline." Instead: "open overview.md and check the next unchecked milestone."',
    color: "text-violet-500",
    border: "border-violet-500/40 group-hover:border-violet-500",
    bg: "group-hover:bg-violet-500/5",
    glow: "group-hover:bg-violet-500/10",
  },
  {
    number: "05",
    title: "No guilt trackers",
    description:
      "No weekly grids with empty boxes staring at you. Just today. It feels like a journal, not a spreadsheet.",
    color: "text-rose-400",
    border: "border-rose-400/40 group-hover:border-rose-400",
    bg: "group-hover:bg-rose-400/5",
    glow: "group-hover:bg-rose-400/10",
  },
]

export function DesignPrinciples() {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "my-10 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <p
        className={cn(
          "text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2 transition-all duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        how I designed for my brain
      </p>

      <div className="space-y-3">
        {principles.map((p, i) => (
          <div
            key={p.number}
            className={cn(
              "group rounded-lg border-l-[3px] px-5 py-4 transition-all duration-500 ease-out cursor-default",
              p.border,
              p.bg,
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            )}
            style={{
              transitionDelay: isVisible ? `${400 + i * 100}ms` : "0ms",
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "relative shrink-0 text-sm font-mono font-bold mt-0.5 transition-all duration-300",
                  p.color,
                  "opacity-60 group-hover:opacity-100"
                )}
              >
                <span
                  className={cn(
                    "absolute -inset-1.5 rounded-md transition-all duration-300",
                    p.glow
                  )}
                />
                <span className="relative">{p.number}</span>
              </span>
              <div className="min-w-0">
                <p
                  className={cn(
                    "font-medium text-[15px] leading-snug transition-colors duration-300 group-hover:text-foreground"
                  )}
                >
                  {p.title}
                </p>
                <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
