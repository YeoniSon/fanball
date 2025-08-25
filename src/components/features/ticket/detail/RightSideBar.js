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
  ModalOverlay,
  ModalCard,
  ModalTitle,
  ModalTextarea,
  ModalActions,
  ModalButton,
} from "../../../../styles/ticket/detailTicket/RightSideBarStyled";

const RightSideBar = ({ gameData }) => {
  const [sellerMeta, setSellerMeta] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleClickMessage = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setMessage("");
  };

  // Save as draft to localStorage. Real app would call API
  const handleSend = () => {
    try {
      const draftKey = "pmDrafts";
      const draftsRaw = localStorage.getItem(draftKey);
      const drafts = draftsRaw ? JSON.parse(draftsRaw) : [];
      drafts.push({
        toUserId: sellerMeta?.id ?? gameData?.seller?.id ?? gameData?.sellerId,
        toNickname: gameData?.seller?.nickname || gameData?.seller?.name || "",
        content: message,
        ticketId: gameData?.id,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem(draftKey, JSON.stringify(drafts));
      handleClose();
    } catch (e) {
      console.error("메시지 저장 실패", e);
    }
  };

  return (
    <>
      <SideBarContainer>
        <PriceContainer>
          <TicketStatus>{statusLabel}</TicketStatus>
          <Price style={{ fontSize: "25px" }}>
            {"₩" + (Number(gameData?.price) || 0).toLocaleString()}
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
          <SellerInfo style={{ justifyContent: "space-between", marginTop: 8 }}>
            <SellerInfoContainer>
              {completedDeals}
              <About>거래 완료</About>
            </SellerInfoContainer>
            <SellerInfoContainer>
              {responseRate}
              <About>응답률</About>
            </SellerInfoContainer>
          </SellerInfo>
        </SellerContainer>
      </SideBarContainer>

      {isOpen && (
        <ModalOverlay>
          <ModalCard>
            <ModalTitle>판매자에게 메시지 보내기</ModalTitle>
            <ModalTextarea
              placeholder="메시지를 입력하세요"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ModalActions>
              <ModalButton onClick={handleClose}>취소</ModalButton>
              <ModalButton
                $primary
                onClick={handleSend}
                disabled={!message.trim()}
              >
                보내기
              </ModalButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
};

export default RightSideBar;
