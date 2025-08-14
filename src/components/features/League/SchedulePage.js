import React, { useState } from "react";
import {
  SelectContainer,
  MonthlyScheduleButton,
} from "../../../styles/schedules/SchedulePageStyled";
import AllSchedule from "./AllSchedule";
import TodayGame from "./TodayGame";

const SchedulePage = () => {
  const [activeTab, setActiveTab] = useState("schedule"); // 기본값은 "전체 일정"

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "schedule":
        return <AllSchedule />;
      case "today":
        return <TodayGame />;
      default:
        return null;
    }
  };

  return (
    <div>
      <SelectContainer>
        <MonthlyScheduleButton
          isActive={activeTab === "schedule"}
          onClick={() => handleTabClick("schedule")}
        >
          <span>전체 일정</span>
        </MonthlyScheduleButton>
        <MonthlyScheduleButton
          isActive={activeTab === "today"}
          onClick={() => handleTabClick("today")}
        >
          <span>오늘의 경기</span>
        </MonthlyScheduleButton>
      </SelectContainer>

      {/* 선택된 탭의 내용을 렌더링 */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default SchedulePage;
