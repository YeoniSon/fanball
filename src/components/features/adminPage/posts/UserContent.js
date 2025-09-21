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
  ForbidenIcon,
  PersonAddIcon,
  ShowIcon,
} from "../../../common/Icons";

const UserContent = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const blockedUserCount = Array.isArray(user)
    ? user.filter((u) => u?.blocked === true).length
    : 0;

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
              <UserName>{u?.name}</UserName>
              <UserEmail>{u?.email}</UserEmail>
              <UserNickname>닉네임 : {u?.nickname}</UserNickname>
              <Info>
                <Join>가입일 : {u?.joinDate}</Join>
                <Reputation>신뢰도 : {u?.reputation}%</Reputation>
                <Reports>신고 : {u?.reportCount}건</Reports>
              </Info>
            </UserAbout>
            <Buttons>
              <DetailButton>
                <ShowIcon
                  width={20}
                  height={20}
                  strokeWidth={2}
                  color="#000000"
                />
                상세보기
              </DetailButton>
              <AdminButton>
                <PersonAddIcon
                  width={20}
                  height={20}
                  strokeWidth={2}
                  color="#ffffff"
                />
                관리자 권한 부여
              </AdminButton>
              {u?.blocked ? (
                <UnblockButton>차단 해제</UnblockButton>
              ) : (
                <BlockButton>
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
    </>
  );
};

export default UserContent;
