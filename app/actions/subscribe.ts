"use server"

import { Resend } from "resend"
import { WelcomeEmail } from "@/emails/welcome"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

// Sender identity. Constant for this blog, so it lives in code, not env.
// The domain part must stay on the verified send.meowy.xyz subdomain.
const FROM = "meowy <hello@send.meowy.xyz>"

// Deliberately permissive. Resend validates properly on its end; this just
// catches obvious typos before we spend an API call.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  // Honeypot. The "company" field is hidden from humans; only bots fill it.
  // Return success so the bot doesn't retry, but skip the API entirely.
  const trap = (formData.get("company") as string | null)?.trim()
  if (trap) {
    return { status: "success", message: "Thanks, you're on the list." }
  }

  const email =
    (formData.get("email") as string | null)?.trim().toLowerCase() ?? ""

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "That email doesn't look right. Mind checking it?",
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    const missing = [
      !apiKey && "RESEND_API_KEY",
      !audienceId && "RESEND_AUDIENCE_ID",
    ]
      .filter(Boolean)
      .join(", ")
    console.error(`[subscribe] missing env: ${missing}`)
    return {
      status: "error",
      message: "Subscriptions aren't set up yet. Please try again later.",
    }
  }

  const resend = new Resend(apiKey)

  const { error: contactError } = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  })

  if (contactError) {
    const msg = contactError.message?.toLowerCase() ?? ""
    // Already subscribed: treat as success. Don't reveal who is on the list.
    if (!msg.includes("already")) {
      console.error("[subscribe] contacts.create failed:", contactError)
      return {
        status: "error",
        message: "Something went wrong on our end. Please try again.",
      }
    }
  }

  // Welcome email is best-effort. The subscriber is already saved, so a send
  // failure here must not fail the signup.
  const { error: emailError } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: "You're in. Welcome to the meowy blog",
    react: WelcomeEmail(),
  })

  if (emailError) {
    console.error("[subscribe] welcome email failed:", emailError)
  }

  return {
    status: "success",
    message: "Thanks, you're on the list. Check your inbox.",
  }
}
