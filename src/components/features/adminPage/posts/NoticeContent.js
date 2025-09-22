import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Title,
  AboutBadge,
  Item,
  SearchBar,
  SearchInput,
} from "../../../../styles/adminPage/HeaderStyled";
import {
  FindIcon,
  PinIcon,
  PlusIcon,
  PinOffIcon,
  WriteIcon,
} from "../../../common/Icons";
import {
  NewNoticeButton,
  BadgeContainer,
  Badge,
  NoticeHeader,
  Buttons,
  FixButton,
  PinButton,
  UnpinButton,
  ActivateButton,
  DeactivateButton,
  DeleteButton,
  NoticeBody,
  NoticeTitle,
  NoticeContents,
  Reporter,
} from "../../../../styles/adminPage/NoticeContentStyled";
import {
  Empty,
  Fragment,
} from "../../../../styles/adminPage/UserContentStyled";

const NoticeContent = ({ notices }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const activeCount = Array.isArray(notices)
    ? notices.filter((notice) => notice?.active === true).length
    : 0;

  const pinnedCount = Array.isArray(notices)
    ? notices.filter((notice) => notice?.pinned === true).length
    : 0;

  const filteredNotices = useMemo(() => {
    const list = Array.isArray(notices) ? notices : [];
    const q = searchTerm.trim().toLowerCase();
    if (!q) return list;
    return list.filter((n) => {
      const title = String(n?.title || "").toLowerCase();
      const content = String(n?.content || "").toLowerCase();
      const author = String(n?.author || "").toLowerCase();
      return title.includes(q) || content.includes(q) || author.includes(q);
    });
  }, [notices, searchTerm]);

  const handleNewNotice = () => {
    navigate("/admin/newNotice");
  };

  const handleDeleteNotice = (noticeId) => {
    alert(`공지사항 ${noticeId} 삭제`);
  };

  const handleFixNotice = (noticeId) => {
    navigate(`/admin/editNotice/${noticeId}`);
  };

  const handlePinNotice = (noticeId) => {
    alert(`공지사항 ${noticeId} 고정`);
  };

  const handleUnpinNotice = (noticeId) => {
    alert(`공지사항 ${noticeId} 고정 해제`);
  };

  const handleActivateNotice = (noticeId) => {
    alert(`공지사항 ${noticeId} 활성`);
  };

  const handleDeactivateNotice = (noticeId) => {
    alert(`공지사항 ${noticeId} 비활성`);
  };

  return (
    <>
      <Header>
        <Title>공지 목록</Title>
        <AboutBadge>
          <NewNoticeButton onClick={() => handleNewNotice()}>
            <PlusIcon width={15} height={15} strokeWidth={2} color="#ffffff" />
            새 공지사항
          </NewNoticeButton>
          <Item color="#099e0bff">활성 {activeCount}건</Item>
          <Item color="#ea1616ff">고정 {pinnedCount}건</Item>
        </AboutBadge>
      </Header>
      <SearchBar>
        <FindIcon width={18} height={18} strokeWidth={2} color="#000000" />
        <SearchInput
          placeholder="제목, 내용, 작성자로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      {filteredNotices.length === 0 ? (
        <Empty>검색 결과가 없습니다.</Empty>
      ) : (
        filteredNotices.map((notice) => (
          <Fragment
            key={notice.id}
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            <NoticeHeader>
              <BadgeContainer>
                {notice.pinned && notice.active ? (
                  <>
                    <Badge className="pinned">
                      <PinIcon color="white" /> 고정
                    </Badge>
                    <Badge className="active">활성</Badge>
                  </>
                ) : (
                  <Badge className="inactive">비활성</Badge>
                )}
              </BadgeContainer>

              <Buttons>
                <FixButton onClick={() => handleFixNotice(notice.id)}>
                  <WriteIcon width={15} height={15} />
                  수정
                </FixButton>
                {notice.pinned ? (
                  <UnpinButton onClick={() => handleUnpinNotice(notice.id)}>
                    <PinOffIcon /> 고정 해제
                  </UnpinButton>
                ) : (
                  <PinButton onClick={() => handlePinNotice(notice.id)}>
                    <PinIcon />
                    고정
                  </PinButton>
                )}
                {notice.active ? (
                  <DeactivateButton
                    onClick={() => handleDeactivateNotice(notice.id)}
                  >
                    비활성
                  </DeactivateButton>
                ) : (
                  <ActivateButton
                    onClick={() => handleActivateNotice(notice.id)}
                  >
                    활성
                  </ActivateButton>
                )}
                <DeleteButton onClick={() => handleDeleteNotice(notice.id)}>
                  삭제
                </DeleteButton>
              </Buttons>
            </NoticeHeader>
            <NoticeBody>
              <NoticeTitle>{notice.title}</NoticeTitle>
              <NoticeContents>{notice.content}</NoticeContents>
              <Reporter>작성자 : {notice.author}</Reporter>
            </NoticeBody>
          </Fragment>
        ))
      )}
    </>
  );
};

export default NoticeContent;
