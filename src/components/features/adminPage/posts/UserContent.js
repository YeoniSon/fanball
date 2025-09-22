import { useMemo, useState } from "react";
import {
  Fragment,
  UserIcon,
  UserAbout,
  Info,
  Join,
  Reputation,
  Reports,
  Buttons,
  DetailButton,
  AdminButton,
  BlockButton,
  UnblockButton,
  UserNickname,
  UserName,
  UserEmail,
  Empty,
  BlockedBadge,
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  Infos,
  CloseButton,
  ModalBody,
  ReportTitle,
  ReportItem,
  ReportContent,
  ReportDate,
  ReportId,
  ReportBadge,
  MiddleTitle,
  DeleteButton,
  DetailButtons,
} from "../../../../styles/adminPage/UserContentStyled";
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
  DotIcon,
  ForbidenIcon,
  PersonAddIcon,
  ShowIcon,
} from "../../../common/Icons";

const UserContent = ({ user, reports = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const blockedUserCount = Array.isArray(user)
    ? user.filter((u) => u?.blocked === true).length
    : 0;

  const filterReportsByUser = (reports, userId) => {
    if (!Array.isArray(reports) || userId == null) return [];
    const idNum = Number(userId);
    return reports.filter((r) => Number(r?.reportedUserId) === idNum);
  };

  const filteredUsers = useMemo(() => {
    const list = Array.isArray(user) ? user : [];
    const q = searchTerm.trim().toLowerCase();
    if (!q) return list;
    return list.filter((u) => {
      const name = String(u?.name || "").toLowerCase();
      const nickname = String(u?.nickname || "").toLowerCase();
      const email = String(u?.email || "").toLowerCase();
      return name.includes(q) || nickname.includes(q) || email.includes(q);
    });
  }, [user, searchTerm]);

  const handleAdminClick = (u) => {
    // 관리자 권한 부여 로직 구현
    alert(`${u.name}님께 관리자 권한을 부여합니다.`);
  };

  const handleBlockClick = (u) => {
    // 사용자 차단 로직 구현
    alert(`${u.name}님을 차단합니다.`);
  };

  const handleUnblockClick = (u) => {
    // 사용자 차단 해제 로직 구현
    alert(`${u.name}님의 차단을 해제합니다.`);
  };

  const handleDeleteClick = (u) => {
    // 사용자 탈퇴 로직 구현
    alert(`${u.name}님을 탈퇴 하시겠습니까?`);
  };
  const openDetail = (u) => {
    setSelectedUser(u);
    setPopupOpen(true);
  };

  const closeDetail = () => {
    setPopupOpen(false);
    setSelectedUser(null);
  };

  const selectedUserReports = useMemo(
    () => filterReportsByUser(reports, selectedUser?.id),
    [reports, selectedUser]
  );

  const setDateFormat = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", options);
  };

  return (
    <>
      <Header>
        <Title>일반 사용자 관리</Title>
        <AboutBadge>
          <Item color="#0999f8ff">총 사용자 {user.length}명</Item>
          <Item color="#ea1616ff">차단된 사용자 {blockedUserCount}명</Item>
        </AboutBadge>
      </Header>
      <SearchBar>
        <FindIcon width={18} height={18} strokeWidth={2} color="#000000" />
        <SearchInput
          placeholder="사용자명, 이메일로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      {filteredUsers.length === 0 ? (
        <Empty>검색 결과가 없습니다.</Empty>
      ) : (
        filteredUsers.map((u) => (
          <Fragment key={u.id} blocked={u?.blocked}>
            <UserIcon blocked={u?.blocked}>{u?.nickname.charAt(0)}</UserIcon>
            <UserAbout>
              <UserName>
                {u?.name}
                {u?.blocked ? <BlockedBadge>차단</BlockedBadge> : null}
              </UserName>
              <UserEmail>{u?.email}</UserEmail>
              <UserNickname>닉네임 : {u?.nickname}</UserNickname>
              <Info>
                <Join>가입일 : {u?.joinDate}</Join>
                <Reputation>신뢰도 : {u?.reputation}%</Reputation>
                <Reports>신고 : {u?.reportCount}건</Reports>
              </Info>
            </UserAbout>
            <Buttons>
              <DetailButton onClick={() => openDetail(u)}>
                <ShowIcon
                  width={20}
                  height={20}
                  strokeWidth={2}
                  color="#000000"
                />
                상세보기
              </DetailButton>
              <AdminButton onClick={() => handleAdminClick(u)}>
                <PersonAddIcon
                  width={20}
                  height={20}
                  strokeWidth={2}
                  color="#ffffff"
                />
                관리자 권한 부여
              </AdminButton>
              {u?.blocked ? (
                <UnblockButton onClick={() => handleUnblockClick(u)}>
                  차단 해제
                </UnblockButton>
              ) : (
                <BlockButton onClick={() => handleBlockClick(u)}>
                  <ForbidenIcon
                    width={20}
                    height={20}
                    strokeWidth={2}
                    color="#ffffff"
                  />
                  차단
                </BlockButton>
              )}
            </Buttons>
          </Fragment>
        ))
      )}
      {popupOpen && selectedUser && (
        <Overlay onClick={closeDetail}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>사용자 상세 정보</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <UserName>{selectedUser?.name}</UserName>

              <Infos>
                <UserEmail
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#555",
                  }}
                >
                  이메일: {selectedUser?.email}
                </UserEmail>
                <UserNickname
                  style={{ fontSize: "14px", fontWeight: 500, color: "#555" }}
                >
                  닉네임: {selectedUser?.nickname}
                </UserNickname>
                <Join
                  style={{ fontSize: "14px", fontWeight: 500, color: "#555" }}
                >
                  가입일: {selectedUser?.joinDate}
                </Join>
                <Reports
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  신고: {selectedUser?.reportCount}건
                </Reports>
              </Infos>
            </ModalBody>
            <MiddleTitle>관련 신고 내역</MiddleTitle>
            {selectedUserReports.length > 0 ? (
              selectedUserReports.map((r) => (
                <ReportItem key={r.id}>
                  <ReportBadge
                    status={r.status === "pending" ? "pending" : "resolved"}
                  >
                    {r.status === "pending" ? "대기중" : "처리 완료"}
                  </ReportBadge>
                  <ReportTitle>{r.title}</ReportTitle>
                  <ReportContent> {r.content}</ReportContent>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <ReportId>신고자 : {r.reporterNickname}</ReportId>
                    <DotIcon width={3} height={3} color="#6b7280" />
                    <ReportDate>{setDateFormat(r.createdAt)}</ReportDate>
                  </div>
                </ReportItem>
              ))
            ) : (
              <div style={{ padding: "0 16px 16px 16px" }}>
                관련 신고 내역이 없습니다.
              </div>
            )}

            <DetailButtons>
              <CloseButton onClick={closeDetail}>닫기</CloseButton>
              <DeleteButton onClick={() => handleDeleteClick(selectedUser)}>
                탈퇴하기
              </DeleteButton>
              {selectedUser?.blocked ? (
                <UnblockButton onClick={() => handleUnblockClick(selectedUser)}>
                  차단 해제
                </UnblockButton>
              ) : (
                <BlockButton onClick={() => handleBlockClick(selectedUser)}>
                  차단
                </BlockButton>
              )}
            </DetailButtons>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default UserContent;
