import styled from "styled-components";

export const Header = styled.div`
  background-color: none;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;

  h1 {
    margin: 0;
    font-size: 24px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 4px;
  }
`;

export const Badge = styled.div`
  background-color: transparent;
  border-radius: 12px;
  padding: 4px 8px;
  display: inline-block;
  font-size: 14px;
  color: ${(props) => props.color || "#333"};
  border: 1px solid ${(props) => props.color || "#ccc"};
`;
