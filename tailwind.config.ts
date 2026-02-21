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
        // AOi Theme Colors (extracted from theme CSS)
        background: "#f8f7f4",
        foreground: "#272d31",
        body: "#4c4c4c",
        primary: {
          DEFAULT: "#F5D547",
          hover: "#E5C537",
          light: "#f2e29e", // Mobile menu bg
        },
        secondary: {
          DEFAULT: "#272d31",
          light: "#4c4c4c",
        },
        muted: {
          DEFAULT: "#4c4c4c",
          foreground: "#6b6b6b",
        },
        border: "#cfcfcf",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#272d31",
        },
        surface: {
          DEFAULT: "#f5f3ef",
          dark: "#f7f8f9",
        },
      },
      fontFamily: {
        sans: ["Instrument Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        // AOi typography scale (from theme CSS)
        "display-1": ["72px", { lineHeight: "1.11", fontWeight: "600" }],
        "display-2": ["64px", { lineHeight: "1.12", fontWeight: "600" }],
        "display-3": ["56px", { lineHeight: "1.17", fontWeight: "600" }],
        "display-4": ["48px", { lineHeight: "1.16", fontWeight: "600" }],
        "heading-1": ["40px", { lineHeight: "1.2", fontWeight: "500" }],
        "heading-2": ["28px", { lineHeight: "1.28", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.56" }],
        "body": ["16px", { lineHeight: "1.56" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
        "caption": ["13px", { lineHeight: "1.38", fontWeight: "500" }],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        container: "1300px", // AOi container max-width
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "80px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1300px",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
