import styled from "styled-components";

export const PlayerInfoContainer = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #683e832f;
`;

export const PlayerListMoveButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: black;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  line-height: 1;

  svg {
    display: block;
  }

  &:hover {
    background-color: #f7f7fa8b;
  }
`;

export const PlayerName = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const Avatar = styled.img`
  display: flex;
  width: 120px;
  height: 125px;
  object-fit: cover;
  border-radius: 50%;
  background: #f3f4f6;
  align-items: center;
  margin: 20px 0px 30px 30px;
  padding: 5px;
  background-color: #d4d0d0ff;
`;

export const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px;
`;

export const PlayerTeam = styled.div`
  font-size: 14px;
  color: #141414ff;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  margin-top: 0;
`;

export const BadgeRow = styled.div`
  display: inline-flex;
  margin-left: 10px;
  text-align: center;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export const PositionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 999px;
  background: #eef2ff;
  color: #3730a3;
`;

export const PlayerNumber = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 25px;
  border-radius: 999px;
  background: transparent;
  color: black;
`;

export const TeamLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: inline-block;
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0px;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  align-items: center;
  margin: 10px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

export const InfoLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: black;
  line-height: 1.2;
  text-align: center;
`;

export const InfoValue = styled.span`
  margin-top: 4px;
  font-size: 15px;
  color: #111827;
  text-align: right;
`;
