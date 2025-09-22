import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  border-radius: 12px;
  background: linear-gradient(90deg, #8f4de5ff 0%, #366cf4ff 100%);
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.size || "28px"};
  color: ${(props) => props.color || "#fff"};
  margin: 10px 0;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: start;
`;

export const NoticeForm = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Form = styled.div`
  background-color: #fff;
`;

export const Items = styled.div`
  padding-right: 30px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  padding-left: ${(props) => props.paddingLeft || "10px"};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  overflow-y: auto;

  &:focus {
    border-color: #366cf4ff;

    outline: none;
    box-shadow: 0 0 5px rgba(54, 108, 244, 0.5);
  }
`;

export const NoticeSetting = styled.div`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const RightColumn = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// New: Settings list styles
export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
`;

export const SelectLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
`;

// New: Checkbox styled as sliding toggle
export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  width: 44px;
  height: 24px;
  background: #e5e7eb;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  border: 1px solid #d1d5db;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 3px;
    width: 18px;
    height: 18px;
    background: #ffffff;
    border-radius: 50%;
    transform: translate(0, -50%);
    transition: transform 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  &:checked {
    background: #10b981;
    border-color: #10b981;
  }

  &:checked::after {
    transform: translate(20px, -50%);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 93%;
  margin: 20px 0 0 0;
  background-color: #fff;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-self: stretch;
`;

export const SaveButton = styled.button`
  background-color: #9b36f4ff;
  width: 100%;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  &:hover {
    background-color: #5f1bb1ff;
  }
`;

export const CancelButton = styled.button`
  background-color: #ffffff;
  color: #374151;
  border: 1px solid #dddddd;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  &:hover {
    background-color: #d1d5db;
  }
`;
