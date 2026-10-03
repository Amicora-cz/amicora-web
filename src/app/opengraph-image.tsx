import { ImageResponse } from "next/og";

export const alt = "Amicora s.r.o. — tech studio z Plzně";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(145deg, #0b1220 0%, #121a2b 55%, #1a2740 100%)",
          color: "#f4f7fb",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.12em", color: "#7dd3c0" }}>
          AMICORA S.R.O.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Stavíme software, který lidé skutečně používají.
          </div>
          <div style={{ fontSize: 30, color: "#b7c2d4", maxWidth: 820 }}>
            Tech studio z Plzně · NaLekci.cz · amicora.cz
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#8b97ab" }}>IČO 30034337</div>
      </div>
    ),
    { ...size },
  );
}
