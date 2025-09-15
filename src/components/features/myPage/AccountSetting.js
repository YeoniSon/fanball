import { useState } from "react";
import {
  SettingContainer,
  Changes,
  ChangeNickName,
  ChangeTeam,
  ChangePassword,
  Label,
  Content,
  EditButton,
  QuitButton,
  Select,
  Input,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalHeader,
  ModalBody,
  ModalSubTitle,
  ModalFieldLabel,
  ModalActions,
  ModalCloseButton,
  PasswordField,
  PasswordToggleButton,
} from "../../../styles/myPage/AccountSettingStyled";
import { Header } from "../../../styles/myPage/ProfileHeaderStyled";
import TeamInfo from "../../common/TeamInfo";
import {
  CogWheel,
  EditIcon,
  KeyIcon,
  ShowIcon,
  NoShowIcon,
} from "../../common/Icons";

const AccountSetting = ({ currentUser }) => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [isEditingTeam, setIsEditingTeam] = useState(false);

  const [nicknameDraft, setNicknameDraft] = useState(
    currentUser.nickname || ""
  );
  const [teamDraft, setTeamDraft] = useState(currentUser.favoriteTeam || "");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordDraft, setPasswordDraft] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    next: false,
    confirm: false,
  });

  const handleQuitClick = (id) => {
    alert(`탈퇴하기 기능은 아직 구현되지 않았습니다. (사용자 ID: ${id})`);
  };

  return (
    <SettingContainer>
      <Header>
        <CogWheel
          width={24}
          height={24}
          strokeWidth={0.1}
          color={"#5d5d5dff"}
        />
        계정 설정
      </Header>

      <Changes>
        <ChangeNickName>
          <Label>닉네임 변경</Label>
          {isEditingNickname ? (
            <Content>
              <Input
                type="text"
                value={nicknameDraft}
                maxLength={20}
                onChange={(e) => setNicknameDraft(e.target.value)}
              />
              <EditButton onClick={() => setIsEditingNickname(false)}>
                취소
              </EditButton>
              <EditButton
                onClick={() => {
                  if (!nicknameDraft.trim())
                    return alert("닉네임을 입력하세요.");
                  alert("닉네임이 저장되었습니다.");
                  setIsEditingNickname(false);
                }}
              >
                저장
              </EditButton>
            </Content>
          ) : (
            <Content>
              {nicknameDraft}
              <EditButton
                onClick={() => {
                  setIsEditingNickname(true);
                  setIsEditingTeam(false);
                  setPasswordModalOpen(false);
                }}
              >
                <EditIcon
                  width={15}
                  height={15}
                  strokeWidth={2}
                  color={"#5d5d5dff"}
                />
                수정
              </EditButton>
            </Content>
          )}
        </ChangeNickName>

        <ChangeTeam>
          <Label>응원팀 변경</Label>
          {isEditingTeam ? (
            <Content>
              <Select
                value={teamDraft}
                onChange={(e) => setTeamDraft(e.target.value)}
              >
                {(TeamInfo?.teamIcon || []).map((t) => (
                  <option key={t.id} value={t.label}>
                    {t.label}
                  </option>
                ))}
              </Select>
              <EditButton onClick={() => setIsEditingTeam(false)}>
                취소
              </EditButton>
              <EditButton
                onClick={() => {
                  if (!teamDraft) return alert("응원팀을 선택하세요.");
                  alert("응원팀이 저장되었습니다.");
                  setIsEditingTeam(false);
                }}
              >
                저장
              </EditButton>
            </Content>
          ) : (
            <Content>
              {teamDraft}
              <EditButton
                onClick={() => {
                  setIsEditingNickname(false);
                  setIsEditingTeam(true);
                  setPasswordModalOpen(false);
                }}
              >
                <EditIcon
                  width={15}
                  height={15}
                  strokeWidth={2}
                  color={"#5d5d5dff"}
                />
                수정
              </EditButton>
            </Content>
          )}
        </ChangeTeam>

        <ChangePassword>
          <Label>비밀번호 변경</Label>
          <Content>
            {"********"}
            <EditButton onClick={() => setPasswordModalOpen(true)}>
              <KeyIcon
                width={13}
                height={13}
                strokeWidth={2}
                color={"#5d5d5dff"}
              />
              변경
            </EditButton>
          </Content>
        </ChangePassword>
      </Changes>
      {passwordModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <div>
                <ModalTitle>비밀번호 변경</ModalTitle>
                <ModalSubTitle>
                  새로운 비밀번호를 설정하세요. 8자 이상의 안전한 비밀번호를
                  사용하세요.
                </ModalSubTitle>
              </div>
              <ModalCloseButton onClick={() => setPasswordModalOpen(false)}>
                X
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <div>
                <ModalFieldLabel>현재 비밀번호</ModalFieldLabel>
                <PasswordField>
                  <Input
                    type={showPassword.current ? "text" : "password"}
                    value={passwordDraft.current}
                    onChange={(e) =>
                      setPasswordDraft((p) => ({
                        ...p,
                        current: e.target.value,
                      }))
                    }
                  />
                  <PasswordToggleButton
                    onClick={() =>
                      setShowPassword((s) => ({ ...s, current: !s.current }))
                    }
                    aria-label="현재 비밀번호 보기"
                  >
                    {showPassword.current ? (
                      <NoShowIcon
                        width={15}
                        height={15}
                        strokeWidth={2}
                        color={"#5d5d5dff"}
                      />
                    ) : (
                      <ShowIcon
                        width={15}
                        height={15}
                        strokeWidth={2}
                        color={"#5d5d5dff"}
                      />
                    )}
                  </PasswordToggleButton>
                </PasswordField>
              </div>
              <div>
                <ModalFieldLabel>새 비밀번호</ModalFieldLabel>
                <PasswordField>
                  <Input
                    type={showPassword.next ? "text" : "password"}
                    value={passwordDraft.next}
                    onChange={(e) =>
                      setPasswordDraft((p) => ({ ...p, next: e.target.value }))
                    }
                  />
                  <PasswordToggleButton
                    onClick={() =>
                      setShowPassword((s) => ({ ...s, next: !s.next }))
                    }
                    aria-label="새 비밀번호 보기"
                  >
                    {showPassword.next ? (
                      <NoShowIcon
                        width={15}
                        height={15}
                        strokeWidth={2}
                        color={"#5d5d5dff"}
                      />
                    ) : (
                      <ShowIcon
                        width={15}
                        height={15}
                        strokeWidth={2}
                        color={"#5d5d5dff"}
                      />
                    )}
                  </PasswordToggleButton>
                </PasswordField>
              </div>
              <div>
                <ModalFieldLabel>비밀번호 확인</ModalFieldLabel>
                <PasswordField>
                  <Input
                    type={showPassword.confirm ? "text" : "password"}
                    value={passwordDraft.confirm}
                    onChange={(e) =>
                      setPasswordDraft((p) => ({
                        ...p,
                        confirm: e.target.value,
                      }))
                    }
                  />
                  <PasswordToggleButton
                    onClick={() =>
                      setShowPassword((s) => ({ ...s, confirm: !s.confirm }))
                    }
                    aria-label="비밀번호 확인 보기"
                  >
                    {showPassword.confirm ? (
                      <NoShowIcon
                        width={15}
                        height={15}
                        strokeWidth={2}
                        color={"#5d5d5dff"}
                      />
                    ) : (
                      <ShowIcon
                        width={15}
                        height={15}
                        strokeWidth={2}
                        color={"#5d5d5dff"}
                      />
                    )}
                  </PasswordToggleButton>
                </PasswordField>
              </div>
              <ModalActions>
                <EditButton onClick={() => setPasswordModalOpen(false)}>
                  취소
                </EditButton>
                <EditButton
                  onClick={() => {
                    if (
                      !passwordDraft.current ||
                      !passwordDraft.next ||
                      !passwordDraft.confirm
                    ) {
                      alert("모든 비밀번호 입력란을 채워주세요.");
                      return;
                    }
                    if (passwordDraft.next !== passwordDraft.confirm) {
                      alert("새 비밀번호가 일치하지 않습니다.");
                      return;
                    }
                    alert("비밀번호가 변경되었습니다.");
                    setPasswordDraft({ current: "", next: "", confirm: "" });
                    setPasswordModalOpen(false);
                  }}
                >
                  저장
                </EditButton>
              </ModalActions>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
      <QuitButton onClick={() => handleQuitClick(currentUser.id)}>
        탈퇴하기
      </QuitButton>
    </SettingContainer>
  );
};

export default AccountSetting;
