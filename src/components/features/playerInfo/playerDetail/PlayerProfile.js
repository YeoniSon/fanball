import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  PlayerInfoContainer,
  PlayerListMoveButton,
  PlayerName,
  TeamLogo,
  Avatar,
  PlayerHeader,
  PlayerTeam,
  BadgeRow,
  PlayerNumber,
  PositionBadge,
  PlayerInfo,
  NameRow,
  InfoItem,
  InfoLabel,
  InfoRow,
  InfoValue,
} from "../../../../styles/playerInfo/playerDetail/PlayerProfileStyled";

const PlayerProfile = ({ player }) => {
  const navigate = useNavigate();
  const { playerId } = useParams();
  const [playerData, setPlayerData] = useState(player);
  const [loading, setLoading] = useState(false);

  const handlePlayerListMove = () => {
    navigate("/players");
  };

  const ArrowLeftIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12H5m7-7l-7 7 7 7"
      />
    </svg>
  );

  useEffect(() => {
    const loadPlayer = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/mockPlayers.json`);
        const data = await res.json();
        const found = data.players.find((p) => p.playerId === playerId);
        setPlayerData(found || null);
      } catch (error) {
        console.error("Failed to load player:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPlayer();
  }, [playerId]);

  return (
    <div>
      <PlayerInfoContainer>
        <PlayerListMoveButton onClick={handlePlayerListMove}>
          <ArrowLeftIcon />
          선수 목록으로
        </PlayerListMoveButton>
        <PlayerHeader>
          <Avatar
            src={playerData.photo || "/players/placeholder.png"}
            alt={playerData.name}
          />
          <PlayerInfo>
            <NameRow>
              <PlayerNumber>{playerData?.number ?? "-"}</PlayerNumber>
              <PlayerName>{playerData?.name ?? "-"}</PlayerName>
              <BadgeRow>
                <PositionBadge>{playerData?.position ?? "-"}</PositionBadge>
              </BadgeRow>
            </NameRow>

            <PlayerTeam>
              {playerData?.teamlogo && (
                <TeamLogo src={playerData.teamlogo} alt={playerData.team} />
              )}
              {playerData?.team ?? "-"}
            </PlayerTeam>
            <InfoRow>
              <InfoItem>
                <InfoLabel>생년월일</InfoLabel>
                <InfoValue>{playerData?.birthDate || "-"}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>체격</InfoLabel>
                <InfoValue>
                  {playerData?.height && playerData?.weight
                    ? `${playerData.height}cm / ${playerData.weight}kg`
                    : "-"}
                </InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>투타</InfoLabel>
                <InfoValue>{playerData?.batsThrows || "-"}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>데뷔년도</InfoLabel>
                <InfoValue>{playerData?.debutYear || "-"}</InfoValue>
              </InfoItem>
            </InfoRow>
          </PlayerInfo>
        </PlayerHeader>
      </PlayerInfoContainer>
    </div>
  );
};

export default PlayerProfile;
