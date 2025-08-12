import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ActionBox,
  ActionButton,
  IconContainer,
  ActionGrid,
  ActionTitle,
  ActionDescription,
  ActionContents,
  IconBox,
} from "../../../styles/HomePageStyled";

const ActionSection = ({ actionItems }) => {
  const navigate = useNavigate();

  const handleActionClick = (path) => {
    navigate(path);
  };

  // 아이콘 매핑 함수
  const getIcon = (iconType) => {
    switch (iconType) {
      case "ticket":
        return "🎫";
      case "player":
        return "👥";
      case "chat":
        return "💬";
      case "standings":
        return "📊";
      default:
        return "⚡";
    }
  };

  // 아이콘 색상 매핑 함수
  const getIconColor = (iconType) => {
    switch (iconType) {
      case "ticket":
        return "#3b82f6"; // 파란색
      case "player":
        return "#10b981"; // 초록색
      case "chat":
        return "#8b5cf6"; // 보라색
      case "standings":
        return "#f59e0b"; // 주황색
      default:
        return "#6b7280"; // 회색
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
      <ActionGrid>
        {actionItems.map((item, index) => (
          <ActionBox key={index}>
            <IconContainer>
              <IconBox style={{ backgroundColor: getIconColor(item.icon) }}>
                {getIcon(item.icon)}
              </IconBox>
            </IconContainer>
            <ActionContents>
              <ActionTitle>{item.title}</ActionTitle>
              <ActionDescription>{item.description}</ActionDescription>
              <ActionButton onClick={() => handleActionClick(item.path)}>
                바로가기
              </ActionButton>
            </ActionContents>
          </ActionBox>
        ))}
      </ActionGrid>
    </div>
  );
};

export default ActionSection;
