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

export const BlockedBadge = styled.span`
  background-color: #fc0707ff;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
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
  background: white;
  border: 1px solid #d5d5d5;
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
    background: #e63232;
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

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 520px;
  max-width: calc(100% - 40px);
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  color: #6b7280;

  &:hover {
    color: #111827;
  }
`;

export const ModalBody = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 16px;
`;

export const Infos = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 16px;
  margin-top: 12px;
`;

export const MiddleTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  padding: 0 16px;
  margin-top: 8px;
`;

export const ReportItem = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 12px 16px;
  border: 1px solid #dddddd;
  margin: 8px 16px;
  border-radius: 8px;
  gap: 12px;
`;

export const ReportTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
  margin-top: 6px;
`;

export const ReportContent = styled.div`
  font-size: 14px;
  color: #374151;
`;

export const ReportDate = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;

export const ReportId = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;

export const ReportBadge = styled.span`
  background-color: ${(p) =>
    p.status === "pending" ? "#fbbf24" : "#39d334ff"};
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  background: #f45703ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #f46003ff;
  }
`;

export const DetailButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid #f0f0f0;
  background: #f9fafb;
`;
