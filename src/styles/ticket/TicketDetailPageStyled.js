import styled from "styled-components";

export const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  gap: 0.7rem;

  &:hover {
    color: #f59e0b;
  }
`;

export const DetailContainer = styled.div`
  margin-top: 30px;
  background: transparent;
`;

export const DetailHeader = styled.div`
  display: flex;
  background: linear-gradient(to right, #c9915fff, #7a26a4ff);
  padding: 2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const TeamBoard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 1rem 0 0;
  gap: 5rem;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const HomeTeam = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const AwayTeam = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const TeamLogo = styled.div`
  width: 70px;
  height: 40px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Vs = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: white;
  margin: 0 1rem;
`;

export const AwaySign = styled.div`
  font-size: 16px;
  font-weight: 200;
  color: white;
`;

export const HomeSign = styled.div`
  font-size: 16px;
  font-weight: 200;
  color: white;
`;

export const GameTimeTable = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  color: white;
`;

export const GameDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  gap: 0.5rem;
`;

export const GameTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  gap: 0.5rem;
`;

export const GameLocation = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const DetailBody = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  background: white;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border: 1px solid rgba(135, 133, 133, 0.27);
`;

export const SeatInfoContainer = styled.div`
  padding: 2rem;
  background: linear-gradient(to right, #b1e68671, #83a8f182);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PageLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const SideBar = styled.aside`
  position: sticky;
  top: 12px;
  align-self: start;
  height: fit-content;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;
  flex: 0 0 280px;
`;

export const PriceBox = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
`;

export const PriceValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f42c09;
`;

export const OriginalValue = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-decoration: line-through;
`;

export const MessageButton = styled.button`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #0e6f04;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

export const SellerBox = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
`;

export const PostMeta = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  font-size: 12px;
  color: #6b7280;
`;

export const SeatInfoHeader = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #181819ff;
  margin-bottom: 1rem;
`;

export const SeatInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  color: #4b5563;
  line-height: 1.5;
`;

export const SeatInfo = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #4b5563;
  gap: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  background: transparent;
`;

export const BookmarkButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;
<<<<<<< HEAD

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;
  top: 30px;

  &:hover {
    color: blue;
  }
`;

export const EditMenu = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 20;
  min-width: 120px;
`;

export const EditMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 10px 12px;
  background: #fff;
  border: 0;
  border-bottom: 1px solid #f3f4f6;
  text-align: left;
  cursor: pointer;
`;
=======
>>>>>>> parent of 733d851 (Revert "[17-MYPAGE] 마이페이지 구현")
