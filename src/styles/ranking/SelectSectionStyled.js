import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  background-color: rgb(181, 181, 185);
  border-radius: 1.5rem;
  padding: 3px;
`;

export const Select = styled.div`
  flex: 1;
  border: transparent;
  border-radius: 1.5rem;
  background: ${(props) => (props.isActive ? "white" : "transparent")};
  color: ${(props) => (props.isActive ? "black" : "white")};
  font-weight: 500;
  color: #1f2937;
`;
