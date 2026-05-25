import { ImageResponse } from "next/og"

export const alt = "meowy.xyz - personal terminal"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#1a1208",
          color: "#ffb347",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, color: "#a07d3a" }}>
          PERSONAL TERMINAL
        </div>
        <div
          style={{
            fontSize: 132,
            fontWeight: 700,
            color: "#ffe0a0",
            marginTop: 8,
          }}
        >
          meowy.xyz
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#ffb347",
            marginTop: 28,
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          notes on rust, backends, and on-chain systems down to the validator.
        </div>
      </div>
    ),
    { ...size }
  )
}
