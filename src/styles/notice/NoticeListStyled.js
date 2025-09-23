import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #cbcacaff;
  border-radius: 8px;
  padding: 10px 16px;
  margin: 20px 0;
`;

export const SearchBar = styled.div`
  flex: 1;
  gap: 8px;
  border: none;
  border-radius: 8px;
  padding: 2px 16px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1ff;

  &:focus-visible {
    outline: none;
    border-color: #5f5f5fff;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f1f1f1ff;

  &:focus {
    outline: none;
    border-color: #5f5f5fff;
  }
`;

export const NoticeListContainer = styled.div``;

export const PinnedListContainer = styled.div`
  border: 1px solid #8dc4ffff;
  border-radius: 8px;
  padding: 20px;
  background-color: #e6f0fe80;
`;

export const UnPinnedListContainer = styled.div`
  border: 1px solid #cbcacaff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color || "#333333"};
`;

export const NoticeItem = styled.div`
  border: 1px solid #cbcacaff;
  border-radius: 8px;
  padding: 0 16px 16px 16px;
  margin-top: 16px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #555555;
  margin: 0 0 8px 0;
`;

export const UploadDate = styled.span`
  font-size: 14px;
  color: #888888;
  display: flex;
  align-items: center;
  gap: 8px;
`;
