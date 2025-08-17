import CommonBanner from "../../common/Banner";
import TicketFilter from "../../features/ticket/TicketFilter";
import TicketSelectBar from "../../features/ticket/TicketSelectBar";

const TicketPage = () => {
  return (
    <>
      <CommonBanner
        title="FANBALL 티켓 거래소 🎫"
        subtitle="안전하고 투명한 KBO 티켓 거래 플랫폼"
        bgColor={"linear-gradient(to right, #f96306ff, #3b82f6)"}
        textColor={"#ffffff"}
        titleColor={"#f0f0f0"}
      />
      <div style={{ paddingTop: "20px" }}>
        <TicketSelectBar />
      </div>
    </>
  );
};

export default TicketPage;
