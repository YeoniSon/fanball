import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamInfo from "../../../common/TeamInfo";
import Pagination from "../../../common/Pagination";
import { FilledHeart, HeartIcon } from "../../../common/Icons";
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

const BookMarks = ({ myId: myIdFromParent }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const myId = useMemo(() => {
    return myIdFromParent != null ? Number(myIdFromParent) : null;
  }, [myIdFromParent]);

  const teams = TeamInfo?.teamIcon || [];
  const [bookmarkById, setBookmarkById] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/mockTickets.json");
        const json = await res.json();
        setTickets(Array.isArray(json?.tickets) ? json.tickets : []);
      } catch (e) {
        setError("즐겨찾기 데이터를 불러오지 못했습니다.");
        setTickets([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const bookmarkedTickets = useMemo(() => {
    if (myId == null) return [];
    return tickets.filter(
      (t) =>
        Array.isArray(t?.bookmark) &&
        t.bookmark.map((v) => Number(v)).includes(Number(myId))
    );
  }, [tickets, myId]);

  useEffect(() => {
    if (myId == null) return;
    setBookmarkById((prev) => {
      const next = { ...prev };
      for (const t of tickets) {
        if (next[t.id] == null) {
          const included = Array.isArray(t?.bookmark)
            ? t.bookmark.map((v) => Number(v)).includes(Number(myId))
            : false;
          next[t.id] = included;
        }
      }
      return next;
    });
  }, [tickets, myId]);

  const pageSize = 3;
  const pageCount = Math.max(1, Math.ceil(bookmarkedTickets.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [bookmarkedTickets.length]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return bookmarkedTickets.slice(start, start + pageSize);
  }, [bookmarkedTickets, page]);

  const handleClick = (ticketId) => {
    navigate(`/ticket/detail/${ticketId}`);
  };

  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>{error}</div>;
  if (myId == null) return <div>로그인이 필요합니다.</div>;
  if (!pageItems.length) return <div>즐겨찾기한 항목이 없습니다.</div>;

  return (
    <>
      {pageItems.map((t) => {
        const home = teams.find((x) => x.label === t.team);
        const away = teams.find((x) => x.label === t.opponent);
        const isBookmarked = bookmarkById?.[t.id] ?? false;
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
              <Price>{t.price?.toLocaleString()}원</Price>
              {isBookmarked ? (
                <FilledHeart
                  width={18}
                  height={18}
                  color="#FF3B30"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBookmarkById((prev) => ({
                      ...prev,
                      [t.id]: false,
                    }));
                  }}
                />
              ) : (
                <HeartIcon
                  width={18}
                  height={18}
                  onClick={(e) => {
                    e.stopPropagation();
                    setBookmarkById((prev) => ({
                      ...prev,
                      [t.id]: true,
                    }));
                  }}
                />
              )}
              <SellBadge>
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

export default BookMarks;
