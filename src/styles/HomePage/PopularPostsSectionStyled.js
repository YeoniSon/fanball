import styled from "styled-components";

export const PopularPostsContainer = styled.div`
  background: white;
  flex: 1;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
`;

export const PopularPostsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const PopularPostsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #3b82f6;
  }
`;

export const CommunityButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }
`;

export const PopularPostsContent = styled.div`
  // 스타일은 기본값 사용
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PostItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const PostAvatar = styled.div`
  flex-shrink: 0;
`;

export const PostAvatarFallback = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
`;

export const PostContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PostTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

export const PostAuthor = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
`;

export const PostTeam = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  padding: 0.25rem 0.5rem;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

export const PostTime = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const PostStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PostLikes = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
`;

export const PostComments = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
`;

export const PostIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
