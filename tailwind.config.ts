import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <--- C'EST LA LIGNE MAGIQUE QUI MANQUAIT SUREMENT
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ici on connecte tes variables CSS (Inter/Playfair) aux classes Tailwind
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        // On peut même définir tes couleurs ici pour utiliser 'bg-navy' au lieu de '#000423'
        navy: '#000423',
        offwhite: '#f8fafc',
      },
    },
  },
  plugins: [],
};
export default config;