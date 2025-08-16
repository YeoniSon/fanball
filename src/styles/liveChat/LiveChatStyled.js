import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 1px solid #9c9a9a58;
  height: 600px;
  overflow: hidden;
  margin-top: 30px;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  margin-left: 20px;
  border-radius: 1rem;
`;

export const ChatTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin-right: 10px;
  text-align: center;
  white-space: nowrap;
`;

export const Participants = styled.div`
  font-size: 10px;
  font-weight: 400;
  border: 1px solid #9c9a9a92;
  border-radius: 6px;
  padding: 4px 8px;
  color: black;
  text-align: center;
  white-space: nowrap;
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #9c9a9a92;
  margin: 12px 0;
`;

export const ChatMessageContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 4px 0;
  color: black;
  max-width: 70%;
`;

export const UserIcon = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-right: 8px;
  padding: 5px;
`;

export const UserNickName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #6a6767ff;
`;

export const UserFavoriteTeam = styled.span`
  font-size: 10px;
  text-align: center;
  font-weight: 400;
  margin-left: 8px;
  border-radius: 6px;
  padding: 2px 8px;
`;

export const ChatTime = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 8px;
  border-radius: 6px;
  padding: 2px 8px;
  color: #817f7fff;
`;

export const ChatMessage = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 20px;
  padding: 10px;
  color: #4b4949ff;
  background-color: #94949451;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.$isMine ? "flex-end" : "flex-start")};
`;

export const MessageColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 0 0 2px 0;
  justify-content: ${(props) => (props.$isMine ? "flex-end" : "flex-start")};
  box-sizing: border-box;
  padding-left: ${(props) => (props.$isMine ? "0" : "70px")};
  padding-right: ${(props) => (props.$isMine ? "70px" : "0")};
  text-align: ${(props) => (props.$isMine ? "right" : "left")};
  & > * {
    flex-shrink: 0;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const MessageRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.$isMine ? "flex-end" : "flex-start")};
`;

export const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 5px 0 8px 0;
`;

export const ChatInputBar = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-top: 1px solid #9c9a9a92;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
`;

export const ChatTextInput = styled.input`
  flex: 1;
  border: 1px solid #d1d5db;
  background-color: #d1d5db55;
  border-radius: 10px;
  padding: 8px 12px;
  outline: none;
`;

export const SendButton = styled.button`
  border: 1px solid #111827;
  background: #111827;
  color: #ffffff;
  padding: 7px 15px;
  margin-left: 8px;
  border-radius: 8px;
  cursor: pointer;
`;
