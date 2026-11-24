"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

// GA4 events for long-form articles, so their performance can be read
// as more than page views:
//  - article_section_view: a reader reached a section heading or a CTA
//    block (elements carrying data-track="<id>"). Shows where readers stop.
//  - cta_click: a click on any link carrying data-cta="<name>".
// Both events carry the article id and the locale.
export default function ArticleTracking({ article, locale }: { article: string; locale: string }) {
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.track;
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            sendGAEvent("event", "article_section_view", { article, locale, section_id: id });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>("[data-track]").forEach((el) => observer.observe(el));

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cta]");
      if (link) sendGAEvent("event", "cta_click", { article, locale, cta: link.dataset.cta });
    };
    document.addEventListener("click", onClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, [article, locale]);

  return null;
}
