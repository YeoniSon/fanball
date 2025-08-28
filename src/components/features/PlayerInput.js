import React, { useState } from "react";
import {
  SelectTeamContainer,
  TeamLogo,
  TeamGrid,
  PlayerListContainer,
  TeamShortName,
  SelectedTeamText,
  SelectedTeamName,
  SelectedTeamInfo,
  SelectedTeam,
  TableContainer,
  PlayerTable,
  TableHeader,
  TableRow,
  TableCell,
  PlayerNumberCell,
  StatusBadge,
  NewBadge,
  SectionTitle,
  PositionTitle,
  DateFilterContainer,
  DateArrow,
  DateDisplay,
  NoDataMessage,
  SectionBlock,
} from "../../styles/playerInput/playerInputStyled";

const PlayerInput = () => {
  const [selectedTeam, setSelectedTeam] = useState("doosan-bears");
  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const teams = [
    {
      id: "doosan-bears",
      logo: "/team-logos/doosan-bears.png",
      name: "두산 베어스",
      shortName: "두산",
    },
    {
      id: "hanwha-eagles",
      logo: "/team-logos/hanwha-eagles.png",
      name: "한화 이글스",
      shortName: "한화",
    },
    {
      id: "kia-tigers",
      logo: "/team-logos/kia-tigers.png",
      name: "KIA 타이거즈",
      shortName: "KIA",
    },
    {
      id: "kiwoom-heroes",
      logo: "/team-logos/kiwoom-heroes.png",
      name: "키움 히어로즈",
      shortName: "키움",
    },
    {
      id: "kt-wiz",
      logo: "/team-logos/kt-wiz.png",
      name: "KT 위즈",
      shortName: "KT",
    },
    {
      id: "lg-twins",
      logo: "/team-logos/lg-twins.png",
      name: "LG 트윈스",
      shortName: "LG",
    },
    {
      id: "lotte-giants",
      logo: "/team-logos/lotte-giants.png",
      name: "롯데 자이언츠",
      shortName: "롯데",
    },
    {
      id: "nc-dinos",
      logo: "/team-logos/nc-dinos.png",
      name: "NC 다이노스",
      shortName: "NC",
    },
    {
      id: "samsung-lions",
      logo: "/team-logos/samsung-lions.png",
      name: "삼성 라이온즈",
      shortName: "삼성",
    },
    {
      id: "ssg-landers",
      logo: "/team-logos/ssg-landers.png",
      name: "SSG 랜더스",
      shortName: "SSG",
    },
  ];

  const handleTeamSelect = async (teamId) => {
    setSelectedTeam(teamId);
    await fetchPlayerData(teamId, selectedDate);
  };

  const fetchPlayerData = async (teamId, date) => {
    setLoading(true);

    try {
      const response = await fetch("/mockPlayerGrades.json");
      const data = await response.json();

      // 날짜 형식을 YYYY-MM-DD로 변환
      const dateString = date.toISOString().split("T")[0];

      // 해당 날짜의 데이터가 있는지 확인
      if (data.dailyRegistrations && data.dailyRegistrations[dateString]) {
        const selectedTeamName = teams.find((t) => t.id === teamId)?.name;
        const dailyData = data.dailyRegistrations[dateString];

        // 선택된 팀의 데이터가 있는지 확인
        if (dailyData[selectedTeamName]) {
          setPlayerData(dailyData[selectedTeamName]);
        } else {
          setPlayerData({});
        }
      } else {
        // 해당 날짜에 데이터가 없으면 빈 객체
        setPlayerData({});
      }
    } catch (error) {
      console.error("선수 데이터를 불러오는데 실패했습니다:", error);
      setPlayerData({});
    } finally {
      setLoading(false);
    }
  };

  const renderPositionSection = (title, players, status) => {
    if (!players || players.length === 0) return null;

    return (
      <SectionBlock key={title}>
        <PositionTitle status={status}>{title}</PositionTitle>

        <TableContainer>
          <PlayerTable>
            <thead>
              <tr>
                <TableHeader>번호</TableHeader>
                <TableHeader>이름</TableHeader>
                <TableHeader>투타유형</TableHeader>
                <TableHeader>생년월일</TableHeader>
                <TableHeader>체격</TableHeader>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <TableRow key={player.id} index={index}>
                  <PlayerNumberCell>{player.uniformNumber}</PlayerNumberCell>
                  <TableCell>
                    {player.name}
                    {player.isNew && <NewBadge>NEW</NewBadge>}
                  </TableCell>
                  <TableCell>{player.batterType || "-"}</TableCell>
                  <TableCell>{player.birthDate}</TableCell>
                  <TableCell>
                    {player.height}cm , {player.weight}kg
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </PlayerTable>
        </TableContainer>
      </SectionBlock>
    );
  };

  const renderTeamData = (teamData) => {
    if (!teamData || Object.keys(teamData).length === 0) {
      return <NoDataMessage>해당 날짜에 등록된 선수가 없습니다.</NoDataMessage>;
    }

    const positions = ["감독", "코치", "투수", "포수", "내야수", "외야수"];

    // 기존 선수와 신규등록 선수를 합쳐서 전체 명단 생성
    const createFullRoster = () => {
      const fullRoster = {};

      positions.forEach((position) => {
        const existingPlayers = teamData.기존선수?.[position] || [];
        const newPlayers = teamData.신규등록?.[position] || [];

        // 기존 선수와 신규등록 선수를 합치고, 신규등록 선수는 NEW 표시
        const combinedPlayers = [
          ...existingPlayers.map((player) => ({ ...player, isNew: false })),
          ...newPlayers.map((player) => ({ ...player, isNew: true })),
        ];

        if (combinedPlayers.length > 0) {
          fullRoster[position] = combinedPlayers;
        }
      });

      return fullRoster;
    };

    const fullRoster = createFullRoster();

    return (
      <>
        {/* 전체 선수 명단 */}
        {Object.keys(fullRoster).length > 0 && (
          <SectionBlock>
            {positions.map((position) =>
              renderPositionSection(position, fullRoster[position], "등록")
            )}
          </SectionBlock>
        )}

        {/* 신규등록 선수들 표 */}
        <SectionBlock>
          <SectionTitle color="#4caf50"> 신규 등록 선수</SectionTitle>
          {teamData.신규등록 &&
          Object.keys(teamData.신규등록).some(
            (key) => teamData.신규등록[key] && teamData.신규등록[key].length > 0
          ) ? (
            <TableContainer>
              <PlayerTable>
                <thead>
                  <tr>
                    <TableHeader>번호</TableHeader>
                    <TableHeader>이름</TableHeader>
                    <TableHeader>포지션</TableHeader>
                    <TableHeader>투타유형</TableHeader>
                    <TableHeader>생년월일</TableHeader>
                    <TableHeader>체격</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => {
                    const newPlayers = teamData.신규등록[position] || [];
                    return newPlayers.map((player, index) => (
                      <TableRow key={player.id} index={index}>
                        <PlayerNumberCell>
                          {player.uniformNumber}
                        </PlayerNumberCell>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell>{player.batterType}</TableCell>
                        <TableCell>{player.birthDate}</TableCell>
                        <TableCell>
                          {player.height}cm , {player.weight}kg
                        </TableCell>
                      </TableRow>
                    ));
                  })}
                </tbody>
              </PlayerTable>
            </TableContainer>
          ) : (
            <NoDataMessage>오늘 등록된 선수가 없습니다.</NoDataMessage>
          )}
        </SectionBlock>

        {/* 신규말소 선수들 표 */}
        <SectionBlock>
          <SectionTitle color="#f44336"> 신규 말소 선수</SectionTitle>
          {teamData.신규말소 &&
          Object.keys(teamData.신규말소).some(
            (key) => teamData.신규말소[key] && teamData.신규말소[key].length > 0
          ) ? (
            <TableContainer>
              <PlayerTable>
                <thead>
                  <tr>
                    <TableHeader>번호</TableHeader>
                    <TableHeader>이름</TableHeader>
                    <TableHeader>포지션</TableHeader>
                    <TableHeader>투타유형</TableHeader>
                    <TableHeader>생년월일</TableHeader>
                    <TableHeader>체격</TableHeader>
                    <TableHeader>말소사유</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => {
                    const removedPlayers = teamData.신규말소[position] || [];
                    return removedPlayers.map((player, index) => (
                      <TableRow key={player.id} index={index}>
                        <PlayerNumberCell>
                          {player.uniformNumber}
                        </PlayerNumberCell>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell>{player.batterType || "-"}</TableCell>
                        <TableCell>{player.birthDate}</TableCell>
                        <TableCell>
                          {player.height}cm , {player.weight}kg
                        </TableCell>
                        <TableCell>{player.removalReason || "-"}</TableCell>
                      </TableRow>
                    ));
                  })}
                </tbody>
              </PlayerTable>
            </TableContainer>
          ) : (
            <NoDataMessage>오늘 말소된 선수가 없습니다.</NoDataMessage>
          )}
        </SectionBlock>
      </>
    );
  };

  const handleDateChange = (direction) => {
    const newDate = new Date(selectedDate);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setSelectedDate(newDate);

    if (selectedTeam) {
      fetchPlayerData(selectedTeam, newDate);
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

    return `${year}.${month}.${day} (${dayOfWeek})`;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <SelectTeamContainer>
      <TeamGrid>
        {teams.map((team) => (
          <SelectedTeam
            key={team.id}
            onClick={() => handleTeamSelect(team.id)}
            isSelected={selectedTeam === team.id}
          >
            <TeamLogo>{<img src={team.logo} alt={team.name} />}</TeamLogo>
            <TeamShortName>{team.shortName}</TeamShortName>
          </SelectedTeam>
        ))}
      </TeamGrid>

      <DateFilterContainer>
        <DateArrow onClick={() => handleDateChange("prev")}>◀</DateArrow>
        <DateDisplay>
          {isToday(selectedDate) ? "오늘" : formatDate(selectedDate)}
        </DateDisplay>
        <DateArrow onClick={() => handleDateChange("next")}>▶</DateArrow>
      </DateFilterContainer>

      {selectedTeam && (
        <SelectedTeamInfo>
          <SelectedTeamText>
            <SelectedTeamName>
              {teams.find((team) => team.id === selectedTeam)?.name}
            </SelectedTeamName>
            <span> 선수 등록 명단</span>
          </SelectedTeamText>
        </SelectedTeamInfo>
      )}

      {loading && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          선수 데이터를 불러오는 중...
        </div>
      )}

      {!loading && playerData && (
        <PlayerListContainer>{renderTeamData(playerData)}</PlayerListContainer>
      )}
    </SelectTeamContainer>
  );
};

export default PlayerInput;
