import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/base/Header";
import SideBar from "./components/base/SideBar";
import Homepage from "./components/pages/homepage/HomePage";
import LoginPage from "./components/pages/user/LoginPage";
import SignupPage from "./components/pages/user/SignupPage";

// BrowserRouter 내부에서 useLocation을 사용하는 컴포넌트
function AppContent() {
  const location = useLocation();

  // 현재 경로가 login, signup이면 false
  const showHeader = !["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {/* 헤더는 로그인/회원가입 페이지에서만 숨김 */}
      {showHeader && <Header />}

      {/* 메인 콘텐츠 영역 */}
      <div
        style={{
          marginTop: showHeader ? "4rem" : "0", // 헤더가 있을 때만 상단 여백
          minHeight: "calc(100vh - 4rem)",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* 사이드바 */}
          {showHeader && <SideBar />}

          {/* 메인 콘텐츠 */}
          <div style={{ flex: 1, padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
