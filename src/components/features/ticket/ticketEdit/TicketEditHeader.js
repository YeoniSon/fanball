import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  TicketEditHeaderContainer,
  HeaderButton,
  HeaderTitleBox,
  HeaderTitle,
  HeaderSubtitle,
} from "../../../../styles/ticket/editTicket/TicketEditHeaderStyled";
import { ArrowLeftIcon } from "../../../common/Icons";

const TicketEditHeader = () => {
  const navigate = useNavigate();
  const params = useParams();
  const routeTicketId = params.ticketId ?? params.id ?? null;
  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/mockTickets.json`);
        const data = await response.json();
        const tickets = Array.isArray(data?.tickets) ? data.tickets : [];
        const found = tickets.find(
          (t) => String(t?.id ?? "") === String(routeTicketId ?? "")
        );
        setTicketData(found ?? null);
      } catch (err) {
        setError("티켓 정보를 가져오는 데 실패했습니다.");
        console.error("티켓 정보를 가져오는 데 실패했습니다:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTicketData();
  }, [routeTicketId]);

  const handleClickBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <TicketEditHeaderContainer>
        <HeaderButton onClick={handleClickBack}>
          <ArrowLeftIcon />
          뒤로 가기
        </HeaderButton>
        <HeaderTitleBox>
          <HeaderTitle>티켓 정보 수정</HeaderTitle>
          <HeaderSubtitle>티켓 정보를 수정할 수 있습니다.</HeaderSubtitle>
        </HeaderTitleBox>
      </TicketEditHeaderContainer>
    </div>
  );
};

export default TicketEditHeader;
