import styled from "styled-components";

export const CommentContainer = styled.div`
  border: 1px solid #ddd;
  padding: 0 30px;
  margin-top: 30px;
  border-radius: 10px;
`;

export const CommentHeader = styled.h3`
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const CommentIcon = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
`;

export const CommentBody = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CommentTextArea = styled.textarea`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  resize: none;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
`;

export const CommentButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;

  margin-top: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  width: 100%;
`;

export const Author = styled.span`
  font-weight: bold;
`;

export const Time = styled.span`
  color: #999;
  font-size: 12px;
  margin-left: 10px;
`;

export const Content = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: normal;
`;

export const OptionButton = styled.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 24px;
  background: none;
  border: none;
  border-radius: 6px;
  color: #999;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #f0f0f0;
    color: #333;
  }
`;

export const EditMenu = styled.div`
  position: absolute;
  top: 38px;
  right: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 2;
  width: 120px;
  padding: 4px 0;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #e5e7eb;
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
  }
`;

export const EditMenuItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

export const EditActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
`;

export const EditCancelButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
  }
`;
