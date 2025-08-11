import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/base/Header";
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
      {showHeader && <Header />}
      <div style={{ marginTop: showHeader ? "4rem" : "0" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
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
