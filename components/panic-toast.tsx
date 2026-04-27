"use client"

import { useEffect, useRef, useState } from "react"

const TARGET = "panic"

export function PanicToast() {
  const [show, setShow] = useState(false)
  const bufRef = useRef("")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      bufRef.current = (bufRef.current + e.key.toLowerCase()).slice(-TARGET.length)
      if (bufRef.current === TARGET) {
        setShow(true)
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setShow(false), 4200)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div
      className={`panic ${show ? "show" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="caret">thread &#39;main&#39;</span> panicked at{" "}
      <span className="key">&#39;you found a thing&#39;</span>, src/main.rs:42:7
      <br />
      note: run with{" "}
      <span className="key">`RUST_BACKTRACE=1`</span> environment variable to display a backtrace
    </div>
  )
}
