import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Open Graph image for /about, which is sent on its own in
// introduction emails and needs its own card.
export const alt = "Stéphane Schwander. EvidenSe, Lausanne.";
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
            fontSize: 72,
            lineHeight: 1.1,
            color: "rgb(243, 241, 236)",
            maxWidth: "1000px",
          }}
        >
          Stéphane Schwander.
        </div>
        <div
          style={{
            fontFamily: "Playfair",
            fontSize: 26,
            color: "rgb(95, 122, 108)",
          }}
        >
          Eight years at UEFA. Eleven at the FEI. Based in Lausanne.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Playfair", data: playfair, weight: 700, style: "normal" }],
    }
  );
}
