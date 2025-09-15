import {
  MenuButton,
  MenuSection,
  MenuItem,
  MenuList,
} from "../../../styles/SideBarStyled";
import { PersonIcon } from "../../common/Icons";

const MyPageMenu = ({ activeMenu, onMenuClick }) => {
  const handleMenuClick = () => {
    onMenuClick("mypage", "/mypage");
  };

  return (
    <>
      <MenuSection>개인 메뉴</MenuSection>
      <MenuList>
        <MenuItem>
          <MenuButton
            active={activeMenu === "mypage"}
            onClick={handleMenuClick}
          >
            <PersonIcon width={20} height={25} strokeWidth={2} />
            마이 페이지
          </MenuButton>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default MyPageMenu;
