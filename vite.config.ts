import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// A GitHub *user* site (repo literally named balajihambeere.github.io) is
// served at the bare domain root — https://balajihambeere.github.io/ —
// unlike a project site, so `base` stays "/" (Vite's default; listed here
// for clarity, not because it needs changing).
//
// Builds straight into ./docs so GitHub Pages can serve this repo with
// zero extra tooling: Settings -> Pages -> Deploy from a branch -> main,
// folder "/docs".
export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
