import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = "PT Cipta Kreasi Buana";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f5f1ea",
          background: "linear-gradient(135deg, #17120c 0%, #2a2118 58%, #6f5b43 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>Interior / Architecture / Design Build</div>
        <div style={{ maxWidth: 820, fontSize: 86, lineHeight: 0.95 }}>{company.shortName}</div>
        <div style={{ maxWidth: 780, fontSize: 30, lineHeight: 1.35, color: "#d9c6aa" }}>{company.description}</div>
      </div>
    ),
    size,
  );
}
