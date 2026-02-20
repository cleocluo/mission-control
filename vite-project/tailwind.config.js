import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#e9f0ff",
          200: "#cddcff",
          300: "#a7c0ff",
          400: "#7b9bff",
          500: "#5d7cff",
          600: "#435eff",
          700: "#3448e6",
          800: "#2c3ab8",
          900: "#27328f",
        },
      },
    },
  },
  plugins: [],
};
