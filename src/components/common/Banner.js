import React from "react";
import {
  BannerContainer,
  BannerTitle,
  BannerContents,
} from "../../styles/BannerStyled";

const CommonBanner = ({ title, subtitle, bgColor, titleColor, textColor }) => {
  return (
    <BannerContainer bgColor={bgColor}>
      <BannerContents textColor={textColor}>
        <BannerTitle titleColor={titleColor}>{title}</BannerTitle>
        {subtitle}
      </BannerContents>
    </BannerContainer>
  );
};

export default CommonBanner;
