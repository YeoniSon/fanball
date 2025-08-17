import { useState, useMemo } from "react";
import {
  FilterOptions,
  FilterOption,
  HeaderRight,
  MainTitle,
} from "../../../styles/ticket/SellTicketFilterStyled";
import {
  BuyTicketContainer,
  BuyTicketHeader,
} from "../../../styles/ticket/BuyTicketFilterStyled";
import BuyTicketContent from "./BuyTicketContent";

const BuyTicketFilter = () => {
  const [ticketStatus, setTicketStatus] = useState("all");

  return (
    <div>
      <BuyTicketContainer>
        <BuyTicketHeader>
          <MainTitle>내 구매 내역</MainTitle>
          <HeaderRight>
            <FilterOptions
              value={ticketStatus}
              onChange={(e) => setTicketStatus(e.target.value)}
            >
              <FilterOption value="all">전체</FilterOption>
              <FilterOption value="purchased">구매완료</FilterOption>
              <FilterOption value="canceled">구매취소</FilterOption>
              <FilterOption value="upcoming">구매예정</FilterOption>
            </FilterOptions>
          </HeaderRight>
        </BuyTicketHeader>
        <BuyTicketContent ticketStatus={ticketStatus} />
      </BuyTicketContainer>
    </div>
  );
};

export default BuyTicketFilter;
