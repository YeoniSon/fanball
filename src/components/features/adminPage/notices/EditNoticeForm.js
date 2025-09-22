import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Length } from "../../../../styles/teamBoard/NewPostContentsStyled";
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
import {
  PencilIcon,
  SaveIcon,
  CancelIcon,
  InfoIcon,
} from "../../../common/Icons";

const EditNoticeForm = () => {
  const { noticeId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch("/mockNotices.json");
        const data = await response.json();
        const list = Array.isArray(data?.notices) ? data.notices : [];
        const notice = list.find((n) => String(n?.id) === String(noticeId));
        setTitle(notice?.title || "");
        setContent(notice?.content || "");
        setPinned(!!notice?.pinned);
        setActive(!!notice?.active);
      } catch (error) {
        console.error("Error fetching notice:", error);
      }
    };
    fetchNotice();
  }, [noticeId]);

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
      <FormContainer>
        <NoticeForm>
          <Header>
            <PencilIcon width={24} height={24} color="#8f22eeff" />
            <Title color="#000" size="18px">
              공지사항 내용
            </Title>
          </Header>

          <Form>
            <Items>
              <Label>제목</Label>
              <TextArea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
              />
              <Length>{(title || "").length} / 100</Length>
            </Items>
            <Items>
              <Label>내용</Label>
              <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ height: "300px" }}
              />
            </Items>
          </Form>
        </NoticeForm>
        <RightColumn>
          <NoticeSetting>
            <Header>
              <InfoIcon width={20} height={20} color="#366cf4ff" />
              <Title color="#000" size="16px">
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

export default EditNoticeForm;
