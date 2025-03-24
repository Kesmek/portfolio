// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: "where",
  image: {
    experimentalLayout: "responsive",
  },
  experimental: {
    responsiveImages: true,
    // preserveScriptOrder: true,
  },
});
