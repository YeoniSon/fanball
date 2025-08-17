import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { SendIcon } from "../../common/Icons";
import {
  ChatContainer,
  ChatHeader,
  ChatTitle,
  Participants,
  Hr,
  ChatMessageContainer,
  UserIcon,
  UserNickName,
  UserFavoriteTeam,
  ChatTime,
  ChatMessage,
  MessageWrapper,
  MessageColumn,
  MetaRow,
  ContentRow,
  MessagesList,
  ChatInputBar,
  ChatTextInput,
  SendButton,
} from "../../../styles/liveChat/LiveChatStyled";

const LiveChat = () => {
  const { gameId } = useParams();
  const [chat, setChat] = useState({ participants: 0, messages: [] });
  const [loading, setLoading] = useState(false);
  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const teamIcon = [
    {
      id: "SSG",
      shortName: "SSG",
      label: "SSG 랜더스",
      logo: "/team-logos/ssg-landers.png",
      path: "/ssgLanders",
      color: "#CE0E2D",
    },
    {
      id: "NC",
      shortName: "NC",
      label: "NC 다이노스",
      logo: "/team-logos/nc-dinos.png",
      path: "/ncDinos",
      color: "#315288",
    },
    {
      id: "KIA",
      shortName: "KIA",
      label: "KIA 타이거즈",
      logo: "/team-logos/kia-tigers.png",
      path: "/kiaTigers",
      color: "#EA0029",
    },
    {
      id: "LG",
      shortName: "LG",
      label: "LG 트윈스",
      logo: "/team-logos/lg-twins.png",
      path: "/lgTwins",
      color: "#C30452",
    },
    {
      id: "KT",
      shortName: "KT",
      label: "KT 위즈",
      logo: "/team-logos/kt-wiz.png",
      path: "/ktWiz",
      color: "#000000",
    },
    {
      id: "DOOSAN",
      shortName: "두산",
      label: "두산 베어스",
      logo: "/team-logos/doosan-bears.png",
      path: "/doosanBears",
      color: "#131230",
    },
    {
      id: "SAMSUNG",
      shortName: "삼성",
      label: "삼성 라이온즈",
      logo: "/team-logos/samsung-lions.png",
      path: "/samsungLions",
      color: "#074CA1",
    },
    {
      id: "LOTTE",
      shortName: "롯데",
      label: "롯데 자이언츠",
      logo: "/team-logos/lotte-giants.png",
      path: "/lotteGiants",
      color: "#041E42",
    },
    {
      id: "KIWOOM",
      shortName: "키움",
      label: "키움 히어로즈",
      logo: "/team-logos/kiwoom-heroes.png",
      path: "/kiwoomHeroes",
      color: "#570514",
    },
    {
      id: "HANWHA",
      shortName: "한화",
      label: "한화 이글스",
      logo: "/team-logos/hanwha-eagles.png",
      path: "/hanhwaEagles",
      color: "#FF6600",
    },
  ];

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/mockLiveChats.json`);
        const data = await res.json();
        const room = data?.[gameId] || { participants: 0, messages: [] };
        setChat({
          participants: room.participants ?? 0,
          messages: Array.isArray(room.messages) ? room.messages : [],
        });
      } catch (error) {
        setChat({ participants: 0, messages: [] });
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [gameId]);

  // 스크롤을 항상 하단으로 유지
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chat.messages.length]);

  const getTeamColor = (teamName) => {
    const color = teamIcon.find((t) => t.label === teamName)?.color;
    if (!color) return "black";
    return `${color}`;
  };

  const formatTime = (ts) => ts?.slice(11, 16) || "";

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ChatContainer>
            <ChatHeader>
              <ChatTitle># 실시간 채팅</ChatTitle>
              <Participants>{chat.participants} 명 참여중</Participants>
            </ChatHeader>

            <Hr />
            <MessagesList ref={containerRef}>
              {chat.messages.map((msg, index) => {
                const isMine = String(msg.id) === String(currentUser?.id ?? "");
                const nickMine = currentUser?.nickname || currentUser?.name;
                const nickOther = msg.user || "익명";

                return (
                  <MessageWrapper key={index} $isMine={isMine}>
                    <ChatMessageContainer>
                      <MessageColumn>
                        <MetaRow $isMine={isMine}>
                          {isMine ? (
                            <>
                              <ChatTime>{formatTime(msg.timestamp)}</ChatTime>
                              <UserNickName>{nickMine}</UserNickName>
                            </>
                          ) : (
                            <>
                              <UserNickName>{nickOther}</UserNickName>
                              <ChatTime>{formatTime(msg.timestamp)}</ChatTime>
                            </>
                          )}
                        </MetaRow>

                        <ContentRow $reverse={isMine}>
                          <UserIcon
                            style={{ backgroundColor: getTeamColor(msg?.team) }}
                          >
                            {(isMine ? nickMine : nickOther).charAt(0)}
                          </UserIcon>
                          <ChatMessage>{msg.text}</ChatMessage>
                        </ContentRow>
                      </MessageColumn>
                    </ChatMessageContainer>
                  </MessageWrapper>
                );
              })}
            </MessagesList>
            <ChatInputBar>
              <ChatTextInput placeholder="메세지를 입력하세요..." />
              <SendButton>
                <SendIcon />
              </SendButton>
            </ChatInputBar>
          </ChatContainer>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
