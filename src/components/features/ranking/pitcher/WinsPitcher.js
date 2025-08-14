import { useEffect, useState } from "react";
import {
  PlayerRankingTable,
  TableHeader,
  TableHeaderCell,
  TableRow,
  RankCell,
  TeamLogo,
  StateCell,
  TeamCell,
  TeamName,
  Loading,
  NoData,
  NameCell,
} from "../../../../styles/ranking/PlayerRankingStyled";

const WinsPitcher = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (y) => {
    setLoading(true);
    try {
      const response = await fetch(`/mockKboPlayerLeadersByYear.json`);
      const data = await response.json();
      const rows = data?.byYear?.[String(y)]?.pitchers?.wins || [];
      setLeaders(rows);
    } catch (error) {
      console.error("Error fetching leaders:", error);
      setLeaders([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(year);
  }, [year]);

  const getTeamLogo = (teamId) => (teamId ? `/team-logos/${teamId}.png` : "");

  return (
    <div>
      <h2>평균자책순 투수 순위</h2>
      <PlayerRankingTable>
        <TableHeader>
          <TableHeaderCell>순위</TableHeaderCell>
          <TableHeaderCell>선수명</TableHeaderCell>
          <TableHeaderCell>팀</TableHeaderCell>
          <TableHeaderCell>평균자책점</TableHeaderCell>
          <TableHeaderCell>경기</TableHeaderCell>
          <TableHeaderCell>승</TableHeaderCell>
          <TableHeaderCell>패</TableHeaderCell>
          <TableHeaderCell>세이브</TableHeaderCell>
          <TableHeaderCell>이닝</TableHeaderCell>
          <TableHeaderCell>탈삼진</TableHeaderCell>
          <TableHeaderCell>WHIP</TableHeaderCell>
        </TableHeader>

        {loading ? (
          <Loading>불러오는 중...</Loading>
        ) : leaders.length === 0 ? (
          <NoData>해당 연도의 순위 데이터가 없습니다.</NoData>
        ) : (
          leaders.map((p) => (
            <TableRow key={p.playerId}>
              <RankCell className={`rank-${p.rank}`}>{p.rank}</RankCell>
              <NameCell>{p.name}</NameCell>
              <TeamCell>
                <TeamLogo src={getTeamLogo(p.teamId)} alt={p.team} />
                <TeamName>{p.team}</TeamName>
              </TeamCell>
              <StateCell>{p.era}</StateCell>
              <StateCell>{p.games}</StateCell>
              <StateCell>{p.wins}</StateCell>
              <StateCell>{p.losses}</StateCell>
              <StateCell>{p.saves}</StateCell>
              <StateCell>{p.innings}</StateCell>
              <StateCell>{p.strikeouts}</StateCell>
              <StateCell>{p.whip}</StateCell>
            </TableRow>
          ))
        )}
      </PlayerRankingTable>
    </div>
  );
};

export default WinsPitcher;
