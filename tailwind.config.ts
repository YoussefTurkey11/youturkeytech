import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pending: "var(--pending)",
        success: "var(--success)",
        review: "var(--review)",
      },
    },
  },
  plugins: [],
};

export default config;
