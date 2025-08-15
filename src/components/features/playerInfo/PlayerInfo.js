import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSection from "./FilterSection";
import {
  ListContainer,
  EmptyState,
  LoadingState,
  CardGrid,
  Card,
  CardHeader,
  Avatar,
  CardTitle,
  CardMeta,
  BadgeRow,
  PositionBadge,
  StatGrid,
  StatItem,
  Line,
  StatHeader,
  StatContainer,
  StatLabel,
  InfoRow,
  InfoItem,
  InfoLabel,
  InfoValue,
  DetailButton,
} from "../../../styles/playerInfo/PlayerInfoStyled";

const PlayerInfo = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [filters, setFilters] = useState({ team: "", position: "", name: "" });

  const handleFilterChange = useCallback((next) => {
    setFilters((prev) => {
      const isSame =
        prev.team === next.team &&
        prev.position === next.position &&
        (prev.name || "") === (next.name || "");
      return isSame ? prev : next;
    });
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch("/mockPlayers.json");
        const data = await res.json();
        setPlayers(Array.isArray(data?.players) ? data.players : []);
      } catch (e) {
        setPlayers([]);
        console.error("Failed to load mockPlayers.json", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredPlayers = useMemo(() => {
    const nameQuery = (filters.name || "").trim().toLowerCase();

    if (!filters.team && !filters.position && !nameQuery) {
      return [];
    }
    return players
      .filter((p) => !filters.team || p.team === filters.team)
      .filter((p) => !filters.position || p.position === filters.position)
      .filter(
        (p) => !nameQuery || (p.name || "").toLowerCase().includes(nameQuery)
      )
      .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  }, [players, filters]);

  const handleDetailButtonClick = (playerId) => {
    navigate(`/players/detail/${playerId}`);
  };

  return (
    <div>
      <FilterSection
        onFilterChange={handleFilterChange}
        onResetFilters={() => setFilters({ team: "", position: "", name: "" })}
      />

      <ListContainer>
        {loading ? (
          <LoadingState>불러오는 중...</LoadingState>
        ) : filteredPlayers.length === 0 ? (
          <EmptyState>조건에 맞는 선수가 없습니다.</EmptyState>
        ) : (
          <CardGrid>
            {filteredPlayers.map((p) => (
              <Card key={p.playerId}>
                <CardHeader>
                  <Avatar
                    src={p.photo || "/players/placeholder.png"}
                    alt={p.name}
                  />
                  <div>
                    <CardTitle>{p.name}</CardTitle>
                    <CardMeta>{p.team}</CardMeta>
                  </div>
                </CardHeader>
                <BadgeRow>
                  <PositionBadge>{p.position}</PositionBadge>
                </BadgeRow>
                <InfoRow>
                  <InfoItem>
                    <InfoLabel>생년월일</InfoLabel>
                    <InfoValue>{p.birthDate || "-"}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>체격</InfoLabel>
                    <InfoValue>
                      {p.height && p.weight ? `${p.height} / ${p.weight}` : "-"}
                    </InfoValue>
                  </InfoItem>
                </InfoRow>
                <Line />
                <StatGrid>
                  {p.position === "투수" ? (
                    <>
                      <StatHeader>투구 기록</StatHeader>
                      <StatContainer>
                        <StatItem style={{ color: "blue" }}>
                          {p.stats?.era ?? "-"}
                        </StatItem>
                        <StatLabel>평균자책</StatLabel>
                      </StatContainer>
                      <StatContainer>
                        <StatItem style={{ color: "green" }}>
                          {p.stats?.wins ?? "-"}
                        </StatItem>
                        <StatLabel>승</StatLabel>
                      </StatContainer>
                      <StatContainer>
                        <StatItem style={{ color: "purple" }}>
                          {p.stats?.strikeouts ?? "-"}
                        </StatItem>
                        <StatLabel>탈삼진</StatLabel>
                      </StatContainer>
                    </>
                  ) : (
                    <>
                      <StatHeader>타격 기록</StatHeader>
                      <StatContainer>
                        <StatItem style={{ color: "blue" }}>
                          {p.stats?.avg ?? "-"}
                        </StatItem>
                        <StatLabel>타율</StatLabel>
                      </StatContainer>
                      <StatContainer>
                        <StatItem style={{ color: "red" }}>
                          {p.stats?.homeRuns ?? "-"}
                        </StatItem>
                        <StatLabel>홈런</StatLabel>
                      </StatContainer>
                      <StatContainer>
                        <StatItem style={{ color: "green" }}>
                          {p.stats?.rbi ?? "-"}
                        </StatItem>
                        <StatLabel>타점</StatLabel>
                      </StatContainer>
                    </>
                  )}
                </StatGrid>

                <DetailButton
                  onClick={() => handleDetailButtonClick(p.playerId)}
                >
                  상세 정보
                </DetailButton>
              </Card>
            ))}
          </CardGrid>
        )}
      </ListContainer>
    </div>
  );
};

export default PlayerInfo;
