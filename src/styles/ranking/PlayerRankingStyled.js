import styled from "styled-components";

export const PlayerRankingContainer = styled.div`
  margin: 20px 0 0;
`;

export const PlayerRankingHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayerSelectionContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 6px;
`;

export const PlayerRankingTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

export const PlayerRankingTable = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const PlayerSelection = styled.button`
  background: ${(props) => (props.isActive ? "#007bff" : "#e3e5e6ff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
    border-color: #0056b3;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  background: #f8fafc;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  text-align: center;
  border-radius: 1rem 1rem 0 0;
`;

export const TableHeaderCell = styled.div`
  &:nth-child(2) {
    text-align: left;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  padding: 12px 16px;
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
  font-weight: 700;
  &.rank-1 {
    color: #fbbf24;
  }
  &.rank-2 {
    color: #9ca3af;
  }
  &.rank-3 {
    color: #d97706;
  }
`;

export const TeamCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TeamLogo = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

export const TeamName = styled.span`
  color: #1f2937;
  font-weight: 600;
`;

export const StateCell = styled.div`
  text-align: center;
  &.win {
    color: #059669;
    font-weight: 600;
  }
  &.loss {
    color: #dc2626;
    font-weight: 600;
  }
  &.tie {
    color: #6b7280;
  }
`;

export const StatCell = styled.div`
  text-align: center;
  &.win {
    color: #059669;
    font-weight: 600;
  }
  &.loss {
    color: #dc2626;
    font-weight: 600;
  }
  &.tie {
    color: #6b7280;
  }
`;

export const NameCell = styled.div`
  text-align: left;
`;

export const NoData = styled.div`
  text-align: center;
  padding: 24px;
  color: #6b7280;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 24px;
`;
