import styled from "styled-components";

export const SelectTeamContainer = styled.div`
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export const TeamSelect = styled.div`
  cursor: pointer;
  padding: 12px 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.2s ease;
  min-width: 80px;
  max-width: 120px;
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const TeamLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

export const TeamLogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const TeamShortName = styled.span`
  font-size: ${(props) => (props.isSelected ? "12px" : "14px")};
  font-weight: ${(props) => (props.isSelected ? "600" : "500")};
  text-align: center;
  line-height: 1.2;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const TeamGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  justify-content: center;
  margin: 20px 0;
  overflow-x: auto;
  padding: 10px 0;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const SelectedTeamInfo = styled.div`
  margin-top: 20px;
  text-align: left;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

export const SelectedTeamText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

export const SelectedTeamName = styled.strong`
  color: #007bff;
  font-weight: bold;
`;

export const SelectedTeam = styled(TeamSelect)`
  border: 1px solid #ddd;
  background-color: ${(props) => (props.isSelected ? "#f0f8ff" : "white")};
`;

export const PlayerListContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

export const PlayerItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PlayerName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  min-width: 100px;
  margin-right: 20px;
`;

export const PlayerPosition = styled.div`
  font-size: 14px;
  color: #555;
  min-width: 80px;
  margin-right: 20px;
  text-align: center;
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
`;

export const PlayerNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
  min-width: 60px;
  margin-right: 20px;
  text-align: center;
`;

export const PlayerLevel = styled.div`
  font-size: 14px;
  color: #555;
  min-width: 60px;
  margin-right: 20px;
  text-align: center;
  padding: 4px 8px;
  background: #e8f5e8;
  border-radius: 4px;
  font-weight: bold;
`;

export const PlayerStatus = styled.div`
  margin-left: auto;
`;

export const DateFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  padding: 15px;
  background: transparent;
  border-radius: 8px;
  border: none;
`;

export const DateArrow = styled.button`
  background: transparent;
  color: black;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: #5ea7f5ff;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const DateDisplay = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  min-width: 200px;
  text-align: center;
  padding: 10px 20px;
  background: white;
  border-radius: 6px;
  border: none;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const PlayerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  padding: 12px 8px;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  background-color: #f8f9fa;

  &:first-child {
    text-align: left;
  }
`;

export const TableRow = styled.tr`
  background-color: ${(props) => (props.index % 2 === 0 ? "white" : "#f8f9fa")};
  transition: background-color 0.2s;

  &:hover {
    background-color: #e3f2fd;
  }
`;

export const TableCell = styled.td`
  padding: 12px 8px;
  border-bottom: 1px solid #dee2e6;
  font-size: 14px;
  color: #495057;
  text-align: center;

  &:first-child {
    text-align: left;
    font-weight: 500;
    color: #212529;
  }
`;

export const PlayerNumberCell = styled(TableCell)`
  font-weight: 600;
  color: #007bff;
`;

export const StatusBadge = styled.span`
  background-color: ${(props) =>
    props.status === "등록" ? "#4caf50" : "#f44336"};
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  min-width: 60px;
`;

export const NewBadge = styled.span`
  background-color: #ff9800;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: normal;
  margin-left: 8px;
`;

export const SectionTitle = styled.h4`
  color: ${(props) => props.color};
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const PositionTitle = styled.h5`
  color: ${(props) => (props.status === "등록" ? "#4caf50" : "#f44336")};
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  justify-content: center;
`;

export const NoDataMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const SectionBlock = styled.div`
  margin-bottom: 30px;
`;
