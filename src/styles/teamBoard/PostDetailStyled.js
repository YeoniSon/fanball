import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-top: 20px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const PostAuthorIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-weight: normal;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #999;
`;

export const Time = styled.div``;

export const View = styled.div``;

export const EditButton = styled.button`
  display: inline-flex;
  justify-content: center;
  width: 30px;
  height: 26px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 6px;
  margin-left: auto;
  color: #999;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;

    color: #333;
  }
`;

export const EditMenu = styled.div`
  position: absolute;
  top: auto;
  right: 1rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 2;
  width: 130px;
  padding: 4px 0;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    right: 18px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #e5e7eb;
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: 18px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
  }
`;

export const EditMenuItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

export const PostCategory = styled.div`
  display: inline-block;
  font-size: 12px;
  color: #6b7280;
  margin-left: 20px;
  border: none;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 8px;
  color: black;
`;

export const PostBody = styled.div`
  padding: 0 20px;
`;

export const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PostContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 15px;
`;
