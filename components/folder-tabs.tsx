"use client"

import * as React from "react"
import { motion, AnimatePresence, LayoutGroup } from "motion/react"
import { cn } from "@/lib/utils"

export interface FolderTab {
  id: string
  label: string
  content: React.ReactNode
}

export function FolderTabs({
  tabs,
  defaultId,
}: {
  tabs: FolderTab[]
  defaultId?: string
}) {
  const [activeId, setActiveId] = React.useState(defaultId ?? tabs[0]?.id)
  const activeIndex = tabs.findIndex((t) => t.id === activeId)
  const previousIndex = React.useRef(activeIndex)
  const direction = activeIndex >= previousIndex.current ? 1 : -1

  React.useEffect(() => {
    previousIndex.current = activeIndex
  }, [activeIndex])

  const active = tabs[activeIndex] ?? tabs[0]

  return (
    <LayoutGroup id="folder-tabs">
      <div className="relative">
        <div className="relative z-10 flex gap-1 px-2">
          {tabs.map((tab) => {
            const isActive = tab.id === active.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                aria-pressed={isActive}
                className={cn(
                  "relative px-5 pt-2.5 pb-3 -mb-2 text-sm rounded-t-xl outline-none transition-colors",
                  "focus-visible:ring-2 focus-visible:ring-foreground/20",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="folder-tab-active"
                    className="liquid-glass absolute inset-0 rounded-t-2xl"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
          className={cn(
            "liquid-glass relative rounded-3xl",
            "px-6 py-6 sm:px-8 sm:py-7",
            "overflow-hidden"
          )}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: 14 * d, filter: "blur(6px)" }),
                center: { opacity: 1, x: 0, filter: "blur(0px)" },
                exit: (d: number) => ({ opacity: 0, x: -14 * d, filter: "blur(6px)" }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              {active.content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </LayoutGroup>
  )
}
