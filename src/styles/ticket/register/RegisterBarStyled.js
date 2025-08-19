import styled from "styled-components";

export const StepBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px 16px;
  margin: 20px 0 20px;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StepDot = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.$active ? "#0e6f04" : p.$completed ? "#7aa6ff" : "#ccd6f6"};
`;

export const StepLabel = styled.span`
  font-size: 13px;
  color: ${(p) => (p.$active ? "#0e6f04" : "#666")};
  font-weight: ${(p) => (p.$active ? 600 : 400)};
`;

export const StepSeparator = styled.div`
  flex: 1;
  height: 3px;
  background-color: #e5e7eb;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const NavButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid rgba(135, 133, 133, 0.27);
  background-color: ${(p) => (p.$primary ? "#0e6f04" : "#f3f4f6")};
  color: ${(p) => (p.$primary ? "#fff" : "#111827")};
  cursor: pointer;

  &:disabled {
    background-color: ${(p) => (p.$primary ? "#9acb94" : "#e5e7eb")};
    color: #9ca3af;
    cursor: not-allowed;
  }
`;
