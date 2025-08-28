import CommonBanner from "../common/Banner";
import PlayerInput from "../features/PlayerInput";

const PlayerInputPage = () => {
  return (
    <>
      <CommonBanner
        title="선수 등/말소 정보 ⭐️"
        subtitle="KBO 선수들의 등록/말소 정보를 확인하세요!"
        bgColor="linear-gradient(to right, #e7a116ff, #b1cd14ff)"
        textColor="#ffffff"
      />
      <PlayerInput />
    </>
  );
};

export default PlayerInputPage;
