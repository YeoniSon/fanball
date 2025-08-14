import styled from "styled-components";

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  /* align-items: center; */
  margin: 20px 0;
`;

export const RankingTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin: 10px 20px;
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 15px;
    border: 1px solid #ddd;

    &:first-child {
      text-align: center;
    }
  }

  th {
    background-color: #f4f4f4;
    font-weight: 600;
  }
`;
