/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        select: {
          DEFAULT: "hsl(var(--select))",
          foreground: "hsl(var(--select-foreground))",
        },
        label: {
          DEFAULT: "hsl(var(--label-foreground))",
        },
        good: {
          DEFAULT: "hsl(var(--good))",
        },
        bad: {
          DEFAULT: "hsl(var(--bad))",
        },
      },
    },
  },
  plugins: [],
};
