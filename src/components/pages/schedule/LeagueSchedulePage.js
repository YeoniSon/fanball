import CommonBanner from "../../common/Banner";
import SchedulePage from "../../features/League/SchedulePage";

const LeagueSchedulePage = () => {
  return (
    <div>
      <CommonBanner
        title="KBO 경기 일정 📅"
        subtitle="모든 KBO 리그 경기 일정과 결과를 확인하세요!"
        bgColor="rgba(23, 82, 243, 0.9)"
        titleColor="#ffffff"
        textColor="#f0f4ff"
      />
      <SchedulePage />
    </div>
  );
};

export default LeagueSchedulePage;
