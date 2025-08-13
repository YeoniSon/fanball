import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0;
  background-color: rgb(181, 181, 185);
  border-radius: 1.5rem;
  padding: 3px;
`;

export const MonthlyScheduleButton = styled.button`
  flex: 1;
  border: transparent;
  border-radius: 1.5rem;
  background: ${(props) => (props.isActive ? "white" : "transparent")};
  color: ${(props) => (props.isActive ? "black" : "white")};
  font-weight: 600;
  color: #1f2937;
`;

// SchedulePage 스타일들
export const ScheduleContainer = styled.div`
  padding: 24px;
`;

export const FilterSection = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

export const FilterField = styled.div``;

export const FilterLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const FilterResetButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: transparent;
  color: black;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5e5a5aff;
    color: white;
  }
`;

export const CurrentFilterSection = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`;

export const CurrentFilterText = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const FilterResultSection = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  padding: 16px;
`;

export const FilterResultTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #1f2937;
`;

export const FilterResultMessage = styled.p`
  color: #6b7280;
  text-align: center;
  padding: 32px 16px;
`;

export const TodayGamesContainer = styled.div`
  padding: 24px;
`;

export const TodayGamesTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TodayGamesDescription = styled.p`
  color: #6b7280;
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

export const TeamLogo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
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

// 날짜별 그룹화 스타일들
export const DateGroupContainer = styled.div`
  margin-bottom: 24px;
`;

export const DateHeaderBox = styled.div`
  padding: 16px 20px;
  background-color: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

export const DateTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
`;

export const DateGameCount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`;

export const GamesListBox = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
`;

export const VS = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
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

//퓨처스리그 순위표 스타일들
export const RankingContainer = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
`;

export const RankingTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  color: #1f2937;
`;

export const LeagueTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
`;

export const LeagueTab = styled.button`
  padding: 12px 24px;
  border: 2px solid #d6d8daff;
  background: ${(props) =>
    props.active ? "rgba(2, 249, 191, 0.15)" : "rgba(50,20,2,0.15)"};
  color: ${(props) => (props.active ? "black" : "black")};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#eff6ff" : "#eff6ff")};
    border-color: #2563eb;
  }
`;

export const RankingTable = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 80px 80px 80px 100px;
  background: #f8fafc;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  text-align: center;
`;

export const TableHeaderCell = styled.div`
  &:nth-child(1) {
    text-align: center;
  }
  &:nth-child(2) {
    text-align: left;
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    text-align: center;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 80px 80px 80px 100px;
  padding: 16px 20px;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const RankCell = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;

  &.rank-1 {
    color: #fbbf24;
  } /* 금메달 */
  &.rank-2 {
    color: #9ca3af;
  } /* 은메달 */
  &.rank-3 {
    color: #d97706;
  } /* 동메달 */
`;

export const TeamCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`;

export const RankingTeamLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const RankingTeamName = styled.span`
  color: #1f2937;
`;

export const StatsCell = styled.div`
  text-align: center;
  font-weight: 500;

  &.wins {
    color: #059669;
  }
  &.losses {
    color: #dc2626;
  }
  &.ties {
    color: #6b7280;
  }
  &.winRate {
    color: #1f2937;
    font-weight: 600;
  }
`;
