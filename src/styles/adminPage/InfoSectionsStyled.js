import styled from "styled-components";

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
`;

export const Item = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconBox = styled.div`
  background-color: ${(props) => props.bg || "#ccc"};
  border-radius: 20%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-size: 14px;
  color: #666;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.color || "#000"};
  margin-bottom: 5px;
`;
