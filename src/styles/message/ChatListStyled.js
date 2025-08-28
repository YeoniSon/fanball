import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 12px;
  width: 100%;
  height: calc(100vh - 220px);
  margin-top: 20px;
`;

export const ChatListContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* Row height used for scrollable body (5 rows visible) */
  --row-height: 68px;
`;

export const NoChat = styled.div`
  padding: 16px;
  text-align: center;
  color: #777;
`;

export const ChatListHeader = styled.h2`
  padding: 12px 16px;
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ChatItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: var(--row-height);
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$selected ? "#33912699" : "transparent"};

  &:hover {
    background-color: ${(props) => (props.$selected ? "#e0e7ff" : "#f5f5f5")};
  }
`;

export const ChatItemMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0; /* allow flex child to shrink for ellipsis */
`;

export const ChatListBody = styled.div`
  overflow-y: auto;
  max-height: calc(var(--row-height) * 5);
`;

export const ChatParticipant = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatLastMessage = styled.p`
  margin: 4px 0 0;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #3364eba6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
`;

export const ChatTime = styled.div`
  font-size: 0.85rem;
  color: #999;
`;

export const UnreadBadge = styled.div`
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
