import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../common/Pagination";
import {
  Container,
  Comment,
  About,
  PostTitle,
  Time,
} from "../../../../styles/myPage/PostStyled";

const MyComments = ({ myId: myIdFromParent }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const myId = useMemo(() => {
    return myIdFromParent != null ? Number(myIdFromParent) : null;
  }, [myIdFromParent]);

  const myComments = useMemo(() => {
    if (myId == null) return [];
    return posts
      .flatMap((post) =>
        (Array.isArray(post?.comments) ? post.comments : [])
          .filter((c) => Number(c?.authorId) === Number(myId))
          .map((c) => ({
            id: c.id,
            content: c.content,
            createdAt: c.createdAt,
            postId: post.id,
            postTitle: post.title,
            team: post.team,
            post,
          }))
      )
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [posts, myId]);

  const [page, setPage] = useState(1);
  const pageSize = 3;
  const pageCount = Math.max(1, Math.ceil(myComments.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [myComments.length]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return myComments.slice(start, start + pageSize);
  }, [myComments, page]);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/mockTeamBoardPosts.json");
        const json = await res.json();
        setPosts(Array.isArray(json?.posts) ? json.posts : []);
      } catch (e) {
        setError("내 댓글을 불러오지 못했습니다.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleClick = (team, postId, postObj) => {
    navigate(`/${team}/post/${postId}`, { state: { post: postObj } });
  };

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

  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>{error}</div>;
  if (myId == null) return <div>로그인이 필요합니다.</div>;
  if (!pageItems.length) return <div>작성한 댓글이 없습니다.</div>;

  return (
    <div>
      {pageItems.map((c) => (
        <Container
          key={c.id}
          onClick={() => handleClick(c.team, c.postId, c.post)}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Comment>{c.content}</Comment>
          <About
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <PostTitle>게시글 : {c.postTitle}</PostTitle>
            <Time>{formatTime(c.createdAt)}</Time>
          </About>
        </Container>
      ))}
      <Pagination page={page} pageCount={pageCount} onChange={setPage} />
    </div>
  );
};

export default MyComments;
