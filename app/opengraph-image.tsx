import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Open Graph image, generated at build time so it stays in sync with
// the headline. The H1 on the dark brand background, nothing abstract.
export const alt = "Growing audience. Flat revenue. We find out why.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div
          style={{
            fontFamily: "Playfair",
            fontSize: 30,
            color: "rgba(243, 241, 236, 0.55)",
          }}
        >
          EvidenSe
        </div>
        <div
          style={{
            fontFamily: "Playfair",
            fontSize: 76,
            lineHeight: 1.1,
            color: "rgb(243, 241, 236)",
            maxWidth: "1000px",
          }}
        >
          Growing audience. Flat revenue. We find out why.
        </div>
        <div
          style={{
            fontFamily: "Playfair",
            fontSize: 26,
            color: "rgb(95, 122, 108)",
          }}
        >
          Independent advisory. Lausanne.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Playfair", data: playfair, weight: 700, style: "normal" }],
    }
  );
}
