import { useEffect, useMemo, useState } from "react";
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
  Pagination,
  PageButton,
  StatsRow,
  DdayBadge,
  StatItem,
} from "../../../styles/ticket/TicketResultContentStyled";

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
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    if (team === "ALL") return tickets;
    return tickets.filter((t) => t.team === team || t.opponent === team);
  }, [tickets, team]);

  const LocationIcon = () => (
    <svg
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
            stroke="#7f7e7eff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#7f7e7eff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </svg>
  );

  const TimeIcon = () => (
    <svg
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      />
    </svg>
  );
  const ChatIcon = () => (
    <svg
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H9.68375C9.0597 18 8.74767 18 8.44921 18.0613C8.18443 18.1156 7.9282 18.2055 7.68749 18.3285C7.41617 18.4671 7.17252 18.662 6.68521 19.0518L4.29976 20.9602C3.88367 21.2931 3.67563 21.4595 3.50054 21.4597C3.34827 21.4599 3.20422 21.3906 3.10923 21.2716C3 21.1348 3 20.8684 3 20.3355V7.8Z"
      />
    </svg>
  );

  const [page, setPage] = useState(1);
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filteredTickets.length / pageSize));

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

              <TicketButton disabled={ticket.status !== "available"}>
                <ChatIcon />
                {ticket.status === "available" ? "구매 문의" : "구매불가"}
              </TicketButton>
            </StatsRow>
          </TicketCard>
        ))}
      </TicketGrid>
      <Pagination>
        <PageButton
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          {"<"}
        </PageButton>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
          <PageButton key={p} $active={p === page} onClick={() => setPage(p)}>
            {p}
          </PageButton>
        ))}
        <PageButton
          disabled={page === pageCount}
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
        >
          {" >"}
        </PageButton>
      </Pagination>
    </>
  );
};

export default TicketResultContents;
