"use client"

import { useActionState } from "react"
import { subscribe, type SubscribeState } from "@/app/actions/subscribe"

const INITIAL: SubscribeState = { status: "idle", message: "" }

export function SubscribeForm({
  variant = "default",
}: {
  variant?: "default" | "compact"
}) {
  const [state, formAction, pending] = useActionState(subscribe, INITIAL)
  const compact = variant === "compact"

  if (state.status === "success") {
    return (
      <div className={`subscribe subscribe-${variant} subscribe-done`}>
        <span className="subscribe-dot">●</span>
        <p>{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className={`subscribe subscribe-${variant}`}>
      {!compact && (
        <div className="subscribe-intro">
          <div className="eyebrow">
            <span className="eyebrow-dot">●</span>subscribe
          </div>
          <h2>New posts, in your inbox.</h2>
          <p>
            Rust, backends, and the unglamorous middle of building software. No
            noise, unsubscribe anytime.
          </p>
        </div>
      )}

      <div className="subscribe-row">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-label="Email address"
          aria-invalid={state.status === "error"}
          disabled={pending}
        />
        {/* Honeypot: offscreen + aria-hidden, real users never reach it. */}
        <div className="subscribe-hp" aria-hidden="true">
          <label>
            Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button type="submit" disabled={pending}>
          {pending ? "sending…" : "subscribe"}
        </button>
      </div>

      <p
        className="subscribe-status"
        aria-live="polite"
        role={state.status === "error" ? "alert" : undefined}
      >
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  )
}
