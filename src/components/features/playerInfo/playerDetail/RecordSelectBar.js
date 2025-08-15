import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import SeasonRecord from "./SeasonRecord";
import MonthRecord from "./MonthRecord";
import GameRecord from "./GameRecord";
import {
  SelectContainer,
  Select,
} from "../../../../styles/ranking/SelectSectionStyled";

const RecordSelectBar = () => {
  const [activeTab, setActiveTab] = useState("season");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "season":
        return <SeasonRecord />;
      case "month":
        return <MonthRecord />;
      case "game":
        return <GameRecord />;
      default:
        return null;
    }
  };

  return (
    <div>
      <SelectContainer>
        <Select
          isActive={activeTab === "season"}
          onClick={() => handleTabClick("season")}
        >
          시즌별 기록
        </Select>
        <Select
          isActive={activeTab === "month"}
          onClick={() => handleTabClick("month")}
        >
          월별 기록
        </Select>
        <Select
          isActive={activeTab === "game"}
          onClick={() => handleTabClick("game")}
        >
          경기별 기록
        </Select>
      </SelectContainer>
      <div>{renderContent()}</div>
    </div>
  );
};

export default RecordSelectBar;
