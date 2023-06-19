import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        lightgray: 'hsl(var(--color-light-gray) / <alpha-value>)',
        grayishblue: 'hsl(var(--color-grayish-blue) / <alpha-value>)',
        darkblue: 'hsl(var(--color-dark-blue) / <alpha-value>)'
      }
    },
  },
  plugins: [],
} satisfies Config;
