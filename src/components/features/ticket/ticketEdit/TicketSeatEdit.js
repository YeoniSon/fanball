import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  GameInfoContainer,
  GameInfoHeader,
  GameInfoItems,
  GameInfoLabel,
  GameInfoValue,
  SelectGame,
  SelectGameOptions,
  SelectGameOption,
  Hr,
  Description,
} from "../../../../styles/ticket/editTicket/TicketGameInfoEditStyled";
import {
  FullWidthGameInfoItem,
  SeatInputBox,
  SeatInput,
  ActionRow,
  SaveButton,
} from "../../../../styles/ticket/editTicket/TicketSeatEditStyled";
import TicketPriceEdit from "./TicketPriceEdit";
import TicketDescriptionEdit from "./TicketDescriptionEdit";

const TicketSeatEdit = ({
  ticketId: ticketIdProp,
  selectedGameId,
  defaultSection,
  defaultRow,
  defaultSeat,
  defaultSalePricePerSeat,
  ticketDescription = "",
}) => {
  const { ticketId: routeTicketId } = useParams();
  const ticketId = ticketIdProp ?? routeTicketId;

  const [loading, setLoading] = useState(false);
  const [stadiums, setStadiums] = useState([]);
  const [selectedStadiumName, setSelectedStadiumName] = useState("");
  const [selectedSectionCode, setSelectedSectionCode] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [salePricePerSeat, setSalePricePerSeat] = useState("");
  const [description, setDescription] = useState(ticketDescription || "");

  useEffect(() => {
    const loadSeatSources = async () => {
      try {
        setLoading(true);
        const [gamesRes, stadiumsRes] = await Promise.all([
          fetch("/mockGames.json"),
          fetch("/mockStadiums.json"),
        ]);
        const gamesJson = await gamesRes.json();
        const stadiumsJson = await stadiumsRes.json();

        const stadiumsArr = Array.isArray(stadiumsJson?.stadiums)
          ? stadiumsJson.stadiums
          : [];
        setStadiums(stadiumsArr);

        const allGames = Object.values(gamesJson?.gamesByDate || {}).flat();
        const matchedGame = allGames.find(
          (g) => String(g?.id ?? "") === String(selectedGameId ?? "")
        );
        const stadiumName = matchedGame?.stadium || "";
        setSelectedStadiumName(stadiumName);

        // 부모에서 받은 기본값을 그대로 초기값으로 사용
        setSelectedSectionCode(String(defaultSection || ""));
        setSelectedRow(String(defaultRow || ""));
        setSelectedSeat(String(defaultSeat || ""));
        setSalePricePerSeat(
          defaultSalePricePerSeat != null
            ? String(Number(defaultSalePricePerSeat))
            : ""
        );
        setDescription(ticketDescription || "");
      } catch (e) {
        console.error("좌석 원본 데이터 로드 실패", e);
        setSelectedSectionCode("");
        setSelectedRow("");
        setSelectedSeat("");
        setSalePricePerSeat("");
      } finally {
        setLoading(false);
      }
    };

    if (selectedGameId) {
      loadSeatSources();
    }
  }, [
    selectedGameId,
    defaultSection,
    defaultRow,
    defaultSeat,
    defaultSalePricePerSeat,
    ticketDescription,
  ]);

  const selectedStadium = useMemo(() => {
    return (
      (stadiums || []).find((s) => s?.name === selectedStadiumName) || null
    );
  }, [stadiums, selectedStadiumName]);

  const sections = useMemo(() => {
    return Array.isArray(selectedStadium?.sections)
      ? selectedStadium.sections
      : [];
  }, [selectedStadium]);

  const selectedSection = useMemo(() => {
    return sections.find((sec) => sec?.code === selectedSectionCode) || null;
  }, [sections, selectedSectionCode]);

  const rows = useMemo(() => {
    return Array.isArray(selectedSection?.rows) ? selectedSection.rows : [];
  }, [selectedSection]);

  const selectedRowInfo = useMemo(() => {
    return rows.find((r) => r?.row === selectedRow) || null;
  }, [rows, selectedRow]);

  const maxSeatsInRow = useMemo(() => {
    return Number(selectedRowInfo?.seats || 0);
  }, [selectedRowInfo]);

  // 좌석 입력 파싱: 단독("15"), 연석("15-16"), 다중("15,17,19")
  const parsedSeats = useMemo(() => {
    if (!selectedSeat || !selectedRow) return [];
    const text = String(selectedSeat).replace(/\s+/g, "");
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
      // 중복 제거
      return Array.from(new Set(arr));
    }

    const n = parseInt(text, 10);
    return Number.isInteger(n) && n >= 1 ? [n] : [];
  }, [selectedSeat, selectedRow]);

  const isSeatValid = useMemo(() => {
    if (!parsedSeats.length) return false;
    if (!maxSeatsInRow) return false;
    return parsedSeats.every((n) => n >= 1 && n <= maxSeatsInRow);
  }, [parsedSeats, maxSeatsInRow]);

  const salePerSeatNum = useMemo(
    () => Number(salePricePerSeat || 0),
    [salePricePerSeat]
  );
  const saleTotal = useMemo(
    () => (isSeatValid ? salePerSeatNum * parsedSeats.length : 0),
    [isSeatValid, salePerSeatNum, parsedSeats.length]
  );

  const handleSectionChange = (e) => {
    setSelectedSectionCode(e.target.value);
    setSelectedRow("");
    setSelectedSeat("");
  };

  const handleRowChange = (e) => {
    setSelectedRow(e.target.value);
    setSelectedSeat("");
  };

  const handleSeatInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9,\-]/g, "");
    setSelectedSeat(value);
  };

  const handleSave = () => {
    const draftKey = `ticketEditDraft:${ticketId}`;
    const payload = {
      ticketId,
      selectedGameId,
      stadium: selectedStadiumName,
      section: selectedSectionCode,
      row: selectedRow,
      seats: parsedSeats,
      salePricePerSeat: salePerSeatNum,
      saleTotal,
      description,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(draftKey, JSON.stringify(payload));
    } catch (e) {
      console.error("저장 실패", e);
    }
  };

  return (
    <>
      <GameInfoContainer>
        <GameInfoHeader>좌석 정보</GameInfoHeader>

        {loading ? (
          <div>불러오는 중...</div>
        ) : (
          <>
            <SelectGame>
              <GameInfoItems>
                <FullWidthGameInfoItem>
                  <GameInfoLabel>구역 선택 *</GameInfoLabel>
                  <SelectGameOptions
                    value={selectedSectionCode}
                    onChange={handleSectionChange}
                  >
                    <SelectGameOption value="">구역 선택</SelectGameOption>
                    {sections.map((sec) => (
                      <SelectGameOption key={sec.code} value={sec.code}>
                        {sec.code}
                        {sec.price ? ` - ${sec.price.toLocaleString()}원` : ""}
                      </SelectGameOption>
                    ))}
                  </SelectGameOptions>
                </FullWidthGameInfoItem>
              </GameInfoItems>

              <GameInfoItems>
                <FullWidthGameInfoItem>
                  <GameInfoLabel>행/열 선택 *</GameInfoLabel>
                  <SelectGameOptions
                    value={selectedRow}
                    onChange={handleRowChange}
                    disabled={!selectedSectionCode}
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
                      value={selectedSeat}
                      onChange={handleSeatInputChange}
                      disabled={!selectedRow}
                    />
                  </SeatInputBox>
                  {!!selectedRow && !!selectedSeat && !isSeatValid && (
                    <Description>
                      형식 또는 범위를 확인하세요 (1~{maxSeatsInRow})
                    </Description>
                  )}
                </FullWidthGameInfoItem>
              </GameInfoItems>
            </SelectGame>

            <Hr />

            {selectedSectionCode && selectedRow && isSeatValid && (
              <GameInfoItems>
                <FullWidthGameInfoItem>
                  <GameInfoLabel>선택된 좌석</GameInfoLabel>
                  <GameInfoValue>
                    {selectedSectionCode} {selectedRow}열{" "}
                    {parsedSeats.join(", ")}
                  </GameInfoValue>
                </FullWidthGameInfoItem>
              </GameInfoItems>
            )}
          </>
        )}
      </GameInfoContainer>

      <TicketPriceEdit
        perSeatOriginalPrice={Number(selectedSection?.price || 0)}
        salePricePerSeat={salePricePerSeat}
        onSalePriceChange={setSalePricePerSeat}
        saleTotal={saleTotal}
        isSeatValid={isSeatValid}
      />

      <TicketDescriptionEdit
        ticketDescription={description}
        onChange={setDescription}
      />

      <ActionRow>
        <SaveButton onClick={handleSave} disabled={!isSeatValid}>
          수정 내용 저장
        </SaveButton>
      </ActionRow>
    </>
  );
};

export default TicketSeatEdit;
