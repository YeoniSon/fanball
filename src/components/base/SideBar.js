import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBarContainer, Bar } from "../../styles/SideBarStyled";
import MainMenu from "../features/sidebar/MainMenu";
import TicketMenu from "../features/sidebar/TicketMenu";
import CommunityMenu from "../features/sidebar/CommunityMenu";
import TeamBoardMenu from "../features/sidebar/TeamBoardMenu";

const SideBar = ({ showHeader, activeMenu, onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenuState, setActiveMenuState] = useState("home");

  // 모든 메뉴 아이템 정의
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
    // 커뮤니티 메뉴
    { id: "community", label: "실시간 채팅", path: "/community" },
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

  // 현재 경로에 따라 활성 메뉴 설정
  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenu = allMenuItems.find((item) => item.path === currentPath);
    if (currentMenu) {
      setActiveMenuState(currentMenu.id);
    }
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
      <TeamBoardMenu
        activeMenu={activeMenuState}
        onMenuClick={handleMenuClick}
        allMenuItems={allMenuItems}
      />
    </SideBarContainer>
  );
};

export default SideBar;
