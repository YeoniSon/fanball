import { useState } from "react";
import EraPitcher from "./pitcher/EraPitcher";
import WinsPitcher from "./pitcher/WinsPitcher";
import StrikeoutPitcher from "./pitcher/StrikeoutPitcher";
import {
  PlayerRankingContainer,
  PlayerRankingHeader,
  PlayerRankingTitle,
  PlayerSelection,
  PlayerSelectionContainer,
} from "../../../styles/ranking/PlayerRankingStyled";

const PitcherRanking = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [activeTab, setActiveTab] = useState("ERA");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "ERA":
        return <EraPitcher />;
      case "WINS":
        return <WinsPitcher />;
      case "STRIKEOUT":
        return <StrikeoutPitcher />;
      default:
        return null;
    }
  };

  return (
    <div>
      <PlayerRankingContainer>
        <PlayerRankingHeader>
          <PlayerRankingTitle>🏆 {year} 투수 순위</PlayerRankingTitle>
          <PlayerSelectionContainer>
            <PlayerSelection
              isActive={activeTab === "ERA"}
              onClick={() => handleTabClick("ERA")}
            >
              평균자책순
            </PlayerSelection>
            <PlayerSelection
              isActive={activeTab === "WINS"}
              onClick={() => handleTabClick("WINS")}
            >
              승수순
            </PlayerSelection>
            <PlayerSelection
              isActive={activeTab === "STRIKEOUT"}
              onClick={() => handleTabClick("STRIKEOUT")}
            >
              탈삼진순
            </PlayerSelection>
          </PlayerSelectionContainer>
        </PlayerRankingHeader>
      </PlayerRankingContainer>
      {renderContent()}
    </div>
  );
};

export default PitcherRanking;
