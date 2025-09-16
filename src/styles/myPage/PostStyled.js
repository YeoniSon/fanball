import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background-color: #f9f9f9;
  margin-bottom: 12px;

  &:hover {
    background: #f9f9f9;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Category = styled.div`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #b5b3b3ff;
  color: #666;
`;

export const Team = styled.div`
  font-size: 12px;
  color: white;
  background-color: ${(props) => props.color || "black"};
  border-radius: 4px;
  padding: 2px 8px;
  display: flex;
  align-items: center;
`;

export const TeamIcon = styled.img`
  border-radius: 50%;
  margin-right: 6px;
`;

export const Time = styled.div`
  font-size: 12px;
  color: #999;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  gap: 8px;
`;

export const PostLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PostComments = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Comment = styled.div`
  margin-bottom: 5px;
`;

export const PostTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #333;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  gap: 4px;
`;

export const Teams = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 4px;
`;

export const Home = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Away = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Stadium = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
`;

<<<<<<< HEAD
export const Buttons = styled.div`
  display: flex;
  margin: 3px 0;
  gap: 8px;
`;

export const EditButton = styled.button`
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 6px;
  color: #007bff;

  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const DeleteButton = styled.button`
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 6px;
  color: #dc3545;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

=======
>>>>>>> parent of 733d851 (Revert "[17-MYPAGE] 마이페이지 구현")
export const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const SellBadge = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;
