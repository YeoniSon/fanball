import styled from "styled-components";

export const Banner = styled.div`
  background: linear-gradient(to right, #1ba805ff, #0b11c9b4);
  padding: 20px 30px;
  border-radius: 1rem;
`;

export const BackButton = styled.button`
  background: none;
  border: 1px solid transparent;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1rem;
  gap: 0.5rem;
  margin-bottom: 3rem;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: white;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 400;
`;
