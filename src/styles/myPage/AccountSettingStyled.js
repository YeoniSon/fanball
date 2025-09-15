import styled from "styled-components";

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-top: 20px;
`;

export const Changes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const ChangeNickName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ChangeTeam = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 4px;
  color: #696969;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  color: black;
  margin-top: 4px;
  background-color: #f0f0f0ff;
  gap: 8px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  padding: 2px 6px;
  background-color: white;
  border-radius: 6px;
  color: black;
  gap: 4px;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const QuitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 16px;
  background-color: #ff4d4f;
  border-radius: 6px;
  color: white;
  margin: 12px;
  cursor: pointer;

  &:hover {
    background-color: #ff7875;
  }
`;

export const Select = styled.select`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const PasswordField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordToggleButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: #6b7280;

  &:hover {
    color: #111827;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  width: auto;
  position: relative;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  margin-bottom: 12px;
`;

export const ModalSubTitle = styled.div`
  font-weight: 300;
  margin-bottom: 8px;
  color: #6b7280;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalFieldLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 6px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 6px;
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  color: black;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 12px;

  &:hover {
    background: #f3f4f6;
  }
`;
