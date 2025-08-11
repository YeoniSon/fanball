import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Container,
  HeaderContent,
  LogoSection,
  LogoIcon,
  LogoText,
  SearchSection,
  SearchContainer,
  SearchIcon,
  SearchInput,
  UserSection,
  IconButton,
  NotificationBadge,
  MessageBadge,
  ProfileButton,
  Avatar,
  UserInfo,
  AuthButtons,
  LoginButton,
  SignupButton,
} from "../../styles/HeaderStyled";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  // 알림 및 메시지 상태
  const [notifications, setNotifications] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(5);
  // 스크롤 상태
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 확인
    const loginStatus = localStorage.getItem("isLoggedIn");
    const userData = localStorage.getItem("user");

    if (loginStatus === "true" && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 방향에 따라 헤더 표시/숨김
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤하고 100px 이상 스크롤했을 때 헤더 숨김
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // 위로 스크롤할 때 헤더 표시
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);

    // 홈페이지로 이동
    navigate("/");
  };

  const handlePageChange = (page) => {
    navigate(`/${page}`);
  };

  const isActivePage = (page) => {
    return (
      location.pathname === `/${page}` ||
      (page === "home" && location.pathname === "/")
    );
  };

  return (
    <HeaderContainer isVisible={isVisible}>
      <Container>
        <HeaderContent>
          {/* Logo */}
          <LogoSection onClick={() => navigate("/")}>
            <LogoIcon>⚾</LogoIcon>
            <LogoText>
              <h1>FANBALL</h1>
              <p>팬들의 야구 커뮤니티</p>
            </LogoText>
          </LogoSection>

          {/* 검색바 */}
          <SearchSection>
            <SearchContainer>
              <SearchIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="팀, 선수, 티켓을 검색해보세요..."
              />
            </SearchContainer>
          </SearchSection>

          {/* 로그인/사용자 정보 */}
          <UserSection>
            {isLoggedIn && user ? (
              <>
                {/* 알림 */}
                <IconButton>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m4 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  {notifications > 0 && (
                    <NotificationBadge>{notifications}</NotificationBadge>
                  )}
                </IconButton>

                {/* 메시지 */}
                <IconButton onClick={() => handlePageChange("messages")}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  {unreadMessages > 0 && (
                    <MessageBadge>{unreadMessages}</MessageBadge>
                  )}
                </IconButton>

                {/* 사용자 프로필 */}
                <ProfileButton onClick={() => handlePageChange("mypage")}>
                  <Avatar>{user.name.charAt(0)}</Avatar>
                  <UserInfo>
                    <div className="user-name">{user.name}</div>
                    <div className="user-role">
                      {user.role === "admin" ? "관리자" : user.nickname}
                    </div>
                  </UserInfo>
                </ProfileButton>

                {/* 로그아웃 버튼 */}
                <IconButton onClick={handleLogout} title="로그아웃">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </IconButton>
              </>
            ) : (
              <AuthButtons>
                <LoginButton onClick={() => navigate("/login")}>
                  로그인
                </LoginButton>
                <SignupButton onClick={() => navigate("/signup")}>
                  회원가입
                </SignupButton>
              </AuthButtons>
            )}
          </UserSection>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
