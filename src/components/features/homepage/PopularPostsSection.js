import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PopularPostsContainer,
  PopularPostsHeader,
  PopularPostsTitle,
  CommunityButton,
  PopularPostsContent,
  PostList,
  PostItem,
  PostAvatar,
  PostAvatarFallback,
  PostContent,
  PostTitle,
  PostMeta,
  PostAuthor,
  PostTeam,
  PostTime,
  PostStats,
  PostLikes,
  PostComments,
  PostIcon,
} from "../../../styles/HomePage/PopularPostsSectionStyled";

const PopularPostsSection = () => {
  const navigate = useNavigate();
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch("/mockPosts.json");
        const data = await response.json();
        setPopularPosts(data.popularPosts);
        setLoading(false);
      } catch (error) {
        console.error("인기 게시글 데이터 로드 실패:", error);
        setLoading(false);
      }
    };

    fetchPopularPosts();
  }, []);

  const handleCommunityClick = () => {
    navigate("/board-write");
  };

  const handlePostClick = (postId, team) => {
    navigate(`/${team}/post/${postId}`);
  };

  const TrendingUpIcon = () => (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const ThumbsUpIcon = () => (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  );

  const MessageSquareIcon = () => (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );

  // 처음 3개 게시글만 표시
  const displayPosts = popularPosts.slice(0, 3);

  if (loading) {
    return (
      <PopularPostsContainer>
        <div>인기 게시글을 불러오는 중...</div>
      </PopularPostsContainer>
    );
  }

  return (
    <PopularPostsContainer>
      <PopularPostsHeader>
        <PopularPostsTitle>
          <TrendingUpIcon />
          인기 게시글
        </PopularPostsTitle>
        <CommunityButton onClick={handleCommunityClick}>
          커뮤니티 참여하기 <ArrowRightIcon />
        </CommunityButton>
      </PopularPostsHeader>

      <PopularPostsContent>
        <PostList>
          {displayPosts.map((post) => (
            <PostItem
              key={post.id}
              onClick={() => handlePostClick(post.id, post.team)}
            >
              <PostAvatar>
                <PostAvatarFallback>{post.author.charAt(0)}</PostAvatarFallback>
              </PostAvatar>

              <PostContent>
                <PostTitle>{post.title}</PostTitle>

                <PostMeta>
                  <PostAuthor>{post.author}</PostAuthor>
                  <PostTeam>{post.team}</PostTeam>
                  <PostTime>{post.time}</PostTime>
                </PostMeta>

                <PostStats>
                  <PostLikes>
                    <PostIcon>
                      <ThumbsUpIcon />
                    </PostIcon>
                    {post.likes}
                  </PostLikes>
                  <PostComments>
                    <PostIcon>
                      <MessageSquareIcon />
                    </PostIcon>
                    {post.comments}
                  </PostComments>
                </PostStats>
              </PostContent>
            </PostItem>
          ))}
        </PostList>
      </PopularPostsContent>
    </PopularPostsContainer>
  );
};

export default PopularPostsSection;
