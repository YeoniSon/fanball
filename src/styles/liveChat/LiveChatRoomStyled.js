import styled, { keyframes } from "styled-components";

export const LiveChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: linear-gradient(to right, #3f9f36ff, rgba(59, 130, 246, 1));
  border-radius: 1rem;
  border-bottom: 1px solid #eee;
`;

export const LiveChatList = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 14px;
  gap: 6px;
  cursor: pointer;
  color: white;

  &:hover {
    color: black;
    border: transparent;
    margin: 0;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
`;

export const TeamLogoWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: auto;
`;

export const TeamLogo = styled.img`
  width: 40px;
  height: 30px;
  object-fit: contain;
`;

export const TeamName = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: white;
  text-align: center;
  white-space: nowrap;
`;

export const TeamScore = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: center;
  white-space: nowrap;
  margin: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TeamPlace = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: white;
  margin-right: 20px;
`;

export const Participants = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: white;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

export const GameStatus = styled.div`
  font-size: 12px;
  text-align: center;
  align-items: center;
  font-weight: 400;
  border: none;
  padding: 2px 8px;
  border-radius: 6px;
  color: white;
  margin-right: 8px;
  background-color: rgba(255, 0, 0, 1);
  animation: ${blink} 1s ease-in-out infinite;
`;
