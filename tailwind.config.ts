import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#151518",
          card: "#1D1B1E",
          "card-hover": "#252328",
        },
        accent: {
          DEFAULT: "#E85D2D",
          hover: "#F06B3E",
        },
        muted: "#7A7A80",
        border: "#2A282D",
        foreground: "#F0EDE8",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
