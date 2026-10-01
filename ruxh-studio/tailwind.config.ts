import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0B",
        lime: {
          DEFAULT: "#A3FF0A",
          hover: "#8FE004",
          dim: "rgba(163, 255, 10, 0.15)",
        },
        warm: {
          white: "#F5F5F0",
          muted: "#E2E2DC",
          border: "#D4D4CD",
        },
        brand: {
          gray: "#A6A640",
          dark: "#141414",
          border: "#1F1F1F",
          muted: "#737373",
        },
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          '"Cabinet Grotesk"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          '"Inter Tight"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.03em",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-slow": "marquee 35s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
