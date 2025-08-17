import { useEffect, useMemo, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LiveChat from "../../features/LiveChat/LiveChat";
import {
  LiveChatHeader,
  LiveChatList,
  TeamContainer,
  TeamLogoWrap,
  TeamLogo,
  TeamName,
  TeamScore,
  TeamPlace,
  Participants,
  GameStatus,
} from "../../../styles/liveChat/LiveChatRoomStyled";

const LiveChatRoomPage = () => {
  const { gameId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  const teamIcon = [
    {
      id: "SSG",
      shortName: "SSG",
      label: "SSG 랜더스",
      logo: "/team-logos/ssg-landers.png",
      path: "/ssgLanders",
      color: "CE0E2D",
    },
    {
      id: "NC",
      shortName: "NC",
      label: "NC 다이노스",
      logo: "/team-logos/nc-dinos.png",
      path: "/ncDinos",
      color: "315288",
    },
    {
      id: "KIA",
      shortName: "KIA",
      label: "KIA 타이거즈",
      logo: "/team-logos/kia-tigers.png",
      path: "/kiaTigers",
      color: "EA0029",
    },
    {
      id: "LG",
      shortName: "LG",
      label: "LG 트윈스",
      logo: "/team-logos/lg-twins.png",
      path: "/lgTwins",
      color: "C30452",
    },
    {
      id: "KT",
      shortName: "KT",
      label: "KT 위즈",
      logo: "/team-logos/kt-wiz.png",
      path: "/ktWiz",
      color: "000000",
    },
    {
      id: "DOOSAN",
      shortName: "두산",
      label: "두산 베어스",
      logo: "/team-logos/doosan-bears.png",
      path: "/doosanBears",
      color: "131230",
    },
    {
      id: "SAMSUNG",
      shortName: "삼성",
      label: "삼성 라이온즈",
      logo: "/team-logos/samsung-lions.png",
      path: "/samsungLions",
      color: "074CA1",
    },
    {
      id: "LOTTE",
      shortName: "롯데",
      label: "롯데 자이언츠",
      logo: "/team-logos/lotte-giants.png",
      path: "/lotteGiants",
      color: "041E42",
    },
    {
      id: "KIWOOM",
      shortName: "키움",
      label: "키움 히어로즈",
      logo: "/team-logos/kiwoom-heroes.png",
      path: "/kiwoomHeroes",
      color: "570514",
    },
    {
      id: "HANWHA",
      shortName: "한화",
      label: "한화 이글스",
      logo: "/team-logos/hanwha-eagles.png",
      path: "/hanhwaEagles",
      color: "FF6600",
    },
  ];

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/mockGames.json`);
        const data = await res.json();
        const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
        const byDate = data?.gamesByDate || {};
        const todaysGames = Array.isArray(byDate[today]) ? byDate[today] : [];
        const found = todaysGames.find((g) => String(g.id) === String(gameId));
        setGame(found);
      } catch (error) {
        setGame(null);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [gameId]);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        // live가 아닐 경우 방이 없을 수 있음
        const res = await fetch(`/mockLiveChats.json`);
        const data = await res.json();
        const r = data?.[gameId];
        setRoom(r || null);
      } catch (e) {
        setRoom(null);
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [gameId]);

  if (loading) return <div>불러오는 중...</div>;

  const handleListClick = () => {
    navigate(`/live-chat`);
  };

  const ArrowIcon = () => (
    <svg
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12H18M6 12L11 7M6 12L11 17"
      />
    </svg>
  );

  const LocationIcon = () => (
    <svg
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </svg>
  );

  const ParticipantsIcon = () => (
    <svg
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="#ffffff"
        d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  );

  return (
    <div>
      <LiveChatHeader>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LiveChatList onClick={handleListClick}>
            <ArrowIcon />
          </LiveChatList>
          <TeamContainer>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <TeamLogoWrap>
                {teamIcon.find((icon) => icon.label === game?.awayTeam)
                  ?.logo && (
                  <TeamLogo
                    src={
                      teamIcon.find((icon) => icon.label === game?.awayTeam)
                        ?.logo
                    }
                    alt={game?.awayTeam}
                  />
                )}
                <TeamName>{game?.awayTeam}</TeamName>
              </TeamLogoWrap>
              <TeamScore>
                {game?.awayScore || 0} : {game?.homeScore || 0}
              </TeamScore>
              <TeamLogoWrap>
                {teamIcon.find((icon) => icon.label === game?.homeTeam)
                  ?.logo && (
                  <TeamLogo
                    src={
                      teamIcon.find((icon) => icon.label === game?.homeTeam)
                        ?.logo
                    }
                    alt={game?.homeTeam}
                  />
                )}
                <TeamName>{game?.homeTeam}</TeamName>
              </TeamLogoWrap>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <LocationIcon />
              <TeamPlace>{game?.stadium}</TeamPlace>
              <ParticipantsIcon />
              <Participants>{room?.participants}</Participants>
            </div>
          </TeamContainer>
        </div>
        {game?.status === "live" ? (
          <GameStatus>
            <span>LIVE</span>
          </GameStatus>
        ) : (
          <div />
        )}
      </LiveChatHeader>
      <LiveChat />
      {!room ? <div>라이브 중인 경기에서만 채팅이 열립니다.</div> : null}
    </div>
  );
};

export default LiveChatRoomPage;
