import {
  GameTitle,
  GameInfoItems,
  GameInfoItem,
  GameInfoLabel,
  GameInfoValue,
  Description,
  GameInfoContainer,
} from "../../../../styles/ticket/editTicket/TicketGameInfoEditStyled";
import {
  SeatInputBox,
  SeatInput,
} from "../../../../styles/ticket/editTicket/TicketSeatEditStyled";

const TicketPriceEdit = ({
  perSeatOriginalPrice = 0,
  salePricePerSeat = "",
  onSalePriceChange,
  saleTotal = 0,
  isSeatValid = false,
}) => {
  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onSalePriceChange?.(value);
  };

  return (
    <div>
      <GameInfoContainer>
        <GameTitle>가격</GameTitle>

        <GameInfoItems>
          <GameInfoItem>
            <GameInfoLabel>정가(1인)</GameInfoLabel>
            <GameInfoValue>
              {perSeatOriginalPrice > 0
                ? `${perSeatOriginalPrice.toLocaleString()}원`
                : "-"}
            </GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoLabel>판매가(1인)</GameInfoLabel>
            <SeatInputBox as="div">
              <SeatInput
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={
                  perSeatOriginalPrice > 0
                    ? `${perSeatOriginalPrice.toLocaleString()}원`
                    : "가격"
                }
                value={salePricePerSeat}
                onChange={handleChange}
              />
            </SeatInputBox>
            <Description>판매가(1인)은 정가와 달라도 됩니다.</Description>
          </GameInfoItem>
        </GameInfoItems>
        <GameInfoItems>
          <GameInfoItem>
            <GameInfoLabel>판매(총)</GameInfoLabel>
            <GameInfoValue>
              {isSeatValid && saleTotal > 0
                ? `${saleTotal.toLocaleString()}원`
                : "-"}
            </GameInfoValue>
          </GameInfoItem>
        </GameInfoItems>
      </GameInfoContainer>
    </div>
  );
};

export default TicketPriceEdit;
