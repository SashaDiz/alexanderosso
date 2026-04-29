import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          card: "rgb(var(--bg-card) / <alpha-value>)",
          "card-hover": "rgb(var(--bg-card-hover) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
        },
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      maxWidth: {
        container: "720px",
      },
      borderRadius: {
        card: "20px",
      },
      letterSpacing: {
        tight: "-0.015em",
        tighter: "-0.025em",
      },
    },
  },
  plugins: [],
};
export default config;
