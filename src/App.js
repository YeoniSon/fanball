import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import Ranking from "./components/pages/RankingPage";
import PlayerInfoPage from "./components/pages/PlayerInfo/PlayerInfoPage";
import PlayerDetailPage from "./components/pages/PlayerInfo/PlayerDetailPage";
import TicketPage from "./components/pages/ticket/TicketPage";
import TicketEditPage from "./components/pages/ticket/TicketEditPage";
import TicketRegisterPage from "./components/pages/ticket/TicketRegisterPage";
import TicketDetailPage from "./components/pages/ticket/TicketDetailPage";
import MessagePage from "./components/pages/message/MessagePage";
import PlayerInputPage from "./components/pages/PlayerInputPage";
import TeamBoard from "./components/pages/teamBoard/TeamBoard";
import PostDetailPage from "./components/pages/teamBoard/PostDetailPage";
import NewPostPage from "./components/pages/teamBoard/NewPostPage";
import MyPage from "./components/pages/Mypage";
import AdminPage from "./components/pages/AdminPage";
import EditNotice from "./components/pages/notice/EditNotice";
import NewNotice from "./components/pages/notice/NewNotice";
import NoticesPage from "./components/pages/notice/NoticesPage";
import NoticesDetailPage from "./components/pages/notice/NoticesDetailPage";
import FindPassword from "./components/pages/user/FindPassword";

// BrowserRouter 내부에서 useLocation을 사용하는 컴포넌트
function AppContent() {
  const location = useLocation();

  // 현재 경로가 login, signup이면 false
  const isAuthPage = ["/login", "/signup", "/findPassword"].includes(
    location.pathname
  );

  return (
    <>
      {/* 메인 콘텐츠 영역 */}
      {isAuthPage ? (
        // 로그인/회원가입 페이지일 때는 여백 없이 전체 화면
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* 비밀번호 찾기 페이지 라우트 */}
          <Route path="/findPassword" element={<FindPassword />} />
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
                <Route path="/player-input" element={<PlayerInputPage />} />
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
                <Route path="/ticket" element={<TicketPage />} />
                <Route
                  path="/ticket/edit/:ticketId"
                  element={<TicketEditPage />}
                />
                <Route
                  path="/ticket/ticketRegister"
                  element={<TicketRegisterPage />}
                />
                <Route
                  path="/ticket/detail/:ticketId"
                  element={<TicketDetailPage />}
                />

                {/* 메시지 페이지 라우트 */}
                <Route path="/message" element={<MessagePage />} />

                {/* 팀별 게시글 목록 페이지 라우트 */}
                <Route path="/:teamId" element={<TeamBoard />} />

                {/* 팀별 게시글 상세 페이지 라우트 */}
                <Route
                  path="/:teamId/post/:postId"
                  element={<PostDetailPage />}
                />

                <Route path="/:teamId/post/newPost" element={<NewPostPage />} />

                {/* 마이페이지 라우트 */}
                <Route path="/mypage" element={<MyPage />} />

                {/* 관리자 페이지 라우트 */}
                <Route path="/admin" element={<AdminPage />} />
                <Route
                  path="/admin/editNotice/:noticeId"
                  element={<EditNotice />}
                />
                <Route path="/admin/newNotice" element={<NewNotice />} />

                {/* 공지사항 목록 페이지 라우트 */}
                <Route path="/notices" element={<NoticesPage />} />
                <Route
                  path="/notices/:noticeId"
                  element={<NoticesDetailPage />}
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
