import { renderOgImage, OG_SIZE } from "@/lib/og";
import { SPONSORING_MACHINE } from "@/lib/labs";

export const alt = SPONSORING_MACHINE.fr.h1;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "EvidenSe Labs · La Sponsoring Machine",
    title: SPONSORING_MACHINE.fr.h1,
    footer: "sponsoring-machine.evidense.io",
  });
}
