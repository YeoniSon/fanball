import styled from "styled-components";

export const AdminContainer = styled.div`
  padding: 12px 16px;
  margin: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #a1b2f1ff;
  background-color: #9eb1f641;
  border-radius: 6px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const AdminName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AdminBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 8px;
  background: #0999f8ff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 12px;
  color: white;
`;

export const Notices = styled.div`
  color: #9f4cdeff;
  font-weight: 600;
`;

export const MessageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: white;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #d5d5d5;
  }
`;

export const RemoveAdminButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: white;
  color: #4449ebff;
  border: 1px solid #4449ebff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #d5d5d5;
  }
`;
