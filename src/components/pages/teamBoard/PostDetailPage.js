import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Header,
  BackButton,
  Badge,
} from "../../../styles/teamBoard/PostDetailPageStyled";
import { ArrowLeftIcon } from "../../common/Icons";
import TeamInfo from "../../common/TeamInfo";
import PostDetail from "../../features/teamBoard/PostDetail";
import PostComment from "../../features/teamBoard/PostComment";

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { teamId, postId } = useParams();
  const { state } = useLocation();
  const post = state?.post || null;

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const badgeContent = (TeamInfo?.teamIcon || []).find(
    (t) => t.id === teamId
  ) || {
    shortName: "",
  };

  return (
    <>
      <Header>
        <BackButton onClick={handleBackButtonClick}>
          <ArrowLeftIcon />
          게시판으로
        </BackButton>
        <Badge color={badgeContent.color}>
          {badgeContent.shortName} 게시판
        </Badge>
      </Header>
      <PostDetail post={post} />
      <PostComment post={post} />
    </>
  );
};

export default PostDetailPage;
