import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import TeamRanking from "./TeamRanking";
import BatterRanking from "./BatterRanking";
import PitcherRanking from "./PitcherRanking";
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
      case "batter":
        return <BatterRanking />;
      case "pitcher":
        return <PitcherRanking />;
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
          isActive={activeTab === "batter"}
          onClick={() => handleTabClick("batter")}
        >
          타자 순위
        </Select>
        <Select
          isActive={activeTab === "pitcher"}
          onClick={() => handleTabClick("pitcher")}
        >
          투수 순위
        </Select>
      </SelectContainer>
      <div>{renderContent()}</div>
    </div>
  );
};

export default SelectSection;
