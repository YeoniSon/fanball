import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GameContainer,
  GameHeaderContainer,
  GameHeaderLeft,
  ViewAllButton,
  GameGrid,
  GameCard,
  GameTeams,
  GameStatus,
  NoGamesMessage,
  GameCardContent,
  GameInfoContainer,
  GameInfoRow,
  GameInfoItem,
  GameScore,
  CurrentInning,
  CurrentScoreBox,
} from "../../../styles/HomePage/TodayGameSectionStyled";

const TodayGameSection = () => {
  const navigate = useNavigate();
  const [todayGames, setTodayGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodayGames = async () => {
      try {
        const response = await fetch("/mockGames.json");
        const data = await response.json();

        // 오늘 날짜 (2024-03-21)의 경기만 가져오기
        const todayDate = "2024-03-21";
        const games = data.gamesByDate[todayDate] || [];

        setTodayGames(games);
        setLoading(false);
      } catch (error) {
        console.error("오늘 경기 데이터 로드 실패:", error);
        setLoading(false);
      }
    };

    fetchTodayGames();
  }, []);

  const handleViewAll = () => {
    navigate("/schedule");
  };

  const liveGame = () => {
    navigate("/live");
  };

  const Calendar = () => (
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const formatTime = (time) => {
    return time || "시간 미정";
  };

  const getStatusText = (status) => {
    switch (status) {
      case "scheduled":
        return "예정";
      case "live":
        return "진행중";
      case "completed":
        return "완료";
      default:
        return "상태불명";
    }
  };

  if (loading) {
    return (
      <GameContainer>
        <div>오늘 경기 정보를 불러오는 중...</div>
      </GameContainer>
    );
  }

  return (
    <div>
      <GameContainer>
        <GameHeaderContainer>
          <GameHeaderLeft>
            <Calendar />
            오늘의 경기
          </GameHeaderLeft>
          <ViewAllButton onClick={handleViewAll}>전체보기 →</ViewAllButton>
        </GameHeaderContainer>

        {todayGames.length > 0 ? (
          <GameGrid>
            {todayGames.map((game) => (
              <GameCard key={game.id}>
                <GameCardContent>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flex: 1,
                    }}
                  >
                    <GameTeams>
                      {game.homeTeam} vs {game.awayTeam}
                    </GameTeams>
                    {game.status === "live" && (
                      <CurrentScoreBox>
                        <GameScore>
                          {game.homeScore} - {game.awayScore}
                        </GameScore>
                        <CurrentInning>
                          {game.currentInning}회
                          {game.inningHalf === "top" ? "초" : "말"}
                        </CurrentInning>
                      </CurrentScoreBox>
                    )}
                  </div>

                  <GameInfoContainer>
                    <GameInfoRow>
                      <GameInfoItem>{formatTime(game.time)}</GameInfoItem>
                    </GameInfoRow>
                    <GameInfoRow>
                      <GameInfoItem bold primary>
                        {game.stadium}
                      </GameInfoItem>
                    </GameInfoRow>

                    {getStatusText(game.status) == "진행중" ? (
                      <GameStatus onClick={liveGame}>
                        {getStatusText(game.status)}
                      </GameStatus>
                    ) : (
                      <GameStatus>{getStatusText(game.status)}</GameStatus>
                    )}
                  </GameInfoContainer>
                </GameCardContent>
              </GameCard>
            ))}
          </GameGrid>
        ) : (
          <NoGamesMessage>오늘 예정된 경기가 없습니다.</NoGamesMessage>
        )}
      </GameContainer>
    </div>
  );
};

export default TodayGameSection;
