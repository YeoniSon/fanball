import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LiveChatContainer,
  Header,
  GameTeam,
  GameSchedule,
  Time,
  Location,
  ScoreContents,
  Score,
  GameStatus,
  Hr,
  TopRow,
  ChatRow,
  ChatEnterButton,
  ChatStatus,
  ChatStatusText,
} from "../../../styles/liveChat/LiveChatMainStyled";

const MainLiveChat = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch("/mockGames.json");
        const data = await res.json();
        const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
        const byDate = data?.gamesByDate || {};
        const todaysGames = Array.isArray(byDate[today]) ? byDate[today] : [];
        setGames(todaysGames);
      } catch (e) {
        setGames([]);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const getTeamLogo = (teamName) => {
    const item = teamIcon.find((x) => x.label === teamName);
    return item?.logo || "";
  };

  const handleChatEnter = (game) => {
    if (game.status !== "live") return;

    const snapshot = {
      id: game.id,
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      homeScore: game.homeScore,
      awayScore: game.awayScore,
      status: game.status,
      time: game.time,
      stadium: game.stadium,
      homeLogo: getTeamLogo(game.homeTeam),
      awayLogo: getTeamLogo(game.awayTeam),
    };
    const today = new Date().toLocaleDateString("en-CA");
    navigate(`/live-chat/${game.id}`, {
      state: { game: snapshot, date: today },
    });
  };

  const TimeIcon = () => (
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
        d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
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
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </svg>
  );
  const MessageIcon = () => (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z"
      />
    </svg>
  );

  return (
    <div>
      <Header>오늘의 경기별 채팅방</Header>

      {loading ? (
        <div>불러오는 중...</div>
      ) : games.length === 0 ? (
        <div>오늘 예정된 경기가 없습니다.</div>
      ) : (
        games.map((g) => (
          <div key={g.id}>
            <div>
              <LiveChatContainer>
                <TopRow>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 6 }}
                  >
                    <GameTeam>
                      {(() => {
                        const away = teamIcon.find(
                          (icon) => icon.label === g.awayTeam
                        );
                        const home = teamIcon.find(
                          (icon) => icon.label === g.homeTeam
                        );
                        return (
                          <>
                            {away?.logo && (
                              <img
                                src={away.logo}
                                alt={g.awayTeam}
                                style={{ width: 45, height: 30 }}
                              />
                            )}
                            <span>{away.shortName}</span>
                            {g.status === "live" ? (
                              <ScoreContents>
                                <Score
                                  style={{
                                    color: (() => {
                                      const c = teamIcon.find(
                                        (icon) => icon.label === g.awayTeam
                                      )?.color;
                                      return c ? `#${c}` : undefined;
                                    })(),
                                  }}
                                >
                                  {g.awayScore}
                                </Score>{" "}
                                :{" "}
                                <Score
                                  style={{
                                    color: (() => {
                                      const c = teamIcon.find(
                                        (icon) => icon.label === g.homeTeam
                                      )?.color;
                                      return c ? `#${c}` : undefined;
                                    })(),
                                  }}
                                >
                                  {g.homeScore}
                                </Score>
                              </ScoreContents>
                            ) : (
                              <span> VS </span>
                            )}
                            {home?.logo && (
                              <img
                                src={home.logo}
                                alt={g.homeTeam}
                                style={{ width: 45, height: 30 }}
                              />
                            )}
                            <span>{home.shortName}</span>
                          </>
                        );
                      })()}
                    </GameTeam>
                    <GameSchedule>
                      <Time>
                        <TimeIcon />
                        {g.time}
                      </Time>
                      <Location>
                        <LocationIcon />
                        {g.stadium}
                      </Location>
                    </GameSchedule>
                  </div>

                  <GameStatus
                    variant={
                      g.status === "live"
                        ? "live"
                        : g.status === "scheduled"
                        ? "scheduled"
                        : "completed"
                    }
                  >
                    {g.status === "live"
                      ? "LIVE"
                      : g.status === "scheduled"
                      ? "예정"
                      : "종료"}
                  </GameStatus>
                </TopRow>
                <Hr />
                <ChatRow>
                  <ChatStatus>
                    <MessageIcon />
                    {g.status === "live" ? (
                      <ChatStatusText>실시간 채팅 진행중</ChatStatusText>
                    ) : (
                      <ChatStatusText>실시간 채팅 예정</ChatStatusText>
                    )}
                  </ChatStatus>

                  <ChatEnterButton onClick={() => handleChatEnter(g)}>
                    채팅방 입장
                  </ChatEnterButton>
                </ChatRow>
              </LiveChatContainer>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MainLiveChat;
