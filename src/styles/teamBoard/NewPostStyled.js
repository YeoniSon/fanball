import styled from "styled-components";

export const NewPostContainer = styled.div`
  padding: 16px 20px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const Header = styled.div`
  font-size: 16px;
  margin-bottom: 25px;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
  margin-bottom: 30px;
`;

export const TeamSelectOptions = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 50%;
  min-width: 0;
`;

export const CategorySelectOptions = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 50%;
  min-width: 0;
`;

export const TeamSelect = styled.select`
  flex: 1;
  margin-right: 8px;
`;

export const Label = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
`;

export const Option = styled.option`
  background-image: url(${(props) => props.$logo || "none"});
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: 20px 20px;
  padding-left: 36px;
`;

export const TeamImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
`;

export const DropdownValue = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DropdownCaret = styled.span`
  font-size: 12px;
  margin-left: 8px;
  color: #888;
`;

export const DropdownList = styled.ul`
  list-style: none;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  margin: 0;
  padding: 6px 0;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  z-index: 5;
  max-height: 320px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

export const DropdownLogo = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

export const DropdownLabel = styled.span`
  font-size: 14px;
  color: #111827;
`;

export const Category = styled.select`
  flex: 1;
  margin-right: 8px;
`;
