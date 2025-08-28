import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChatContainer,
  ChatListContainer,
  ChatListHeader,
  ChatListBody,
  ChatItem,
  ChatItemMain,
  NoChat,
  ChatParticipant,
  ChatIcon,
  ChatLastMessage,
  ChatTime,
  UnreadBadge,
} from "../../../styles/message/ChatListStyled";
import ChatPage from "./ChatPage";
import { Hr } from "../../../styles/liveChat/LiveChatMainStyled";

const ChatList = () => {
  const [threads, setThreads] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const navigate = useNavigate();

  const currentUser = useMemo(() => {
    try {
      const rawUser =
        localStorage.getItem("user") || localStorage.getItem("currentUser");
      return rawUser ? JSON.parse(rawUser) : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const [msgRes, userRes] = await Promise.all([
          fetch("/mockMessages.json"),
          fetch("/mockUsers.json"),
        ]);
        const msgJson = await msgRes.json();
        const userJson = await userRes.json();
        setThreads(Array.isArray(msgJson?.threads) ? msgJson.threads : []);
        setMessages(Array.isArray(msgJson?.messages) ? msgJson.messages : []);
        setUsers(Array.isArray(userJson?.users) ? userJson.users : []);
      } catch (e) {
        setThreads([]);
        setMessages([]);
        setUsers([]);
      }
    };
    load();
  }, []);

  const myId = useMemo(() => {
    const raw = currentUser?.id;
    const digits = raw != null ? String(raw).match(/\d+/)?.[0] : null;
    return digits ? Number(digits) : null;
  }, [currentUser?.id]);

  const myThreads = useMemo(() => {
    if (!myId) return [];

    return (threads || [])
      .filter(
        (t) => Array.isArray(t?.participants) && t.participants.includes(myId)
      )
      .map((t) => {
        const otherId = (t.participants || []).find(
          (pid) => Number(pid) !== Number(myId)
        );
        const other = (users || []).find(
          (u) => Number(u?.id) === Number(otherId)
        );
        const displayName =
          other?.nickname || other?.name || `사용자 ${otherId}`;

        const tMsgs = (messages || [])
          .filter((m) => m?.threadId === t.id)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const last = tMsgs[0] || null;
        const unread = Number(t?.unread?.[String(myId)] || 0);

        return {
          id: t.id,
          participant: displayName,
          lastMessage: last?.content || "메시지가 없습니다.",
          timestamp: last?.createdAt || t?.lastMessageAt || null,
          unread,
        };
      })
      .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
  }, [threads, messages, users, myId]);

  const chatMessages = useMemo(() => {
    if (!selectedThreadId) return [];
    return (messages || [])
      .filter((m) => m?.threadId === selectedThreadId)
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }, [messages, selectedThreadId]);

  const handleClick = (threadId) => {
    setSelectedThreadId(threadId);
  };

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

  if (!myId) {
    alert("로그인이 필요합니다.");
    navigate("/login");
    return null;
  }

  return (
    <>
      <ChatContainer>
        <ChatListContainer style={{ flex: "0 0 340px" }}>
          <ChatListHeader>대화 목록</ChatListHeader>
          <Hr />
          {myThreads.length === 0 ? (
            <NoChat>대화 내역이 없습니다.</NoChat>
          ) : (
            <ChatListBody>
              {myThreads.map((chat) => (
                <ChatItem
                  key={chat.id}
                  onClick={() => handleClick(chat.id)}
                  $selected={selectedThreadId === chat.id}
                >
                  <ChatIcon>{chat.participant.charAt(0)}</ChatIcon>
                  <ChatItemMain>
                    <ChatParticipant>{chat.participant}</ChatParticipant>
                    <ChatLastMessage>{chat.lastMessage}</ChatLastMessage>
                  </ChatItemMain>
                  <ChatTime>{formatTime(chat.timestamp)}</ChatTime>

                  {chat.unread > 0 && <UnreadBadge>{chat.unread}</UnreadBadge>}
                </ChatItem>
              ))}
            </ChatListBody>
          )}
        </ChatListContainer>

        <ChatPage
          selectedThreadId={selectedThreadId}
          chatMessages={chatMessages}
          myId={myId}
        />
      </ChatContainer>
    </>
  );
};

export default ChatList;
