import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components"

// Editorial palette, hex approximations of the site's oklch tokens.
// Email clients do not support oklch or CSS variables.
const c = {
  paper: "#f3efe5",
  ink: "#21241f",
  ink2: "#54584f",
  ink3: "#7a7d72",
  accent: "#2e5d43",
  rule: "#d8d3c4",
}

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace"
const sans = "ui-sans-serif, system-ui, -apple-system, sans-serif"

export function WelcomeEmail() {
  return (
    <Html lang="en">
      <Head />
      <Preview>You&apos;re on the list. New posts will land in your inbox.</Preview>
      <Body style={{ backgroundColor: c.paper, margin: 0, padding: 0, fontFamily: sans }}>
        <Container style={{ maxWidth: "480px", margin: "0 auto", padding: "48px 20px" }}>
          <Text
            style={{
              fontFamily: mono,
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: c.ink3,
              margin: "0 0 16px",
            }}
          >
            <span style={{ color: c.accent }}>●</span>&nbsp; the meowy blog
          </Text>

          <Heading
            style={{
              fontSize: "26px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              color: c.ink,
              margin: "0 0 14px",
            }}
          >
            You&apos;re on the list.
          </Heading>

          <Text style={{ fontSize: "15px", lineHeight: 1.65, color: c.ink2, margin: "0 0 22px" }}>
            Thanks for subscribing. Expect notes on Rust, Go, frontend,
            backend, and the cryptography and math, plus what I learn building
            in public. No noise, unsubscribe anytime.
          </Text>

          <Hr style={{ border: "none", borderTop: `1px solid ${c.rule}`, margin: "0 0 18px" }} />

          <Text style={{ fontFamily: mono, fontSize: "12px", color: c.ink3, margin: 0 }}>
            <Link href="https://meowy.xyz" style={{ color: c.accent, textDecoration: "none" }}>
              meowy.xyz
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeEmail
