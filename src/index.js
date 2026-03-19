import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// GitHub Pages 배포 시 하위 경로(`/fallball`)에서 모의 JSON(`/mock*.json`)을 찾지 못하는 문제를 방지합니다.
// 모든 fetch 요청 중 `"/mock"`으로 시작하는 경우 PUBLIC_URL prefix를 붙여줍니다.
try {
  const publicUrl = process.env.PUBLIC_URL || "";
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    if (typeof input === "string" && input.startsWith("/mock")) {
      return originalFetch(`${publicUrl}${input}`, init);
    }
    return originalFetch(input, init);
  };
} catch {
  // window/process env가 없는 환경에서는 무시
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
