import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Aleksandr Borisov — Solo founder, vibe-coder & product designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#E8E6E1",
          backgroundImage: `
            radial-gradient(circle at 10% 15%, rgba(137, 95, 255, 0.55), transparent 50%),
            radial-gradient(circle at 90% 25%, rgba(255, 130, 185, 0.50), transparent 50%),
            radial-gradient(circle at 45% 100%, rgba(95, 130, 255, 0.50), transparent 55%),
            radial-gradient(circle at 100% 95%, rgba(255, 195, 110, 0.40), transparent 50%)
          `,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top: status pill + X pin */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: "#0F0F0F",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.85)",
              padding: "10px 18px",
              borderRadius: 999,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#10B981",
              }}
            />
            5 products live
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#0F0F0F",
              background: "rgba(15,15,15,0.08)",
              border: "1px solid rgba(15,15,15,0.12)",
              padding: "10px 18px",
              borderRadius: 999,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0F0F0F">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Building in public — @alexanderOsso
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              color: "#0F0F0F",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>I design, code &amp; ship</span>
            <span style={{ color: "#895FFF" }}>solo with AI.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#1F1F1F",
              maxWidth: 1000,
              lineHeight: 1.4,
            }}
          >
            10 years designing for SaaS, startups &amp; mobile apps. Now in my
            founder season — 5 products live, built solo with Figma + Cursor +
            Claude Code.
          </div>
        </div>

        {/* Bottom: identity */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#0F0F0F",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontWeight: 500 }}>Aleksandr Borisov</div>
            <div style={{ color: "#5A5955", fontSize: 22 }}>
              Buenos Aires · alexanderosso.com
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 18,
              color: "#5A5955",
              fontFamily: "monospace",
            }}
          >
            <span>mulu</span>
            <span>·</span>
            <span>winery-hotels</span>
            <span>·</span>
            <span>directory-launch</span>
            <span>·</span>
            <span>momentum</span>
            <span>·</span>
            <span>posteahora</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
