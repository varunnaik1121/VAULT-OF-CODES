/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Nsans-light": ["Nsans Light"],
        "Nsans-medium": ["Nsans Medium"],
        "Nsans-bold": ["Nsans Bold"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
