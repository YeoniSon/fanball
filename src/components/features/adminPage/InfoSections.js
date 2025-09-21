import {
  PeopleIcon,
  CrownIcon,
  ForbidenIcon,
  CautionIcon,
  ResolveIcon,
  MegaphoneIcon,
} from "../../common/Icons";
import {
  InfoSection,
  Grid,
  Item,
  IconBox,
  Label,
  Value,
} from "../../../styles/adminPage/InfoSectionsStyled";

const InfoSections = ({ user, reports, notices, admin }) => {
  const blockedUserCount = Array.isArray(user)
    ? user.filter((u) => u?.blocked === true).length
    : 0;
  const pendingReportCount = Array.isArray(reports)
    ? reports.filter((r) => r?.status === "pending").length
    : 0;
  const resolvedReportCount = Array.isArray(reports)
    ? reports.filter((r) => r?.status === "resolved").length
    : 0;

  return (
    <>
      <InfoSection>
        <Grid>
          <Item>
            <IconBox bg="#1D4ED8">
              <PeopleIcon
                width={20}
                height={20}
                strokeWidth={2}
                color="white"
              />
            </IconBox>
            <Value color="#1D4ED8">{user.length}</Value>
            <Label>총 사용자</Label>
          </Item>
          <Item>
            <IconBox bg="#6037d9ff">
              <CrownIcon width={25} height={25} strokeWidth={2} color="white" />
            </IconBox>
            <Value color="#6037d9ff">{admin.length}</Value>
            <Label>총 관리자</Label>
          </Item>
          <Item>
            <IconBox bg="#ee1313ff">
              <ForbidenIcon
                width={30}
                height={30}
                strokeWidth={2}
                color="white"
              />
            </IconBox>
            <Value color="#ee1313ff">{blockedUserCount}</Value>
            <Label>차단된 사용자</Label>
          </Item>
          <Item>
            <IconBox bg="#ef9217ff">
              <CautionIcon
                width={25}
                height={25}
                strokeWidth={2}
                color="white"
              />
            </IconBox>
            <Value color="#ef9217ff">{pendingReportCount}</Value>
            <Label>대기 중 신고</Label>
          </Item>
          <Item>
            <IconBox bg="#0b943bff">
              <ResolveIcon
                width={25}
                height={25}
                strokeWidth={2.1}
                color="white"
              />
            </IconBox>
            <Value color="#0b943bff">{resolvedReportCount}</Value>
            <Label>처리된 신고</Label>
          </Item>
          <Item>
            <IconBox bg="#9f27f5ff">
              <MegaphoneIcon
                width={30}
                height={30}
                strokeWidth={2}
                color="white"
              />
            </IconBox>
            <Value color="#9f27f5ff">{notices.length}</Value>
            <Label>공지사항 수</Label>
          </Item>
        </Grid>
      </InfoSection>
    </>
  );
};
export default InfoSections;
