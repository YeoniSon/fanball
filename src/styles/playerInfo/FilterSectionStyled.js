import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  margin: 25px 0;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  padding: 14px 16px;
`;

export const FilterHeader = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #111827;
  font-size: 14px;
  margin: 0 0 10px;
`;

export const FilterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: center;
`;

export const FilterLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #111827;
  font-size: 14px;
`;

export const FilterSelect = styled.select`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  color: #111827;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px #e5e7eb inset;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  color: #111827;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px #e5e7eb inset;
  }
  &::placeholder {
    color: #9ca3af;
  }
`;

export const ResetButton = styled.button`
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #f9fafb;
  }
`;
