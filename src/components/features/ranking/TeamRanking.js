import React, { useEffect, useState } from "react";
import {
  TeamRankingContainer,
  TeamRankingHeader,
  TeamRankingTitle,
  YearControls,
  ArrowButton,
  YearText,
  TeamRankingTable,
  TableHeader,
  TableHeaderCell,
  TableRow,
  RankCell,
  TeamCell,
  TeamLogo,
  TeamName,
  StatCell,
  NoData,
  Loading,
} from "../../../styles/ranking/TeamRankingStyled";

const TeamRanking = () => {
  const [year, setYear] = useState(2025);
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStandings = async (y) => {
    setLoading(true);
    try {
      const res = await fetch("/mockKboStandingsByYear.json");
      const data = await res.json();
      const items = data.byYear?.[String(y)]?.standings || [];
      setStandings(items);
    } catch (e) {
      console.error("연도별 팀 순위 데이터를 불러오지 못했습니다", e);
      setStandings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStandings(year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeYear = (delta) => {
    const next = year + delta;
    setYear(next);
    fetchStandings(next);
  };

  return (
    <TeamRankingContainer>
      <TeamRankingHeader>
        <YearControls>
          <ArrowButton onClick={() => changeYear(-1)}>◀</ArrowButton>
          <YearText>{year}</YearText>
          <ArrowButton onClick={() => changeYear(1)}>▶</ArrowButton>
        </YearControls>
      </TeamRankingHeader>

      <TeamRankingTable>
        <TableHeader>
          <TableHeaderCell>순위</TableHeaderCell>
          <TableHeaderCell>팀명</TableHeaderCell>
          <TableHeaderCell>경기</TableHeaderCell>
          <TableHeaderCell>승</TableHeaderCell>
          <TableHeaderCell>패</TableHeaderCell>
          <TableHeaderCell>무</TableHeaderCell>
          <TableHeaderCell>승률</TableHeaderCell>
          <TableHeaderCell>게임차</TableHeaderCell>
          <TableHeaderCell>연속</TableHeaderCell>
          <TableHeaderCell>최근10경기</TableHeaderCell>
        </TableHeader>

        {loading ? (
          <Loading>불러오는 중...</Loading>
        ) : standings.length === 0 ? (
          <NoData>해당 연도의 순위 데이터가 없습니다.</NoData>
        ) : (
          standings.map((t) => (
            <TableRow key={t.teamId}>
              <RankCell className={`rank-${t.rank}`}>{t.rank}</RankCell>
              <TeamCell>
                <TeamLogo src={t.logo} alt={t.team} />
                <TeamName>{t.team}</TeamName>
              </TeamCell>
              <StatCell>{t.games}</StatCell>
              <StatCell className="win">{t.wins}</StatCell>
              <StatCell className="loss">{t.losses}</StatCell>
              <StatCell className="tie">{t.ties}</StatCell>
              <StatCell>{t.winRate.toFixed(3)}</StatCell>
              <StatCell>{t.gamesBehind.toFixed(1)}</StatCell>
              <StatCell>{t.streak}</StatCell>
              <StatCell>{t.last10}</StatCell>
            </TableRow>
          ))
        )}
      </TeamRankingTable>
    </TeamRankingContainer>
  );
};

export default TeamRanking;
