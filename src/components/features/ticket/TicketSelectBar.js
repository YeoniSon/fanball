import { useState } from "react";
import BuyTicketFilter from "./buyTicket/BuyTicketFilter";
import {
  SelectContainer,
  Select,
} from "../../../styles/ranking/SelectSectionStyled";
import TicketFilter from "./TicketFilter";
import SellTicketFilter from "./sellticket/SellTicketFilter";

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
        return <SellTicketFilter />;
      case "buyTicket":
        return <BuyTicketFilter />;
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
