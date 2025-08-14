import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import AvgBatter from "./batter/AvgBatter";
import HomeRunBatter from "./batter/HomeRunBatter";
import RbiBatter from "./batter/RbiBatter";
import {
  PlayerRankingContainer,
  PlayerRankingHeader,
  PlayerRankingTitle,
  PlayerSelection,
  PlayerSelectionContainer,
} from "../../../styles/ranking/PlayerRankingStyled";

const BatterRanking = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [activeTab, setActiveTab] = useState("AVG");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "AVG":
        return <AvgBatter />;
      case "HR":
        return <HomeRunBatter />;
      case "RBI":
        return <RbiBatter />;
      default:
        return null;
    }
  };

  return (
    <div>
      <PlayerRankingContainer>
        <PlayerRankingHeader>
          <PlayerRankingTitle>🏆 {year} 타자 순위</PlayerRankingTitle>
          <PlayerSelectionContainer>
            <PlayerSelection
              isActive={activeTab === "AVG"}
              onClick={() => handleTabClick("AVG")}
            >
              타율순
            </PlayerSelection>
            <PlayerSelection
              isActive={activeTab === "HR"}
              onClick={() => handleTabClick("HR")}
            >
              홈런순
            </PlayerSelection>
            <PlayerSelection
              isActive={activeTab === "RBI"}
              onClick={() => handleTabClick("RBI")}
            >
              타점순
            </PlayerSelection>
          </PlayerSelectionContainer>
        </PlayerRankingHeader>
      </PlayerRankingContainer>
      {renderContent()}
    </div>
  );
};

export default BatterRanking;
