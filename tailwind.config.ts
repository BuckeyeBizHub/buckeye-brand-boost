import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      // Same gutters as the hand-built sections: 16px on phones.
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        serif: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        body: ["var(--font-body)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ohio: {
          red: "hsl(var(--ohio-red))",
          "red-light": "hsl(var(--ohio-red-light))",
          grey: "hsl(var(--ohio-grey))",
          "grey-light": "hsl(var(--ohio-grey-light))",
          "grey-dark": "hsl(var(--ohio-grey-dark))",
          "red-glow": "hsl(var(--ohio-red-glow))",
          gold: "hsl(var(--ohio-gold))",
          "gold-dark": "hsl(var(--ohio-gold-dark))",
          forest: "hsl(var(--ohio-forest))",
          navy: "hsl(var(--ohio-navy))",
          cream: "hsl(var(--ohio-cream))",
        },
        paper: "hsl(var(--paper))",
        cream: "hsl(var(--cream))",
        ink: { DEFAULT: "hsl(var(--ink))", 2: "hsl(var(--ink-2))" },
        line: { DEFAULT: "hsl(var(--line))", dark: "hsl(var(--line-dark))" },
        body: "hsl(var(--body))",
        quiet: { DEFAULT: "hsl(var(--quiet))", dark: "hsl(var(--quiet-dark))" },
        brand: { DEFAULT: "hsl(var(--red))", deep: "hsl(var(--red-deep))", bright: "hsl(var(--red-bright))" },
        asphalt: "hsl(var(--asphalt))",
        graphite: "hsl(var(--graphite))",
        seam: "hsl(var(--seam))",
        stock: "hsl(var(--stock))",
        fog: "hsl(var(--fog))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Tighter corners site-wide: the old pill-and-bubble radii read as a template.
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
