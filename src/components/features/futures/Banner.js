import {
  BannerContainer,
  BannerTitle,
  BannerContents,
} from "../../../styles/BannerStyled";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContents>
        <BannerTitle>KBO 퓨처스 리그 ⭐️</BannerTitle>
        모든 KBO 퓨처스 리그 경기 일정과 결과를 확인하세요!
      </BannerContents>
    </BannerContainer>
  );
};

export default Banner;
