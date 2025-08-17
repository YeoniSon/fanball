import styled from "styled-components";

export const TicketContainer = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 1rem;
  margin-top: 30px;
  background: #ffffff;
`;

export const TeamList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  padding: 6px 8px;
`;

export const TeamButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 8px;
  border: none;
  background: ${(p) => (p.$active ? p.$teamColor || "#e0ecff" : "#ffffff")};
  color: ${(p) => (p.$active && p.$teamColor ? "#ffffff" : "#111827")};
  padding: 10px 10px;
  border-radius: 999px;
  cursor: pointer;

  */ &:hover {
    border-color: #2563eb;
    background: #f3f8ff;
  }
`;

export const TeamLogo = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

export const TeamText = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #9c9a9a92;
  margin: 12px 0;
`;
