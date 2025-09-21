import { useState } from "react";
import {
  Select,
  SelectContainer,
} from "../../../styles/ranking/SelectSectionStyled";
import UserContent from "./posts/UserContent";

const ActiveContainer = ({ user, reports, notices, admin }) => {
  const [activeTab, setActiveTab] = useState("users");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UserContent user={user} />;
      case "reports":
        return;
      case "notices":
        return;
      case "admins":
        return;
      default:
        return null;
    }
  };

  return (
    <>
      <SelectContainer style={{ margin: "30px 0 10px 0" }}>
        <Select
          isActive={activeTab === "users"}
          onClick={() => handleTabClick("users")}
        >
          사용자 관리
        </Select>
        <Select
          isActive={activeTab === "admins"}
          onClick={() => handleTabClick("admins")}
        >
          관리자 관리
        </Select>
        <Select
          isActive={activeTab === "reports"}
          onClick={() => handleTabClick("reports")}
        >
          신고 관리
        </Select>
        <Select
          isActive={activeTab === "notices"}
          onClick={() => handleTabClick("notices")}
        >
          공지사항 관리
        </Select>
      </SelectContainer>
      {renderContent()}
    </>
  );
};
export default ActiveContainer;
