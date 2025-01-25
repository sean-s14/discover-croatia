import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setup.ts",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
