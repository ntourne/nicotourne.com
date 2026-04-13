import type { Config } from "tailwindcss"
import sharedPreset from "@nicotourne/config/tailwind"

export default {
  presets: [sharedPreset],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config
