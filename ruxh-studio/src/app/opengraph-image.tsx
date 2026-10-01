import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RUXH — Social Creative Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0B",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Header metadata */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderBottom: "1px solid #222222",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              color: "#A3FF0A",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "4px",
            }}
          >
            RUXH / STUDIO
          </div>
          <div
            style={{
              color: "#888888",
              fontSize: "16px",
              letterSpacing: "3px",
            }}
          >
            EDITION // 2026
          </div>
        </div>

        {/* Center Main Statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
              fontSize: "96px",
              fontWeight: 900,
              letterSpacing: "-4px",
              lineHeight: 0.9,
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#F5F5F0" }}>RU</span>
            <span style={{ color: "#A3FF0A" }}>X</span>
            <span style={{ color: "#F5F5F0" }}>H</span>
          </div>
          <div
            style={{
              fontSize: "38px",
              fontWeight: 800,
              color: "#F5F5F0",
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            WE MAKE BRANDS HARD TO IGNORE.
          </div>
        </div>

        {/* Bottom Bar: Disciplines */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid #222222",
            paddingTop: "24px",
            color: "#A6A6A6",
            fontSize: "16px",
            letterSpacing: "3px",
          }}
        >
          <div>WEB DESIGN — GRAPHIC DESIGN — ADVERTISING</div>
          <div style={{ color: "#A3FF0A", fontWeight: "bold" }}>
            SOCIAL CREATIVE STUDIO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
