import { useNavigate } from "react-router-dom";
import {
  Title,
  TitleContainer,
  Banner,
  SubTitle,
  BackButton,
} from "../../../styles/adminPage/notice/NewNoticeStyled";
import { ArrowLeftIcon, PencilIcon } from "../../common/Icons";
import EditNoticeForm from "../../features/adminPage/notices/EditNoticeForm";

const EditNotice = () => {
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
            <Title>공지사항 수정</Title>
            <SubTitle>
              기존 공지사항을 수정하여 FANBALL 사용자들에게 최신 정보를
              제공하세요
            </SubTitle>
          </TitleContainer>
        </div>

        <PencilIcon width={40} height={40} color="#fff" />
      </Banner>
      <EditNoticeForm />
    </>
  );
};
export default EditNotice;
