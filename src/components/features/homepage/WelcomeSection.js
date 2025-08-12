import React from "react";
import {
  WelcomeCard,
  WelcomeCardOverlay,
  WelcomeCardContent,
  WelcomeHeader,
  LogoCircle,
  LogoText,
  WelcomeText,
  WelcomeTitle,
  WelcomeSubtitle,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
} from "../../../styles/HomePage/WelcomeSectionStyled";

const WelcomeSection = () => {
  return (
    <div style={{ padding: "0.5rem" }}>
      {/* 웰컴 섹션 */}
      <WelcomeCard>
        <WelcomeCardOverlay />
        <WelcomeCardContent>
          <WelcomeHeader>
            <LogoCircle>
              <LogoText>⚾</LogoText>
            </LogoCircle>
            <WelcomeText>
              <WelcomeTitle>FANBALL에 오신 것을 환영합니다!</WelcomeTitle>
              <WelcomeSubtitle>
                야구 팬들의 모든 것이 여기에! 티켓 거래부터 실시간 소통까지
              </WelcomeSubtitle>
            </WelcomeText>
          </WelcomeHeader>

          <FeatureList>
            <FeatureItem>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureText>실시간 경기 정보</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>❤️</FeatureIcon>
              <FeatureText>안전한 티켓 거래</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>⭐</FeatureIcon>
              <FeatureText>팬 커뮤니티</FeatureText>
            </FeatureItem>
          </FeatureList>
        </WelcomeCardContent>
      </WelcomeCard>
    </div>
  );
};

export default WelcomeSection;
