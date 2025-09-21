import { useMemo, useState } from "react";

import {
  Header,
  Title,
  AboutBadge,
  Item,
  SearchBar,
  SearchInput,
} from "../../../../styles/adminPage/HeaderStyled";
import { FindIcon } from "../../../common/Icons";
import {
  Empty,
  Fragment,
} from "../../../../styles/adminPage/UserContentStyled";
import {
  Badge,
  ReportHeader,
  Buttons,
  DismissButton,
  DeleteButton,
  ReportTitle,
  ReportBody,
  Reporter,
  Reason,
  ReporterUser,
  ReportDetail,
  DetailTitle,
  DetailContent,
} from "../../../../styles/adminPage/ReportContentStyled";
// 이름 충돌 방지를 위해 스타일 컴포넌트를 별칭으로 임포트
import { ReportSummary } from "../../../../styles/adminPage/ReportContentStyled";

const ReportContent = ({ reports = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const pendingCount = Array.isArray(reports)
    ? reports.filter((report) => report?.status === "pending").length
    : 0;

  const filteredReports = useMemo(() => {
    const list = Array.isArray(reports) ? reports : [];
    const q = searchTerm.trim().toLowerCase();
    if (!q) return list;
    return list.filter((r) => {
      const reporterName = String(
        r?.reporterNickname || r?.reporter || ""
      ).toLowerCase();
      const reason = String(r?.reason || "").toLowerCase();
      return reporterName.includes(q) || reason.includes(q);
    });
  }, [reports, searchTerm]);

  const handleDeletePost = (postId) => {
    alert(`게시물 ${postId} 삭제`);
  };
  const handleDeleteComment = (commentId) => {
    alert(`댓글 ${commentId} 삭제`);
  };
  const handleDismissReport = (reportId) => {
    alert(`신고 ${reportId} 기각`);
  };

  return (
    <>
      <Header>
        <Title>신고 목록</Title>
        <AboutBadge>
          <Item color="#f58750ff">대기중 {pendingCount}건</Item>
        </AboutBadge>
      </Header>
      <SearchBar>
        <FindIcon width={18} height={18} strokeWidth={2} color="#000000" />
        <SearchInput
          placeholder="신고자, 사유로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>
      {filteredReports.length === 0 ? (
        <Empty>검색 결과가 없습니다.</Empty>
      ) : (
        filteredReports.map((report) => (
          <Fragment
            key={report.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ReportHeader>
              {report.status === "pending" ? (
                <Badge className="pending">대기중</Badge>
              ) : (
                <Badge className="completed">처리 완료</Badge>
              )}
              <Buttons>
                {report.target === "post" ? (
                  <DeleteButton onClick={() => handleDeletePost(report.postId)}>
                    게시물 삭제
                  </DeleteButton>
                ) : (
                  <DeleteButton
                    onClick={() => handleDeleteComment(report.commentId)}
                  >
                    댓글 삭제
                  </DeleteButton>
                )}
                <DismissButton onClick={() => handleDismissReport(report.id)}>
                  기각
                </DismissButton>
              </Buttons>
            </ReportHeader>
            <ReportBody>
              <ReportSummary>
                <ReportTitle>{report.title}</ReportTitle>
                <Reporter>
                  신고자 : {report.reporterNickname || report.reporter || "-"}
                </Reporter>
                <Reason>사유 : {report.reason}</Reason>
                <ReporterUser>
                  신고된 사용자 :{" "}
                  {report.reportedUserNickname || report.reportedUserId}
                </ReporterUser>
              </ReportSummary>
              <ReportDetail>
                <DetailTitle>신고 내용</DetailTitle>
                <DetailContent>{report.content}</DetailContent>
              </ReportDetail>
            </ReportBody>
          </Fragment>
        ))
      )}
    </>
  );
};

export default ReportContent;
