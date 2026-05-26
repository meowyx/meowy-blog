import type { Metadata } from "next"
import { Geist, Geist_Mono, VT323, Special_Elite } from "next/font/google"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
})

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "meowy.xyz - personal terminal",
    template: "%s · meowy.xyz",
  },
  description:
    "Backend engineer building real-time systems, observability infrastructure, and agent-facing tools in Rust. Solana, web3, and the occasional essay.",
}

// Applied before the body paints so the saved theme/scan state never flashes.
// The body element exists by the time this first-in-body script runs.
const themeScript = `(function(){try{var t=localStorage.getItem('meowy-theme');if(t==='green')document.body.classList.add('theme-green');var s=localStorage.getItem('meowy-scan');if(s==='off')document.body.classList.add('no-scan');}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} ${specialElite.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
