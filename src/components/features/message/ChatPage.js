import { useEffect, useRef, useState } from "react";
import {
  ChatPageContainer,
  ChatContainer,
  ChatMessage,
  MessageContainer,
  Message,
  Time,
  Unread,
  MessagesScrollArea,
  SendMessageContainer,
  SendMessageInput,
  SendMessageButton,
} from "../../../styles/message/ChatPageStyled";
import { SendIcon } from "../../common/Icons";
import { Hr } from "../../../styles/liveChat/LiveChatMainStyled";

const ChatPage = ({ selectedThreadId, chatMessages, myId }) => {
  const [message, setMessage] = useState("");
  const scrollAreaRef = useRef(null);

  const formatTime = (ts) => {
    if (!ts) return "-";
    try {
      return new Date(ts).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    } catch {
      return "-";
    }
  };

  const handleSendMessage = () => {
    if (!message) return;
    // Send message logic here
    setMessage("");
  };

  useEffect(() => {
    if (!scrollAreaRef.current) return;
    // Scroll to bottom when messages change or thread changes
    scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }, [chatMessages, selectedThreadId]);

  return (
    <>
      <ChatPageContainer>
        <ChatContainer>
          <MessagesScrollArea ref={scrollAreaRef}>
            {!selectedThreadId ? (
              <div style={{ color: "#777" }}>대화를 선택해주세요.</div>
            ) : chatMessages.length === 0 ? (
              <div style={{ color: "#777" }}>메시지가 없습니다.</div>
            ) : (
              chatMessages.map((m) => {
                const isMine = Number(m.senderId) === Number(myId);
                return (
                  <ChatMessage key={m.id} isMine={isMine}>
                    <MessageContainer isMine={isMine}>
                      <Message>{m.content}</Message>
                      <Time isMine={isMine}>{formatTime(m.createdAt)}</Time>
                    </MessageContainer>
                    {m.status === "unread" && (
                      <Unread isMine={isMine}>1</Unread>
                    )}
                  </ChatMessage>
                );
              })
            )}
          </MessagesScrollArea>
          <div>
            <Hr style={{ margin: 0 }} />
            <SendMessageContainer>
              <SendMessageInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력하세요..."
              />
              <SendMessageButton onClick={handleSendMessage}>
                <SendIcon width={20} height={20} viewBox="0 0 20 20" />
              </SendMessageButton>
            </SendMessageContainer>
          </div>
        </ChatContainer>
      </ChatPageContainer>
    </>
  );
};

export default ChatPage;
