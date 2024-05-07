/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"],
  // content: [
  //   "./pages/**/*.{ts,tsx}",
  //   "./components/**/*.{ts,tsx}",
  //   "./app/**/*.{ts,tsx}",
  //   "./src/**/*.{ts,tsx}",
  // ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
    colors: {
      primary: "#3c38ff",
      secondary: "#499FA4",
      "dark-grey": "#c0c5cf",
      "light-grey": "#f3f5f9",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      "black-russian": "rgb(30,30,45)",
    },
    fontSize: {
      10: "1.0rem", // 10px
      12: "1.2rem", // 12px
      14: "1.4rem", // 14px
      16: "1.6rem", // 16px
      18: "1.8rem", // 18px
      20: "2.0rem", // 20px
      24: "2.4rem", // 24px
      32: "3.2rem", // 32px
      48: "4.8rem", // 48px
      56: "5.6rem", // 56px
      64: "6.4rem", // 64px
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "shadow-sm",
    "shadow",
    "shadow-md",
    "shadow-lg",
    "shadow-xl",
    "shadow-2xl",
  ],
};

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
    colors: {
      primary: "#3c38ff",
      secondary: "#499FA4",
      "dark-grey": "#c0c5cf",
      "light-grey": "#f3f5f9",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      "black-russian": "rgb(30,30,45)",
    },
    fontSize: {
      10: "1.0rem", // 10px
      12: "1.2rem", // 12px
      14: "1.4rem", // 14px
      16: "1.6rem", // 16px
      18: "1.8rem", // 18px
      20: "2.0rem", // 20px
      24: "2.4rem", // 24px
      32: "3.2rem", // 32px
      48: "4.8rem", // 48px
      56: "5.6rem", // 56px
      64: "6.4rem", // 64px
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "shadow-sm",
    "shadow",
    "shadow-md",
    "shadow-lg",
    "shadow-xl",
    "shadow-2xl",
  ],
};
