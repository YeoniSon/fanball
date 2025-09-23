import styled from "styled-components";

export const NoticeDetailContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid #d0e6ffff;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  border-bottom: 1px solid #d0e6ffff;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const PinnedBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #5faaffff, #3535f9ff);
  padding: 15px;
  color: white;
  gap: 10px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-bottom: 10px;
`;

export const BannerTitle = styled.span`
  font-weight: bold;
  margin-left: 5px;
  font-size: 1.2rem;
`;

export const BadgeContainer = styled.div`
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #fff;
  background-color: ${(props) =>
    props.className === "pinned" ? "#ff5722" : "#2196f3"};
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const UploadInfo = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Body = styled.div`
  padding: 0 20px 20px 20px;
  font-size: 1rem;
  line-height: 1.6;
`;

export const Content = styled.div`
  min-height: 400px;
`;
