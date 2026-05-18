import type { Metadata } from "next"
import { Geist, Geist_Mono, Caveat } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Handwriting face for letter sign-offs (the <Signature> MDX component).
const handwriting = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "meowy / rust engineer / systems & observability",
    template: "%s / meowy",
  },
  description:
    "Backend engineer building real-time systems, observability infrastructure, and agent-facing tools in Rust. Solana, web3, and the occasional essay.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${handwriting.variable}`}
    >
      <body>
        <SiteHeader />
        <main className="shell">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
