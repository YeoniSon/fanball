import styled from "styled-components";

export const PurchaseCode = styled.div`
  font-size: 12px;
  color: #888;
`;

export const PurchaseDay = styled.div`
  font-size: 12px;
  color: #888;
`;

export const SellerName = styled.div`
  font-size: 13px;
  color: black;
  margin: 5px 0 0 20px;
`;

export const PurchasePrice = styled.div`
  position: absolute;
  bottom: 6rem;
  right: 1rem;
  text-align: right;
  padding: 0 1.5rem;
  margin: 0 0 1rem 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

export const PurchaseDescription = styled.p`
  font-size: 13px;
  color: #666;
  margin: 8px 1.5rem 0 1.5rem;
`;

export const StatusBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 1rem;
  text-transform: uppercase;

  ${(props) => {
    switch (props.status) {
      case "purchased":
        return "background: #10b981; color: white;";
      case "upcoming":
        return "background: #f59e0b; color: white;";
      case "canceled":
        return "background: #ef4444; color: white;";
      default:
        return "background: #6b7280; color: white;";
    }
  }}
`;
