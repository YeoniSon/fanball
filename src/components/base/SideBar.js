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
    { id: "SSG", label: "SSG 랜더스", path: "/ssgLanders" },
    { id: "KIA", label: "KIA 타이거즈", path: "/kiaTigers" },
    { id: "LG", label: "LG 트윈스", path: "/lgTwins" },
    { id: "NC", label: "NC 다이노스", path: "/ncDinos" },
    { id: "KT", label: "KT 위즈", path: "/ktWiz" },
    { id: "DOOSAN", label: "두산 베어스", path: "/doosanBears" },
    { id: "SAMSUNG", label: "삼성 라이온즈", path: "/samsungLions" },
    { id: "LOTTE", label: "롯데 자이언츠", path: "/lotteGiants" },
    { id: "KIWOO", label: "키움 히어로즈", path: "/kiwoomHeroes" },
    { id: "HANHWA", label: "한화 이글스", path: "/hanhwaEagles" },
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
      />
    </SideBarContainer>
  );
};

export default SideBar;
