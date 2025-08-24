import { useState, useEffect } from "react";
import {
  SideBarContainer,
  PriceContainer,
  TicketStatus,
  Price,
  SellerMessageButton,
  SellerContainer,
  SellerTitle,
  SellerInfo,
  SellerIcon,
  SellerName,
  SellerRate,
  SellerInfoContainer,
  About,
  TicketInfoContainer,
  TicketInfoDetail,
  TicketTitle,
  TicketLabel,
  TicketValue,
} from "../../../../styles/ticket/detailTicket/RightSideBarStyled";

const RightSideBar = ({ gameData }) => {
  const [sellerMeta, setSellerMeta] = useState(null);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await fetch(`/mockUsers.json`);
        const json = await response.json();
        const users = Array.isArray(json?.users) ? json.users : [];

        const rawId = gameData?.seller?.id ?? gameData?.sellerId ?? null;
        const normalizedId =
          rawId != null ? String(rawId).replace(/\D/g, "") : null;
        if (!normalizedId) {
          setSellerMeta(null);
          return;
        }
        const seller =
          users.find((u) => String(u?.id ?? "") === normalizedId) || null;
        setSellerMeta(seller);
      } catch (error) {
        console.error("Error fetching seller data:", error);
        setSellerMeta(null);
      }
    };

    fetchSellerData();
  }, [gameData?.seller?.id, gameData?.sellerId]);

  const statusLabel = (() => {
    const s = gameData?.status;
    if (s === "available") return "판매중";
    else if (s === "reserved") return "예약됨";
    else if (s === "canceled") return "취소";
    else return "판매불가";
  })();

  const handleClickMessage = () => {
    // TODO: 메시지 전송 연결
  };

  const sellerInitial = (
    gameData?.seller?.nickname ||
    gameData?.seller?.name ||
    "?"
  )?.charAt(0);
  const completedDeals = sellerMeta?.completedDeals ?? 0;
  const responseRate =
    sellerMeta?.responseRate != null ? `${sellerMeta.responseRate}%` : "-";
  const displayRating =
    gameData?.seller?.rating != null ? gameData.seller.rating : "-";

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  return (
    <SideBarContainer>
      <PriceContainer>
        <TicketStatus>{statusLabel}</TicketStatus>
        <Price style={{ fontSize: "25px" }}>
          {"₩" + (gameData?.price ?? 0).toLocaleString()}
        </Price>
        {gameData?.originalPrice ? (
          <Price style={{ textDecoration: "line-through", color: "#aaa" }}>
            {"₩" + Number(gameData.originalPrice).toLocaleString()}
          </Price>
        ) : null}

        <SellerMessageButton onClick={handleClickMessage}>
          구매문의
        </SellerMessageButton>
      </PriceContainer>

      <SellerContainer>
        <SellerTitle>판매자 정보</SellerTitle>
        <SellerInfo>
          <SellerIcon>{sellerInitial}</SellerIcon>
          <SellerName>
            {gameData?.seller?.nickname || gameData?.seller?.name || "-"}
            <SellerRate>{displayRating}</SellerRate>
          </SellerName>
        </SellerInfo>
        <SellerInfo
          style={{ justifyContent: "space-between", marginTop: 8, gap: 15 }}
        >
          <SellerInfoContainer>
            {completedDeals}
            <About>거래 완료</About>
          </SellerInfoContainer>
          <SellerInfoContainer style={{ color: "#33a302ff" }}>
            {responseRate}
            <About>응답률</About>
          </SellerInfoContainer>
        </SellerInfo>
      </SellerContainer>

      <TicketInfoContainer>
        <TicketTitle>게시글 정보</TicketTitle>
        <TicketInfoDetail>
          <TicketLabel>등록일</TicketLabel>
          <TicketValue>{formatDate(gameData?.createdAt) || "-"}</TicketValue>
        </TicketInfoDetail>
        <TicketInfoDetail>
          <TicketLabel>조회</TicketLabel>
          <TicketValue>
            {gameData?.views ? gameData.views.toLocaleString() : "-"}
          </TicketValue>
        </TicketInfoDetail>
      </TicketInfoContainer>
    </SideBarContainer>
  );
};

export default RightSideBar;
