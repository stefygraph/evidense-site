import { renderOgImage, OG_SIZE } from "@/lib/og";
import { LAUSANNE_VAUD } from "@/lib/articles/lausanne-vaud";
import { frenchTypography } from "@/lib/labs";

export const alt = LAUSANNE_VAUD.fr.ogTitle;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "The Briefing · Lausanne et Vaud",
    title: frenchTypography(LAUSANNE_VAUD.fr.ogTitle),
    footer: "evidense.io",
  });
}
