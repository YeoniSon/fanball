import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  MySellRecordContainer,
  SellRecordHeader,
  MainTitle,
  FilterOptions,
  FilterOption,
  NewTicketButton,
  HeaderRight,
} from "../../../styles/ticket/SellTicketFilterStyled";
import SellTicketContent from "./SellTicketContent";

const SellTicketFilter = () => {
  const [ticketStatus, setTicketStatus] = useState("all");
  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);
  const navigate = useNavigate();

  const handleTicketClick = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    navigate("/ticket/ticketRegister");
  };

  const PlusIcon = () => (
    <svg
      width="25"
      height="25"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12H18M12 6V18"
      />
    </svg>
  );

  return (
    <div>
      <MySellRecordContainer>
        <SellRecordHeader>
          <MainTitle>내 판매 내역</MainTitle>
          <HeaderRight>
            <FilterOptions
              value={ticketStatus}
              onChange={(e) => setTicketStatus(e.target.value)}
            >
              <FilterOption value="all">전체</FilterOption>
              <FilterOption value="available">판매중</FilterOption>
              <FilterOption value="reserved">예약중</FilterOption>
              <FilterOption value="sold">판매완료</FilterOption>
              <FilterOption value="done">기간만료</FilterOption>
            </FilterOptions>
            <NewTicketButton onClick={handleTicketClick}>
              <PlusIcon /> 새 티켓 등록
            </NewTicketButton>
          </HeaderRight>
        </SellRecordHeader>
        <SellTicketContent option={ticketStatus} />
      </MySellRecordContainer>

      {/* 페이지네이션은 SellTicketContent 내부에서 처리됩니다. 필요 시 외부에서도 사용할 수 있습니다. */}
      {/* <Pagination page={...} pageCount={...} onChange={...} /> */}
    </div>
  );
};

export default SellTicketFilter;
