import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  SeasonRecordContainer,
  RecordHeader,
  TableHeader,
  TableHeaderCell,
  TableRow,
  NoData,
  Loading,
  TeamName,
  StateCell,
} from "../../../../styles/playerInfo/playerDetail/SeasonRecordStyled";

const MonthRecord = () => {
  const { playerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/mockPlayers.json`);
        const data = await response.json();
        const found = data.players.find((p) => p.playerId === playerId);
        setPlayerData(found || null);
      } catch (error) {
        console.error("Error fetching player data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const ChartIcon = () => (
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
        d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 4V8M11 8V12M7 13V17M19 4V17"
      />
    </svg>
  );

  return (
    <div>
      <SeasonRecordContainer>
        <RecordHeader>
          <ChartIcon />
          연도별 기록
        </RecordHeader>

        {playerData?.positionGroup === "타자" ? (
          <>
            <TableHeader>
              <TableHeaderCell>월</TableHeaderCell>
              <TableHeaderCell>팀</TableHeaderCell>
              <TableHeaderCell>경기</TableHeaderCell>
              <TableHeaderCell>타수</TableHeaderCell>
              <TableHeaderCell>득점</TableHeaderCell>
              <TableHeaderCell>안타</TableHeaderCell>
              <TableHeaderCell>2루타</TableHeaderCell>
              <TableHeaderCell>3루타</TableHeaderCell>
              <TableHeaderCell>홈런</TableHeaderCell>
              <TableHeaderCell>타점</TableHeaderCell>
              <TableHeaderCell>도루</TableHeaderCell>
              <TableHeaderCell>볼넷</TableHeaderCell>
              <TableHeaderCell>사구</TableHeaderCell>
              <TableHeaderCell>삼진</TableHeaderCell>
              <TableHeaderCell>병살</TableHeaderCell>
              <TableHeaderCell>타율</TableHeaderCell>
              <TableHeaderCell>출루율</TableHeaderCell>
              <TableHeaderCell>장타율</TableHeaderCell>
              <TableHeaderCell>OPS</TableHeaderCell>
              <TableHeaderCell>wRC+</TableHeaderCell>
              <TableHeaderCell>WAR</TableHeaderCell>
            </TableHeader>

            {loading ? (
              <Loading>불러오는 중...</Loading>
            ) : (playerData?.monthlyStats || []).length > 0 ? (
              (playerData.monthlyStats || []).map((record) => (
                <TableRow key={`${record.month}-${record.team}`}>
                  <StateCell>{record.month}월</StateCell>
                  <StateCell>
                    <TeamName>{record.team}</TeamName>
                  </StateCell>
                  <StateCell>{record.games ?? "-"}</StateCell>
                  <StateCell>{record.atBats ?? "-"}</StateCell>
                  <StateCell>{record.runs ?? "-"}</StateCell>
                  <StateCell>{record.hits ?? "-"}</StateCell>
                  <StateCell>{record.doubles ?? "-"}</StateCell>
                  <StateCell>{record.triples ?? "-"}</StateCell>
                  <StateCell>{record.homeRuns ?? "-"}</StateCell>
                  <StateCell>{record.rbi ?? "-"}</StateCell>
                  <StateCell>{record.steals ?? "-"}</StateCell>
                  <StateCell>{record.walks ?? "-"}</StateCell>
                  <StateCell>{record.hbp ?? "-"}</StateCell>
                  <StateCell>{record.strikeouts ?? "-"}</StateCell>
                  <StateCell>{record.gdp ?? "-"}</StateCell>
                  <StateCell>{record.avg ?? "-"}</StateCell>
                  <StateCell>{record.obp ?? "-"}</StateCell>
                  <StateCell>{record.slg ?? "-"}</StateCell>
                  <StateCell>{record.ops ?? "-"}</StateCell>
                  <StateCell>{record.wRCPlus ?? "-"}</StateCell>
                  <StateCell>{record.war ?? "-"}</StateCell>
                </TableRow>
              ))
            ) : (
              <NoData>해당 연도의 데이터가 없습니다.</NoData>
            )}
          </>
        ) : (
          <>
            <TableHeader>
              <TableHeaderCell>년도</TableHeaderCell>
              <TableHeaderCell>팀</TableHeaderCell>
              <TableHeaderCell>평균자책</TableHeaderCell>
              <TableHeaderCell>경기</TableHeaderCell>
              <TableHeaderCell>승</TableHeaderCell>
              <TableHeaderCell>패</TableHeaderCell>
              <TableHeaderCell>세이브</TableHeaderCell>
              <TableHeaderCell>이닝</TableHeaderCell>
              <TableHeaderCell>탈삼진</TableHeaderCell>
              <TableHeaderCell>피안타</TableHeaderCell>
              <TableHeaderCell>실점</TableHeaderCell>
              <TableHeaderCell>자책점</TableHeaderCell>
              <TableHeaderCell>볼넷</TableHeaderCell>
              <TableHeaderCell>사구</TableHeaderCell>
              <TableHeaderCell>승률</TableHeaderCell>
              <TableHeaderCell>QS</TableHeaderCell>
              <TableHeaderCell>WHIP</TableHeaderCell>
              <TableHeaderCell>WPA</TableHeaderCell>
              <TableHeaderCell>WAR</TableHeaderCell>
            </TableHeader>

            {loading ? (
              <Loading>불러오는 중...</Loading>
            ) : (playerData?.monthlyStats || []).length > 0 ? (
              (playerData.monthlyStats || []).map((record) => (
                <TableRow key={`${record.month}-${record.team}`}>
                  <StateCell>{record.month}월</StateCell>
                  <StateCell>
                    <TeamName>{record.team}</TeamName>
                  </StateCell>
                  <StateCell>{record.era ?? "-"}</StateCell>
                  <StateCell>{record.games ?? "-"}</StateCell>
                  <StateCell>{record.wins ?? "-"}</StateCell>
                  <StateCell>{record.losses ?? "-"}</StateCell>
                  <StateCell>{record.saves ?? "-"}</StateCell>
                  <StateCell>{record.innings ?? "-"}</StateCell>
                  <StateCell>{record.strikeouts ?? "-"}</StateCell>
                  <StateCell>{record.hitsAllowed ?? "-"}</StateCell>
                  <StateCell>{record.runsAllowed ?? "-"}</StateCell>
                  <StateCell>{record.earnedRuns ?? "-"}</StateCell>
                  <StateCell>{record.walks ?? "-"}</StateCell>
                  <StateCell>{record.hbp ?? "-"}</StateCell>
                  <StateCell>{record.winPct ?? "-"}</StateCell>
                  <StateCell>{record.qs ?? "-"}</StateCell>
                  <StateCell>{record.whip ?? "-"}</StateCell>
                  <StateCell>{record.wpa ?? "-"}</StateCell>
                  <StateCell>{record.war ?? "-"}</StateCell>
                </TableRow>
              ))
            ) : (
              <NoData>해당 연도의 데이터가 없습니다.</NoData>
            )}
          </>
        )}
      </SeasonRecordContainer>
    </div>
  );
};

export default MonthRecord;
