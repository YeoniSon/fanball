import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SessionRecordContainer,
  SessionRecordTitle,
  RecordBox,
  RecordItem,
  RecordValue,
  RecordLabel,
} from "../../../../styles/playerInfo/playerDetail/SeasonMainRecordStyled";

const SessionRecord = ({ player }) => {
  const { playerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [playerData, setPlayerData] = useState(player);

  const SessionRecordIcon = () => (
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
        d="M12 14V17M12 14C9.58104 14 7.56329 12.2822 7.10002 10M12 14C14.419 14 16.4367 12.2822 16.9 10M17 5H19.75C19.9823 5 20.0985 5 20.1951 5.01921C20.5918 5.09812 20.9019 5.40822 20.9808 5.80491C21 5.90151 21 6.01767 21 6.25C21 6.94698 21 7.29547 20.9424 7.58527C20.7056 8.77534 19.7753 9.70564 18.5853 9.94236C18.2955 10 17.947 10 17.25 10H17H16.9M7 5H4.25C4.01767 5 3.90151 5 3.80491 5.01921C3.40822 5.09812 3.09812 5.40822 3.01921 5.80491C3 5.90151 3 6.01767 3 6.25C3 6.94698 3 7.29547 3.05764 7.58527C3.29436 8.77534 4.22466 9.70564 5.41473 9.94236C5.70453 10 6.05302 10 6.75 10H7H7.10002M12 17C12.93 17 13.395 17 13.7765 17.1022C14.8117 17.3796 15.6204 18.1883 15.8978 19.2235C16 19.605 16 20.07 16 21H8C8 20.07 8 19.605 8.10222 19.2235C8.37962 18.1883 9.18827 17.3796 10.2235 17.1022C10.605 17 11.07 17 12 17ZM7.10002 10C7.03443 9.67689 7 9.34247 7 9V4.57143C7 4.03831 7 3.77176 7.09903 3.56612C7.19732 3.36201 7.36201 3.19732 7.56612 3.09903C7.77176 3 8.03831 3 8.57143 3H15.4286C15.9617 3 16.2282 3 16.4339 3.09903C16.638 3.19732 16.8027 3.36201 16.901 3.56612C17 3.77176 17 4.03831 17 4.57143V9C17 9.34247 16.9656 9.67689 16.9 10"
      />
    </svg>
  );

  useEffect(() => {
    const loadPlayerData = async () => {
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

    loadPlayerData();
  }, [playerId]);

  const year = new Date().getFullYear();

  return (
    <div>
      <SessionRecordContainer>
        <SessionRecordTitle>
          <SessionRecordIcon />
          {year} 시즌 주요 기록
        </SessionRecordTitle>
        {playerData?.positionGroup == "타자" ? (
          <RecordBox>
            <RecordItem style={{ backgroundColor: "#368aff44" }}>
              <RecordValue style={{ color: "#0019f7ff" }}>
                {playerData?.stats?.avg ?? 0}
              </RecordValue>
              <RecordLabel>타율</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#ff903637" }}>
              <RecordValue style={{ color: "#f73a00ff" }}>
                {playerData?.stats?.homeRuns ?? 0}
              </RecordValue>
              <RecordLabel>홈런</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#67b26b3e" }}>
              <RecordValue style={{ color: "rgba(17, 129, 0, 1)" }}>
                {playerData?.stats?.hits ?? 0}
              </RecordValue>
              <RecordLabel>안타</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#9736ff40" }}>
              <RecordValue style={{ color: "rgba(77, 5, 178, 1)" }}>
                {playerData?.stats?.rbi ?? 0}
              </RecordValue>
              <RecordLabel>타점</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#52cdf361" }}>
              <RecordValue style={{ color: "rgba(11, 97, 146, 1)" }}>
                {playerData?.stats?.ops ?? 0}
              </RecordValue>
              <RecordLabel>OPS</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#ff02024b" }}>
              <RecordValue style={{ color: "rgba(255, 0, 0, 1)" }}>
                {playerData?.stats?.steals ?? 0}
              </RecordValue>
              <RecordLabel>도루</RecordLabel>
            </RecordItem>
          </RecordBox>
        ) : (
          <RecordBox>
            <RecordItem style={{ backgroundColor: "#368aff44" }}>
              <RecordValue style={{ color: "#0019f7ff" }}>
                {playerData?.stats?.era ?? 0}
              </RecordValue>
              <RecordLabel>ERA</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#ff903637" }}>
              <RecordValue style={{ color: "#f73a00ff" }}>
                {playerData?.stats?.wins ?? 0}
              </RecordValue>
              <RecordLabel>승</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#67b26b3e" }}>
              <RecordValue style={{ color: "rgba(17, 129, 0, 1)" }}>
                {playerData?.stats?.losses ?? 0}
              </RecordValue>
              <RecordLabel>패</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#9736ff40" }}>
              <RecordValue style={{ color: "rgba(77, 5, 178, 1)" }}>
                {playerData?.stats?.saves ?? 0}
              </RecordValue>
              <RecordLabel>세이브</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#52cdf361" }}>
              <RecordValue style={{ color: "rgba(11, 97, 146, 1)" }}>
                {playerData?.stats?.inningsPitched ?? 0}
              </RecordValue>
              <RecordLabel>이닝</RecordLabel>
            </RecordItem>
            <RecordItem style={{ backgroundColor: "#ff02024b" }}>
              <RecordValue style={{ color: "rgba(255, 0, 0, 1)" }}>
                {playerData?.stats?.strikeouts ?? 0}
              </RecordValue>
              <RecordLabel>탈삼진</RecordLabel>
            </RecordItem>
          </RecordBox>
        )}
      </SessionRecordContainer>
    </div>
  );
};

export default SessionRecord;
