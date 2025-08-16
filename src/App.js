import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/base/Header";
import SideBar from "./components/base/SideBar";
import Homepage from "./components/pages/homepage/HomePage";
import LoginPage from "./components/pages/user/LoginPage";
import SignupPage from "./components/pages/user/SignupPage";
import LeagueSchedulePage from "./components/pages/schedule/LeagueSchedulePage";
import LiveChatMainPage from "./components/pages/liveChat/LiveChatMainPage";
import LiveChatRoomPage from "./components/pages/liveChat/LiveChatRoomPage";
import FuturesSchedulePage from "./components/pages/schedule/FuturesSchedulePage";
import PlayerInput from "./components/pages/PlayerInput";
import Ranking from "./components/pages/RankingPage";
import PlayerInfoPage from "./components/pages/PlayerInfo/PlayerInfoPage";
import PlayerDetailPage from "./components/pages/PlayerInfo/PlayerDetailPage";

// BrowserRouter 내부에서 useLocation을 사용하는 컴포넌트
function AppContent() {
  const location = useLocation();

  // 현재 경로가 login, signup이면 false
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {/* 메인 콘텐츠 영역 */}
      {isAuthPage ? (
        // 로그인/회원가입 페이지일 때는 여백 없이 전체 화면
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      ) : (
        // 일반 페이지일 때는 헤더와 사이드바 포함
        <div
          style={{
            marginTop: "4rem", // 헤더 높이만큼 여백
            minHeight: "calc(100vh - 4rem)",
          }}
        >
          <Header />
          <div style={{ display: "flex" }}>
            {/* 사이드바 */}
            <SideBar />

            {/* 메인 콘텐츠 */}
            <div style={{ flex: 1, padding: "2rem" }}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/schedule" element={<LeagueSchedulePage />} />
                <Route path="/futures" element={<FuturesSchedulePage />} />
                <Route path="/player-input" element={<PlayerInput />} />
                <Route path="/standings" element={<Ranking />} />
                <Route
                  path="/players/detail/:playerId"
                  element={<PlayerDetailPage />}
                />
                <Route path="/live-chat" element={<LiveChatMainPage />} />
                <Route
                  path="/live-chat/:gameId"
                  element={<LiveChatRoomPage />}
                />
                <Route path="/players" element={<PlayerInfoPage />} />
                {/* 팀별 게시글 상세 페이지 라우트 */}
                <Route
                  path="/:teamId/post/:postId"
                  // element={<PostDetailPage />}
                />
              </Routes>
            </div>
          </div>
        </div>
      )}
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
