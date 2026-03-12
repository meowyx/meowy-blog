"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

const images = [
  { src: "/media/cat-image1.webp", alt: "Piku among the plants" },
  { src: "/media/cat-image2.webp", alt: "Piku looking up close-up" },
  { src: "/media/cat-image3.png", alt: "Piku with yellow collar" },
  { src: "/media/cat-image4.png", alt: "Sleepy Piku on couch" },
  { src: "/media/cat-image-5.png", alt: "Piku with pink collar" },
]

const rotations = [-2, 1.5, -1, 2, -1.5]

// Duplicate for seamless infinite loop
const loopImages = [...images, ...images]

export default function MeowPage() {
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (selected === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [selected, closeLightbox])

  return (
    <div className="space-y-12">
      <div>
        <motion.h1
          className="text-xl font-semibold mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          meow
        </motion.h1>

        <motion.div
          className="space-y-1 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            this is <span className="text-foreground font-medium">piku</span>, short for pikachu.
          </p>
          <p>born august 27, 2018. very picky eater.</p>
        </motion.div>
      </div>

      {/* Film strip gallery */}
      <motion.div
        className="relative -mx-6 sm:-mx-8 md:-mx-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Top film strip perforation */}
        <div className="flex gap-6 px-4 py-1 mb-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`top-${i}`}
              className="w-3 h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700 shrink-0"
            />
          ))}
        </div>

        {/* Scrolling track */}
        <div
          className="flex animate-film-scroll hover:[animation-play-state:paused]"
          style={{ animationPlayState: paused ? "paused" : undefined }}
        >
          {loopImages.map((image, i) => (
            <motion.div
              key={`${image.src}-${i}`}
              className="shrink-0 px-3 cursor-pointer"
              initial={{ rotate: rotations[i % images.length] }}
              whileHover={{
                rotate: 0,
                scale: 1.08,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}
              onClick={() => {
                setSelected(i % images.length)
                setPaused(true)
              }}
            >
              <div className="bg-white dark:bg-neutral-800 p-2 pb-7 rounded-sm shadow-md dark:shadow-neutral-900/50 w-56 sm:w-64">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="256px"
                    className="object-cover"
                    quality={80}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom film strip perforation */}
        <div className="flex gap-6 px-4 py-1 mt-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="w-3 h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700 shrink-0"
            />
          ))}
        </div>

        {/* Pause/play toggle */}
        <button
          onClick={() => setPaused((p) => !p)}
          className="absolute bottom-0 right-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
          aria-label={paused ? "Resume scrolling" : "Pause scrolling"}
        >
          {paused ? "play" : "pause"}
        </button>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[85vh] w-full aspect-square sm:w-[70vmin] sm:h-[70vmin]"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-neutral-800 p-3 pb-10 rounded-sm shadow-2xl w-full h-full">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={images[selected].src}
                    alt={images[selected].alt}
                    fill
                    sizes="70vmin"
                    className="object-cover"
                    quality={90}
                    priority
                  />
                </div>
              </div>
              <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-neutral-400">
                {images[selected].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
