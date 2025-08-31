import CommonBanner from "../../common/Banner";
import { useParams } from "react-router-dom";
import TeamInfo from "../../common/TeamInfo";
import PostListPage from "../../features/teamBoard/PostListPage";
import { TitleRow, LogoImage } from "../../../styles/teamBoard/TeamBoardStyled";

const TeamBoard = () => {
  const { teamId } = useParams();
  const team = (TeamInfo?.teamIcon || []).find((t) => t.id === teamId);

  return (
    <>
      <CommonBanner
        title={`${team.label} 팬 게시판`}
        subtitle={`${team.label} 팬들과 함께 이야기해보세요!`}
        bgColor={`${team.color}`}
        titleColor="white"
        textColor="white"
        icon={<LogoImage src={team.logo} alt={`${team.label} 로고`} />}
      />
      <PostListPage />
    </>
  );
};

export default TeamBoard;
