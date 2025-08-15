import CommonBanner from "../../common/Banner";
import PlayerInfo from "../../features/playerInfo/PlayerInfo";

const PlayerInfoPage = () => {
  return (
    <div>
      <CommonBanner
        title="선수 정보 ⚾️"
        subtitle="각 팀 선수들의 정보를 확인하세요!"
        bgColor="rgba(162, 62, 189, 0.9)"
        titleColor="#ffffff"
        textColor="#f0f4ff"
      />
      <PlayerInfo />
    </div>
  );
};

export default PlayerInfoPage;
