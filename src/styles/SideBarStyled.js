import styled from "styled-components";

const SideBarContainer = styled.div`
  width: 18rem;
  height: 100%;
  background-color: white;
  color: black;
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  border-right: 3px solid rgba(13, 60, 213, 0.1);
  margin: 0;
  flex-shrink: 0;
`;

const Bar = styled.div`
  height: 1px;
  background-color: rgba(1, 1, 1, 0.4);
  margin: 1.5rem 0;
  opacity: 0.6;
`;

const MenuSection = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-size: small;
  color: rgb(13, 60, 213);
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
`;

const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #2563eb, #16a34a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: black;
`;

const LogoText = styled.div`
  h1 {
    font-size: 1.25rem;
    color: black;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 0.875rem;
    color: #94a3b8;
    margin: 0;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.3rem;
`;

const MenuButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1rem;
  background: ${(props) => (props.active ? "#3b82f6" : "transparent")};
  color: ${(props) => (props.active ? "black" : "black")};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.87rem;
  font-weight: 500;

  &:hover {
    background: ${(props) => (props.active ? "#3b82f6" : "rgba(1, 1, 1, 0.5)")};
    color: white;
  }

  svg {
    flex-shrink: 0;
  }
`;

const TeamMenuButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1rem;
  background: ${(props) =>
    props.active ? `${props.teamColor}` : "transparent"};
  color: ${(props) => (props.active ? "white" : "black")};
  border: ${(props) =>
    props.active ? `2px solid ${props.teamColor}` : "none"};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.87rem;
  font-weight: ${(props) => (props.active ? "600" : "500")};

  &:hover {
    background: ${(props) =>
      props.active ? `${props.teamColor}20` : "rgba(1, 1, 1, 0.3)"};
    color: ${(props) => (props.active ? props.teamColor : "white")};
  }

  svg {
    flex-shrink: 0;
  }
`;

export {
  SideBarContainer,
  LogoSection,
  LogoIcon,
  LogoText,
  MenuList,
  MenuItem,
  MenuButton,
  TeamMenuButton,
  MenuSection,
  Bar,
};
