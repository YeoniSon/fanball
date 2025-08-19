import styled from "styled-components";

export const TicketEditHeaderContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: transparent;
  border: 1px solid #eee;
  border-radius: 10px;
  gap: 20px;

  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 4px 0;
  }
`;

export const HeaderButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  background: none;
  color: black;
  cursor: pointer;
  width: fit-content;
  padding: 8px;
  font-size: 12px;

  &:hover {
    background-color: #e0e0e0;
    border-radius: 8px;
  }
`;

export const HeaderTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderTitle = styled.span`
  margin: 0;
  font-size: 16px;
`;

export const HeaderSubtitle = styled.p`
  font-size: 12px;
  margin: 4px 0;
  color: #646262ff;
`;
