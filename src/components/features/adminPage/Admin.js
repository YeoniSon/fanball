import { useState, useEffect } from "react";
import InfoSections from "./InfoSections";
import ActiveContainer from "./ActiveContainer";

const Admin = () => {
  const [user, setUser] = useState([]);
  const [reports, setReports] = useState([]);
  const [notices, setNotices] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setLoading(true);
        const [userRes, reportsRes, noticesRes, adminRes] = await Promise.all([
          fetch("/mockUsers.json"),
          fetch("/mockReports.json"),
          fetch("/mockNotices.json"),
          fetch("/mockAdmin.json"),
        ]);
        const userData = await userRes.json();
        const reportsData = await reportsRes.json();
        const noticesData = await noticesRes.json();
        const adminData = await adminRes.json();
        setUser(Array.isArray(userData?.users) ? userData.users : []);
        setReports(
          Array.isArray(reportsData?.reports) ? reportsData.reports : []
        );
        setNotices(
          Array.isArray(noticesData?.notices) ? noticesData.notices : []
        );
        setAdmin(Array.isArray(adminData?.admins) ? adminData.admins : []);
      } catch (e) {
        console.error("데이터를 불러오지 못했습니다.", e);
        setError("데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchDatas();
  }, []);

  return (
    <>
      <InfoSections
        user={user}
        reports={reports}
        notices={notices}
        admin={admin}
      />

      <ActiveContainer
        user={user}
        reports={reports}
        notices={notices}
        admin={admin}
      />
    </>
  );
};

export default Admin;
