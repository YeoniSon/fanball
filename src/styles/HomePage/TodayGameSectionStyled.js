import styled from "styled-components";

export const GameContainer = styled.div`
  background: white;
  flex: 1;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
`;

export const GameHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const GameHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

export const ViewAllButton = styled.button`
  background: transparent;
  color: #2563eb;
  border: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(47, 47, 47, 0.1);
  }
`;

// 게임 그리드 레이아웃 스타일
export const GameGrid = styled.div`
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const GameCard = styled.div`
  background: rgba(225, 223, 223, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  height: 11rem;
  margin-bottom: 1rem;
  overflow: hidden;
  /* transition: all 0.2s ease-in-out; */
  cursor: pointer;
`;

export const GameTeams = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const GameTime = styled.p`
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
  color: #6b7280;
`;

export const GameContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

export const GameValue = styled.span`
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
`;

export const GameStatus = styled.div`
  text-align: center;
  margin: 1rem 0;
  width: 3.3rem;
  margin-left: auto;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(47, 47, 47, 0.1);
  }
`;

export const NoGamesMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
  font-size: 1.125rem;
`;

export const GameCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 0;
`;

export const GameInfoContainer = styled.div`
  text-align: right;
`;

export const GameInfoRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

export const GameInfoItem = styled.span`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  color: ${(props) => (props.primary ? "#1f2937" : "#6b7280")};
  white-space: nowrap;
`;

export const GameScore = styled.span`
  font-size: 1.7rem;
  font-weight: 700;
  color: #f24242ff;
  text-align: center;
`;

export const CurrentInning = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  text-align: center;
`;

export const CurrentScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  margin-left: 1rem;
`;
