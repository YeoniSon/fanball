import styled from "styled-components";

export const TodayGamesContainer = styled.div`
  padding: 24px;
`;

// 게시글 관련 스타일들
export const GameCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const GameTeams = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TeamName = styled.span`
  font-weight: 500;
  color: #1f2937;
`;

export const GameScore = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #dc2626;
`;

export const GameStatus = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: #f3f4f6;
  color: #6b7280;
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
`;

export const GameTime = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const GameStadium = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const NoGamesMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
  font-size: 16px;
`;

// TodayGame 스타일들
export const TodayHeaderBox = styled.div`
  padding: 16px 20px;
  background-color: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

export const TodayHeaderTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
`;

export const TodayHeaderCount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`;

export const TodayGamesListBox = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
`;

export const FinishedGameMessage = styled.div`
  margin-top: 16px;
  padding: 8px 12px;
  background-color: #ecfdf5;
  color: #059669;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

export const VS = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
`;
export const LiveChatButton = styled.button`
  margin-top: 16px;
  width: 100%;
  border: none;
  padding: 8px 12px;
  background-color: rgba(239, 68, 68, 0.1);
  color: #6b7280;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(239, 68, 68, 0.2);
    color: #dc2626;
  }
`;

export const ScheduledGameMessage = styled.div`
  margin-top: 16px;
  padding: 8px 12px;
  background-color: #f3f4f6;
  color: #6b7280;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
