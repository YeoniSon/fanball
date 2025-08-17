import React, { useState, useEffect } from "react";
import { TicketIcon } from "../../common/Icons";
import { useNavigate } from "react-router-dom";
import {
  TicketGrid,
  TicketCard,
  TicketHeader,
  TicketTeams,
  TicketDate,
  TicketValue,
  TicketPrice,
  CurrentPrice,
  OriginalPrice,
  TicketSeller,
  SellerName,
  TicketButton,
  StatusBadge,
  TicketContainer,
  TicketTitle,
  TicketHeaderContainer,
  TicketHeaderLeft,
  ViewAllButton,
} from "../../../styles/HomePage/TicketSectionStyled";

const TicketSection = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/mockTickets.json");
        const data = await response.json();
        setTickets(data.tickets);
        setLoading(false);
      } catch (error) {
        console.error("티켓 데이터 로드 실패:", error);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    });
  };

  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };

  const getStatusText = (status) => {
    switch (status) {
      case "available":
        return "구매가능";
      case "reserved":
        return "예약됨";
      case "sold":
        return "판매완료";
      default:
        return "상태불명";
    }
  };

  const handleViewAll = () => {
    navigate("/ticket");
  };

  const handleTicketBuy = () => {
    navigate("/chat");
  };

  if (loading) {
    return <div>티켓 정보를 불러오는 중...</div>;
  }

  // 처음 3개 티켓만 표시
  const displayTickets = tickets.slice(0, 3);

  return (
    <div style={{ padding: "1rem" }}>
      <TicketContainer>
        <TicketHeaderContainer>
          <TicketHeaderLeft>
            <TicketIcon />
            <TicketTitle>티켓 거래</TicketTitle>
          </TicketHeaderLeft>
          <ViewAllButton onClick={handleViewAll}>전체보기 →</ViewAllButton>
        </TicketHeaderContainer>

        <TicketGrid>
          {displayTickets.map((ticket) => (
            <TicketCard key={ticket.id}>
              <StatusBadge status={ticket.status}>
                {getStatusText(ticket.status)}
              </StatusBadge>
              <TicketHeader>
                <TicketTeams>
                  {ticket.team} vs {ticket.opponent}
                </TicketTeams>
                <TicketDate>
                  {formatDate(ticket.date)} . {ticket.section}
                </TicketDate>
                <TicketValue>{ticket.stadium}</TicketValue>
              </TicketHeader>

              <TicketPrice>
                <CurrentPrice>{formatPrice(ticket.price)}원</CurrentPrice>
                <OriginalPrice>
                  {formatPrice(ticket.originalPrice)}원
                </OriginalPrice>
              </TicketPrice>

              <TicketSeller>
                <SellerName>{ticket.seller.nickname}</SellerName>
              </TicketSeller>

              <TicketButton
                disabled={ticket.status !== "available"}
                onClick={() => {
                  if (ticket.status === "available") {
                    alert(
                      `${ticket.team} vs ${ticket.opponent} 티켓을 구매하시겠습니까?`
                    );
                    handleTicketBuy();
                  }
                }}
              >
                {ticket.status === "available" ? "구매 문의" : "구매불가"}
              </TicketButton>
            </TicketCard>
          ))}
        </TicketGrid>
      </TicketContainer>
    </div>
  );
};

export default TicketSection;
