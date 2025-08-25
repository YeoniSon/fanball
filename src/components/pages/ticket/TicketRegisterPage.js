import { useMemo, useState } from "react";
import RegisterBar from "../../features/ticket/register/RegisterBar";
import SelectGame from "../../features/ticket/register/SelectGame";
import SelectSeat from "../../features/ticket/register/SelectSeat";
import Price from "../../features/ticket/register/Price";
import Detail from "../../features/ticket/register/Detail";
import {
  Title,
  Banner,
  BackButton,
  SubTitle,
} from "../../../styles/ticket/TicketRegisterPageStyled";
import {
  NavRow,
  NavButton,
} from "../../../styles/ticket/register/RegisterBarStyled";

import { ArrowLeftIcon } from "../../common/Icons";

const TicketRegisterPage = () => {
  const [step, setStep] = useState(1);

  const [selectedGameId, setSelectedGameId] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const [seatInfo, setSeatInfo] = useState({
    stadiumName: "",
    section: "",
    row: "",
    seats: [],
    perSeatOriginalPrice: 0,
    isValid: false,
  });

  const [salePricePerSeat, setSalePricePerSeat] = useState("");
  const [description, setDescription] = useState("");

  const seatCount = useMemo(
    () => (Array.isArray(seatInfo.seats) ? seatInfo.seats.length : 0),
    [seatInfo.seats]
  );

  const canNext = useMemo(() => {
    if (step === 1) return !!selectedGameId;
    if (step === 2) return !!seatInfo.isValid;
    if (step === 3) return seatCount > 0 && Number(salePricePerSeat || 0) > 0;
    return true;
  }, [step, selectedGameId, seatInfo.isValid, seatCount, salePricePerSeat]);

  const handlePrev = () => setStep((s) => Math.max(1, s - 1));
  const handleNext = () => setStep((s) => Math.min(4, s + 1));

  return (
    <>
      <Banner>
        <BackButton onClick={() => window.history.back()}>
          <ArrowLeftIcon />
          티켓 거래소로
        </BackButton>
        <Title>티켓 판매 등록 🎫</Title>
        <SubTitle>안전한 티켓 거래를 위해 정확한 정보를 입력해주세요</SubTitle>
      </Banner>

      <RegisterBar currentStep={step} />

      {step === 1 && (
        <SelectGame
          defaultSelectedGameId={selectedGameId}
          onChange={({ selectedGameId: id, selectedGame: g }) => {
            setSelectedGameId(id);
            setSelectedGame(g);
          }}
        />
      )}

      {step === 2 && (
        <SelectSeat
          selectedGameId={selectedGameId}
          onChange={(info) => setSeatInfo(info)}
        />
      )}

      {step === 3 && (
        <Price
          perSeatOriginalPrice={seatInfo.perSeatOriginalPrice}
          seatCount={seatCount}
          salePricePerSeat={salePricePerSeat}
          onChange={setSalePricePerSeat}
          enabled={seatInfo.isValid}
        />
      )}

      {step === 4 && (
        <Detail description={description} onChange={setDescription} />
      )}

      <NavRow>
        <NavButton onClick={handlePrev} disabled={step === 1}>
          이전
        </NavButton>
        <NavButton $primary onClick={handleNext} disabled={!canNext}>
          {step === 4 ? "등록" : "다음"}
        </NavButton>
      </NavRow>
      {/* 티켓 등록 폼 추가 */}
    </>
  );
};

export default TicketRegisterPage;
