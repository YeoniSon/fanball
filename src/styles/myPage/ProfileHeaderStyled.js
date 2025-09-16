import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border: 1px solid #eee;
  border-radius: 12px;
`;

export const Header = styled.h2`
  font-size: 12px;
  font-weight: bold;
  gap: 8px;
  color: black;
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#eee"};
  margin-right: 16px;
  position: relative;
  z-index: 1;
`;

export const Avatar = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const TeamLogo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

export const TeamIcon = styled.div`
  position: absolute;
  left: 50px;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid ${(props) => props.color || "#eee"};
  z-index: 2;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
  padding: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0 30px 0;
`;

export const UserName = styled.div`
  font-size: 24px;
  padding: 0 12px 0 0;
  line-height: 1.2;
  color: black;
`;

export const TeamBadge = styled.div`
  background-color: ${(props) => props.color || "#eee"};
  color: white;
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  line-height: 1;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: bold;
`;

export const UserInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
  row-gap: 12px;
  padding: 12px 0;
`;

export const UserId = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: black;
`;

export const Content = styled.span`
  margin-left: 4px;
  font-weight: bold;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: #696969;
  margin-bottom: 4px;
`;

export const UserEmail = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: black;
`;

export const NickName = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: black;
`;

export const JoinDate = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: black;
`;
