"use client"

import { useActionState } from "react"
import { subscribe, type SubscribeState } from "@/app/actions/subscribe"

const INITIAL: SubscribeState = { status: "idle", message: "" }

// CRT-styled subscribe block. Reuses the existing Resend server action; only the
// presentation changes (the term-block "$ you@example.com ▸ TRANSMIT" look).
export function SubscribeCrt() {
  const [state, formAction, pending] = useActionState(subscribe, INITIAL)

  return (
    <div className="term-block">
      <div className="sub-cap dim">
        // SUBSCRIBE_CHANNEL - receive new transmissions
      </div>

      {state.status === "success" ? (
        <div className="sub-ok">▸ {state.message}</div>
      ) : (
        <form action={formAction} className="sub-form">
          <span className="sigil">$</span>
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
          {/* Honeypot: offscreen, real users never reach it. */}
          <div className="sub-hp" aria-hidden="true">
            <label>
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button type="submit" disabled={pending}>
            {pending ? "▸ SENDING…" : "▸ TRANSMIT"}
          </button>
        </form>
      )}

      {state.status === "error" && (
        <div className="sub-err sub-note" role="alert">
          {state.message}
        </div>
      )}

      <div className="sub-note dim">
        one issue · roughly every other week · no tracking pixels
      </div>
    </div>
  )
}
