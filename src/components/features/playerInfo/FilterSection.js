import { useEffect, useMemo, useState } from "react";
import {
  FilterContainer,
  FilterRow,
  FilterHeader,
  FilterSelect,
  FilterInput,
  ResetButton,
} from "../../../styles/playerInfo/FilterSectionStyled";

const FilterSection = ({
  teams: teamsProp = [],
  positions: positionsProp = [],
  initialFilters = { team: "", position: "", name: "" },
  onFilterChange = () => {},
  onResetFilters = () => {},
}) => {
  const [selectedTeam, setSelectedTeam] = useState(initialFilters.team || "");
  const [selectedPosition, setSelectedPosition] = useState(
    initialFilters.position || ""
  );
  const [rawPlayerName, setRawPlayerName] = useState(initialFilters.name || "");
  const [playerName, setPlayerName] = useState(initialFilters.name || "");

  const [fetchedTeams, setFetchedTeams] = useState([]);
  const [fetchedPositions, setFetchedPositions] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/mockPlayers.json");
        const data = await response.json();
        const players = Array.isArray(data?.players) ? data.players : [];
        const teams = Array.from(
          new Set(players.map((p) => p.team).filter(Boolean))
        ).sort((a, b) => a.localeCompare(b));
        const positions = Array.from(
          new Set(players.map((p) => p.position).filter(Boolean))
        ).sort((a, b) => a.localeCompare(b));
        if (isMounted) {
          setFetchedTeams(teams);
          setFetchedPositions(positions);
        }
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
    return () => {
      isMounted = false;
    };
  }, []);

  // Debounce name input to reduce frequent emissions
  useEffect(() => {
    const t = setTimeout(() => setPlayerName(rawPlayerName), 250);
    return () => clearTimeout(t);
  }, [rawPlayerName]);

  useEffect(() => {
    onFilterChange({
      team: selectedTeam,
      position: selectedPosition,
      name: playerName,
    });
  }, [selectedTeam, selectedPosition, playerName, onFilterChange]);

  const getOptionValue = (option) =>
    typeof option === "string"
      ? option
      : option?.value ?? option?.id ?? option?.code ?? "";
  const getOptionLabel = (option) =>
    typeof option === "string"
      ? option
      : option?.label ?? option?.name ?? option?.text ?? getOptionValue(option);

  const normalizedTeamsFromProps = useMemo(
    () =>
      teamsProp.map((t) => ({
        value: getOptionValue(t),
        label: getOptionLabel(t),
      })),
    [teamsProp]
  );
  const normalizedTeamsFromData = useMemo(
    () => fetchedTeams.map((t) => ({ value: t, label: t })),
    [fetchedTeams]
  );
  const normalizedTeams = useMemo(() => {
    const map = new Map();
    [...normalizedTeamsFromData, ...normalizedTeamsFromProps].forEach((o) => {
      if (!map.has(o.value)) map.set(o.value, o);
    });
    return Array.from(map.values());
  }, [normalizedTeamsFromData, normalizedTeamsFromProps]);

  const normalizedPositionsFromProps = useMemo(
    () =>
      positionsProp.map((p) => ({
        value: getOptionValue(p),
        label: getOptionLabel(p),
      })),
    [positionsProp]
  );
  const normalizedPositionsFromData = useMemo(
    () => fetchedPositions.map((p) => ({ value: p, label: p })),
    [fetchedPositions]
  );
  const normalizedPositions = useMemo(() => {
    const map = new Map();
    [...normalizedPositionsFromData, ...normalizedPositionsFromProps].forEach(
      (o) => {
        if (!map.has(o.value)) map.set(o.value, o);
      }
    );
    return Array.from(map.values());
  }, [normalizedPositionsFromData, normalizedPositionsFromProps]);

  const handleResetFilters = () => {
    setSelectedTeam("");
    setSelectedPosition("");
    setRawPlayerName("");
    setPlayerName("");
    onResetFilters();
    onFilterChange({ team: "", position: "", name: "" });
  };

  return (
    <FilterContainer>
      <FilterHeader>🔍 선수 검색</FilterHeader>
      <FilterRow>
        <FilterInput
          type="text"
          value={rawPlayerName}
          onChange={(e) => setRawPlayerName(e.target.value)}
          placeholder="선수 이름 검색"
        />
        <FilterSelect
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="">전체 팀</option>
          {normalizedTeams.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </FilterSelect>
        <FilterSelect
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
        >
          <option value="">전체 포지션</option>
          {normalizedPositions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </FilterSelect>
        <ResetButton onClick={handleResetFilters}>필터 초기화</ResetButton>
      </FilterRow>
    </FilterContainer>
  );
};

export default FilterSection;
