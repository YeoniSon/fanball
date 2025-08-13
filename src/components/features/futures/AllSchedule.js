import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScheduleContainer,
  FilterSection,
  FilterGrid,
  FilterField,
  FilterSelect,
  FilterButtonContainer,
  FilterResetButton,
  FilterResultSection,
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
  DateGroupContainer,
  DateHeaderBox,
  DateTitle,
  DateGameCount,
  GamesListBox,
  VS,
  LoadingMessage,
} from "../../../styles/SchedulePageStyled";

const AllSchedule = () => {
  const navigate = useNavigate();
  const [selectedYearMonth, setSelectedYearMonth] = useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    return `${year}-${month.toString().padStart(2, "0")}`;
  });
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // 경기 클릭 핸들러
  const handleGameClick = (game) => {
    if (game.status === "live" || game.status === "live") {
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

  // 게임 데이터 가져오기
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/mockFuturesGames.json");
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

        console.log("변환된 게임 데이터:", allGames);
        setGames(allGames);
        setLoading(false);
      } catch (error) {
        console.error("게임 데이터를 가져오는데 실패했습니다:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // 필터링 로직
  useEffect(() => {
    if (games.length === 0) return;

    let filtered = games;
    console.log("전체 게임 수:", games.length);
    console.log("선택된 년월:", selectedYearMonth);
    console.log("선택된 팀:", selectedTeam);

    // 년월 필터링
    if (selectedYearMonth !== "all") {
      filtered = filtered.filter((game) => {
        const gameDate = new Date(game.date);
        const gameYear = gameDate.getFullYear();
        const gameMonth = gameDate.getMonth() + 1;
        const [selectedYear, selectedMonth] = selectedYearMonth
          .split("-")
          .map(Number);

        const isMatch =
          gameYear === selectedYear && gameMonth === selectedMonth;

        return isMatch;
      });
    }

    // 팀 필터링
    if (selectedTeam !== "all") {
      filtered = filtered.filter((game) => {
        const homeTeam = game.homeTeam.toLowerCase();
        const awayTeam = game.awayTeam.toLowerCase();
        const isMatch =
          homeTeam.includes(selectedTeam) || awayTeam.includes(selectedTeam);

        return isMatch;
      });
    }

    console.log("최종 필터링된 게임 수:", filtered.length);

    // 최신 날짜순으로 정렬
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilteredGames(filtered);
  }, [selectedYearMonth, selectedTeam, games]);

  const handleFilterReset = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    setSelectedYearMonth(`${year}-${month.toString().padStart(2, "0")}`);
    setSelectedTeam("all");
  };

  // 년월 옵션 생성 (2008년부터 현재까지)
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const yearMonthOptions = [{ value: "all", label: "전체 기간" }];

  for (let year = currentYear; year >= 2008; year--) {
    for (let month = 3; month <= 10; month++) {
      // 3월부터 10월까지만
      // 현재 년월까지만 옵션 생성 (현재 월이 범위를 벗어나면 해당 년도는 건너뛰기)
      if (year === currentYear) {
        if (currentMonth < 3 && month > 3) continue; // 현재가 1~2월이면 3월만 표시
        if (currentMonth > 10 && month < 10) continue; // 현재가 11~12월이면 10월만 표시
        if (month > currentMonth) continue; // 현재 월보다 큰 월은 건너뛰기
      }

      const monthLabel = month < 10 ? `0${month}` : month.toString();
      yearMonthOptions.push({
        value: `${year}-${monthLabel}`,
        label: `${year}년 ${month}월`,
      });
    }
  }

  // 년월 옵션을 최신 순서로 정렬 (전체 기간 제외)
  const sortedYearMonthOptions = [
    yearMonthOptions[0], // "전체 기간"은 항상 첫 번째
    ...yearMonthOptions.slice(1).sort((a, b) => {
      const [yearA, monthA] = a.value.split("-").map(Number);
      const [yearB, monthB] = b.value.split("-").map(Number);
      return yearB - yearA || monthB - monthA; // 년도 내림차순, 월 내림차순
    }),
  ];

  // 팀 옵션
  const teamOptions = [
    { value: "all", label: "전체 팀" },
    { value: "ssg", label: "SSG 랜더스" },
    { value: "kia", label: "KIA 타이거즈" },
    { value: "lg", label: "LG 트윈스" },
    { value: "nc", label: "NC 다이노스" },
    { value: "kt", label: "KT 위즈" },
    { value: "doosan", label: "두산 베어스" },
    { value: "samsung", label: "삼성 라이온즈" },
    { value: "lotte", label: "롯데 자이언츠" },
    { value: "kiwoom", label: "키움 히어로즈" },
    { value: "hanhwa", label: "한화 이글스" },
  ];

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

  // 날짜별로 게임 그룹화
  const groupGamesByDate = (games) => {
    const grouped = {};
    games.forEach((game) => {
      const date = game.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(game);
    });

    // 날짜별로 정렬 (최신순)
    return Object.entries(grouped)
      .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
      .reduce((acc, [date, games]) => {
        acc[date] = games;
        return acc;
      }, {});
  };

  return (
    <ScheduleContainer>
      {/* 필터 섹션 */}
      <FilterSection>
        <FilterGrid>
          {/* 년월 선택 */}
          <FilterField>
            <FilterSelect
              value={selectedYearMonth}
              onChange={(e) => setSelectedYearMonth(e.target.value)}
            >
              {sortedYearMonthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </FilterSelect>
          </FilterField>

          {/* 팀 선택 */}
          <FilterField>
            <FilterSelect
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
            >
              {teamOptions.map((team) => (
                <option key={team.value} value={team.value}>
                  {team.label}
                </option>
              ))}
            </FilterSelect>
          </FilterField>

          {/* 필터 초기화 버튼 */}
          <FilterButtonContainer>
            <FilterResetButton onClick={handleFilterReset}>
              🔄 필터 초기화
            </FilterResetButton>
          </FilterButtonContainer>
        </FilterGrid>
      </FilterSection>

      {/* 필터링된 결과 표시 영역 */}
      <FilterResultSection>
        {loading ? (
          <LoadingMessage>로딩 중...</LoadingMessage>
        ) : filteredGames.length > 0 ? (
          Object.entries(groupGamesByDate(filteredGames)).map(
            ([date, games]) => (
              <DateGroupContainer key={date}>
                <DateHeaderBox>
                  <DateTitle>{formatDate(date)}</DateTitle>
                  <DateGameCount>{games.length}경기</DateGameCount>
                </DateHeaderBox>
                <GamesListBox>
                  {games.map((game) => (
                    <GameCard
                      key={game.id}
                      onClick={() => handleGameClick(game)}
                      className={game.status}
                    >
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
                    </GameCard>
                  ))}
                </GamesListBox>
              </DateGroupContainer>
            )
          )
        ) : (
          <NoGamesMessage>선택된 필터에 맞는 경기가 없습니다.</NoGamesMessage>
        )}
      </FilterResultSection>
    </ScheduleContainer>
  );
};

export default AllSchedule;
