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

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z"
      stroke="#000000"
      stroke-width="2"
    ></path>{" "}
    <path
      d="M8 13.15C8.63513 13.15 9.15 12.6351 9.15 12C9.15 11.3649 8.63513 10.85 8 10.85C7.36487 10.85 6.85 11.3649 6.85 12C6.85 12.6351 7.36487 13.15 8 13.15Z"
      fill="#000000"
      stroke="#000000"
      stroke-width="0.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M16 13.15C16.6351 13.15 17.15 12.6351 17.15 12C17.15 11.3649 16.6351 10.85 16 10.85C15.3649 10.85 14.85 11.3649 14.85 12C14.85 12.6351 15.3649 13.15 16 13.15Z"
      fill="#000000"
      stroke="#000000"
      stroke-width="0.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M12 13.15C12.6351 13.15 13.15 12.6351 13.15 12C13.15 11.3649 12.6351 10.85 12 10.85C11.3649 10.85 10.85 11.3649 10.85 12C10.85 12.6351 11.3649 13.15 12 13.15Z"
      fill="#000000"
      stroke="#000000"
      stroke-width="0.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
  </svg>
);

const TicketMenu = ({ activeMenu, onMenuClick }) => {
  const TicketMenuItems = [
    { id: "ticket", label: "티켓 거래", icon: TicketIcon, path: "/ticket" },
    { id: "message", label: "메세지", icon: MessageIcon, path: "/message" },
  ];
  const handleMenuClick = (menuId, path) => {
    onMenuClick(menuId, path);
  };

  return (
    <>
      <MenuSection>티켓 메뉴</MenuSection>
      <MenuList>
        {TicketMenuItems.map((item) => (
          <MenuItem key={item.id}>
            <MenuButton
              active={activeMenu === item.id}
              onClick={() => handleMenuClick(item.id, item.path)}
            >
              <item.icon />
              {item.label}
            </MenuButton>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default TicketMenu;
