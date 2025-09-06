import { useNavigate } from "react-router-dom";

import { ArrowLeftIcon, SaveIcon } from "../../common/Icons";
import {
  Header,
  BackButton,
  Title,
  SubmitButton,
} from "../../../styles/teamBoard/NewPostPageStyled";
import NewPost from "../../features/teamBoard/NewPost";

const NewPostPage = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted");
    alert("게시글이 작성되었습니다.");
    navigate(-1);
  };

  return (
    <>
      <Header>
        <BackButton onClick={handleBackButtonClick}>
          <ArrowLeftIcon /> 게시판으로
        </BackButton>
        <Title>글쓰기</Title>
        <SubmitButton onClick={handleSubmit}>
          <SaveIcon />
          작성완료
        </SubmitButton>
      </Header>
      <NewPost />
    </>
  );
};

export default NewPostPage;
