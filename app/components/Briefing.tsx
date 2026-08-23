"use client";

import Link from "next/link";
import { useState } from "react";

// Section 9. Capture.
export default function Briefing() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="briefing" className="px-6 md:px-16 py-20 md:py-24 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-md">
          <h2 className="font-serif text-3xl text-foreground leading-tight mb-2">The Briefing.</h2>
          <p className="font-sans text-base text-foreground/60 font-light">
            Notes for people who decide. Rare, never noise.
          </p>
          <Link
            href="/insights"
            className="inline-block mt-3 font-sans text-sm font-medium text-foreground/70 border-b border-foreground/30 pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
          >
            Read previous notes &rarr;
          </Link>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto"
        >
          <label htmlFor="briefing-email" className="sr-only">
            Email address
          </label>
          <input
            id="briefing-email"
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="w-full md:w-64 bg-transparent border border-foreground/20 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/50 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="border border-foreground/30 px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-all whitespace-nowrap disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed" : "Subscribe"}
          </button>
          {status === "error" && (
            <p className="text-xs text-red-400 mt-1 sm:absolute sm:translate-y-12">
              An error occurred. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
