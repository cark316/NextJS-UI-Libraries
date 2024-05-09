import type { Config } from "tailwindcss";
import radixThemePlugin from "radix-ui-themes-with-tailwind";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true, // optional
      useTailwindRadiusNames: true, // optional
      mapMissingTailwindColors: true, // optional
    }),
    nextui()
  ],
};
export default config;
