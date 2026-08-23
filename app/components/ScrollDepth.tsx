"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

// GA4 scroll-depth events for the sections that matter: the contrast
// block (3), the sprint (4) and the founder (6). Enhanced Measurement
// only fires at 90 percent, which tells us nothing useful. The number
// that matters is how many readers reach the sprint.
const TRACKED_SECTIONS = ["contrast", "sprint", "founder"];

export default function ScrollDepth() {
  useEffect(() => {
    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            sendGAEvent("event", "section_view", { section_id: entry.target.id });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 }
    );

    for (const id of TRACKED_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
