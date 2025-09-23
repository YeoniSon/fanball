import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Title,
  TitleContainer,
  Banner,
  SubTitle,
  BackButton,
} from "../../../styles/adminPage/notice/NewNoticeStyled";
import { ArrowLeftIcon } from "../../common/Icons";
import NoticeList from "../../features/notice/NoticeList";

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("/mockNotices.json");
        const noticeData = await response.json();
        setNotices(
          Array.isArray(noticeData?.notices) ? noticeData.notices : []
        );
      } catch (error) {
        console.error("공지사항을 불러오지 못했습니다.", error);
      }
    };

    fetchNotices();
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Banner>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <BackButton onClick={() => handleBack()}>
            <ArrowLeftIcon width={24} height={24} color="#fff" />
          </BackButton>
          <TitleContainer>
            <Title>📢 공지사항</Title>
            <SubTitle>FANBALL의 최신 소식과 공지를 확인하세요!</SubTitle>
          </TitleContainer>
        </div>
      </Banner>
      <NoticeList notices={notices} />
    </>
  );
};

export default NoticesPage;
