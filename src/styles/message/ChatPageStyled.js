import styled from "styled-components";

export const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 250px);
  padding: 16px;
  width: 100%;
  background: #f9f9f9;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;
`;

export const MessagesScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ChatMessage = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
`;

export const MessageContainer = styled.div`
  max-width: 70%;
  background: ${(props) => (props.isMine ? "#e8f7e6" : "#f3f4f6")};
  color: #111827;
  border-radius: 12px;
  padding: 8px 12px;
  white-space: pre-wrap;
`;

export const Message = styled.div`
  font-size: 13px;
`;

export const Time = styled.div`
  display: flex;
  font-size: 11px;
  color: #888;
  margin-top: 4px;
  justify-content: ${(props) => (props.isMine ? "left" : "right")};
`;

export const Unread = styled.div`
  display: flex;
  align-items: flex-end;
  color: black;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 6px;
`;

export const SendMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-top: 1px solid #eee;
`;

export const SendMessageInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #eee;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  background-color: #85848432;

  &:focus {
    border-color: #3364eb;
  }
`;

export const SendMessageButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  background: #3364eb;
  color: white;
  font-size: 14px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background: #254b8a;
  }
`;
