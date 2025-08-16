import styled from "styled-components";

export const LiveChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  align-items: stretch;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
`;

export const Header = styled.h2`
  margin-top: 30px;
  margin-left: 12px;
  font-size: 15px;
  font-weight: 300;
`;

export const GameTeam = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
  font-size: 14px;
  font-weight: 600;
`;

export const GameLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const ScoreContents = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 0 8px;
`;

export const Score = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 0 8px;
`;

export const GameSchedule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 10px;
  font-size: 12px;
  color: #666;
  gap: 10px;
`;

export const GameStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 6px;
  ${(props) =>
    props.variant === "live"
      ? `background-color: #ef4444; color: #ffffff; border: 1px solid #ef4444;`
      : props.variant === "scheduled"
      ? `background-color: #f3f4f6; color: #111827; border: 1px solid #e5e7eb;`
      : `background-color: #e5e7eb; color: #111827; border: 1px solid #d1d5db;`}
`;

export const Time = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 2px solid #eee;
  margin: 10px 0 5px 0;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const EnterButton = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  ${(props) =>
    props.disabled
      ? `background-color: #e5e7eb; color: #9ca3af; border-color: #e5e7eb; cursor: not-allowed;`
      : `background-color: #111827; color: #ffffff; border-color: #111827;`}
`;

export const ChatRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  width: 100%;
`;

export const ChatStatus = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 4px;
  font-size: 12px;
  color: #666;
`;

export const ChatStatusText = styled.span`
  font-size: 12px;
  text-align: center;
  color: #666;
`;

export const ChatEnterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: transparent;
  color: black;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
