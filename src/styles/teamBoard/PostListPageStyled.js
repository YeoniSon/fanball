import styled from "styled-components";

export const PostListContainer = styled.div`
  padding: 16px;
  margin-top: 20px;
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;

export const SelectOptions = styled.select`
  padding: 8px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: auto;
  background-color: #dddddd59;
`;

export const SelectOption = styled.option`
  padding: 8px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #cdcdcdff;
  border-radius: 10px;
  margin: 15px 0;
`;

export const PostAuthorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cdcdcd;
  color: black;
  text-align: center;
  line-height: 36px;
  font-weight: bold;
  margin-right: 12px;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  gap: 8px;
`;

export const Author = styled.div`
  font-size: 14px;
`;

export const Likes = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
  line-height: 1;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const Comments = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
  line-height: 1;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const Views = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #888;
  line-height: 1;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const Category = styled.div`
  font-size: 12px;
  color: #da2525ff;
  border: 1px solid #da2525ff;
  padding: 4px 12px;
  border-radius: 20px;
`;

export const Time = styled.div`
  font-size: 12px;
  color: #888;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
`;

export const Content = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
