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
        background: "#F7F8F3",
        foreground: "#18211D",
        ivory: "#F7F8F3",
        sage: "#E8EFE8",
        forest: "#164A3A",
        emerald: "#2E6B57",
        jade: "#6F9B86",
        champagne: "#D8E4D7",
        charcoal: "#18211D",
        slate: "#59655E",
        brand: {
          ivory: "#F7F8F3",
          sage: "#E8EFE8",
          forest: "#164A3A",
          emerald: "#2E6B57",
          jade: "#6F9B86",
          champagne: "#D8E4D7",
          charcoal: "#18211D",
          slate: "#59655E",
          // Backward compatibility mappings
          dark: "#164A3A",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "#D8E4D7",
          borderLight: "#E8EFE8",
          deepTeal: "#164A3A",
          teal: "#2E6B57",
          aqua: "#164A3A",
          aquaLight: "#2E6B57",
          aquaGlow: "rgba(22, 74, 58, 0.08)",
          softLight: "#F7F8F3",
          blue: "#164A3A",
          muted: "#59655E",
          mutedDark: "#18211D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(22, 74, 58, 0.15)",
        glowSubtle: "0 0 25px -5px rgba(22, 74, 58, 0.08)",
        card: "0 12px 35px -8px rgba(22, 74, 58, 0.06)",
        cardHover: "0 20px 45px -10px rgba(22, 74, 58, 0.12)",
        architectural: "0 2px 10px rgba(22, 74, 58, 0.04), 0 15px 35px -5px rgba(22, 74, 58, 0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSubtle: "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
