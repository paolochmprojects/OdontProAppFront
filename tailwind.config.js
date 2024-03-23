/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        odonttheme: {
          "primary": "#64e7df",
          "secondary": "#cfcace",
          "accent": "#cfcace",
          "neutral": "#018a9c",
          "base-100": "#004059",
          "info": "#0095fb",
          "success": "#00b258",
          "warning": "#fde047",
          "error": "#ef4444",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas": ["'Bebas Neue'"]
      }
    },
  },
  plugins: [require("daisyui")],
}

