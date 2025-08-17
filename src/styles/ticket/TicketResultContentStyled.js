import styled from "styled-components";

export const TicketContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #f2b47bff;
  transition: all 0.2s ease-in-out;
`;

export const TicketTitle = styled.h2`
  color: #1f2937;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0 5px;
`;

export const TicketBox = styled.div`
  background: #f0cf9aff;
  border: 1px dashed #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`;

export const TicketContainerText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

// 티켓 카드 스타일
export const TicketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1rem;
`;

export const TicketCard = styled.div`
  background: transparent;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #7777769f;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }
`;

export const TicketHeader = styled.div`
  color: black;
  padding: 1.5rem;
  text-align: left;
`;

export const TicketTeams = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

export const TicketDate = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  opacity: 0.9;
`;

export const TicketContent = styled.div`
  padding: 1.5rem;
`;

export const TicketValue = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 600;
`;

export const TicketPrice = styled.div`
  text-align: left;
  padding: 0 1.5rem;
  margin: 0 0 1rem 0;
`;

export const CurrentPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f42c09ff;
`;

export const OriginalPrice = styled.div`
  font-size: 0.875rem;
  color: #5b5d5dff;
  text-decoration: line-through;
  margin-top: 0.25rem;
`;

export const TicketSeller = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 1rem;
  bottom: 6rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: transparent;
  border-radius: 0.5rem;
`;

export const SellerName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
`;

export const TicketButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #f42c09ff;
  gap: 0.5rem;
  text-align: center;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: auto;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`;

export const StatusBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;

  ${(props) => {
    switch (props.status) {
      case "available":
        return "background: #10b981; color: white;";
      case "reserved":
        return "background: #f59e0b; color: white;";
      case "sold":
        return "background: #ef4444; color: white;";
      default:
        return "background: #6b7280; color: white;";
    }
  }}
`;

export const TicketResult = styled.div`
  margin: 30px;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const TicketGame = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 1rem;
`;

export const VS = styled.span`
  font-weight: bold;
  color: #1f2937;
  margin: 0 0.5rem;
`;

export const TicketDescription = styled.div`
  margin: 0.5rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #9c9a9a92;
  margin: 12px 0;
`;

export const UserIcon = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 25px;
  margin-right: 8px;
  padding: 5px;
  background-color: #3b82f6;
`;

export const SellerRate = styled.div`
  font-size: 12px;
  gap: 0.25rem;
  color: #4b5563;
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 0 1.5rem;
  margin: 0.25rem 0 0.5rem 0;
`;

export const DdayBadge = styled.span`
  display: inline-flex;
  align-items: center;
  text-align: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  line-height: 1;
  & > svg {
    display: block;
  }
`;

export const StatItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: #111827;
  font-size: 12px;
  line-height: 1;
  & > svg {
    display: block;
  }
`;

export const UnreadBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ef4444;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
`;
