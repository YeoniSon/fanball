import { useEffect, useMemo, useState } from "react";
import { CalenderIcon, ExclamationMarkIcon } from "../../../common/Icons";
import {
  SelectContainer,
  SelectGameCard,
  SelectGameDate,
  SelectHeader,
  SelectGameOption,
  Description,
} from "../../../../styles/ticket/register/RegisterStyled";

const SelectGame = ({ defaultSelectedGameId = "", onChange }) => {
  const [gamesByDate, setGamesByDate] = useState({});
  const [selectedGameId, setSelectedGameId] = useState(defaultSelectedGameId);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/mockGames.json");
      const json = await res.json();
      setGamesByDate(json?.gamesByDate || {});
    };
    load();
  }, []);

  const upcomingGames = useMemo(() => {
    const list = [];
    const today = new Date();
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const ymd = d.toLocaleDateString("en-CA");
      const games = Array.isArray(gamesByDate?.[ymd]) ? gamesByDate[ymd] : [];
      games
        .filter((g) => g?.status === "scheduled")
        .forEach((g) => list.push({ ...g, date: ymd }));
    }
    return list;
  }, [gamesByDate]);

  const selectedGame = useMemo(() => {
    return upcomingGames.find((g) => g.id === selectedGameId) || null;
  }, [upcomingGames, selectedGameId]);

  const getFormatDate = (dateString) => {
    const options = { month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectedGameId(id);
    const game = upcomingGames.find((g) => g.id === id) || null;
    onChange?.({ selectedGameId: id, selectedGame: game });
  };

  return (
    <>
      <SelectContainer>
        <SelectHeader>
          <CalenderIcon /> 1단계 : 경기 선택
        </SelectHeader>
        <Description>
          <ExclamationMarkIcon /> 판매하실 티켓의 경기를 선택해주세요.
        </Description>
        {upcomingGames.map((g) => (
          <SelectGameCard
            key={g.id}
            $selected={g.id === selectedGameId}
            onClick={() => handleChange({ target: { value: g.id } })}
          >
            <SelectGameOption value={g.id}>
              <SelectGameDate>
                <div>{getFormatDate(g.date)}</div>
                <div>{g.time}</div>
              </SelectGameDate>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <div>{g.homeTeam}</div>
                <div>VS</div>
                <div>{g.awayTeam}</div>
              </div>
              <div>({g.stadium})</div>
            </SelectGameOption>
          </SelectGameCard>
        ))}
      </SelectContainer>
    </>
  );
};

export default SelectGame;
