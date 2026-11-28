import { renderOgImage, OG_SIZE } from "@/lib/og";

export const alt = "The Briefing en français, EvidenSe";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "The Briefing · en français",
    title: "Des notes pour celles et ceux qui décident.",
    footer: "evidense.io/fr/insights",
  });
}
