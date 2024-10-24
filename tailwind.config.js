/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "team-meeting": "url('./src/assets/4xp-graph.jpg')",
      },
    },
  },
  plugins: [],
};
