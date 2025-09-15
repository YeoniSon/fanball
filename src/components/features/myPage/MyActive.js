import { useMemo, useState } from "react";
import {
  Container,
  Title,
  SelectBarContainer,
  Select,
} from "../../../styles/myPage/MyActiveStyled";
import MyComments from "./posts/MyComments";
import MyPosts from "./posts/MyPosts";
import BookMarks from "./posts/BookMarks";
import MyTickets from "./posts/MyTickets";

const MyActive = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState("myTickets");

  const myId = useMemo(() => {
    const raw = currentUser?.id;
    const digits = raw != null ? String(raw).match(/\d+/)?.[0] : null;
    return digits ? Number(digits) : null;
  }, [currentUser?.id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "myPosts":
        return <MyPosts myId={myId} />;
      case "myComments":
        return <MyComments myId={myId} />;
      case "bookmarks":
        return <BookMarks myId={myId} />;
      case "myTickets":
        return <MyTickets myId={myId} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <Title>내 활동</Title>
        <SelectBarContainer>
          <Select
            isActive={activeTab === "myTickets"}
            onClick={() => handleTabClick("myTickets")}
          >
            판매 티켓
          </Select>
          <Select
            isActive={activeTab === "myPosts"}
            onClick={() => handleTabClick("myPosts")}
          >
            작성한 글
          </Select>
          <Select
            isActive={activeTab === "myComments"}
            onClick={() => handleTabClick("myComments")}
          >
            작성한 댓글
          </Select>
          <Select
            isActive={activeTab === "bookmarks"}
            onClick={() => handleTabClick("bookmarks")}
          >
            즐겨찾기
          </Select>
        </SelectBarContainer>
        {renderContent()}
      </Container>
    </>
  );
};

export default MyActive;
