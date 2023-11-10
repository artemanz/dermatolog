import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        hd: "1280px",
        desktop: "840px",
        "mobile-l": "375px",
      },
      colors: {
        base: "#2f2f2f",
        accent: "#d09877",
        neutral: "#909090",
        "neutral-1": "#464646",
      },
    },
  },
  plugins: [],
};
export default config;
