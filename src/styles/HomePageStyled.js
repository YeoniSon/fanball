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

//ActionSection.js

export const ActionBox = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
  }

  h2 {
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0 0 1rem 0;
    line-height: 1.5;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  color: black;
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(37, 99, 235, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ActionTitle = styled.h2`
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

export const ActionContents = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ActionDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
  line-height: 1.5;
`;

// 새로운 그리드 레이아웃 스타일
export const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ActionBadge = styled.span`
  background: #f59e0b;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  display: inline-block;
  margin-top: 0.5rem;
`;

// 아이콘 관련 스타일
export const IconContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem auto;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;
