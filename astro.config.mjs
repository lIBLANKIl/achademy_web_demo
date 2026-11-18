// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages 배포 시 워크플로우가 SITE / BASE_PATH 를 주입합니다.
// 로컬 개발에서는 기본값(루트 경로)으로 동작합니다.
export default defineConfig({
  site: process.env.SITE || "http://localhost:4321",
  base: process.env.BASE_PATH || "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
