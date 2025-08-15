import styled from "styled-components";

export const SessionRecordContainer = styled.div`
  margin-top: 30px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 30px;
`;

export const SessionRecordTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const RecordBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-top: 3px;
`;

export const RecordItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: none;
  width: 12rem;
  padding: 12px 8px;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
`;

export const RecordValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const RecordLabel = styled.span`
  font-size: 14px;
  color: #666;
`;
