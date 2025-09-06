import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PostListContainer,
  BoardHeader,
  SelectOptions,
  SelectOption,
  PostContainer,
  PostAuthorIcon,
  PostInfoContainer,
  Header,
  Category,
  Time,
  Title,
  PostInfo,
  Author,
  Likes,
  Comments,
  Views,
  NewPostButton,
} from "../../../styles/teamBoard/PostListPageStyled";
import {
  MessageIcon,
  ViewsIcon,
  LikesIcon,
  PlusIcon,
} from "../../common/Icons";
import TeamInfo from "../../common/TeamInfo";

const PostListPage = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`/mockTeamBoardPosts.json`);
        const data = await response.json();
        const posts = Array.isArray(data?.posts) ? data.posts : [];
        setPostData(posts);
      } catch (e) {
        setPostData([]);
        setError("데이터를 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [teamId]);

  const filteredPosts = useMemo(() => {
    const byTeam = (postData || []).filter((post) => post.team === teamId);
    const byCategory =
      category === "all"
        ? byTeam
        : byTeam.filter((post) => post.category === category);
    return byCategory.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [postData, teamId, category]);

  const categoryLabel = (c) => {
    switch (c) {
      case "free":
        return "자유게시판";
      case "review":
        return "경기 후기";
      case "player":
        return "선수";
      default:
        return c;
    }
  };

  const getTimeBefore = (time) => {
    const now = new Date();
    const postTime = new Date(time);
    const diffInSeconds = Math.floor((now - postTime) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}초 전`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}시간 전`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}일 전`;
  };

  if (isLoading) return <div>불러오는 중…</div>;
  if (error) return <div>{error}</div>;

  const team = (TeamInfo?.teamIcon || []).find((t) => t.id === teamId) || {
    shortName: "",
  };

  const handlePostClick = (post) => {
    navigate(`/${teamId}/post/${post.id}`, { state: { post } });
  };

  const handleNewPostClick = () => {
    navigate(`/${teamId}/post/newPost`);
  };

  return (
    <>
      <PostListContainer>
        <BoardHeader>
          <SelectOptions
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <SelectOption value="all">전체</SelectOption>
            <SelectOption value="free">자유게시판</SelectOption>
            <SelectOption value="review">경기 후기</SelectOption>
            <SelectOption value="player">선수</SelectOption>
          </SelectOptions>

          <NewPostButton onClick={handleNewPostClick} color={team.color}>
            <PlusIcon width={20} height={20} />
            글쓰기
          </NewPostButton>
        </BoardHeader>
        {filteredPosts.length === 0 ? (
          <PostContainer>게시글이 없습니다.</PostContainer>
        ) : (
          filteredPosts.map((post) => (
            <PostContainer key={post.id} onClick={() => handlePostClick(post)}>
              <PostAuthorIcon>{post.author.charAt(0)}</PostAuthorIcon>
              <PostInfoContainer>
                <Header>
                  <Category>{categoryLabel(post.category)}</Category>
                  <Time>{getTimeBefore(post.createdAt)}</Time>
                </Header>
                <Title>{post.title}</Title>

                <PostInfo>
                  <Author>{post.author}</Author>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "8px",
                    }}
                  >
                    <Likes>
                      <LikesIcon />
                      {post.likes}
                    </Likes>
                    <Comments>
                      <MessageIcon />
                      {post.commentCount}
                    </Comments>
                    <Views>
                      <ViewsIcon />
                      {post.views}
                    </Views>
                  </div>
                </PostInfo>
              </PostInfoContainer>
            </PostContainer>
          ))
        )}
      </PostListContainer>
    </>
  );
};

export default PostListPage;
