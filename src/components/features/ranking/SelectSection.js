import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import TeamRanking from "./TeamRanking";
import PlayerRankings from "./PlayerRankings";
import {
  SelectContainer,
  Select,
} from "../../../styles/ranking/SelectSectionStyled";

const SelectSection = () => {
  const [activeTab, setActiveTab] = useState("team");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "team":
        return <TeamRanking />;
      case "player":
        return <PlayerRankings />;
      default:
        return null;
    }
  };

  return (
    <div>
      <SelectContainer>
        <Select
          isActive={activeTab === "team"}
          onClick={() => handleTabClick("team")}
        >
          팀 순위
        </Select>
        <Select
          isActive={activeTab === "player"}
          onClick={() => handleTabClick("player")}
        >
          선수 순위
        </Select>
      </SelectContainer>
      <div>{renderContent()}</div>
    </div>
  );
};

export default SelectSection;
