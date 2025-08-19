import {
  GameInfoContainer,
  GameTitle,
  GameInfoItems,
  GameInfoItem,
  GameInfoLabel,
} from "../../../../styles/ticket/editTicket/TicketGameInfoEditStyled";
import { DescriptionTextarea } from "../../../../styles/ticket/editTicket/TicketSeatEditStyled";

const TicketDescriptionEdit = ({ ticketDescription = "", onChange }) => {
  return (
    <GameInfoContainer>
      <GameTitle>상세 설명</GameTitle>
      <GameInfoItems>
        <GameInfoItem style={{ flex: "1 1 100%" }}>
          <DescriptionTextarea
            placeholder="좌석 시야, 장점 등 상세 설명을 입력하세요."
            value={ticketDescription}
            onChange={(e) => onChange?.(e.target.value)}
          />
        </GameInfoItem>
      </GameInfoItems>
    </GameInfoContainer>
  );
};

export default TicketDescriptionEdit;
