import { useMemo, useState } from "react";
import {
  Header,
  Title,
  AboutBadge,
  Item,
  SearchBar,
  SearchInput,
} from "../../../../styles/adminPage/HeaderStyled";
import {
  Empty,
  UserIcon,
  UserAbout,
  UserNickname,
  UserEmail,
  Info,
  Join,
  Buttons,
} from "../../../../styles/adminPage/UserContentStyled";
import {
  AdminContainer,
  AdminBadge,
  AdminName,
  Notices,
  MessageButton,
  RemoveAdminButton,
} from "../../../../styles/adminPage/AdminContentStyled";
import {
  CrownIcon,
  FindIcon,
  MessageIcon,
  RemovePersonIcon,
} from "../../../common/Icons";

const AdminContent = ({ admin }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdmins = useMemo(() => {
    const list = Array.isArray(admin) ? admin : [];
    const q = searchTerm.trim().toLowerCase();
    if (!q) return list;
    return list.filter((a) => {
      const name = String(a?.name || "").toLowerCase();
      const email = String(a?.email || "").toLowerCase();
      return name.includes(q) || email.includes(q);
    });
  }, [admin, searchTerm]);

  const handleSendMessage = (adminId) => {
    // 메시지 보내기 로직 구현
    alert(`${adminId} 관리자에게 메시지를 보냅니다.`);
  };

  const handleRemoveAdmin = (adminId) => {
    // 관리자 권한 해제 로직 구현
    alert(`${adminId} 관리자 권한을 해제합니다.`);
  };

  return (
    <>
      <Header>
        <Title>관리자 계정 관리</Title>
        <AboutBadge>
          <Item color="#6b65e4ff">총 관리자 {admin.length}명</Item>
        </AboutBadge>
      </Header>
      <SearchBar>
        <FindIcon width={18} height={18} strokeWidth={2} color="#000000" />
        <SearchInput
          placeholder="관리자명, 이메일로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>
      {filteredAdmins.length === 0 ? (
        <Empty>검색 결과가 없습니다.</Empty>
      ) : (
        filteredAdmins.map((admin) => (
          <AdminContainer key={admin.id}>
            <UserIcon>{admin.nickname.charAt(0)}</UserIcon>
            <UserAbout>
              <AdminName>
                {admin.name}
                <AdminBadge>
                  <CrownIcon
                    width={12}
                    height={12}
                    strokeWidth={2}
                    color="#ffffff"
                  />
                  관리자
                </AdminBadge>{" "}
              </AdminName>
              <UserEmail>이메일 : {admin.email}</UserEmail>
              <UserNickname>닉네임 : {admin.nickname}</UserNickname>
              <Info>
                <Join>가입 : {admin.joinDate}</Join>
                <Notices>작성한 공지 : {admin.noticesCount}건</Notices>
              </Info>
            </UserAbout>
            <Buttons>
              <MessageButton onClick={() => handleSendMessage(admin.id)}>
                <MessageIcon />
                메시지 보내기
              </MessageButton>
              <RemoveAdminButton onClick={() => handleRemoveAdmin(admin.id)}>
                <RemovePersonIcon
                  width={18}
                  height={18}
                  strokeWidth={2}
                  color="#4449ebff"
                />{" "}
                관리자 권한 해제
              </RemoveAdminButton>
            </Buttons>
          </AdminContainer>
        ))
      )}
    </>
  );
};

export default AdminContent;
