import { Hr } from "../../../styles/liveChat/LiveChatMainStyled";
import {
  InfoContainer,
  Header,
  ProfileIcon,
  Avatar,
  TeamLogo,
  TeamIcon,
  Icons,
  UserInfo,
  Info,
  UserName,
  TeamBadge,
  UserInfos,
  UserId,
  Content,
  About,
  Label,
  UserEmail,
  NickName,
  JoinDate,
} from "../../../styles/myPage/ProfileHeaderStyled";
import {
  CalenderIcon,
  IdCardIcon,
  MailIcon,
  PersonIcon,
  CheckPersonIcon,
} from "../../common/Icons";
import TeamInfo from "../../common/TeamInfo";

const ProfileHeader = ({ currentUser }) => {
  const teams = TeamInfo?.teamIcon || [];
  const team = teams.find((t) => t.label === currentUser?.favoriteTeam);

  return (
    <>
      <InfoContainer>
        <Header>
          <PersonIcon width={30} height={30} /> 기본 정보
        </Header>
        <Info>
          <Icons>
            <ProfileIcon color={team?.color}>
              <Avatar>{currentUser.name.charAt(0)}</Avatar>
            </ProfileIcon>
            <TeamIcon color={team?.color}>
              <TeamLogo src={team?.logo} alt={team?.label} />
            </TeamIcon>
          </Icons>
          <UserInfo>
            <UserName>{currentUser.nickname}</UserName>
            <TeamBadge color={team?.color}>{team?.shortName} 팬</TeamBadge>
          </UserInfo>
        </Info>

        <Hr />
        <UserInfos>
          <UserId>
            <IdCardIcon
              width={30}
              height={30}
              strokeWidth={0.1}
              fill={"#696969ff"}
            />
            <About>
              <Label>사용자 ID</Label>
              <Content>{currentUser.id}</Content>
            </About>
          </UserId>
          <UserEmail>
            <MailIcon
              width={25}
              height={25}
              strokeWidth={1}
              fill={"#696969ff"}
            />
            <About>
              <Label>이메일</Label>
              <Content>{currentUser.email}</Content>
            </About>
          </UserEmail>
          <NickName>
            <CheckPersonIcon
              width={25}
              height={25}
              strokeWidth={2}
              color={"#696969ff"}
            />
            <About>
              <Label>닉네임</Label>
              <Content>{currentUser.nickname}</Content>
            </About>
          </NickName>
          <JoinDate>
            <CalenderIcon
              width={20}
              height={20}
              strokeWidth={2}
              color={"#696969ff"}
            />
            <About>
              <Label>가입일</Label>
              <Content>{currentUser.joinDate}</Content>
            </About>
          </JoinDate>
        </UserInfos>
      </InfoContainer>
    </>
  );
};

export default ProfileHeader;
