import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommentContainer,
  CommentHeader,
  CommentIcon,
  CommentBody,
  CommentForm,
  CommentTextArea,
  CommentButton,
  Comments,
  CommentContents,
  Author,
  Time,
  Content,
  OptionButton,
  EditMenu,
  EditMenuItem,
  EditActions,
  EditCancelButton,
} from "../../../styles/teamBoard/PostCommentStyled";

const PostComment = ({ post }) => {
  const currentUser = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const [comments, setComments] = useState(
    Array.isArray(post?.comments) ? post.comments : []
  );
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // 댓글 작성 로직 구현
    alert("저장버튼");
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

  const [openMenuId, setOpenMenuId] = useState(null);

  return (
    <>
      <CommentContainer>
        <CommentHeader>댓글 {post.commentCount}개</CommentHeader>
        {/* 댓글 작성 폼 */}
        {currentUser && (
          <CommentBody>
            <CommentForm>
              <CommentIcon>{currentUser.nickname.charAt(0)}</CommentIcon>
              <CommentTextArea placeholder="댓글을 입력하세요..." />
              <CommentButton onClick={handleCommentSubmit}>
                댓글 작성
              </CommentButton>
            </CommentForm>
          </CommentBody>
        )}
        {/* 댓글 목록 */}
        {comments.map((comment) => (
          <Comments key={comment.id}>
            <CommentIcon>{comment.author.charAt(0)}</CommentIcon>
            <CommentContents>
              <div>
                <Author>{comment.author}</Author>
                <Time>{getTimeBefore(comment.createdAt)}</Time>
              </div>
              {editingCommentId === comment.id ? (
                <>
                  <CommentTextArea
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    placeholder="댓글을 입력하세요..."
                  />
                  <EditActions>
                    <CommentButton
                      onClick={() => {
                        if (!editingText.trim()) {
                          alert("내용을 입력하세요.");
                          return;
                        }
                        setComments((prev) =>
                          prev.map((c) =>
                            c.id === comment.id
                              ? { ...c, content: editingText }
                              : c
                          )
                        );
                        setEditingCommentId(null);
                      }}
                    >
                      저장
                    </CommentButton>
                    <EditCancelButton
                      type="button"
                      onClick={() => setEditingCommentId(null)}
                    >
                      취소
                    </EditCancelButton>
                  </EditActions>
                </>
              ) : (
                <Content>{comment.content}</Content>
              )}
            </CommentContents>

            {currentUser &&
              currentUser.id === comment.authorId &&
              editingCommentId !== comment.id && (
                <>
                  <OptionButton
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === comment.id ? null : comment.id
                      )
                    }
                  >
                    ...
                  </OptionButton>
                  {openMenuId === comment.id &&
                    editingCommentId !== comment.id && (
                      <EditMenu>
                        <EditMenuItem
                          onClick={() => {
                            setEditingCommentId(comment.id);
                            setEditingText(comment.content || "");
                            setOpenMenuId(null);
                          }}
                        >
                          수정
                        </EditMenuItem>
                        <EditMenuItem onClick={() => alert("삭제 예정")}>
                          삭제
                        </EditMenuItem>
                      </EditMenu>
                    )}
                </>
              )}
          </Comments>
        ))}
      </CommentContainer>
    </>
  );
};

export default PostComment;
