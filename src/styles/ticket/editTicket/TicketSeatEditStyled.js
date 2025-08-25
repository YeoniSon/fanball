import styled from "styled-components";
import { GameInfoItem, GameInfoValue } from "./TicketGameInfoEditStyled";

export const FullWidthGameInfoItem = styled(GameInfoItem)`
  flex: 1 1 100%;
`;

export const SeatInputBox = styled(GameInfoValue)`
  padding: 0;
  border: none;
  background: transparent;
`;

export const SeatInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 10px;
  border: none;
  background-color: rgba(142, 141, 141, 0.18);
  box-sizing: border-box;
`;

export const DescriptionTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background-color: rgba(142, 141, 141, 0.18);
  box-sizing: border-box;
  resize: vertical;
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
`;

export const SaveButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid rgba(135, 133, 133, 0.27);
  background-color: rgb(14, 111, 4);
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #9bb7ff;
    cursor: not-allowed;
  }
`;
