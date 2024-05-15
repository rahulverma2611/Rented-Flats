/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "@sm": { max: "639px" },
        "@md": { min: "640px", max: "1023px" },
        "@lg": { min: "1024px", max: "1440px" },
        "@xl": { min: "1440px", max: "1599px" },
        "@xxl": { min: "1600px" },
        // '@2xl': { min: '1921px' },
      },
    },
  },
  plugins: [],
};
