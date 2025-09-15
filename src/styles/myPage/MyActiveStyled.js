import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-top: 15px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const SelectBarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  background-color: #ddd;
  margin: 20px 0 20px 0;
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 20px;
`;

export const Select = styled.div`
  font-size: 13px;
  padding: 4px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "white" : "transparent")};
  border-radius: 20px;
  color: black;
`;
