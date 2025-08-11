import {
  MenuList,
  MenuItem,
  MenuButton,
  MenuSection,
} from "../../../styles/SideBarStyled";

const TicketIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
    />
  </svg>
);

const TicketMenu = ({ activeMenu, onMenuClick }) => {
  const handleMenuClick = () => {
    onMenuClick("ticket", "/ticket");
  };

  return (
    <>
      <MenuSection>티켓 메뉴</MenuSection>
      <MenuList>
        <MenuItem>
          <MenuButton
            active={activeMenu === "ticket"}
            onClick={handleMenuClick}
          >
            <TicketIcon />
            티켓 거래
          </MenuButton>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default TicketMenu;
