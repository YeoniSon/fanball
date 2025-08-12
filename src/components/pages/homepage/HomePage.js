import React from "react";

import WelcomeSection from "../../features/homepage/WelcomeSection";
import ActionSection from "../../features/homepage/ActionSection";

const Homepage = () => {
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
    </div>
  );
};

export default Homepage;
