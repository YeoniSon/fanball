import styled from "styled-components";

export const GameInfoContainer = styled.div`
  border: 1px solid rgba(135, 133, 133, 0.27);
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
`;

export const GameInfoHeader = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const GameTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const GameInfoItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  gap: 15px;
`;

export const GameInfoItem = styled.div`
  flex: 1;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

export const GameInfoLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

export const GameInfoValue = styled.div`
  font-size: 14px;
  color: #565555af;
  border: 1px solid rgba(135, 133, 133, 0.27);
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 5px 10px;
  margin-top: 5px;
`;

export const SelectGame = styled.div`
  font-size: 14px;
  color: #333;
  margin: 40px 0;
`;

export const SelectGameTitle = styled.h2`
  font-size: 14px;
  color: #171717ff;
`;

export const SelectGameOption = styled.option`
  font-size: 14px;
  color: #333;
`;

export const SelectGameOptions = styled.select`
  font-size: 14px;
  color: #333;
  padding: 8px;
  border: none;
  border-radius: 10px;
  width: 100%;
  background-color: rgba(142, 141, 141, 0.18);
`;

export const Hr = styled.hr`
  border: 1px solid rgba(135, 133, 133, 0.27);
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666666b8;
  margin-top: 8px;
`;

export const RecommendDescription = styled.p`
  font-size: 14px;
  color: #666666b8;
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(135, 133, 133, 0.27);
  border-radius: 6px;
  padding: 10px;
`;

export const DescriptionInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(135, 133, 133, 0.27);
  border-radius: 6px;
  margin-top: 8px;
`;
