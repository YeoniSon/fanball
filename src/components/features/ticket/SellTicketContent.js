import { useState, useEffect, useMemo } from "react";
import Pagination from "../../common/Pagination";
import {
  LocationIcon,
  ChatIcon,
  TimeIcon,
  MessageIcon,
  PersonIcon,
} from "../../common/Icons";
import {
  NoLoginMessage,
  Title,
  SubTitle,
  TicketCard,
  StatusBadge,
  EditButton,
  EditMenu,
  EditMenuItem,
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
  StatsRow,
  DdayBadge,
  StatItem,
  TicketDescription,
  TicketGame,
  VS,
  SellerRate,
  Hr,
  UserIcon,
  UnreadBadge,
} from "../../../styles/ticket/SellTicketContentStyled";

const SellTicketContent = ({ option }) => {
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/mockTickets.json`);
      const data = await response.json();
      setTicketData(Array.isArray(data?.tickets) ? data.tickets : []);
    };

    fetchData();
  }, [option]);

  const filteredTickets = useMemo(() => {
    if (!currentUser) return [];
    const currentUserId = String(currentUser.id ?? "");
    return ticketData.filter((ticket) => {
      const sellerId = String(ticket?.seller?.id ?? "");
      const sameUser = sellerId === currentUserId;
      if (!sameUser) return false;
      if (option === "all") return true;
      return ticket?.status === option;
    });
  }, [ticketData, option, currentUser]);

  const [page, setPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filteredTickets.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [option]);

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
      {/* 사용자 식별값/디버그 출력 제거 */}
      {pageItems.map((ticket) => (
        <div key={ticket.id}>
          <TicketCard key={ticket.id}>
            <div>
              <StatusBadge status={ticket.status}>
                {ticket.status === "available"
                  ? "판매중"
                  : ticket.status === "reserved"
                  ? "예약됨"
                  : ticket.status === "sold"
                  ? "판매완료"
                  : "기간만료"}
              </StatusBadge>
              <EditButton
                onClick={() =>
                  setOpenMenuId(openMenuId === ticket.id ? null : ticket.id)
                }
              >
                ...
              </EditButton>
            </div>
            {openMenuId === ticket.id && (
              <EditMenu>
                <EditMenuItem onClick={() => alert("수정 페이지로 이동 예정")}>
                  수정
                </EditMenuItem>
                <EditMenuItem onClick={() => alert("삭제 확인 모달 예정")}>
                  삭제
                </EditMenuItem>
              </EditMenu>
            )}
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
                <TimeIcon />
                {getDdayInfo(ticket.date).label}
              </DdayBadge>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MessageIcon />
                <StatItem>문의 {ticket.inquiries ?? 0}</StatItem>
                <StatItem>조회 {ticket.views ?? 0}</StatItem>
              </div>

              <TicketButton disabled={ticket.status !== "available"}>
                <ChatIcon />
                {ticket.status === "available" ? "구매 문의" : "구매불가"}
                {(ticket.unreadInquiries ?? 0) > 0 ? (
                  <UnreadBadge>{ticket.unreadInquiries}</UnreadBadge>
                ) : null}
              </TicketButton>
            </StatsRow>
          </TicketCard>
        </div>
      ))}
      <Pagination page={page} pageCount={pageCount} onChange={setPage} />
    </div>
  );
};

export default SellTicketContent;
