import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostContainer,
  PostHeader,
  PostAuthorIcon,
  Author,
  AuthorName,
  Info,
  Time,
  View,
  EditButton,
  EditMenu,
  EditMenuItem,
  PostCategory,
  PostBody,
  PostTitle,
  PostContent,
  About,
} from "../../../styles/teamBoard/PostDetailStyled";
import { Hr } from "../../../styles/ticket/sellTicket/SellTicketContentStyled";
import {
  Comments,
  Likes,
  Views,
} from "../../../styles/teamBoard/PostListPageStyled";
import { LikesIcon, MessageIcon, ViewsIcon } from "../../common/Icons";

const PostDetail = ({ post }) => {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const [likedUserIds, setLikedUserIds] = useState(
    Array.isArray(post?.likedUserIds)
      ? post.likedUserIds.map((v) => Number(v)).filter((v) => !Number.isNaN(v))
      : []
  );

  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const isLikedByMe = useMemo(() => {
    const myId = currentUser?.id;
    if (myId == null) return false;
    return likedUserIds.includes(myId);
  }, [likedUserIds, currentUser?.id]);

  const handleToggleLike = (e) => {
    e?.stopPropagation?.();
    const myId = Number(currentUser?.id);
    if (myId == null) {
      alert("로그인이 필요합니다.");
      return;
    }
    setLikedUserIds((prev) => {
      const normalized = prev
        .map((v) => Number(v))
        .filter((v) => !Number.isNaN(v));
      if (normalized.includes(myId)) {
        return normalized.filter((id) => id !== myId);
      }
      return Array.from(new Set([...normalized, myId]));
    });
  };

  if (!post) return <div>게시글을 불러오는 중…</div>;

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

  const handleEdit = () => {
    navigate(`/${post.team}/post/edit/${post.id}`);
  };

  const getCategoryName = (category) => {
    switch (category) {
      case "free":
        return "자유 게시판";
      case "review":
        return "경기 후기";
      case "player":
        return "선수";
      default:
        return "기타";
    }
  };

  return (
    <>
      <PostContainer>
        <PostHeader>
          <PostAuthorIcon>{post.author.charAt(0)}</PostAuthorIcon>
          <Author>
            <AuthorName>{post.author}</AuthorName>
            <Info>
              <Time>{getTimeBefore(post.createdAt)}</Time>
              {"."}
              <View>조회 {post.views}</View>
            </Info>
          </Author>
          {!currentUser || currentUser.id !== post.authorId ? null : (
            <EditButton
              onClick={() =>
                setOpenMenuId(openMenuId === post.id ? null : post.id)
              }
            >
              ...
            </EditButton>
          )}
          {openMenuId === post.id && (
            <EditMenu>
              <EditMenuItem onClick={() => handleEdit()}>수정</EditMenuItem>
              <EditMenuItem onClick={() => alert("삭제 확인 모달 예정")}>
                삭제
              </EditMenuItem>
            </EditMenu>
          )}
        </PostHeader>
        <PostCategory>{getCategoryName(post.category)}</PostCategory>
        <PostBody>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </PostBody>
        <Hr style={{ marginTop: "20px" }} />
        <About>
          <Likes
            $active={isLikedByMe}
            onClick={handleToggleLike}
            style={{ cursor: "pointer" }}
          >
            <LikesIcon />
            {likedUserIds.length}
          </Likes>
          <Views>
            <ViewsIcon />
            {post.views}
          </Views>
          <Comments>
            <MessageIcon />
            {post.commentCount}
          </Comments>
        </About>
      </PostContainer>
    </>
  );
};

export default PostDetail;
