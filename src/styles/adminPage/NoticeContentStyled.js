import styled from "styled-components";

export const NewNoticeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #0999f8ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007accff;
  }
`;

export const NoticeHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  padding: 0 0 10px 20px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) =>
    props.className === "pinned"
      ? "#f39c12"
      : props.className === "active"
      ? "#27ae60"
      : "#7f8c8d"};
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
  color: white;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
`;

export const FixButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #999a9aff;
  }
`;

export const PinButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #999a9aff;
  }
`;

export const UnpinButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #999a9aff;
  }
`;

export const ActivateButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #999a9aff;
  }
`;

export const DeactivateButton = styled.button`
  background-color: white;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #999a9aff;
  }
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #b11818ff;
  }
`;

export const NoticeBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 0 0 40px;
  margin-bottom: 10px;
`;

export const NoticeTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const NoticeContents = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

export const Reporter = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 5px;
`;
