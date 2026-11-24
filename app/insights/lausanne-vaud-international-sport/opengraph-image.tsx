import { renderOgImage, OG_SIZE } from "@/lib/og";
import { LAUSANNE_VAUD } from "@/lib/articles/lausanne-vaud";

export const alt = LAUSANNE_VAUD.en.ogTitle;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "The Briefing · Lausanne and Vaud",
    title: LAUSANNE_VAUD.en.ogTitle,
    footer: "evidense.io",
  });
}
