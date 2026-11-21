import { renderOgImage, OG_SIZE } from "@/lib/og";

export const alt = "EvidenSe Labs: the method, tested in public.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "EvidenSe Labs",
    title: "The method, tested in public.",
    footer: "Sport Attention Index · La Sponsoring Machine",
  });
}
