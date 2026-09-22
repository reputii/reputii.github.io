import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// reputii.github.io는 조직/사용자 페이지(사이트가 도메인 루트에 서빙됨)이므로
// base는 기본값 "/" 그대로 둔다. 프로젝트 페이지(예: reputii/reputii)처럼
// 서브패스에 서빙될 경우에만 base를 "/저장소이름/"으로 바꾸면 된다.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
