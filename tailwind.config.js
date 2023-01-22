/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      aspectRatio: {
        "9/16": "9 / 16",
      },
      height: {
        tampilan: "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};

