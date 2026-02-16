import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url")
  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 })
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "bot" },
      signal: AbortSignal.timeout(5000),
    })
    const html = await res.text()

    const title =
      html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"/)?.[ 1] ??
      html.match(/<title[^>]*>([^<]*)<\/title>/)?.[ 1] ??
      ""

    const description =
      html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]*)"/)?.[ 1] ??
      html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[ 1] ??
      ""

    const image =
      html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"/)?.[ 1] ?? ""

    const favicon = `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`

    return NextResponse.json(
      { title, description, image, favicon },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
        },
      }
    )
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
