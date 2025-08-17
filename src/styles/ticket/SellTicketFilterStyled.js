import styled from "styled-components";

export const MySellRecordContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 0 30px;
  border: 1px solid rgba(135, 133, 133, 0.27);
  border-radius: 8px;
  flex-direction: column;
  gap: 1rem;
`;

export const SellRecordHeader = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MainTitle = styled.span`
  font-size: 1rem;
  font-weight: 450;
  margin-left: 20px;
`;

export const FilterOptions = styled.select`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(135, 133, 133, 0.27);
  border-radius: 6px;
  margin: 10px 12px;
`;

export const FilterOption = styled.option`
  padding: 6px 8px;
`;

export const NewTicketButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  background-color: #59595aff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #010101ff;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
