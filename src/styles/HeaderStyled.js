import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 3px rgba(13, 60, 213, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    gap: 0.5rem;
  }
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
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.25rem;
  }
`;

const LogoText = styled.div`
  h1 {
    font-size: 1.25rem;
    color: #1e40af;
    font-weight: bold;
    margin: 0;

    @media (max-width: 640px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #2563eb;
    font-weight: 500;
    margin: 0;

    @media (max-width: 640px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 640px) {
    gap: 0.5rem;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    color: #2563eb;
    background-color: #f3f4f6;
  }

  &.active {
    color: #2563eb;
    background-color: #eff6ff;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding: 0.375rem;
  }
`;

const SearchSection = styled.div`
  flex: 1;
  max-width: 32rem;
  margin: 0 2rem;
  flex-shrink: 1;

  @media (max-width: 768px) {
    margin: 0 1rem;
    max-width: 20rem;
  }

  @media (max-width: 640px) {
    margin: 0 0.5rem;
    max-width: 16rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 1rem;
  height: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 640px) {
    gap: 0.25rem;
  }
`;

const IconButton = styled.button`
  position: relative;
  padding: 0.5rem;
  color: #4b5563;
  border-radius: 0.375rem;
  transition: all 0.2s;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #2563eb;
    background-color: #f3f4f6;
  }

  @media (max-width: 640px) {
    padding: 0.375rem;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  background-color: #ef4444;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageBadge = styled(NotificationBadge)`
  background-color: #3b82f6;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  color: #4b5563;
  border-radius: 0.375rem;
  transition: all 0.2s;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #2563eb;
    background-color: #f3f4f6;
  }

  @media (max-width: 640px) {
    gap: 0.25rem;
    padding: 0.375rem;
  }
`;

const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.75rem;
  }
`;

const UserInfo = styled.div`
  text-align: left;
  flex-shrink: 0;

  .user-name {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;

    @media (max-width: 640px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.625rem;
    }
  }

  .user-role {
    font-size: 0.75rem;
    color: #6b7280;
    margin: 0;

    @media (max-width: 640px) {
      font-size: 0.625rem;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  @media (max-width: 640px) {
    gap: 0.25rem;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  color: #374151;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  flex-shrink: 0;
  white-space: nowrap;
  background: white;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  @media (max-width: 640px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`;

const SignupButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  flex-shrink: 0;
  white-space: nowrap;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (max-width: 640px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export {
  HeaderContainer,
  Container,
  HeaderContent,
  LogoSection,
  LogoIcon,
  LogoText,
  SearchSection,
  SearchContainer,
  SearchIcon,
  SearchInput,
  UserSection,
  IconButton,
  NotificationBadge,
  MessageBadge,
  ProfileButton,
  Avatar,
  UserInfo,
  AuthButtons,
  LoginButton,
  SignupButton,
};
