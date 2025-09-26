import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationIcon, TimeIcon, ChatIcon } from "../../common/Icons";
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
  TicketResult,
  TicketGame,
  VS,
  TicketDescription,
  Hr,
  UserIcon,
  SellerRate,
  StatsRow,
  DdayBadge,
  StatItem,
  UnreadBadge,
  DetailButton,
} from "../../../styles/ticket/TicketResultContentStyled";
import Pagination from "../../common/Pagination";

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
      return { label: `${Math.abs(diffDays)}일 전`, type: "future" };
    if (diffDays === 0) return { label: "D-Day", type: "today" };
    return { label: `${Math.abs(diffDays)}일 후`, type: "past" };
  } catch (e) {
    return { label: "D-?", type: "future" };
  }
};

const TicketResultContents = ({ team = "ALL" }) => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/mockTickets.json");
        const data = await res.json();
        setTickets(Array.isArray(data?.tickets) ? data.tickets : []);
        setLoading(false);
      } catch (e) {
        setError("티켓 데이터를 불러오지 못했습니다.");
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  const filteredTickets = useMemo(() => {
    const isOpen = (t) => t.status === "available" || t.status === "reserved";
    if (team === "ALL") return tickets.filter(isOpen);
    return tickets.filter(
      (t) => isOpen(t) && (t.team === team || t.opponent === team)
    );
  }, [tickets, team]);

  const [page, setPage] = useState(1);
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filteredTickets.length / pageSize));

  const handleClickDetail = (ticketId) => {
    if (!currentUser) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    navigate(`/ticket/detail/${ticketId}`);
  };

  const handleMessageClick = (sellerId) => {
    navigate(`/message?user=${sellerId}`);
  };

  useEffect(() => {
    // 팀 변경 시 첫 페이지로 이동
    setPage(1);
  }, [team]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredTickets.slice(start, start + pageSize);
  }, [filteredTickets, page]);

  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>{error}</div>;
  if (filteredTickets.length === 0)
    return <div>해당 조건의 티켓이 없습니다.</div>;

  return (
    <>
      <TicketResult>
        {team === "ALL"
          ? "전체 티켓 (" + filteredTickets.length + ")"
          : team + "의 티켓 (" + filteredTickets.length + ")"}
      </TicketResult>
      <TicketGrid>
        {pageItems.map((ticket) => (
          <TicketCard key={ticket.id}>
            <StatusBadge status={ticket.status}>
              {ticket.status === "available"
                ? "판매중"
                : ticket.status === "reserved"
                ? "예약됨"
                : ticket.status === "sold"
                ? "판매완료"
                : "기간만료"}
            </StatusBadge>
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
            </TicketHeader>

            <TicketPrice>
              <CurrentPrice>₩ {formatPrice(ticket.price)}</CurrentPrice>
              <OriginalPrice>
                ₩ {formatPrice(ticket.originalPrice)}
              </OriginalPrice>
            </TicketPrice>

            <TicketSeller>
              <UserIcon>{ticket?.seller?.nickname.charAt(0)}</UserIcon>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SellerName>{ticket?.seller?.nickname}</SellerName>
                <SellerRate>⭐️ {ticket?.seller?.rating}%</SellerRate>
              </div>
            </TicketSeller>

            <TicketDescription>
              <div>{ticket.description}</div>
            </TicketDescription>

            <Hr />
            <StatsRow>
              <DdayBadge $type={getDdayInfo(ticket.date).type}>
                <TimeIcon /> {getDdayInfo(ticket.date).label}
              </DdayBadge>
              <div style={{ display: "flex", gap: 8 }}>
                <StatItem>
                  <ChatIcon />
                  문의 {ticket.inquiries ?? 0}
                </StatItem>
                <StatItem>조회 {ticket.views ?? 0}</StatItem>
              </div>

              <DetailButton onClick={() => handleClickDetail(ticket.id)}>
                상세보기
              </DetailButton>

              <TicketButton
                disabled={ticket.status !== "available"}
                onClick={() => handleMessageClick(ticket.seller.id)}
              >
                <ChatIcon />
                {ticket.status === "available" ? "구매 문의" : "구매불가"}
                {(() => {
                  const mine =
                    String(ticket?.seller?.id ?? "") ===
                    String(currentUser?.id ?? "");
                  return mine && (ticket.unreadInquiries ?? 0) > 0 ? (
                    <UnreadBadge>{ticket.unreadInquiries}</UnreadBadge>
                  ) : null;
                })()}
              </TicketButton>
            </StatsRow>
          </TicketCard>
        ))}
      </TicketGrid>
      {pageCount > 1 && (
        <Pagination page={page} pageCount={pageCount} onChange={setPage} />
      )}
    </>
  );
};

export default TicketResultContents;
