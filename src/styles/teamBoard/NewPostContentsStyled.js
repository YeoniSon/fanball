import styled from "styled-components";

export const ContentsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentsTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin: 12px 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

export const Length = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Caution = styled.div`
  border: 1px solid #eee;
  background-color: #eee;
  border-radius: 8px;
  padding: 0 20px 20px 20px;
  margin: 20px 0;
`;

export const CautionTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CautionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CautionItem = styled.li`
  font-size: 12px;
  color: #856404;
  margin-bottom: 4px;
`;
