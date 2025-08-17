import { useState } from "react";

import SellTicketContent from "./SellTicketContent";
import BuyTicketContent from "./BuyTicketContent";
import {
  SelectContainer,
  Select,
} from "../../../styles/ranking/SelectSectionStyled";
import TicketFilter from "./TicketFilter";

const TicketSelectBar = () => {
  const [activeTab, setActiveTab] = useState("ticket");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "ticket":
        return <TicketFilter />;
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
          티켓 판매
        </Select>
        <Select
          isActive={activeTab === "buyTicket"}
          onClick={() => handleTabClick("buyTicket")}
        >
          티켓 구매
        </Select>
      </SelectContainer>
      {renderContent()}
    </div>
  );
};

export default TicketSelectBar;
