import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(80vw, -20vh)" },
          "50%": { transform: "translate(-50vw, 50vh)" },
          "75%": { transform: "translate(30vw, 80vh)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "float-reverse": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-40vw, 60vh)" },
          "50%": { transform: "translate(70vw, -40vh)" },
          "75%": { transform: "translate(-30vw, 20vh)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        float: "float 10s linear infinite",
        "float-reverse": "float-reverse 12s linear infinite",
        "float-slower": "float 15s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;


