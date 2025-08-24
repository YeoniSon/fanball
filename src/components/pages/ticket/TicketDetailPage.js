import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "../../common/Icons";
import {
  BackButton,
  PageLayout,
} from "../../../styles/ticket/TicketDetailPageStyled";
import DetailGame from "../../features/ticket/detail/DetailGame";
import RightSideBar from "../../features/ticket/detail/RightSideBar";

const TicketDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const routeId = params.ticketId ?? params.id ?? null;

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const handleBack = () => navigate(-1);

  if (loading) return <div style={{ padding: 16 }}>불러오는 중...</div>;
  if (error) return <div style={{ padding: 16 }}>{error}</div>;
  if (!ticketData)
    return <div style={{ padding: 16 }}>티켓을 찾을 수 없습니다.</div>;

  return (
    <>
      <BackButton onClick={handleBack}>
        <ArrowLeftIcon /> 뒤로가기
      </BackButton>
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
