import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(135, 133, 133, 0.27);
  padding: 30px;
  border-radius: 1rem;
  gap: 10px;
  margin: 10px 0 20px;
`;

export const SelectHeader = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  padding: 0 10px;
  margin-bottom: 0;
`;

export const Description = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  padding: 10px;
  border-radius: 8px;
  margin: 0;
`;

export const SelectGameCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border: 2px solid ${(p) => (p.$selected ? "#0e6f04" : "#e5e7eb")};
  border-radius: 12px;
  background: ${(p) => (p.$selected ? "#e8f7e6" : "#ffffff")};
  box-shadow: ${(p) =>
    p.$selected ? "0 2px 6px rgba(14,111,4,0.16)" : "none"};
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #0e6f04;
  }
`;

export const SelectGame = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 1rem;
  background-color: #e5e7eb;
  margin: 10px 0;
  gap: 12px;
`;

export const SelectGameOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

export const SelectGameDate = styled.div`
  width: 90px;
  text-align: center;
  font-weight: 600;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90px;
  font-weight: 600;
  color: #4b5563;
`;

export const SelectGameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SelectGameInfoLabel = styled.div`
  font-weight: 600;
  color: black;
`;

export const SelectGameInfoValue = styled.div`
  display: flex;
  font-weight: 200;
  color: #6b7280;
  justify-content: space-between;
`;
