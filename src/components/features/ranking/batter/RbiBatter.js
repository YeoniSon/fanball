import { useEffect, useState } from "react";
import {
  PlayerRankingTable,
  TableHeader,
  TableHeaderCell,
  TableRow,
  RankCell,
  StateCell,
  TeamCell,
  TeamLogo,
  TeamName,
  Loading,
  NoData,
  NameCell,
} from "../../../../styles/ranking/PlayerRankingStyled";

const RbiBatter = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (y) => {
    setLoading(true);
    try {
      const response = await fetch(`/mockKboPlayerLeadersByYear.json`);
      const data = await response.json();
      const rows = data?.byYear?.[String(y)]?.batters?.rbi || [];
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
      <PlayerRankingTable>
        <TableHeader>
          <TableHeaderCell>순위</TableHeaderCell>
          <TableHeaderCell>선수명</TableHeaderCell>
          <TableHeaderCell>팀</TableHeaderCell>
          <TableHeaderCell>타율</TableHeaderCell>
          <TableHeaderCell>경기</TableHeaderCell>
          <TableHeaderCell>타수</TableHeaderCell>
          <TableHeaderCell>안타</TableHeaderCell>
          <TableHeaderCell>홈런</TableHeaderCell>
          <TableHeaderCell>타점</TableHeaderCell>
          <TableHeaderCell>도루</TableHeaderCell>
          <TableHeaderCell>OPS</TableHeaderCell>
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
              <StateCell>{p.avg}</StateCell>
              <StateCell>{p.games}</StateCell>
              <StateCell>{p.atBats}</StateCell>
              <StateCell>{p.hits}</StateCell>
              <StateCell>{p.homeRuns}</StateCell>
              <StateCell>{p.rbi}</StateCell>
              <StateCell>{p.steals}</StateCell>
              <StateCell>{p.ops}</StateCell>
            </TableRow>
          ))
        )}
      </PlayerRankingTable>
    </div>
  );
};

export default RbiBatter;
