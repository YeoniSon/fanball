import styled, { css } from "styled-components";

export const SeasonRecordContainer = styled.div`
  margin-top: 30px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 30px;
`;

export const RecordHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 300;
  font-size: 16px;
  color: black;
  margin-bottom: 16px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  ${({ cols }) =>
    cols &&
    css`
      grid-auto-flow: unset;
      grid-template-columns: repeat(${cols}, minmax(80px, 1fr));
    `}
  background: #f8fafc;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  text-align: center;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
`;

export const TableHeaderCell = styled.div`
  text-align: center;
`;

export const TableRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  ${({ cols }) =>
    cols &&
    css`
      grid-auto-flow: unset;
      grid-template-columns: repeat(${cols}, minmax(80px, 1fr));
    `}
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

export const NoData = styled.div`
  text-align: center;
  padding: 24px;
  color: #6b7280;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 24px;
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

export const TeamName = styled.span`
  color: #1f2937;
  font-weight: 600;
  font-size: 12px;
`;

export const StateCell = styled.div`
  text-align: center;
  font-size: 15px;
`;
