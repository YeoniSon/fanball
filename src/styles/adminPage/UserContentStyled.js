import styled from "styled-components";

export const Results = styled.div`
  margin-top: 8px;
`;

export const Fragment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 12px;
  align-items: center;
  background: #fff;
  border: 1px solid ${(p) => (p.blocked ? "#f87171" : "#dddddd")};
  background-color: ${(p) => (p.blocked ? "#fd3a3a3f" : "#fff")};
  border-radius: 12px;
  margin-bottom: 15px;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(p) => (p.blocked ? "#f50505ff" : "#0999f8ff")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  margin: 0 12px;
`;

export const UserAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 12px;
`;

export const UserName = styled.div`
  font-weight: 600;
  color: #333;
`;

export const UserNickname = styled.div`
  color: #555;
  font-size: 14px;
`;

export const UserEmail = styled.div`
  color: #474646ff;
  font-size: 16px;
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-size: 12px;
  color: #777;
`;

export const Join = styled.div`
  font-weight: 600;
`;

export const Reputation = styled.div`
  color: #0939f8ff;
  font-weight: 600;
`;

export const Reports = styled.div`
  color: #ea1616ff;
  font-weight: 600;
`;

export const Buttons = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const DetailButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e0e0e0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #d5d5d5;
  }
`;

export const AdminButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: #0999f8ff;
  color: white;
  border: none;
  border-radius: 6px;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #0787edff;
  }
`;

export const BlockButton = styled.button`
  padding: 6px 12px;
  background: #f91a1aff;
  color: white;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #e632 32ff;
  }
`;

export const UnblockButton = styled.button`
  padding: 6px 12px;
  background: #34d399;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #2bbf87;
  }
`;

export const Empty = styled.div`
  padding: 16px;
  text-align: center;
  color: #888;
  background: #fff;
`;
