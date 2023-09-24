import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#7D5EFF",
        secondary: "#9CACE5",
        tertiary: "#32C5E6",
        quaternary: "#E5FFE5",
        quinary: "#8CA3E6",
        blackg: "#202124",
        buttonRed: "#FF312E",
        buttonBlue: "#32C5E6",
      },
    },
    plugins: [],
  },
};
export default config;
