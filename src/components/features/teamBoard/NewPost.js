import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  NewPostContainer,
  Header,
  SelectOption,
  TeamSelectOptions,
  Label,
  CategorySelectOptions,
  DropdownContainer,
  DropdownButton,
  DropdownValue,
  DropdownCaret,
  DropdownList,
  DropdownItem,
  DropdownLogo,
  DropdownLabel,
} from "../../../styles/teamBoard/NewPostStyled";
import TeamInfo from "../../common/TeamInfo";
import { Hr } from "../../../styles/liveChat/LiveChatMainStyled";
import NewPostContents from "./NewPostContents";

const NewPost = () => {
  const { teamId } = useParams();
  const [teamSelected, setTeamSelected] = useState(teamId);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [category, setCategory] = useState("free");

  return (
    <>
      <NewPostContainer>
        <Header>새 게시글 작성</Header>
        <SelectOption>
          <TeamSelectOptions>
            <Label>게시판 선택</Label>
            <DropdownContainer>
              <DropdownButton
                onClick={() => {
                  setTeamDropdownOpen((v) => !v);
                  setCategoryDropdownOpen(false);
                }}
                type="button"
              >
                <DropdownValue>
                  {(() => {
                    const t = (TeamInfo?.teamIcon || []).find(
                      (x) => x.id === teamSelected
                    );
                    return (
                      <>
                        <DropdownLogo src={t.logo} alt={t.label} />
                        <DropdownLabel>{t.label}</DropdownLabel>
                      </>
                    );
                  })()}
                </DropdownValue>
                {teamDropdownOpen ? (
                  <DropdownCaret>▴</DropdownCaret>
                ) : (
                  <DropdownCaret>▾</DropdownCaret>
                )}
              </DropdownButton>
              {teamDropdownOpen && (
                <DropdownList>
                  {(TeamInfo?.teamIcon || []).map((team) => (
                    <DropdownItem
                      key={team.id}
                      onClick={() => {
                        setTeamSelected(team.id);
                        setTeamDropdownOpen(false);
                      }}
                    >
                      <DropdownLogo src={team.logo} alt={team.label} />
                      <DropdownLabel>{team.label}</DropdownLabel>
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </DropdownContainer>
          </TeamSelectOptions>
          <CategorySelectOptions>
            <Label>카테고리</Label>
            <DropdownContainer>
              <DropdownButton
                onClick={() => {
                  setCategoryDropdownOpen((v) => !v);
                  setTeamDropdownOpen(false);
                }}
                type="button"
              >
                <DropdownValue>
                  {(() => {
                    const c = [
                      { id: "free", label: "자유게시판" },
                      { id: "review", label: "경기 후기" },
                      { id: "player", label: "선수" },
                    ].find((x) => x.id === category);
                    return (
                      <>
                        <DropdownLabel>{c.label}</DropdownLabel>
                      </>
                    );
                  })()}
                </DropdownValue>
                {categoryDropdownOpen ? (
                  <DropdownCaret>▴</DropdownCaret>
                ) : (
                  <DropdownCaret>▾</DropdownCaret>
                )}
              </DropdownButton>
              {categoryDropdownOpen && (
                <DropdownList>
                  {[
                    { id: "free", label: "자유게시판" },
                    { id: "review", label: "경기 후기" },
                    { id: "player", label: "선수" },
                  ].map((category) => (
                    <DropdownItem
                      key={category.id}
                      onClick={() => {
                        setCategory(category.id);
                        setCategoryDropdownOpen(false);
                      }}
                    >
                      <DropdownLabel>{category.label}</DropdownLabel>
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </DropdownContainer>
          </CategorySelectOptions>
        </SelectOption>
        <Hr />
        <NewPostContents />
      </NewPostContainer>
    </>
  );
};

export default NewPost;
