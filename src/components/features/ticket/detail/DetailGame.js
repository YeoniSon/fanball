import {
  DetailContainer,
  DetailHeader,
  TeamBoard,
  HomeTeam,
  AwayTeam,
  TeamLogo,
  Vs,
  AwaySign,
  HomeSign,
  GameTimeTable,
  GameDate,
  GameTime,
  Team,
  GameLocation,
  DetailBody,
  SeatInfoContainer,
  SeatInfoHeader,
  SeatInfoBody,
  SeatInfo,
} from "../../../../styles/ticket/TicketDetailPageStyled";
import { CalenderIcon, ClockIcon, LocationIcon } from "../../../common/Icons";

const DetailGame = ({ gameData }) => {
  const teamIcon = [
    {
      id: "SSG",
      shortName: "SSG",
      label: "SSG 랜더스",
      logo: "/team-logos/ssg-landers.png",
      path: "/ssgLanders",
      color: "#CE0E2D",
    },
    {
      id: "NC",
      shortName: "NC",
      label: "NC 다이노스",
      logo: "/team-logos/nc-dinos.png",
      path: "/ncDinos",
      color: "#315288",
    },
    {
      id: "KIA",
      shortName: "KIA",
      label: "KIA 타이거즈",
      logo: "/team-logos/kia-tigers.png",
      path: "/kiaTigers",
      color: "#EA0029",
    },
    {
      id: "LG",
      shortName: "LG",
      label: "LG 트윈스",
      logo: "/team-logos/lg-twins.png",
      path: "/lgTwins",
      color: "#C30452",
    },
    {
      id: "KT",
      shortName: "KT",
      label: "KT 위즈",
      logo: "/team-logos/kt-wiz.png",
      path: "/ktWiz",
      color: "#000000",
    },
    {
      id: "DOOSAN",
      shortName: "두산",
      label: "두산 베어스",
      logo: "/team-logos/doosan-bears.png",
      path: "/doosanBears",
      color: "#131230",
    },
    {
      id: "SAMSUNG",
      shortName: "삼성",
      label: "삼성 라이온즈",
      logo: "/team-logos/samsung-lions.png",
      path: "/samsungLions",
      color: "#074CA1",
    },
    {
      id: "LOTTE",
      shortName: "롯데",
      label: "롯데 자이언츠",
      logo: "/team-logos/lotte-giants.png",
      path: "/lotteGiants",
      color: "#041E42",
    },
    {
      id: "KIWOOM",
      shortName: "키움",
      label: "키움 히어로즈",
      logo: "/team-logos/kiwoom-heroes.png",
      path: "/kiwoomHeroes",
      color: "#570514",
    },
    {
      id: "HANWHA",
      shortName: "한화",
      label: "한화 이글스",
      logo: "/team-logos/hanwha-eagles.png",
      path: "/hanhwaEagles",
      color: "#FF6600",
    },
  ];

  const findLogoByTeamName = (name) => {
    if (!name) return "/team-logos/default.png";
    const entry =
      teamIcon.find((t) => t.label === name) ||
      teamIcon.find((t) => name.includes(t.shortName)) ||
      null;
    return entry?.logo || "/team-logos/default.png";
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  const formatSeat = (row, seat) => {
    if (!seat) return "-";
    return `${row || "-"}열 ${seat || "-"}번`;
  };

  return (
    <DetailContainer>
      <DetailHeader>
        <TeamBoard>
          <Team>
            <TeamLogo>
              <img
                src={findLogoByTeamName(gameData?.opponent)}
                alt={gameData?.opponent || "opponent"}
              />
            </TeamLogo>
            <AwayTeam>{gameData.opponent}</AwayTeam>
            <AwaySign>AWAY</AwaySign>
          </Team>

          <Vs>VS</Vs>

          <Team>
            <TeamLogo>
              <img
                src={findLogoByTeamName(gameData?.team)}
                alt={gameData?.team || "home"}
              />
            </TeamLogo>
            <HomeTeam>{gameData.team}</HomeTeam>
            <HomeSign>HOME</HomeSign>
          </Team>
        </TeamBoard>
        <GameTimeTable>
          <GameDate>
            <CalenderIcon width={25} height={25} />
            {formatDate(gameData.date)}
          </GameDate>
          <GameTime>
            <ClockIcon width={25} height={25} />
            {gameData.time}
          </GameTime>
        </GameTimeTable>
        <GameLocation>
          <LocationIcon width={25} height={25} />
          {gameData.stadium}
        </GameLocation>
      </DetailHeader>
      <DetailBody>
        <SeatInfoContainer>
          <SeatInfoHeader>좌석 정보</SeatInfoHeader>
          <SeatInfoBody>
            <SeatInfo
              style={{
                fontSize: "30px",
                marginBottom: "3px",
                fontWeight: "500",
                color: "black",
              }}
            >
              {gameData.section || gameData.sectionName || "-"}
            </SeatInfo>
            <SeatInfo
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                fontWeight: "500",
              }}
            >
              {formatSeat(gameData.row, gameData.seat) || "-"}
            </SeatInfo>
          </SeatInfoBody>
          {gameData.description ? (
            <SeatInfo>{gameData.description}</SeatInfo>
          ) : null}
        </SeatInfoContainer>
      </DetailBody>
    </DetailContainer>
  );
};

export default DetailGame;
