import { PersonIcon, CalenderIcon, PinIcon } from "../../common/Icons";
import {
  NoticeDetailContainer,
  Header,
  PinnedBanner,
  BannerTitle,
  BadgeContainer,
  Badge,
  Title,
  UploadInfo,
  Author,
  Time,
  Body,
  Content,
} from "../../../styles/notice/NoticeDetailStyled";

const NoticeDetail = ({ notice }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <NoticeDetailContainer>
        <Header>
          {notice.pinned && (
            <PinnedBanner>
              <PinIcon width={24} height={24} color="white" />
              <BannerTitle>고정 공지사항</BannerTitle>
            </PinnedBanner>
          )}
          <div style={{ padding: "0 20px" }}>
            <BadgeContainer>
              {notice.pinned ? (
                <Badge className="pinned">고정</Badge>
              ) : (
                <Badge className="general">일반</Badge>
              )}
            </BadgeContainer>
            <Title>{notice.title}</Title>
            <UploadInfo>
              <Author>
                <PersonIcon width={25} height={25} strokeWidth={2} />{" "}
                {notice.author}
              </Author>
              <Time>
                <CalenderIcon width={20} height={20} color="#666" />
                {formatDate(notice.createdAt)}
              </Time>
            </UploadInfo>
          </div>
        </Header>
        <Body>
          <Content>{notice.content}</Content>
        </Body>
      </NoticeDetailContainer>
    </>
  );
};

export default NoticeDetail;
