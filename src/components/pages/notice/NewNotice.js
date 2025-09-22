import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, MegaphoneIcon } from "../../common/Icons";
import NewNoticeForm from "../../features/adminPage/notices/NewNoticeForm";
import {
  Title,
  TitleContainer,
  Banner,
  SubTitle,
  BackButton,
} from "../../../styles/adminPage/notice/NewNoticeStyled";

const NewNotice = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Banner>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <BackButton onClick={() => handleBack()}>
            <ArrowLeftIcon width={24} height={24} color="#fff" />
          </BackButton>
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
