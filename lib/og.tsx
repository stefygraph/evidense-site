import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared Open Graph image for secondary pages: same treatment as the
// homepage image (title in Playfair on the ink background), with a
// small kicker above and a moss footer line below.
export const OG_SIZE = { width: 1200, height: 630 };

export async function renderOgImage({
  kicker,
  title,
  footer,
}: {
  kicker: string;
  title: string;
  footer: string;
}) {
  const playfair = await readFile(
    join(process.cwd(), "assets/playfair-display-latin-700-normal.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070d19",
          padding: "80px",
        }}
      >
        <div style={{ fontFamily: "Playfair", fontSize: 28, color: "rgba(243, 241, 236, 0.55)" }}>
          {kicker}
        </div>
        <div
          style={{
            fontFamily: "Playfair",
            fontSize: 72,
            lineHeight: 1.1,
            color: "rgb(243, 241, 236)",
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>
        <div style={{ fontFamily: "Playfair", fontSize: 26, color: "rgb(95, 122, 108)" }}>
          {footer}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Playfair", data: playfair, weight: 700, style: "normal" }],
    }
  );
}
