import {
  MenuButton,
  MenuSection,
  MenuItem,
  MenuList,
} from "../../../styles/SideBarStyled";

const TeamBoardMenu = ({ activeMenu, onMenuClick }) => {
  const teamMenuItems = [
    {
      id: "SSG",
      label: "SSG 랜더스",
      logo: "/team-logos/ssg-landers.png",
      path: "/ssgLanders",
    },
    {
      id: "KIA",
      label: "KIA 타이거즈",
      logo: "/team-logos/kia-tigers.png",
      path: "/kiaTigers",
    },
    {
      id: "LG",
      label: "LG 트윈스",
      logo: "/team-logos/lg-twins.png",
      path: "/lgTwins",
    },
    {
      id: "NC",
      label: "NC 다이노스",
      logo: "/team-logos/nc-dinos.png",
      path: "/ncDinos",
    },
    {
      id: "KT",
      label: "KT 위즈",
      logo: "/team-logos/kt-wiz.png",
      path: "/ktWiz",
    },
    {
      id: "DOOSAN",
      label: "두산 베어스",
      logo: "/team-logos/doosan-bears.png",
      path: "/doosanBears",
    },
    {
      id: "SAMSUNG",
      label: "삼성 라이온즈",
      logo: "/team-logos/samsung-lions.png",
      path: "/samsungLions",
    },
    {
      id: "LOTTE",
      label: "롯데 자이언츠",
      logo: "/team-logos/lotte-giants.png",
      path: "/lotteGiants",
    },
    {
      id: "KIWOO",
      label: "키움 히어로즈",
      logo: "/team-logos/kiwoom-heroes.png",
      path: "/kiwoomHeroes",
    },
    {
      id: "HANHWA",
      label: "한화 이글스",
      logo: "/team-logos/hanwha-eagles.png",
      path: "/hanhwaEagles",
    },
  ];

  const handleMenuClick = (menuId, path) => {
    onMenuClick(menuId, path);
  };

  return (
    <>
      <MenuSection>팀별 게시판</MenuSection>
      <MenuList>
        {teamMenuItems.map((item) => (
          <MenuItem key={item.id}>
            <MenuButton
              active={activeMenu === item.id}
              onClick={() => handleMenuClick(item.id, item.path)}
            >
              <img
                src={item.logo}
                alt={`${item.label} 로고`}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
                onError={(e) => {
                  // 로고 이미지가 없을 때 기본 아이콘 표시
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span style={{ display: "none" }}>⚾</span>
              {item.label}
            </MenuButton>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default TeamBoardMenu;
