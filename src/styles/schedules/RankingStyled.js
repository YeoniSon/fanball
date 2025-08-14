import styled from "styled-components";

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

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
`;
