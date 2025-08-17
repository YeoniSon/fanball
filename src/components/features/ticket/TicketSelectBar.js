import { useState } from "react";
import TicketMainContent from "./TicketMaincontent";
import SellTicketContent from "./SellTicketContent";
import BuyTicketContent from "./BuyTicketContent";
import {
  Select,
  SelectContainer,
} from "../../../styles/ranking/SelectSectionStyled";

const TicketSelectBar = () => {
  const [activeTab, setActiveTab] = useState("ticket");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "ticket":
        return <TicketMainContent />;
      case "sellTicket":
        return <SellTicketContent />;
      case "buyTicket":
        return <BuyTicketContent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <SelectContainer>
        <Select
          isActive={activeTab === "ticket"}
          onClick={() => handleTabClick("ticket")}
        >
          티켓 구매
        </Select>
        <Select
          isActive={activeTab === "sellTicket"}
          onClick={() => handleTabClick("sellTicket")}
        >
          내 판매 내역
        </Select>
        <Select
          isActive={activeTab === "buyTicket"}
          onClick={() => handleTabClick("buyTicket")}
        >
          내 구매 내역
        </Select>
      </SelectContainer>
      <div>{renderContent()}</div>
    </div>
  );
};

export default TicketSelectBar;
