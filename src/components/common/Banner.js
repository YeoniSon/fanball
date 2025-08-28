import {
  BannerContainer,
  BannerTitle,
  BannerContents,
  BannerRow,
  BannerLogo,
  BannerTextGroup,
} from "../../styles/BannerStyled";

const CommonBanner = ({
  title,
  subtitle,
  bgColor,
  titleColor,
  textColor,
  icon,
}) => {
  return (
    <BannerContainer bgColor={bgColor}>
      {icon ? (
        <BannerRow>
          <BannerLogo>{icon}</BannerLogo>
          <BannerTextGroup textColor={textColor}>
            <BannerTitle titleColor={titleColor}>{title}</BannerTitle>
            <BannerContents textColor={textColor}>{subtitle}</BannerContents>
          </BannerTextGroup>
        </BannerRow>
      ) : (
        <BannerContents textColor={textColor}>
          <BannerTitle titleColor={titleColor}>{title}</BannerTitle>
          {subtitle}
        </BannerContents>
      )}
    </BannerContainer>
  );
};

export default CommonBanner;
