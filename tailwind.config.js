/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bvmp: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/heroBack.png')",
        "pattern-2": "url('/assets/descBg.png')",
        "feature-back": "url('/featuresBack.png')",
        "why-us": "url('/assets/whyusbg.png')",
      },
    },
  },
  plugins: [],
};
