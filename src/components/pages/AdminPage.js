import CommonBanner from "../common/Banner";
import Admin from "../features/adminPage/Admin";

const AdminPage = () => {
  return (
    <>
      <CommonBanner
        title="관리자 대시보드 🛡️"
        subtitle="FANBALL 플랫폼의 안전한 운영을 위한 관리 시스템"
        bgColor="linear-gradient(to right, #9e16e7ff, #3f14cdff)"
        textColor="#ffffff"
      />

      <Admin />
    </>
  );
};

export default AdminPage;
