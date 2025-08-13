import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LiveChatContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GameHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const GameTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-align: center;
`;

const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const TeamInfo = styled.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

const TeamName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TeamScore = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #fbbf24;
`;

const VS = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #f3f4f6;
`;

const GameDetails = styled.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

const DetailText = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  opacity: 0.9;
`;

const ChatSection = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  background-color: #f8fafc;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
`;

const ChatTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
`;

const ChatMessages = styled.div`
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background-color: #f9fafb;
`;

const Message = styled.div`
  margin-bottom: 16px;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const MessageAuthor = styled.span`
  font-weight: 600;
  color: #1f2937;
`;

const MessageTime = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const MessageContent = styled.div`
  color: #374151;
  line-height: 1.5;
`;

const ChatInput = styled.div`
  padding: 20px;
  border-top: 1px solid #e5e7eb;
  background: white;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SendButton = styled.button`
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4b5563;
  }
`;

const LiveChat = () => {
  const { gameId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "야구팬123",
      content: "안녕하세요! 실시간 채팅에 참여했습니다!",
      time: "방금 전",
    },
    {
      id: 2,
      author: "KIA맨",
      content: "KIA 화이팅! 오늘은 이길 수 있어요!",
      time: "1분 전",
    },
    {
      id: 3,
      author: "SSG서포터",
      content: "최정 홈런 기대하고 있어요!",
      time: "2분 전",
    },
  ]);

  const game = location.state?.game;

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        author: "나",
        content: message,
        time: "방금 전",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!game) {
    return (
      <LiveChatContainer>
        <div>경기 정보를 찾을 수 없습니다.</div>
      </LiveChatContainer>
    );
  }

  return (
    <LiveChatContainer>
      <BackButton onClick={handleBack}>← 뒤로가기</BackButton>

      <GameHeader>
        <GameTitle>
          {game.awayTeam} vs {game.homeTeam}
        </GameTitle>
        <GameInfo>
          <TeamInfo>
            <TeamName>{game.awayTeam}</TeamName>
            <TeamScore>{game.awayScore || 0}</TeamScore>
          </TeamInfo>
          <VS>VS</VS>
          <TeamInfo>
            <TeamName>{game.homeTeam}</TeamName>
            <TeamScore>{game.homeScore || 0}</TeamScore>
          </TeamInfo>
          <GameDetails>
            <DetailText>구장: {game.stadium}</DetailText>
            <DetailText>시간: {game.time}</DetailText>
            {game.currentInning && (
              <DetailText>
                {game.inningHalf === "top" ? "초" : "말"} {game.currentInning}회
              </DetailText>
            )}
          </GameDetails>
        </GameInfo>
      </GameHeader>

      <ChatSection>
        <ChatHeader>
          <ChatTitle>실시간 채팅 💬</ChatTitle>
        </ChatHeader>

        <ChatMessages>
          {messages.map((msg) => (
            <Message key={msg.id}>
              <MessageHeader>
                <MessageAuthor>{msg.author}</MessageAuthor>
                <MessageTime>{msg.time}</MessageTime>
              </MessageHeader>
              <MessageContent>{msg.content}</MessageContent>
            </Message>
          ))}
        </ChatMessages>

        <ChatInput>
          <InputContainer>
            <MessageInput
              type="text"
              placeholder="메시지를 입력하세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SendButton onClick={handleSendMessage} disabled={!message.trim()}>
              전송
            </SendButton>
          </InputContainer>
        </ChatInput>
      </ChatSection>
    </LiveChatContainer>
  );
};

export default LiveChat;
