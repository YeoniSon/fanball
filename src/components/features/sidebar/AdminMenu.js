import {
  MenuButton,
  MenuSection,
  MenuItem,
  MenuList,
} from "../../../styles/SideBarStyled";
import { PersonIcon } from "../../common/Icons";

const AdminMenu = ({ activeMenu, onMenuClick }) => {
  const handleClick = () => {
    onMenuClick("admin", "/admin");
  };

  return (
    <>
      <MenuSection>관리자 메뉴</MenuSection>
      <MenuList>
        <MenuItem>
          <MenuButton active={activeMenu === "admin"} onClick={handleClick}>
            <PersonIcon width={20} height={25} strokeWidth={2} />
            관리자 페이지
          </MenuButton>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default AdminMenu;
