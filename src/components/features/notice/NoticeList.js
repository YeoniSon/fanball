import { CalenderIcon, FindIcon, PinIcon } from "../../common/Icons";
import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Empty } from "../../../styles/adminPage/UserContentStyled";
import {
  NoticeListContainer,
  NoticeItem,
  Title,
  Content,
  UploadDate,
  SearchContainer,
  SearchBar,
  SearchInput,
  PinnedListContainer,
  UnPinnedListContainer,
  Header,
} from "../../../styles/notice/NoticeListStyled";
import Pagination from "../../common/Pagination";

const NoticeList = ({ notices }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const pinnedSorted = useMemo(() => {
    const list = Array.isArray(notices) ? notices : [];
    return list
      .filter((n) => n?.pinned === true)
      .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
  }, [notices]);

  const nonPinnedSorted = useMemo(() => {
    const list = Array.isArray(notices) ? notices : [];
    const q = searchTerm.trim().toLowerCase();
    const filtered = q
      ? list.filter((n) => {
          const title = String(n?.title || "").toLowerCase();
          const content = String(n?.content || "").toLowerCase();
          return title.includes(q) || content.includes(q);
        })
      : list;
    return filtered
      .filter((n) => n?.pinned === false)
      .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
  }, [notices, searchTerm]);

  const pageSize = 4;
  const pageCount = Math.max(1, Math.ceil(nonPinnedSorted.length / pageSize));
  const start = (page - 1) * pageSize;
  const currentPageItems = nonPinnedSorted.slice(start, start + pageSize);

  // 검색어 변경 시 페이지 리셋
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const handleDetail = (noticeId) => {
    navigate(`/notices/${noticeId}`);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <SearchContainer>
        <SearchBar>
          <FindIcon width={20} height={20} color="#999" />
          <SearchInput
            placeholder="공지사항 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
      </SearchContainer>
      {pinnedSorted.length === 0 && nonPinnedSorted.length === 0 ? (
        <Empty>공지사항이 없습니다.</Empty>
      ) : (
        <>
          <NoticeListContainer>
            {pinnedSorted.length > 0 && (
              <PinnedListContainer>
                <Header color="#047bfbff">
                  <PinIcon color="#047bfbff" />
                  고정 공지사항
                </Header>
                {pinnedSorted.map((notice) => (
                  <>
                    <NoticeItem
                      key={notice.id}
                      onClick={() => handleDetail(notice.id)}
                    >
                      <Title>{notice.title}</Title>
                      <Content>{notice.content}</Content>
                      <UploadDate>
                        <CalenderIcon width={12} height={12} color="#888888" />{" "}
                        {formatDate(notice.createdAt)} {notice.author}
                      </UploadDate>
                    </NoticeItem>
                  </>
                ))}
              </PinnedListContainer>
            )}
            {nonPinnedSorted.length > 0 && (
              <>
                <UnPinnedListContainer>
                  <Header>
                    <Title>전체 공지사항 ({notices.length})</Title>
                  </Header>
                  {currentPageItems.map((notice) => (
                    <NoticeItem
                      key={notice.id}
                      onClick={() => handleDetail(notice.id)}
                    >
                      <Title>{notice.title}</Title>
                      <Content>{notice.content}</Content>
                      <UploadDate>
                        {formatDate(notice.createdAt)} {notice.author}
                      </UploadDate>
                    </NoticeItem>
                  ))}
                  {pageCount > 1 && (
                    <Pagination
                      page={page}
                      pageCount={pageCount}
                      onChange={setPage}
                    />
                  )}
                </UnPinnedListContainer>
              </>
            )}
          </NoticeListContainer>
        </>
      )}
    </>
  );
};

export default NoticeList;
