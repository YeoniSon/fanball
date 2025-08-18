import { useState, useMemo, useEffect } from "react";
import { PersonIcon, LocationIcon, ChatIcon } from "../../../common/Icons";
import {
  NoLoginMessage,
  Title,
  SubTitle,
  TicketCard,
  TicketHeader,
  TicketGame,
  TicketDate,
  TicketTeams,
  TicketValue,
  CurrentPrice,
  TicketButton,
  StatsRow,
  VS,
  Hr,
} from "../../../../styles/ticket/SellTicketContentStyled";
import {
  PurchaseCode,
  PurchaseDay,
  PurchasePrice,
  StatusBadge,
  SellerName,
} from "../../../../styles/ticket/BuyTicketContentStyled";

const BuyTicketContent = ({ ticketStatus = "all" }) => {
  const [ticketData, setTicketData] = useState([]);
  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ko-KR", {
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };
  const filteredTickets = useMemo(() => {
    if (!currentUser) return [];
    const currentUserId = String(currentUser.id ?? "");
    const normalize = (v) => {
      const map = {
        canceled: "canceled",
        cancelled: "canceled",
        구매취소: "canceled",
        구매완료: "purchased",
        구매예정: "upcoming",
      };
      return map[v] || v;
    };
    const normalizedOption = normalize(ticketStatus);
    return ticketData.filter((ticket) => {
      const buyerId = String(ticket?.buyer?.id ?? "");
      const mine = buyerId === currentUserId;
      if (!mine) return false;
      if (normalizedOption === "all") return true;
      return normalize(ticket?.status) === normalizedOption;
    });
  }, [ticketData, ticketStatus, currentUser]);

  const [page, setPage] = useState(1);
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filteredTickets.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [ticketStatus]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredTickets.slice(start, start + pageSize);
  }, [filteredTickets, page]);

  const formatPrice = (price) => {
    if (typeof price !== "number") return price;
    return price.toLocaleString("ko-KR");
  };

  const getDdayInfo = (dateString) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const gameDate = new Date(dateString);
      gameDate.setHours(0, 0, 0, 0);
      const diffDays = Math.round((gameDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays > 0)
        return { label: `${Math.abs(diffDays)}일 후`, type: "future" };
      if (diffDays === 0) return { label: "오늘", type: "today" };
      return { label: `${Math.abs(diffDays)}일 전`, type: "past" };
    } catch (e) {
      return { label: "D-?", type: "future" };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/mockPurchasedTickets.json`);
      const data = await response.json();
      setTicketData(Array.isArray(data?.purchases) ? data.purchases : []);
    };

    fetchData();
  }, [ticketStatus]);

  if (!currentUser) {
    return (
      <div>
        <NoLoginMessage>
          <PersonIcon />
          <Title>로그인이 필요합니다</Title>
          <SubTitle>판매 내역을 확인하려면 로그인해주세요.</SubTitle>
        </NoLoginMessage>
      </div>
    );
  }
  return (
    <div>
      {pageItems.map((ticket) => (
        <div key={ticket.id}>
          <TicketCard key={ticket.id}>
            <div>
              <StatusBadge status={ticket.status}>
                {ticket.status === "purchased"
                  ? "구매완료"
                  : ticket.status === "canceled"
                  ? "구매취소"
                  : ticket.status === "upcoming"
                  ? "구매예정"
                  : "구매불가"}
              </StatusBadge>
            </div>

            <TicketHeader>
              <TicketGame>
                <TicketDate>
                  <div>{formatDate(ticket.date)}</div>
                  <div>{ticket.time}</div>
                </TicketDate>
                <TicketTeams>
                  {ticket.team} <VS>VS</VS> {ticket.opponent}
                </TicketTeams>
              </TicketGame>

              <TicketValue>
                <LocationIcon /> {ticket.stadium} {ticket.section} {ticket.row}
                열 {ticket.seat}번
              </TicketValue>
              <SellerName>판매자: {ticket?.seller?.nickname}</SellerName>
            </TicketHeader>

            <PurchasePrice>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <CurrentPrice style={{ color: "blue" }}>
                  ₩ {formatPrice(ticket.price)}
                </CurrentPrice>
                <PurchaseDay>
                  구매일 : {getDdayInfo(ticket.purchasedAt).label}
                </PurchaseDay>
              </div>
            </PurchasePrice>

            <Hr />
            <StatsRow>
              <PurchaseCode>구매번호 : {ticket.orderNumber}</PurchaseCode>

              <TicketButton>
                <ChatIcon />
                구매문의
              </TicketButton>
            </StatsRow>
          </TicketCard>
        </div>
      ))}
    </div>
  );
};

export default BuyTicketContent;
