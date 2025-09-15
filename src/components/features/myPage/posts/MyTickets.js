import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  GameContainer,
  Teams,
  Home,
  Away,
  TeamIcon,
  Stadium,
  PriceBox,
  Price,
  SellBadge,
} from "../../../../styles/myPage/PostStyled";
import Pagination from "../../../common/Pagination";
import TeamInfo from "../../../common/TeamInfo";

const MyTickets = ({ myId: myIdFromParent }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const myId = useMemo(() => {
    return myIdFromParent != null ? String(Number(myIdFromParent)) : null;
  }, [myIdFromParent]);

  const teams = TeamInfo?.teamIcon || [];

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/mockTickets.json");
        const json = await res.json();
        setTickets(Array.isArray(json?.tickets) ? json.tickets : []);
      } catch (e) {
        setError("내 티켓을 불러오지 못했습니다.");
        setTickets([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const myTickets = useMemo(() => {
    if (!myId) return [];
    const normalize = (val) => {
      if (val == null) return "";
      const m = String(val).match(/\d+/g);
      return m ? String(Number(m.join(""))) : String(val);
    };
    return tickets.filter((t) => normalize(t?.seller?.id) === myId);
  }, [tickets, myId]);

  const pageSize = 3;
  const pageCount = Math.max(1, Math.ceil(myTickets.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [myTickets.length]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return myTickets.slice(start, start + pageSize);
  }, [myTickets, page]);

  const handleClick = (ticketId) => {
    navigate(`/ticket/detail/${ticketId}`);
  };

  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>{error}</div>;
  if (!pageItems.length) return <div>등록한 티켓이 없습니다.</div>;

  return (
    <>
      {pageItems.map((t) => {
        const home = teams.find((x) => x.label === t.team);
        const away = teams.find((x) => x.label === t.opponent);
        return (
          <Container key={t.id} onClick={() => handleClick(t.id)}>
            <GameContainer>
              <Teams style={{ fontWeight: 600, color: "#222" }}>
                <Home>
                  <TeamIcon width={35} height={25} src={home?.logo} />
                  {home?.shortName || t.team}
                </Home>
                VS
                <Away>
                  <TeamIcon width={35} height={25} src={away?.logo} />
                  {away?.shortName || t.opponent}
                </Away>
              </Teams>
              <Stadium>
                {t.date} {t.time} · {t.stadium}
              </Stadium>
              <Stadium>
                {t.section} {t.row}열 {t.seat}번
              </Stadium>
            </GameContainer>
            <PriceBox>
              <Price style={{ fontWeight: 700 }}>
                {t.price?.toLocaleString()}원
              </Price>
              <SellBadge style={{ color: "#999", fontSize: 12, marginTop: 4 }}>
                {t.status === "available"
                  ? "판매중"
                  : t.status === "reserved"
                  ? "예약됨"
                  : t.status === "sold"
                  ? "판매완료"
                  : "판매불가"}
              </SellBadge>
            </PriceBox>
          </Container>
        );
      })}
      <Pagination page={page} pageCount={pageCount} onChange={setPage} />
    </>
  );
};

export default MyTickets;
