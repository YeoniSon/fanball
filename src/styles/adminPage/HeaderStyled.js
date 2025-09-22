import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const AboutBadge = styled.div`
  display: flex;
  gap: 10px;
`;

export const Item = styled.div`
  background-color: ${(props) => props.color || "#f0f0f0"};
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  color: white;
`;

export const SearchBar = styled.div`
  width: 40%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2px 12px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;
