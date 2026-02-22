/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ enables class-based dark mode: <html class="dark">
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};