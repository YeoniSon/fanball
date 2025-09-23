import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton } from "../../../styles/adminPage/notice/NewNoticeStyled";
import { ArrowLeftIcon } from "../../common/Icons";
import NoticeDetail from "../../features/notice/NoticeDetail";

const NoticesDetailPage = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState({});
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const response = await fetch("/mockNotices.json");
        const noticeData = await response.json();
        const foundNotice = Array.isArray(noticeData?.notices)
          ? noticeData.notices.find(
              (item) => String(item?.id) === String(noticeId)
            )
          : null;
        setNotice(foundNotice || {});
      } catch (error) {
        console.error("공지사항 상세를 불러오지 못했습니다.", error);
      }
    };

    fetchNoticeDetail();
  }, [noticeId]);

  return (
    <>
      <BackButton onClick={() => handleBack()} style={{ gap: "10px" }}>
        <ArrowLeftIcon width={24} height={24} color="#000" />
        공지사항 목록
      </BackButton>
      <NoticeDetail notice={notice} />
    </>
  );
};

export default NoticesDetailPage;
