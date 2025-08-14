import CommonBanner from "../../common/Banner";
import SchedulePage from "../../features/futures/SchedulePage";

const FuturesSchedulePage = () => {
  return (
    <div>
      <CommonBanner
        title="KBO 퓨처스 리그 ⭐️"
        subtitle="모든 KBO 퓨처스 리그 경기 일정과 결과를 확인하세요!"
        bgColor="#0b8457"
        titleColor="#ffffff"
        textColor="#e8fff6"
      />
      <SchedulePage />
    </div>
  );
};

export default FuturesSchedulePage;
