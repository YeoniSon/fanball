import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 12px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 16px;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 8px 12px;
  gap: 8px;

  &:hover {
    background: darken(#007bff, 5%);
  }
`;
