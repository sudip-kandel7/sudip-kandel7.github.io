// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",

  site: "https://sudip-kandel7.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
