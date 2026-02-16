import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            color: "rgba(248,250,252,0.82)",
            p: { lineHeight: "1.85" },
            a: { color: "#F8FAFC", textDecoration: "none" },
            "a:hover": { textDecoration: "underline" },
            strong: { color: "#F8FAFC" },
            h2: {
              color: "#F8FAFC",
              fontFamily: "var(--font-playfair)",
              fontWeight: "700",
            },
            h3: {
              color: "#F8FAFC",
              fontFamily: "var(--font-playfair)",
              fontWeight: "700",
            },
            hr: { borderColor: "rgba(248,250,252,0.15)" },
            blockquote: {
              borderLeftColor: "rgba(248,250,252,0.25)",
              color: "rgba(248,250,252,0.85)",
              fontStyle: "normal",
            },
            code: { color: "#F8FAFC" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
