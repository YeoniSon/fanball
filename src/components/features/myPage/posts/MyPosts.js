import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageIcon, LikesIcon } from "../../../common/Icons";
import {
  Container,
  About,
  Title,
  Team,
  Time,
  Stats,
  PostLikes,
  PostComments,
  Info,
  Category,
  TeamIcon,
} from "../../../../styles/myPage/PostStyled";
import TeamInfo from "../../../common/TeamInfo";
import Pagination from "../../../common/Pagination";

const MyPosts = ({ myId: myIdFromParent }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const myId = useMemo(() => {
    return myIdFromParent != null ? Number(myIdFromParent) : null;
  }, [myIdFromParent]);

  const teams = TeamInfo?.teamIcon || [];

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/mockTeamBoardPosts.json");
        const json = await res.json();
        setPosts(Array.isArray(json?.posts) ? json.posts : []);
      } catch (e) {
        setError("내 게시물을 불러오지 못했습니다.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const myPosts = useMemo(() => {
    if (myId == null) return [];
    return posts.filter((p) => Number(p?.authorId) === Number(myId));
  }, [posts, myId]);

  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(myPosts.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [myPosts.length]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return myPosts.slice(start, start + pageSize);
  }, [myPosts, page]);

  const formatTime = (iso) => {
    if (!iso) return "";
    try {
      const diff = Date.now() - new Date(iso).getTime();
      const min = Math.floor(diff / 60000);
      if (min < 1) return "방금 전";
      if (min < 60) return `${min}분 전`;
      const hr = Math.floor(min / 60);
      if (hr < 24) return `${hr}시간 전`;
      const d = Math.floor(hr / 24);
      return `${d}일 전`;
    } catch {
      return iso;
    }
  };

  const handlePostClick = (team, postId, postObj) => {
    navigate(`/${team}/post/${postId}`, { state: { post: postObj } });
  };

  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>{error}</div>;

  if (!pageItems.length) return <div>작성한 게시물이 없습니다.</div>;

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

  return (
    <>
      {pageItems.map((post) => {
        const teamBadge = teams.find((t) => t.id === post.team);
        return (
          <Container
            key={post.id}
            onClick={() => handlePostClick(post.team, post.id, post)}
          >
            <About>
              <Title>{post.title}</Title>
              <Info>
                <Team color={teamBadge?.color}>
                  <TeamIcon
                    width={20}
                    height={15}
                    style={{ backgroundColor: "white" }}
                    src={teamBadge?.logo}
                  />
                  {teamBadge?.shortName}
                </Team>
                <Category>{categoryLabel(post.category)}</Category>
                <Time>{formatTime(post.createdAt)}</Time>
              </Info>
            </About>
            <Stats>
              <PostLikes>
                <LikesIcon />
                {post.likes}
              </PostLikes>
              <PostComments>
                <MessageIcon />
                {post.commentCount}
              </PostComments>
            </Stats>
          </Container>
        );
      })}
      <Pagination page={page} pageCount={pageCount} onChange={setPage} />
    </>
  );
};

export default MyPosts;
