import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
`;

export const EmptyState = styled.div`
  padding: 20px;
  text-align: center;
  color: #6b7280;
`;

export const LoadingState = styled.div`
  padding: 20px;
  text-align: center;
`;

// Card grid layout
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 14px;
  background-color: #d4d0d0ff;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  background: #f3f4f6;
`;

export const CardTitle = styled.div`
  font-weight: 700;
  color: #111827;
`;

export const CardMeta = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const PositionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 999px;
  background: #eef2ff;
  color: #3730a3;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatItem = styled.div`
  border: none;
  padding: 20px 0 0;
  margin: 0 0 0 0;
  font-size: 20px;
  font-weight: 500;
  color: #111827;
  text-align: center;
`;

export const StatLabel = styled.h3`
  text-align: center;
  font-size: 12px;
  color: #6b7280;
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e5e7eb;
  margin: 6px 0;
  display: block;
`;

export const DetailButton = styled.button`
  background: #3b82f6;
  font-size: 14px;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

// Inline info row: e.g., 생년월일 | 체격 (values right-aligned)
export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: center;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: black;
`;

export const InfoValue = styled.span`
  margin-left: auto;
  font-size: 14px;
  color: #111827;
  text-align: right;
`;

export const StatHeader = styled.div`
  grid-column: span 3;
  font-weight: 700;
  color: #111827;
`;
