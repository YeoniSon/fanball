import styled from "styled-components";

export const Badge = styled.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;

  &.pending {
    background-color: #f58750ff;
  }

  &.completed {
    background-color: #069a0aff;
  }
`;

export const ReportHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 8px;
`;

export const ReportTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: auto;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  padding: 4px 10px;
  background-color: #069a0aff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #bfbfbf;
  }
`;

export const DismissButton = styled.button`
  padding: 4px 10px;
  background-color: #ee1515ff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #bfbfbf;
  }
`;

export const ReportBody = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  width: 100%;
  gap: 12px 16px;
  align-items: start;
  padding: 0 0 20px 10px;
`;

export const ReportSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4px;
  gap: 4px;
`;

export const Reporter = styled.div`
  font-size: 14px;
  color: #374151;
`;

export const Reason = styled.div`
  font-size: 14px;
  color: #374151;
`;

export const ReporterUser = styled.div`
  font-size: 14px;
  color: #374151;
`;

export const ReportDetail = styled.div`
  padding: 20px;
`;

export const DetailTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
  padding-left: 4px;
`;

export const DetailContent = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 8px;
  font-size: 14px;
  color: #374151;
  white-space: pre-wrap;
`;
