import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Changed from 'var(--font-montserrat)' to just 'Montserrat'
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'split-gray': '#e0e0e0',
        'split-black': '#000000',
      },
    },
  },
  plugins: [],
};
export default config;