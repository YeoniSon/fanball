import { useEffect, useMemo, useState } from "react";
import {
  GameInfoItems,
  GameInfoLabel,
  GameInfoValue,
  SelectGameOptions,
  SelectGameOption,
  Hr,
} from "../../../../styles/ticket/editTicket/TicketGameInfoEditStyled";
import {
  FullWidthGameInfoItem,
  SeatInputBox,
  SeatInput,
} from "../../../../styles/ticket/editTicket/TicketSeatEditStyled";
import {
  SelectContainer,
  SelectHeader,
  Description,
  Date,
  SelectGameInfo,
  SelectGameInfoLabel,
  SelectGameInfoValue,
  SelectGame,
} from "../../../../styles/ticket/register/RegisterStyled";
import { ExclamationMarkIcon, TicketIcon } from "../../../common/Icons";

const SelectSeat = ({ selectedGameId = "", onChange }) => {
  const [stadiums, setStadiums] = useState([]);
  const [stadiumName, setStadiumName] = useState("");
  const [gamesByDate, setGamesByDate] = useState({});

  const [section, setSection] = useState("");
  const [row, setRow] = useState("");
  const [seatText, setSeatText] = useState("");
  const [gameInfo, setGameInfo] = useState({
    homeTeam: "",
    awayTeam: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const load = async () => {
      const [gamesRes, stadiumsRes] = await Promise.all([
        fetch("/mockGames.json"),
        fetch("/mockStadiums.json"),
      ]);
      const gamesJson = await gamesRes.json();
      const stadiumsJson = await stadiumsRes.json();
      setGamesByDate(gamesJson?.gamesByDate || {});
      setStadiums(
        Array.isArray(stadiumsJson?.stadiums) ? stadiumsJson.stadiums : []
      );
    };
    load();
  }, []);

  useEffect(() => {
    let found = null;
    let ymd = "";
    for (const [d, games] of Object.entries(gamesByDate || {})) {
      const f = games.find(
        (g) => String(g?.id ?? "") === String(selectedGameId)
      );
      if (f) {
        found = f;
        ymd = d;
        break;
      }
    }
    setStadiumName(found?.stadium || "");
    setGameInfo({
      homeTeam: found?.homeTeam || "",
      awayTeam: found?.awayTeam || "",
      date: ymd,
      time: found?.time || "",
    });
    setSection("");
    setRow("");
    setSeatText("");
  }, [gamesByDate, selectedGameId]);

  const stadium = useMemo(
    () => stadiums.find((s) => s?.name === stadiumName) || null,
    [stadiums, stadiumName]
  );
  const sections = useMemo(() => stadium?.sections || [], [stadium]);
  const selectedSection = useMemo(
    () => sections.find((sec) => sec?.code === section) || null,
    [sections, section]
  );
  const rows = useMemo(() => selectedSection?.rows || [], [selectedSection]);
  const selectedRowInfo = useMemo(
    () => rows.find((r) => r?.row === row) || null,
    [rows, row]
  );
  const maxSeatsInRow = useMemo(
    () => Number(selectedRowInfo?.seats || 0),
    [selectedRowInfo]
  );

  const parsedSeats = useMemo(() => {
    if (!seatText || !row) return [];
    const text = String(seatText).replace(/\s+/g, "");
    if (!text) return [];
    if (text.includes("-")) {
      const [a, b] = text.split("-");
      const start = parseInt(a, 10);
      const end = parseInt(b, 10);
      if (
        Number.isInteger(start) &&
        Number.isInteger(end) &&
        start >= 1 &&
        end >= 1 &&
        start <= end
      ) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      }
      return [];
    }
    if (text.includes(",")) {
      const arr = text
        .split(",")
        .map((s) => parseInt(s, 10))
        .filter((n) => Number.isInteger(n) && n >= 1);
      return Array.from(new Set(arr));
    }
    const n = parseInt(text, 10);
    return Number.isInteger(n) && n >= 1 ? [n] : [];
  }, [seatText, row]);

  const isValid = useMemo(
    () =>
      parsedSeats.length > 0 &&
      parsedSeats.every((n) => n >= 1 && n <= maxSeatsInRow),
    [parsedSeats, maxSeatsInRow]
  );
  const perSeatOriginalPrice = useMemo(
    () => Number(selectedSection?.price || 0),
    [selectedSection]
  );

  useEffect(() => {
    onChange?.({
      stadiumName,
      section,
      row,
      seats: parsedSeats,
      perSeatOriginalPrice,
      isValid,
    });
  }, [
    stadiumName,
    section,
    row,
    parsedSeats,
    perSeatOriginalPrice,
    isValid,
    onChange,
  ]);

  const handleSection = (e) => {
    setSection(e.target.value);
    setRow("");
    setSeatText("");
  };
  const handleRow = (e) => {
    setRow(e.target.value);
    setSeatText("");
  };

  return (
    <>
      <SelectContainer>
        <SelectHeader>
          <TicketIcon />
          2단계 : 좌석 선택
        </SelectHeader>
        <Description>
          <ExclamationMarkIcon /> 티켓에 표시된 좌석 정보를 정확히 입력해주세요.
        </Description>

        <div style={{ marginTop: "20px" }}>
          <SelectGameInfoLabel>선택된 경기</SelectGameInfoLabel>
          <SelectGame>
            <SelectGameInfoValue style={{ color: "black" }}>
              {gameInfo.homeTeam} VS {gameInfo.awayTeam}
              <Date>{gameInfo.date}</Date>
            </SelectGameInfoValue>
          </SelectGame>
        </div>

        <GameInfoItems>
          <FullWidthGameInfoItem>
            <GameInfoLabel>구역 선택 *</GameInfoLabel>
            <SelectGameOptions value={section} onChange={handleSection}>
              <SelectGameOption value="">구역 선택</SelectGameOption>
              {sections.map((sec) => (
                <SelectGameOption key={sec.code} value={sec.code}>
                  {sec.code}{" "}
                  {sec.price ? `- ${sec.price.toLocaleString()}원` : ""}
                </SelectGameOption>
              ))}
            </SelectGameOptions>
          </FullWidthGameInfoItem>
        </GameInfoItems>
        <GameInfoItems>
          <FullWidthGameInfoItem>
            <GameInfoLabel>행/열 선택 *</GameInfoLabel>
            <SelectGameOptions
              value={row}
              onChange={handleRow}
              disabled={!section}
            >
              <SelectGameOption value="">행 선택</SelectGameOption>
              {rows.map((r) => (
                <SelectGameOption key={r.row} value={r.row}>
                  {r.row}
                </SelectGameOption>
              ))}
            </SelectGameOptions>
          </FullWidthGameInfoItem>
        </GameInfoItems>
        <GameInfoItems>
          <FullWidthGameInfoItem>
            <GameInfoLabel>좌석 번호 *</GameInfoLabel>
            <SeatInputBox as="div">
              <SeatInput
                type="text"
                inputMode="numeric"
                pattern="[0-9,\-]*"
                placeholder={
                  maxSeatsInRow
                    ? `예: 15 / 15-16 / 15,17,19 (1~${maxSeatsInRow})`
                    : "좌석"
                }
                value={seatText}
                onChange={(e) =>
                  setSeatText(e.target.value.replace(/[^0-9,\-]/g, ""))
                }
                disabled={!row}
              />
            </SeatInputBox>
            {!!row && !!seatText && !isValid && (
              <Description>
                형식 또는 범위를 확인하세요 (1~{maxSeatsInRow})
              </Description>
            )}
          </FullWidthGameInfoItem>
        </GameInfoItems>

        <Hr />
        {section && row && isValid && (
          <GameInfoItems>
            <FullWidthGameInfoItem>
              <GameInfoLabel>선택된 좌석</GameInfoLabel>
              <GameInfoValue>
                {section} {row}열 {parsedSeats.join(", ")}
              </GameInfoValue>
            </FullWidthGameInfoItem>
          </GameInfoItems>
        )}
      </SelectContainer>
    </>
  );
};

export default SelectSeat;
