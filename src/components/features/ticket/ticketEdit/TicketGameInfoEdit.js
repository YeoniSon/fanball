import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

import {
  GameInfoContainer,
  GameInfoHeader,
  GameInfoItems,
  GameInfoItem,
  GameInfoLabel,
  GameTitle,
  GameInfoValue,
  SelectGame,
  SelectGameOption,
  SelectGameTitle,
  SelectGameOptions,
  Description,
  Hr,
  RecommendDescription,
} from "../../../../styles/ticket/editTicket/TicketGameInfoEditStyled";
import { ExclamationMarkIcon } from "../../../common/Icons";
import TicketSeatEdit from "./TicketSeatEdit";

const TicketGameInfoEdit = () => {
  const params = useParams();
  const ticketId = params.ticketId ?? params.id ?? null;

  const [ticketList, setTicketList] = useState([]);
  const [gamesByDate, setGamesByDate] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedGameId, setSelectedGameId] = useState("");

  useEffect(() => {
    const loadAll = async () => {
      try {
        setLoading(true);
        const [ticketsRes, gamesRes] = await Promise.all([
          fetch("/mockTickets.json"),
          fetch("/mockGames.json"),
        ]);
        const ticketsJson = await ticketsRes.json();
        const gamesJson = await gamesRes.json();
        setTicketList(
          Array.isArray(ticketsJson?.tickets) ? ticketsJson.tickets : []
        );
        setGamesByDate(gamesJson?.gamesByDate || {});
      } catch (e) {
        console.error("데이터 로드 실패", e);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, [ticketId]);

  const currentTicket = useMemo(() => {
    if (!ticketId) return null;
    return (ticketList || []).find(
      (t) => String(t?.id ?? "") === String(ticketId)
    );
  }, [ticketId, ticketList]);

  const upcomingGames = useMemo(() => {
    const list = [];
    const today = new Date();
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const ymd = d.toLocaleDateString("en-CA"); // YYYY-MM-DD
      const games = Array.isArray(gamesByDate?.[ymd]) ? gamesByDate[ymd] : [];
      games
        .filter((g) => g?.status === "scheduled")
        .forEach((g) => list.push({ ...g, date: ymd }));
    }
    return list;
  }, [gamesByDate]);

  useEffect(() => {
    if (!currentTicket || !upcomingGames.length) return;
    const match = upcomingGames.find(
      (g) =>
        String(g.date) === String(currentTicket.date) &&
        ((g.homeTeam === currentTicket.team &&
          g.awayTeam === currentTicket.opponent) ||
          (g.homeTeam === currentTicket.opponent &&
            g.awayTeam === currentTicket.team))
    );
    setSelectedGameId((match?.id ?? upcomingGames[0]?.id) || "");
  }, [currentTicket, upcomingGames]);

  const selectedGame = useMemo(() => {
    return upcomingGames.find((g) => g.id === selectedGameId) || null;
  }, [upcomingGames, selectedGameId]);

  const handleChange = (e) => setSelectedGameId(e.target.value);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div>
      <GameInfoContainer>
        <GameInfoHeader>경기 정보</GameInfoHeader>

        <SelectGame>
          <SelectGameTitle>예정된 경기에서 선택 *</SelectGameTitle>
          <SelectGameOptions value={selectedGameId} onChange={handleChange}>
            {upcomingGames.map((g) => (
              <SelectGameOption key={g.id} value={g.id}>
                {g.date} {g.time} | {g.homeTeam} vs {g.awayTeam} {"("}{" "}
                {g.stadium} {")"}
              </SelectGameOption>
            ))}
          </SelectGameOptions>
          <Description>
            경기를 선택하면 정확한 정보가 자동으로 입력됩니다.
          </Description>
        </SelectGame>

        <Hr />

        <GameTitle>선택된 경기 정보</GameTitle>

        {selectedGame && (
          <>
            {/* 경기 날짜/시간: 한 줄 */}
            <GameInfoItems>
              <GameInfoItem>
                <GameInfoLabel>경기 날짜</GameInfoLabel>
                <GameInfoValue>{selectedGame.date}</GameInfoValue>
              </GameInfoItem>
              <GameInfoItem>
                <GameInfoLabel>경기 시간</GameInfoLabel>
                <GameInfoValue>{selectedGame.time}</GameInfoValue>
              </GameInfoItem>
            </GameInfoItems>

            {/* 원정팀/홈팀: 한 줄 */}
            <GameInfoItems>
              <GameInfoItem>
                <GameInfoLabel>원정팀</GameInfoLabel>
                <GameInfoValue>{selectedGame.awayTeam}</GameInfoValue>
              </GameInfoItem>
              <GameInfoItem>
                <GameInfoLabel>홈팀</GameInfoLabel>
                <GameInfoValue>{selectedGame.homeTeam}</GameInfoValue>
              </GameInfoItem>
            </GameInfoItems>

            {/* 경기장: 한 줄 전체 */}
            <GameInfoItems>
              <GameInfoItem style={{ flex: "1 1 100%" }}>
                <GameInfoLabel>경기장</GameInfoLabel>
                <GameInfoValue>{selectedGame.stadium}</GameInfoValue>
              </GameInfoItem>
            </GameInfoItems>
          </>
        )}

        <RecommendDescription>
          <ExclamationMarkIcon />
          경기 정보는 자동으로 설정되며 수정할 수 없습니다. 다른 경기를
          선택하려면 위에서 새로운 경기를 선택해주세요.
        </RecommendDescription>
      </GameInfoContainer>

      {selectedGame && (
        <TicketSeatEdit
          ticketId={ticketId}
          selectedGameId={selectedGameId}
          defaultSection={currentTicket?.section}
          defaultRow={currentTicket?.row}
          defaultSeat={currentTicket?.seat}
          defaultSalePricePerSeat={currentTicket?.price}
          ticketDescription={currentTicket?.description}
        />
      )}
    </div>
  );
};

export default TicketGameInfoEdit;
