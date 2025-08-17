import styled from "styled-components";

export const PaginationBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 0 16px 0;
  margin-top: 16px;
`;

export const PageButton = styled.button`
  min-width: 32px;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  background: ${(p) => (p.$active ? "#111827" : "#ffffff")};
  color: ${(p) => (p.$active ? "#ffffff" : "#111827")};
  cursor: pointer;
  transition: background 0.15s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
