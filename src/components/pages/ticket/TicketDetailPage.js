import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  HeartIcon,
  FilledHeart,
  DotsIcon,
} from "../../common/Icons";
import {
  BackButton,
  PageLayout,
  Header,
  BookmarkButton,
  EditButton,
  EditMenu,
  EditMenuItem,
} from "../../../styles/ticket/TicketDetailPageStyled";
import DetailGame from "../../features/ticket/detail/DetailGame";
import RightSideBar from "../../features/ticket/detail/RightSideBar";

const TicketDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const routeId = params.ticketId ?? params.id ?? null;

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const fetchTicketDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch("/mockTickets.json");
        const data = await res.json();
        setTickets(Array.isArray(data?.tickets) ? data.tickets : []);
      } catch (e) {
        console.error("티켓 상세 정보를 불러오지 못했습니다.", e);
        setError("티켓 상세 정보를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchTicketDetail();
  }, []);

  const ticketData = useMemo(() => {
    const byId = routeId
      ? (tickets || []).find((t) => String(t?.id ?? "") === String(routeId))
      : null;
    return byId || null;
  }, [tickets, routeId]);

  const currentUser = useMemo(() => {
    try {
      const raw =
        localStorage.getItem("user") || localStorage.getItem("currentUser");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const myId = useMemo(() => {
    const raw = currentUser?.id;
    const digits = raw != null ? String(raw).match(/\d+/)?.[0] : null;
    return digits ? Number(digits) : null;
  }, [currentUser?.id]);

  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    const list = Array.isArray(ticketData?.bookmark) ? ticketData.bookmark : [];
    if (myId == null) {
      setBookmark(false);
      return;
    }
    const included = list.map((v) => Number(v)).includes(Number(myId));
    setBookmark(!!included);
  }, [ticketData?.bookmark, myId]);

  const handleBack = () => navigate(-1);

  const handleBookmark = () => {
    setBookmark((prev) => !prev);
  };

  if (loading) return <div style={{ padding: 16 }}>불러오는 중...</div>;
  if (error) return <div style={{ padding: 16 }}>{error}</div>;
  if (!ticketData)
    return <div style={{ padding: 16 }}>티켓을 찾을 수 없습니다.</div>;

  return (
    <>
      <Header>
        <BackButton onClick={handleBack}>
          <ArrowLeftIcon /> 뒤로가기
        </BackButton>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            position: "relative",
          }}
        >
          <BookmarkButton>
            {bookmark ? (
              <FilledHeart onClick={handleBookmark} width={20} height={20} />
            ) : (
              <HeartIcon onClick={handleBookmark} width={20} height={20} />
            )}
          </BookmarkButton>
          <EditButton
            onClick={() =>
              setOpenMenuId(openMenuId === ticketData.id ? null : ticketData.id)
            }
          >
            <DotsIcon width={15} height={15} color="#000" strokeWidth={0.5} />
          </EditButton>
          {openMenuId === ticketData.id && (
            <EditMenu>
              <EditMenuItem
                onClick={() => {
                  navigate(`/ticket/edit/${ticketData.id}`);
                  setOpenMenuId(null);
                }}
              >
                수정
              </EditMenuItem>
              <EditMenuItem
                onClick={() => {
                  alert("삭제 확인 모달 예정");
                  setOpenMenuId(null);
                }}
              >
                삭제
              </EditMenuItem>
            </EditMenu>
          )}
        </div>
      </Header>

      <PageLayout>
        <div style={{ flex: 1, minWidth: 0 }}>
          <DetailGame gameData={ticketData} />
        </div>
        <RightSideBar gameData={ticketData} />
      </PageLayout>
    </>
  );
};

export default TicketDetailPage;
