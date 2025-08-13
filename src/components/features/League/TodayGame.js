import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TodayGamesContainer,
  TodayGamesTitle,
  TodayGamesDescription,
  GameCard,
  GameHeader,
  GameTeams,
  TeamInfo,
  TeamName,
  GameScore,
  GameStatus,
  GameInfo,
  GameTime,
  GameStadium,
  NoGamesMessage,
  LoadingMessage,
  TodayHeaderBox,
  TodayHeaderTitle,
  TodayHeaderCount,
  TodayGamesListBox,
  LiveChatButton,
  ScheduledGameMessage,
  FinishedGameMessage,
  VS,
} from "../../../styles/SchedulePageStyled";

const TodayGame = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [todayGames, setTodayGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // 게임 데이터 가져오기
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/mockGames.json");
        const data = await response.json();

        // gamesByDate 구조를 평면 배열로 변환
        const allGames = [];
        if (data.gamesByDate) {
          Object.entries(data.gamesByDate).forEach(([date, games]) => {
            games.forEach((game) => {
              allGames.push({
                ...game,
                date: date, // 날짜 정보 추가
              });
            });
          });
        }

        setGames(allGames);
        setLoading(false);
      } catch (error) {
        console.error("게임 데이터를 가져오는데 실패했습니다:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // 오늘 날짜의 경기만 필터링
  useEffect(() => {
    if (games.length === 0) return;

    const today = new Date();
    const todayString = today.toISOString().split("T")[0]; // YYYY-MM-DD 형식

    const filtered = games.filter((game) => game.date === todayString);
    setTodayGames(filtered);
  }, [games]);

  // 경기 클릭 핸들러
  const handleGameClick = (game) => {
    if (game.status === "live") {
      // 실시간 경기인 경우 채팅 페이지로 이동
      navigate(`/live-chat/${game.id}`, {
        state: {
          game: game,
          homeTeam: game.homeTeam,
          awayTeam: game.awayTeam,
          homeScore: game.homeScore,
          awayScore: game.awayScore,
          stadium: game.stadium,
          time: game.time,
          currentInning: game.currentInning,
          inningHalf: game.inningHalf,
        },
      });
    } else {
      // 예정이거나 종료된 경기는 상세 정보 페이지로 이동 (선택사항)
      console.log("경기 상세 정보:", game);
    }
  };

  // 게임 상태 텍스트 반환
  const getStatusText = (status) => {
    switch (status) {
      case "scheduled":
        return "예정";
      case "live":
        return "진행중";
      case "finished":
        return "종료";
      case "completed":
        return "종료";
      default:
        return "알 수 없음";
    }
  };

  // 게임 상태 색상 반환
  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "#6b7280";
      case "live":
        return "#dc2626";
      case "finished":
        return "#059669";
      case "completed":
        return "#059669";
      default:
        return "#6b7280";
    }
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    return `${month}월 ${day}일 (${dayOfWeek})`;
  };

  // 시간 포맷팅
  const formatTime = (timeString) => {
    if (!timeString) return "시간 미정";
    return timeString;
  };

  // 오늘 날짜 표시
  const getTodayDisplay = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
      today.getDay()
    ];
    return `${month}월 ${day}일 (${dayOfWeek})`;
  };

  return (
    <TodayGamesContainer>
      {loading ? (
        <LoadingMessage>로딩 중...</LoadingMessage>
      ) : todayGames.length > 0 ? (
        <div>
          <TodayHeaderBox>
            <TodayHeaderTitle>{getTodayDisplay()}</TodayHeaderTitle>
            <TodayHeaderCount>{todayGames.length}경기</TodayHeaderCount>
          </TodayHeaderBox>

          <TodayGamesListBox>
            {todayGames.map((game) => (
              <GameCard key={game.id} className={game.status}>
                <GameHeader>
                  <GameTeams>
                    <TeamInfo>
                      <TeamName>{game.awayTeam}</TeamName>
                      <GameScore>{game.awayScore || "-"}</GameScore>
                    </TeamInfo>
                    <VS>VS</VS>
                    <TeamInfo>
                      <GameScore>{game.homeScore || "-"}</GameScore>
                      <TeamName>{game.homeTeam}</TeamName>
                    </TeamInfo>
                  </GameTeams>
                  <GameStatus
                    style={{
                      backgroundColor: getStatusColor(game.status) + "20",
                      color: getStatusColor(game.status),
                    }}
                  >
                    {getStatusText(game.status)}
                  </GameStatus>
                </GameHeader>
                <GameInfo>
                  <GameTime>{formatTime(game.time)}</GameTime>
                  <GameStadium>{game.stadium || "구장 미정"}</GameStadium>
                </GameInfo>

                {/* 진행중인 경기일 때 실시간 채팅 버튼 */}
                {game.status === "live" && (
                  <LiveChatButton onClick={() => handleGameClick(game)}>
                    🎯 실시간 채팅 참여하기
                  </LiveChatButton>
                )}

                {/* 예정된 경기일 때 카운트다운 표시 */}
                {game.status === "scheduled" && (
                  <ScheduledGameMessage>
                    ⏰ 경기 시작까지 대기 중
                  </ScheduledGameMessage>
                )}

                {/* 종료된 경기일 때 결과 요약 */}
                {(game.status === "finished" ||
                  game.status === "completed") && (
                  <FinishedGameMessage>🏁 경기 종료</FinishedGameMessage>
                )}
              </GameCard>
            ))}
          </TodayGamesListBox>
        </div>
      ) : (
        <NoGamesMessage>오늘 진행되는 경기가 없습니다.</NoGamesMessage>
      )}
    </TodayGamesContainer>
  );
};

export default TodayGame;
