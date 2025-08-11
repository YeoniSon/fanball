import {
  MenuButton,
  MenuSection,
  MenuItem,
  MenuList,
} from "../../../styles/SideBarStyled";

const CommunityIcon = () => {
  return (
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
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
};

const CommunityMenu = ({ activeMenu, onMenuClick }) => {
  const handleMenuClick = () => {
    onMenuClick("community", "/community");
  };

  return (
    <>
      <MenuSection>커뮤니티 메뉴</MenuSection>
      <MenuList>
        <MenuItem>
          <MenuButton
            active={activeMenu === "community"}
            onClick={handleMenuClick}
          >
            <CommunityIcon />
            실시간 채팅
          </MenuButton>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default CommunityMenu;
