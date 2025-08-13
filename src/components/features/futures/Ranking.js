import React, { useState, useEffect } from "react";
import {
  RankingContainer,
  RankingTitle,
  LeagueTabs,
  LeagueTab,
  RankingTable,
  TableHeader,
  TableHeaderCell,
  TableRow,
  RankCell,
  TeamCell,
  RankingTeamLogo,
  RankingTeamName,
  StatsCell,
  MilitaryTeam,
  LoadingMessage,
} from "../../../styles/SchedulePageStyled";

const Ranking = () => {
  const [activeLeague, setActiveLeague] = useState("all");
  const [rankingData, setRankingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await fetch("/mockFuturesRanking.json");
        const data = await response.json();
        setRankingData(data);
      } catch (error) {
        console.error(
          "퓨처스리그 순위 데이터를 불러오는데 실패했습니다:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRankingData();
  }, []);

  const getCurrentData = () => {
    if (!rankingData) return [];

    switch (activeLeague) {
      case "north":
        return rankingData.northLeague;
      case "south":
        return rankingData.southLeague;
      case "all":
        // 전체 순위는 승률 기준으로 정렬
        const allTeams = [
          ...rankingData.northLeague.map((team) => ({
            ...team,
            league: "북부",
          })),
          ...rankingData.southLeague.map((team) => ({
            ...team,
            league: "남부",
          })),
        ];
        return allTeams
          .sort((a, b) => b.winRate - a.winRate)
          .map((team, index) => ({ ...team, rank: index + 1 }));
      default:
        return rankingData.northLeague;
    }
  };

  const currentData = getCurrentData();

  if (loading) {
    return (
      <RankingContainer>
        <RankingTitle>2024 퓨처스리그 순위</RankingTitle>
        <LoadingMessage>순위 데이터를 불러오는 중...</LoadingMessage>
      </RankingContainer>
    );
  }

  return (
    <RankingContainer>
      <RankingTitle>2024 퓨처스리그 순위</RankingTitle>

      <LeagueTabs>
        <LeagueTab
          active={activeLeague === "all"}
          onClick={() => setActiveLeague("all")}
        >
          전체 순위
        </LeagueTab>
        <LeagueTab
          active={activeLeague === "north"}
          onClick={() => setActiveLeague("north")}
        >
          북부리그
        </LeagueTab>
        <LeagueTab
          active={activeLeague === "south"}
          onClick={() => setActiveLeague("south")}
        >
          남부리그
        </LeagueTab>
      </LeagueTabs>

      <RankingTable>
        <TableHeader>
          <TableHeaderCell>순위</TableHeaderCell>
          <TableHeaderCell>팀명</TableHeaderCell>
          <TableHeaderCell>승</TableHeaderCell>
          <TableHeaderCell>패</TableHeaderCell>
          <TableHeaderCell>무</TableHeaderCell>
          <TableHeaderCell>승률</TableHeaderCell>
        </TableHeader>

        {currentData.map((team) => (
          <TableRow key={team.team}>
            <RankCell className={`rank-${team.rank}`}>
              {team.rank === 1 && "🥇"}
              {team.rank === 2 && "🥈"}
              {team.rank === 3 && "🥉"}
              {team.rank > 3 && team.rank}
            </RankCell>

            <TeamCell>
              <RankingTeamLogo src={team.logo} alt={team.team} />
              <RankingTeamName>{team.team}</RankingTeamName>
              {team.isMilitary && <MilitaryTeam>상무</MilitaryTeam>}
              {activeLeague === "all" && (
                <span
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    marginLeft: "8px",
                  }}
                >
                  ({team.league})
                </span>
              )}
            </TeamCell>

            <StatsCell className="wins">{team.wins}</StatsCell>
            <StatsCell className="losses">{team.losses}</StatsCell>
            <StatsCell className="ties">{team.ties}</StatsCell>
            <StatsCell className="winRate">{team.winRate.toFixed(3)}</StatsCell>
          </TableRow>
        ))}
      </RankingTable>
    </RankingContainer>
  );
};

export default Ranking;
