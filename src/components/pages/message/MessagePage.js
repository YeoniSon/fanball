import CommonBanner from "../../common/Banner";
import ChatList from "../../features/message/ChatList";

const MessagePage = () => {
  return (
    <>
      <CommonBanner
        title="메시지 💬"
        subtitle="티켓 거래 관련 안전한 소통을 위한 메시지 시스템"
        bgColor="linear-gradient(to right, #228eedff 0%, #34cc71ff)"
        titleColor="#fff"
        textColor="#fff"
      />
      <ChatList />
    </>
  );
};

export default MessagePage;
