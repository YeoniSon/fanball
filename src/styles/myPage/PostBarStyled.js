import styled from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  gap: 10px;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px 12px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Value = styled.span`
  font-size: 1.5rem;
  color: #555;
`;
