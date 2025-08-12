import styled from "styled-components";

// 새로운 웰컴 섹션 스타일
export const WelcomeCard = styled.div`
  background: linear-gradient(to right, #2563eb, #9333ea, #16a34a);
  color: white;
  border: none;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const WelcomeCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(37, 99, 235, 0.9),
    rgba(147, 51, 234, 0.9),
    rgba(22, 163, 74, 0.9)
  );
`;

export const WelcomeCardContent = styled.div`
  padding: 1rem;
  position: relative;
  z-index: 10;
  margin-left: 2rem;
`;

export const WelcomeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.3rem;
`;

export const LogoCircle = styled.div`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.span`
  font-size: 1.875rem;
`;

export const WelcomeText = styled.div`
  flex: 1;
`;

export const WelcomeTitle = styled.h1`
  font-size: 1.875rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: white;
`;

export const WelcomeSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  font-weight: 500;
`;

export const FeatureList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
  border-left: 5rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FeatureIcon = styled.span`
  font-weight: 500;
`;

export const FeatureText = styled.span`
  font-weight: 500;
`;
