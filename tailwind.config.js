/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "var(--bg-color-primary)",
        "secondary-blue": "var(--bg-color)",
        "primary-green": "var(--bg-color-secondary)",
        "primary-orange": "var(--bg-color-forth)",
        "primary-gray": "var(--text-color-prime)",
        "secondary-gray": "var(--text-color-sec)",
        "nav-gray": "rgba(51, 51, 50, .2)",
      },
    },
  },
  plugins: [],
};
