import React from "react";

import WelcomeSection from "../../features/homepage/WelcomeSection";
import ActionSection from "../../features/homepage/ActionSection";
import TicketSection from "../../features/homepage/TicketSection";
import TodayGameSection from "../../features/homepage/TodayGameSection";
import FuturesGameSection from "../../features/homepage/FuturesGameSection";
import PopularPostsSection from "../../features/homepage/PopularPostsSection";

const HomePage = () => {
  const actionItem = [
    {
      title: "티켓 거래",
      description: "안전한 티켓 양도거래",
      icon: "ticket",
      path: "/ticket",
    },
    {
      title: "선수 등/말소",
      description: "선수들의 등록/말소 정보",
      icon: "player",
      path: "/player-input",
    },
    {
      title: "실시간 채팅",
      description: "팬들과의 실시간 소통",
      icon: "chat",
      path: "/community",
    },
    {
      title: "순위표",
      description: "팀 순위 및 선수 순위",
      icon: "standings",
      path: "/standings",
    },
  ];
  return (
    <div>
      <WelcomeSection />
      <ActionSection actionItems={actionItem} />

      <TicketSection />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "1rem" }}>
          <TodayGameSection />
        </div>
        <div style={{ flex: 1 }}>
          <FuturesGameSection />
        </div>
      </div>
      <PopularPostsSection />
    </div>
  );
};

export default HomePage;
