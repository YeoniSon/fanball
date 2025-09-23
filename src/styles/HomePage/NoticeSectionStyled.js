import styled from "styled-components";

export const NoticeContainer = styled.div`
  width: auto;
  padding: 0 20px;
  margin: 15px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 700;
`;

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #6c757d;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #5c5f61ff;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
`;

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 0 20px 20px 20px;
  gap: 8px;

  h3 {
    font-size: 16px;
    margin: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const Date = styled.span`
  font-size: 12px;
  color: #888888;
  gap: 4px;
`;

export const Content = styled.p`
  font-size: 16px;
  color: #333333;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: min-content;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  background-color: #898c90ff;
  border-radius: 12px;
  padding: 6px 12px;
  margin-top: 10px;

  &:hover {
    background-color: #6c757d;
  }
`;

export const DetailButton = styled.button`
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
`;
