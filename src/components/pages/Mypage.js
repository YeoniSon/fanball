import { useMemo } from "react";
import ProfileHeader from "../features/myPage/ProfileHeader";
import AccountSetting from "../features/myPage/AccountSetting";
import PostBar from "../features/myPage/PostBar";
import MyActive from "../features/myPage/MyActive";

const MyPage = () => {
  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  return (
    <>
      <ProfileHeader currentUser={currentUser} />
      <AccountSetting currentUser={currentUser} />
      <PostBar currentUser={currentUser} />
      <MyActive currentUser={currentUser} />
    </>
  );
};

export default MyPage;
