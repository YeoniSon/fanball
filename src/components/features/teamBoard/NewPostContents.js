import { useState } from "react";
import {
  ContentsForm,
  ContentsTitle,
  Label,
  Input,
  Length,
  Content,
  Caution,
  CautionTitle,
  CautionList,
  CautionItem,
} from "../../../styles/teamBoard/NewPostContentsStyled";

const NewPostContents = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <ContentsForm>
        <ContentsTitle>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            maxLength={100}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Length>{title.length}/100</Length>
        </ContentsTitle>
        <Content>
          <Label>내용</Label>
          <Input
            type="text"
            placeholder="내용을 입력하세요..."
            maxLength={5000}
            onChange={(e) => setContent(e.target.value)}
          />
          <Length>{content.length}/5000</Length>
        </Content>
      </ContentsForm>

      <Caution>
        <CautionTitle>게시글 작성 주의사항</CautionTitle>
        <CautionList>
          <CautionItem>
            1. 서로 존중하는 마음으로 글을 작성해주세요.
          </CautionItem>
          <CautionItem>2. 욕설, 비방, 도배는 삼가해 주세요.</CautionItem>
          <CautionItem>3. 개인정보나 연락처는 공개하지 마세요.</CautionItem>
          <CautionItem>4. 티켓 거래는 전용 게시판을 이용해 주세요.</CautionItem>
          <CautionItem>
            5. 저작권을 침해하는 내용은 게시할 수 없습니다.
          </CautionItem>
        </CautionList>
      </Caution>
    </>
  );
};

export default NewPostContents;
