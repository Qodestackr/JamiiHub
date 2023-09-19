const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      //
      colors: {
        "accent-color": "#008C6B",
        "neutral-purple": "#9C529D",
        "neutral-dark": "#1C1C1C",
        "neutral-gray": "#8C8C8C",
        "neutral-blue": "#21224E",
        "neutral-white": "#FCFCFC",
        "background-main": "#F5F5F5",
        "success-green": "#008c6b",
        success: "#289643",
        "neutral-chart": "#BFBFD9",
        "chart-group": "#9C529D",
        "light-gray": "#BFBFD9",
        "neutral-orange": "#E5352B",
        "neutral-red": "#E5352B",
        "neutral-pending": "#FF9F0A",
        "neutral-critical": "#E5352B",
        "critical-background": "#FFE7E5",
        "success-background": "E9FEEE",
        "neutral-pending-background": "#FFF5E5",
        "neutral-success": "#289643",
        "border-color-button": "#1E194",
        "light-violet": "#9747FF",
        light: {
          primary: "#F8FAFC",
          background: "#F9FAFB",
          secondary: "#F7FAFC",
          accent: "#F1F5F9",
          foreground: "#F9FAFB",
          destructive: "#F2F2F2",
          muted: "#F5F5F4",
          popover: "#F6F6F8",
          card: "#FAFAFA",
        },
        dark: {
          primary: "#111111",
          background: "#101010",
          secondary: "#121212",
          accent: "#161616",
          foreground: "#191919",
          destructive: "#202020",
          muted: "#2B2B2B",
          popover: "#1C1C1C",
          card: "#1A1A1A",
          // ...
        },
        primary: {
          DEFAULT: "#0077B6", // Primary blue shade
          dark: "#005A8D", // Darker version of primary
          light: "#66A0CC", // Lighter version of primary
        },
        secondary: {
          DEFAULT: "#F26D21", // Secondary orange shade
          dark: "#C35615", // Darker version of secondary
          light: "#F6935C", // Lighter version of secondary
        },
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
      },
      //
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        roboto: ["Roboto", "sans-serif"],
        link_satisfy: ["Satisfy", "cursive"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

  /*
    daisyui: {
    themes: [
      'light',
      'dark',
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'background-color': '#FBF5FF',
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'background-color': '#FBF5FF',
        },
      },
    ],
    darkTheme: 'light',
    lightTheme: 'light',
  },
  */
};
