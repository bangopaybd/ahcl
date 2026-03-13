/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",       // border-color
        background: "#f8fafc",   // page background
        foreground: "#111827",   // text color
        primary: "#22c55e",      // green buttons, accents
        secondary: "#64748b",    // secondary text
      },
      spacing: {
        18: "4.5rem",            // custom spacing if needed
      },
      borderRadius: {
        xl: "1rem",              // custom radius
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
