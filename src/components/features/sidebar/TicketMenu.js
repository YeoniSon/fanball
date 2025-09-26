import {
  MenuList,
  MenuItem,
  MenuButton,
  MenuSection,
} from "../../../styles/SideBarStyled";
import { DotMessageIcon, TicketIcon } from "../../common/Icons";

const TicketMenu = ({ activeMenu, onMenuClick }) => {
  const TicketMenuItems = [
    {
      id: "ticket",
      label: "티켓 거래",
      icon: TicketIcon,
      path: "/ticket",
    },
    {
      id: "message",
      label: "메세지",
      icon: DotMessageIcon,
      path: "/message",
    },
  ];
  const handleMenuClick = (menuId, path) => {
    onMenuClick(menuId, path);
  };

  return (
    <>
      <MenuSection>티켓 메뉴</MenuSection>
      <MenuList>
        {TicketMenuItems.map((item) => {
          const isActive = activeMenu === item.id;
          const iconColor = isActive ? "#ffffff" : "#000000";
          const IconComp = item.icon;
          return (
            <MenuItem key={item.id}>
              <MenuButton
                active={isActive}
                onClick={() => handleMenuClick(item.id, item.path)}
              >
                <span style={{ color: iconColor, display: "inline-flex" }}>
                  <IconComp color={iconColor} />
                </span>
                {item.label}
              </MenuButton>
            </MenuItem>
          );
        })}
      </MenuList>
    </>
  );
};

export default TicketMenu;
