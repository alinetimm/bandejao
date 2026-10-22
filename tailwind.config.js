import { heroui } from "@heroui/theme";

// Tokens de cor do Figma (ver CLAUDE.md §3) — confirmar valores com get_variable_defs na Fase 1.
const brand = "#F66922";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        brand,
        ink: "#1E1E1E",
        body: "#4A4A4A",
        "surface-dark": "#2D2D2F",
        primary: {
          DEFAULT: brand,
        },
      },
    },
  },
  plugins: [
    heroui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: brand, foreground: "#FFFFFF" },
          },
        },
      },
    }),
  ],
};

export default config;
