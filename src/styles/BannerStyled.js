import styled from "styled-components";

export const BannerContainer = styled.div`
  background: ${(props) => props.bgColor || "rgba(23, 82, 243, 0.9)"};
  padding: 0.3rem;

  border-radius: 1.5rem;
`;

export const BannerTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem;
  color: ${(props) => props.titleColor || "white"};
`;

export const BannerContents = styled.p`
  font-size: 1rem;
  padding-left: 1.5rem;
  color: ${(props) => props.textColor || "white"};
  margin-bottom: 1.3rem;
`;

export const BannerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
`;

export const BannerLogo = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const BannerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.textColor || "white"};
`;
