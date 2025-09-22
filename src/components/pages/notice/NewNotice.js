import { ArrowLeftIcon, MegaphoneIcon } from "../../common/Icons";
import NewNoticeForm from "../../features/adminPage/notices/NewNoticeForm";
import {
  Title,
  TitleContainer,
  Banner,
  SubTitle,
} from "../../../styles/adminPage/notice/NewNoticeStyled";

const NewNotice = () => {
  return (
    <>
      <Banner>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <ArrowLeftIcon width={24} height={24} color="#fff" />
          <TitleContainer>
            <Title>새 공지사항 작성</Title>
            <SubTitle>
              FANBALL 사용자들에게 전달할 새로운 공지사항을 작성해주세요
            </SubTitle>
          </TitleContainer>
        </div>

        <MegaphoneIcon width={30} height={30} color="#fff" />
      </Banner>
      <NewNoticeForm />
    </>
  );
};
export default NewNotice;
