import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, PinIcon } from "../../common/Icons";
import {
  Header,
  MoreButton,
  NoticeContainer,
  Title,
  Body,
  NoticeBox,
  TitleContainer,
  IconContainer,
  Date as NoticeDate,
  Content,
  DetailButton,
  Button,
} from "../../../styles/HomePage/NoticeSectionStyled";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${publicUrl}/mockNotices.json`);
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

  const showNotices = (Array.isArray(notices) ? notices : [])
    .slice()
    .filter((n) => n?.active)
    .sort(
      (a, b) =>
        (b?.pinned === a?.pinned ? 0 : b?.pinned ? 1 : -1) ||
        new Date(b?.createdAt) - new Date(a?.createdAt)
    )
    .slice(0, 3);

  const handleMore = () => {
    navigate("/notices");
  };

  const handleDetailNotice = (noticeId) => {
    navigate(`/notices/${noticeId}`);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <NoticeContainer>
      <Header>
        <Title>📢 공지사항</Title>
        <MoreButton onClick={handleMore}>
          전체보기 <ArrowRightIcon />
        </MoreButton>
      </Header>
      <Body>
        {showNotices.length === 0 ? (
          <div>공지사항이 없습니다.</div>
        ) : (
          showNotices.map((notice) => (
            <NoticeBox key={notice.id}>
              <TitleContainer>
                <Title fontSize="16px">{notice.title}</Title>
                {notice.pinned ? (
                  <IconContainer>
                    <PinIcon />
                  </IconContainer>
                ) : null}
              </TitleContainer>
              <NoticeDate>
                {formatDate(notice.createdAt)}
                {notice.author}
              </NoticeDate>
              <Content>{notice.content}</Content>
              <Button onClick={() => handleDetailNotice(notice.id)}>
                <DetailButton>상세보기</DetailButton>
              </Button>
            </NoticeBox>
          ))
        )}
      </Body>
    </NoticeContainer>
  );
};

export default NoticeSection;
