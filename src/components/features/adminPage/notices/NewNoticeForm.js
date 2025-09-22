import { Length } from "../../../../styles/teamBoard/NewPostContentsStyled";
import { useNavigate } from "react-router-dom";
import {
  InfoIcon,
  MegaphoneIcon,
  SaveIcon,
  CancelIcon,
} from "../../../common/Icons";
import { useState } from "react";
import {
  Header,
  Title,
  Form,
  FormContainer,
  Items,
  Label,
  TextArea,
  NoticeSetting,
  NoticeForm,
  Select,
  SelectItem,
  SelectLabel,
  Description,
  SaveButton,
  CheckBox,
  RightColumn,
  Buttons,
  CancelButton,
} from "../../../../styles/adminPage/notice/NewNoticeStyled";
const NewNoticeForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleNoticeSave = (title, content, pinned, active) => {
    alert(
      `공지사항이 저장되었습니다!\n\n제목: ${title}\n내용: ${content}\n고정: ${pinned}\n활성화: ${active}`
    );
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setPinned(false);
    setActive(true);
    navigate(-1);
  };

  return (
    <>
      {" "}
      <FormContainer>
        <NoticeForm>
          <Header>
            <MegaphoneIcon width={24} height={24} color="#8f22eeff" />
            <Title color="#000" size="18px">
              공지사항 내용
            </Title>
          </Header>

          <Form>
            <Items>
              <Label>제목 *</Label>
              <TextArea
                placeholder="공지사항 제목을 입력하세요"
                maxLength={100}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Length>{title.length} / 100</Length>
            </Items>
            <Items>
              <Label>내용 *</Label>
              <TextArea
                placeholder="공지사항 내용을 입력하세요"
                style={{ height: "300px" }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Items>
          </Form>
        </NoticeForm>
        <RightColumn>
          <NoticeSetting>
            <Header>
              <InfoIcon width={20} height={20} color="#23a3adff" />
              <Title color="#000" size="18px">
                공지사항 설정
              </Title>
            </Header>
            <Select>
              <SelectItem>
                <SelectLabel>
                  <Label paddingLeft="3px">고정</Label>
                  <Description>공지사항 목록 상단에 고정합니다</Description>
                </SelectLabel>
                <CheckBox
                  type="checkbox"
                  checked={pinned}
                  onChange={() => setPinned(!pinned)}
                />
              </SelectItem>
              <SelectItem>
                <SelectLabel>
                  <Label paddingLeft="3px">활성화</Label>
                  <Description>작성 후 바로 사용자에게 공개합니다</Description>
                </SelectLabel>
                <CheckBox
                  type="checkbox"
                  checked={active}
                  onChange={() => setActive(!active)}
                />
              </SelectItem>
            </Select>
          </NoticeSetting>
          <Buttons>
            <SaveButton
              onClick={(title, content, pinned, active) =>
                handleNoticeSave(title, content, pinned, active)
              }
            >
              <SaveIcon /> 공지사항 저장
            </SaveButton>
            <CancelButton onClick={() => handleCancel()}>
              <CancelIcon /> 취소
            </CancelButton>
          </Buttons>
        </RightColumn>
      </FormContainer>
    </>
  );
};
export default NewNoticeForm;
