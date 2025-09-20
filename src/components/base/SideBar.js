import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBarContainer, Bar } from "../../styles/SideBarStyled";
import MainMenu from "../features/sidebar/MainMenu";
import TicketMenu from "../features/sidebar/TicketMenu";
import CommunityMenu from "../features/sidebar/CommunityMenu";
import TeamBoardMenu from "../features/sidebar/TeamBoardMenu";
import MyPageMenu from "../features/sidebar/MyPageMenu";
import AdminMenu from "../features/sidebar/AdminMenu";

const SideBar = ({ showHeader, activeMenu, onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 모든 메뉴 아이템 정의 (helper에서 참조하므로 먼저 선언)
  const allMenuItems = [
    // 메인메뉴
    { id: "home", label: "홈", path: "/" },
    { id: "schedule", label: "1군 일정", path: "/schedule" },
    { id: "futures", label: "2군 일정", path: "/futures" },
    { id: "playerInput", label: "선수 등/말소", path: "/player-input" },
    { id: "standings", label: "순위", path: "/standings" },
    { id: "players", label: "선수정보", path: "/players" },
    // 티켓 메뉴
    { id: "ticket", label: "티켓 거래", path: "/ticket" },
    { id: "message", label: "메세지", path: "/message" },
    // 커뮤니티 메뉴
    { id: "community", label: "실시간 채팅", path: "/community" },
    // 개인 메뉴
    { id: "mypage", label: "마이페이지", path: "/mypage" },
    //팀별 게시판
    {
      id: "SSG",
      label: "SSG 랜더스",
      path: "/ssgLanders",
      color: "rgb(206, 14, 45)",
    },
    { id: "KIA", label: "KIA 타이거즈", path: "/kiaTigers", color: "#C71F2D" },
    { id: "LG", label: "LG 트윈스", path: "/lgTwins", color: "#C60C30" },
    { id: "NC", label: "NC 다이노스", path: "/ncDinos", color: "#315288" },
    { id: "KT", label: "KT 위즈", path: "/ktWiz", color: "#000000" },
    {
      id: "DOOSAN",
      label: "두산 베어스",
      path: "/doosanBears",
      color: "#131230",
    },
    {
      id: "SAMSUNG",
      label: "삼성 라이온즈",
      path: "/samsungLions",
      color: "#074CA1",
    },
    {
      id: "LOTTE",
      label: "롯데 자이언츠",
      path: "/lotteGiants",
      color: "#002955",
    },
    {
      id: "KIWOO",
      label: "키움 히어로즈",
      path: "/kiwoomHeroes",
      color: "#820024",
    },
    {
      id: "HANHWA",
      label: "한화 이글스",
      path: "/hanhwaEagles",
      color: "#FF6600",
    },
  ];
  const isLoggedIn = useMemo(() => {
    try {
      const raw =
        localStorage.getItem("user") || localStorage.getItem("currentUser");
      const parsed = raw ? JSON.parse(raw) : null;
      return !!parsed?.id;
    } catch {
      return false;
    }
  }, []);
  const isAdmin = useMemo(() => {
    try {
      const raw =
        localStorage.getItem("user") || localStorage.getItem("currentUser");
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed?.role === "admin";
    } catch {
      return false;
    }
  }, []);
  const getActiveMenuIdForPath = (currentPath) => {
    // 실시간 채팅 페이지인 경우
    if (currentPath === "/live-chat" || currentPath.startsWith("/live-chat/")) {
      return "community";
    }

    // 커뮤니티(실시간 채팅) 경로 처리
    if (currentPath === "/community" || currentPath.startsWith("/community/")) {
      return "community";
    }

    //메시지 경로 처리
    if (currentPath === "/message" || currentPath.startsWith("/message/")) {
      return "message";
    }

    // 관리자 페이지 경로 처리
    if (currentPath === "/admin" || currentPath.startsWith("/admin/")) {
      return "admin";
    }

    // 개인 마이페이지 경로 처리
    if (currentPath === "/mypage" || currentPath.startsWith("/mypage/")) {
      return "mypage";
    }

    // 게시글 상세 페이지인 경우 팀 ID 추출
    if (currentPath.includes("/post/")) {
      const teamId = currentPath.split("/")[1]; // /{teamId}/post/{postId}에서 teamId 추출
      const teamMenu = allMenuItems.find((item) => {
        const itemPath = item.path.replace("/", "");
        return itemPath === teamId;
      });
      if (teamMenu) return teamMenu.id;
    }

    // 선수 상세 페이지 등 /players 하위 경로 처리
    if (currentPath === "/players" || currentPath.startsWith("/players/")) {
      return "players";
    }

    // 티켓 거래 하위 경로 처리 (예: /ticket/ticketRegister 등)
    if (currentPath === "/ticket" || currentPath.startsWith("/ticket/")) {
      return "ticket";
    }

    // 정확 일치 경로 처리
    const currentMenu = allMenuItems.find((item) => item.path === currentPath);
    if (currentMenu) return currentMenu.id;

    // 기본값
    return "home";
  };

  const [activeMenuState, setActiveMenuState] = useState(() =>
    getActiveMenuIdForPath(location.pathname)
  );

  // 현재 경로에 따라 활성 메뉴 설정
  useEffect(() => {
    const currentPath = location.pathname;
    setActiveMenuState(getActiveMenuIdForPath(currentPath));
  }, [location.pathname]);

  const handleMenuClick = (menuId, path) => {
    setActiveMenuState(menuId);
    navigate(path);
  };

  // 현재 선택된 팀의 색상 가져오기
  const getCurrentTeamColor = () => {
    const currentMenu = allMenuItems.find(
      (item) => item.id === activeMenuState
    );
    // 팀별 게시판인 경우에만 색상 반환
    if (
      currentMenu &&
      [
        "SSG",
        "KIA",
        "LG",
        "NC",
        "KT",
        "DOOSAN",
        "SAMSUNG",
        "LOTTE",
        "KIWOO",
        "HANHWA",
      ].includes(currentMenu.id)
    ) {
      return currentMenu.color;
    }
    return null; // 팀별 게시판이 아닌 경우 기본 색상
  };

  return (
    <SideBarContainer showHeader={showHeader}>
      <MainMenu activeMenu={activeMenuState} onMenuClick={handleMenuClick} />
      <Bar />
      <TicketMenu activeMenu={activeMenuState} onMenuClick={handleMenuClick} />
      <Bar />
      <CommunityMenu
        activeMenu={activeMenuState}
        onMenuClick={handleMenuClick}
      />
      <Bar />
      {isLoggedIn &&
        (isAdmin ? (
          <>
            <AdminMenu
              activeMenu={activeMenuState}
              onMenuClick={handleMenuClick}
            />
            <Bar />
          </>
        ) : (
          <>
            <MyPageMenu
              activeMenu={activeMenuState}
              onMenuClick={handleMenuClick}
            />
            <Bar />
          </>
        ))}
      <TeamBoardMenu
        activeMenu={activeMenuState}
        onMenuClick={handleMenuClick}
        allMenuItems={allMenuItems}
      />
    </SideBarContainer>
  );
};

export default SideBar;
