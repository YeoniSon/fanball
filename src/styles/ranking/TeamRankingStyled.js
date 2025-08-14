import styled from "styled-components";

export const TeamRankingContainer = styled.div`
  padding: 20px;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
`;

export const TeamRankingHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TeamRankingTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
`;

export const DateControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ArrowButton = styled.button`
  border: 1px solid #e5e7eb;
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  &:hover {
    background: #f9fafb;
  }
`;

export const YearText = styled.span`
  min-width: 100px;
  text-align: center;
  font-weight: 700;
  color: #111827;
`;

export const YearControls = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DateText = styled.span`
  min-width: 160px;
  text-align: center;
  font-weight: 600;
  color: #111827;
`;

export const TeamRankingTable = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 70px 70px 70px 70px 90px 90px 80px 110px;
  background: #f8fafc;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  text-align: center;
`;

export const TableHeaderCell = styled.div`
  &:nth-child(2) {
    text-align: left;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 70px 70px 70px 70px 90px 90px 80px 110px;
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

export const NoData = styled.div`
  text-align: center;
  padding: 24px;
  color: #6b7280;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 24px;
`;
