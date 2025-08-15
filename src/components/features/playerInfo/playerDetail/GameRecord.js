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

const GameRecord = () => {
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

  // 재사용 가능한 테이블 컴포넌트
  const SplitTable = ({ title, headers = [], rows = [] }) => (
    <SeasonRecordContainer>
      <RecordHeader>
        <ChartIcon />
        {title}
      </RecordHeader>
      <TableHeader cols={headers.length}>
        {headers.map((h) => (
          <TableHeaderCell key={h}>{h}</TableHeaderCell>
        ))}
      </TableHeader>
      {rows.length === 0 ? (
        <NoData>데이터가 없습니다.</NoData>
      ) : (
        rows.map((cells, idx) => (
          <TableRow key={idx} cols={headers.length}>
            {cells.map((c, i) => (
              <StateCell key={i}>{c}</StateCell>
            ))}
          </TableRow>
        ))
      )}
    </SeasonRecordContainer>
  );

  const isPitcher = playerData?.positionGroup === "투수";
  const splits = playerData?.gameSplits || {};

  // 타자용 행 생성기
  const batterRowsFrom = (list = [], pick) =>
    (list || []).map((r) => [
      pick.label(r),
      r.games ?? "-",
      r.atBats ?? "-",
      r.hits ?? "-",
      r.homeRuns ?? "-",
      r.rbi ?? "-",
      (r.avg ?? "-").toString(),
      (r.ops ?? "-").toString(),
    ]);

  // 투수용 행 생성기
  const pitcherRowsFrom = (list = [], pick) =>
    (list || []).map((r) => [
      pick.label(r),
      r.games ?? "-",
      r.wins ?? "-",
      r.losses ?? "-",
      r.saves ?? "-",
      r.innings ?? "-",
      r.strikeouts ?? "-",
      r.walks ?? "-",
      r.era ?? "-",
      r.whip ?? "-",
    ]);

  const sections = isPitcher
    ? [
        {
          title: "상대팀별",
          headers: [
            "상대팀",
            "경기",
            "승",
            "패",
            "세이브",
            "이닝",
            "탈삼진",
            "볼넷",
            "ERA",
            "WHIP",
          ],
          rows: pitcherRowsFrom(splits.byOpponent, {
            label: (r) => r.team,
          }),
        },
        {
          title: "구장별",
          headers: [
            "구장",
            "경기",
            "승",
            "패",
            "세이브",
            "이닝",
            "탈삼진",
            "볼넷",
            "ERA",
            "WHIP",
          ],
          rows: pitcherRowsFrom(splits.byBallpark, {
            label: (r) => r.ballpark,
          }),
        },
        {
          title: "요일별",
          headers: [
            "요일",
            "경기",
            "승",
            "패",
            "세이브",
            "이닝",
            "탈삼진",
            "볼넷",
            "ERA",
            "WHIP",
          ],
          rows: pitcherRowsFrom(splits.byWeekday, { label: (r) => r.weekday }),
        },
        {
          title: "홈/원정",
          headers: [
            "구분",
            "경기",
            "승",
            "패",
            "세이브",
            "이닝",
            "탈삼진",
            "볼넷",
            "ERA",
            "WHIP",
          ],
          rows: pitcherRowsFrom(
            [
              { label: "홈", ...(splits.homeAway?.home || {}) },
              { label: "원정", ...(splits.homeAway?.away || {}) },
            ],
            { label: (r) => r.label }
          ),
        },
        {
          title: "주/야간",
          headers: [
            "구분",
            "경기",
            "승",
            "패",
            "세이브",
            "이닝",
            "탈삼진",
            "볼넷",
            "ERA",
            "WHIP",
          ],
          rows: pitcherRowsFrom(
            [
              { label: "주간", ...(splits.dayNight?.day || {}) },
              { label: "야간", ...(splits.dayNight?.night || {}) },
            ],
            { label: (r) => r.label }
          ),
        },
        {
          title: "전/후반기",
          headers: [
            "구분",
            "경기",
            "승",
            "패",
            "세이브",
            "이닝",
            "탈삼진",
            "볼넷",
            "ERA",
            "WHIP",
          ],
          rows: pitcherRowsFrom(
            [
              { label: "전반기", ...(splits.halfSeason?.firstHalf || {}) },
              { label: "후반기", ...(splits.halfSeason?.secondHalf || {}) },
            ],
            { label: (r) => r.label }
          ),
        },
      ]
    : [
        {
          title: "상대팀별",
          headers: [
            "상대팀",
            "경기",
            "타수",
            "안타",
            "홈런",
            "타점",
            "타율",
            "OPS",
          ],
          rows: batterRowsFrom(splits.byOpponent, { label: (r) => r.team }),
        },
        {
          title: "구장별",
          headers: [
            "구장",
            "경기",
            "타수",
            "안타",
            "홈런",
            "타점",
            "타율",
            "OPS",
          ],
          rows: batterRowsFrom(splits.byBallpark, { label: (r) => r.ballpark }),
        },
        {
          title: "요일별",
          headers: [
            "요일",
            "경기",
            "타수",
            "안타",
            "홈런",
            "타점",
            "타율",
            "OPS",
          ],
          rows: batterRowsFrom(splits.byWeekday, { label: (r) => r.weekday }),
        },
        {
          title: "홈/원정",
          headers: [
            "구분",
            "경기",
            "타수",
            "안타",
            "홈런",
            "타점",
            "타율",
            "OPS",
          ],
          rows: batterRowsFrom(
            [
              { label: "홈", ...(splits.homeAway?.home || {}) },
              { label: "원정", ...(splits.homeAway?.away || {}) },
            ],
            { label: (r) => r.label }
          ),
        },
        {
          title: "주/야간",
          headers: [
            "구분",
            "경기",
            "타수",
            "안타",
            "홈런",
            "타점",
            "타율",
            "OPS",
          ],
          rows: batterRowsFrom(
            [
              { label: "주간", ...(splits.dayNight?.day || {}) },
              { label: "야간", ...(splits.dayNight?.night || {}) },
            ],
            { label: (r) => r.label }
          ),
        },
        {
          title: "전/후반기",
          headers: [
            "구분",
            "경기",
            "타수",
            "안타",
            "홈런",
            "타점",
            "타율",
            "OPS",
          ],
          rows: batterRowsFrom(
            [
              { label: "전반기", ...(splits.halfSeason?.firstHalf || {}) },
              { label: "후반기", ...(splits.halfSeason?.secondHalf || {}) },
            ],
            { label: (r) => r.label }
          ),
        },
      ];

  return (
    <div>
      {sections.map((s) => (
        <SplitTable
          key={s.title}
          title={s.title}
          headers={s.headers}
          rows={s.rows}
        />
      ))}
    </div>
  );
};

export default GameRecord;
