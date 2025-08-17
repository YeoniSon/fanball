import React, { useState } from "react";
import TicketResultContents from "./TicketResultContents";
import {
  TeamList,
  TeamButton,
  TeamLogo,
  TeamText,
  TicketContainer,
  Hr,
} from "../../../styles/ticket/TicketFilterStyled";

const DEFAULT_TEAMS = [
  { id: "ALL", label: "전체", logo: "" },
  {
    id: "SSG 랜더스",
    label: "SSG 랜더스",
    logo: "/team-logos/ssg-landers.png",
    color: "#CE0E2D",
  },
  {
    id: "NC 다이노스",
    label: "NC 다이노스",
    logo: "/team-logos/nc-dinos.png",
    color: "#315288",
  },
  {
    id: "KIA 타이거즈",
    label: "KIA 타이거즈",
    logo: "/team-logos/kia-tigers.png",
    color: "#EA0029",
  },
  {
    id: "LG 트윈스",
    label: "LG 트윈스",
    logo: "/team-logos/lg-twins.png",
    color: "#C30452",
  },
  {
    id: "KT 위즈",
    label: "KT 위즈",
    logo: "/team-logos/kt-wiz.png",
    color: "#000000",
  },
  {
    id: "두산 베어스",
    label: "두산 베어스",
    logo: "/team-logos/doosan-bears.png",
    color: "#131230",
  },
  {
    id: "삼성 라이온즈",
    label: "삼성 라이온즈",
    logo: "/team-logos/samsung-lions.png",
    color: "#074CA1",
  },
  {
    id: "롯데 자이언츠",
    label: "롯데 자이언츠",
    logo: "/team-logos/lotte-giants.png",
    color: "#041E42",
  },
  {
    id: "키움 히어로즈",
    label: "키움 히어로즈",
    logo: "/team-logos/kiwoom-heroes.png",
    color: "#570514",
  },
  {
    id: "한화 이글스",
    label: "한화 이글스",
    logo: "/team-logos/hanwha-eagles.png",
    color: "#FF6600",
  },
];

const TicketFilter = ({ teams = DEFAULT_TEAMS, teamFilter }) => {
  const [internalTeam, setInternalTeam] = useState("ALL");
  const value = teamFilter ?? internalTeam;

  const handleChange = (next) => {
    setInternalTeam(next);
  };

  const normalizedTeams = teams.map((t) =>
    typeof t === "string" ? { id: t, label: t, logo: "" } : t
  );

  return (
    <div>
      <TicketContainer>
        <TeamList>
          {normalizedTeams.map((team) => (
            <TeamButton
              key={team.id}
              $active={value === team.id}
              $teamColor={team.color}
              onClick={() => handleChange(team.id)}
            >
              {team.logo ? <TeamLogo src={team.logo} alt={team.label} /> : null}
              <TeamText>{team.label.split(" ")[0]}</TeamText>
            </TeamButton>
          ))}
        </TeamList>
        <Hr />
        <TicketResultContents team={internalTeam} />
      </TicketContainer>
    </div>
  );
};

export default TicketFilter;
