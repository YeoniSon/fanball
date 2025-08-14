import { Select } from "../../styles/SignupPageStyled";
import CommonBanner from "../common/Banner";
import SelectSection from "../features/ranking/SelectSection";

const Ranking = () => {
  return (
    <div>
      <CommonBanner
        title="KBO 리그 순위 🏆"
        subtitle="모든 KBO 리그 순위를 확인하세요!"
        bgColor="rgba(243, 133, 23, 0.9)"
        titleColor="#ffffff"
        textColor="#f0f4ff"
      />
      <SelectSection />
    </div>
  );
};

export default Ranking;
