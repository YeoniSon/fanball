import {
  BannerContainer,
  BannerTitle,
  BannerContents,
} from "../../../styles/BannerStyled";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContents>
        <BannerTitle>KBO 경기 일정 📅</BannerTitle>
        모든 KBO 리그 경기 일정과 결과를 확인하세요!
      </BannerContents>
    </BannerContainer>
  );
};

export default Banner;
