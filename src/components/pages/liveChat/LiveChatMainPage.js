import CommonBanner from "../../common/Banner";
import MainLiveChat from "../../features/LiveChat/MainLiveChat";

const LiveChatMainPage = () => {
  return (
    <div>
      <CommonBanner
        title="실시간 경기 채팅 💬"
        subtitle="참여하고 싶은 경기를 선택하여 다른 팬들과 소통하세요!"
        bgColor="linear-gradient(to right, #3f9f36ff, #3b82f6)"
        titleColor="#fff"
        textColor="#f0f0f0"
      />
      <MainLiveChat />
    </div>
  );
};

export default LiveChatMainPage;
