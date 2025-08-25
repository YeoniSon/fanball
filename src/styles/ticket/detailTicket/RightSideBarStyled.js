import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 280px;
  margin-left: auto;
  position: sticky;
  top: 16px;
  background: transparent;
  border: none;

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    margin-left: 0;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: transparent;
  margin-top: 16px;
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 20px 40px;
`;

export const TicketStatus = styled.div`
  font-size: 12px;
  color: white;
  background: #33a302ff;
  padding: 3px 10px;
  border-radius: 0.5rem;
  width: fit-content;
  margin: 0 auto;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  color: #33a302ff;
`;

export const SellerMessageButton = styled.div`
  background: #36363689;
  width: 100%;
  color: white;
  padding: 7px 10px;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;

  &:hover {
    background: #333333ff;
  }
`;

export const SellerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 20px;
  margin-top: 16px;
`;

export const SellerTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SellerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const SellerIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #7089f9ff;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const SellerName = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

export const SellerRate = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: black;
`;

export const SellerInfoContainer = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  font-size: 16px;
  border: 1px solid #eee;
  background: #fafafa;
  border-radius: 1rem;
  padding: 10px 20px;
  color: black;
  font-weight: 700;
  flex: 1 1 0;
  text-align: center;
`;

export const About = styled.div`
  font-size: 12px;
  color: #aaa;
`;

export const TicketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 20px;
  margin-top: 12px;
`;

export const TicketInfoDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

export const TicketTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const TicketLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

export const TicketValue = styled.div`
  font-size: 14px;
  color: black;
`;

// Compose message modal
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalCard = styled.div`
  width: 90%;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
`;

export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  resize: vertical;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;

export const ModalButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: ${(p) => (p.$primary ? "#0e6f04" : "#f3f4f6")};
  color: ${(p) => (p.$primary ? "#ffffff" : "#111827")};
  cursor: pointer;
`;
