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
          padding: "72px 80px",
          background: "#EFEEEC",
          backgroundImage: `
            radial-gradient(circle at 12% 18%, rgba(168, 132, 255, 0.45), transparent 55%),
            radial-gradient(circle at 88% 30%, rgba(255, 154, 200, 0.40), transparent 55%),
            radial-gradient(circle at 50% 95%, rgba(120, 145, 255, 0.40), transparent 55%),
            radial-gradient(circle at 95% 92%, rgba(255, 200, 120, 0.32), transparent 55%)
          `,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top: status pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#1A1A1A",
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.7)",
            padding: "10px 18px",
            borderRadius: 999,
            alignSelf: "flex-start",
            backdropFilter: "blur(20px)",
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
          5 products live · always shipping
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              color: "#1A1A1A",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#7C7B78" }}>Product designer</span>
            <span>
              turned <span style={{ color: "#895FFF" }}>solo founder.</span>
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#3A3A3A",
              maxWidth: 950,
              lineHeight: 1.4,
            }}
          >
            10 years designing for SaaS. Now shipping 5 products solo with
            Figma + Cursor + Claude Code.
          </div>
        </div>

        {/* Bottom: identity */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#1A1A1A",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontWeight: 500 }}>Aleksandr Borisov</div>
            <div style={{ color: "#7C7B78", fontSize: 22 }}>
              Buenos Aires · alexanderosso.com
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 18,
              color: "#7C7B78",
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
