import { styled } from "styled-components";

export const SearchContainer = styled.div`
  width: 330px;
  height: 80px;
  flex-shrink: 0;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const Search = styled.input`
  border: 0;
  height: 40px;
  border-radius: 10px;
  background: #E7E7E7;
  outline: none;
  font-family: 'Pretendard';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  
  &::placeholder {
    color: #8C8C8C;
    font-family: 'Pretendard';
  }
  
  padding-left: 15px;
`;

export const AutoSearchContainer = styled.div`
  z-index: 3;
  max-height: 50vh;
  width: 326px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  overflow-y: auto;
`;

export const AutoSearchWrap = styled.ul``;

export const AutoSearchData = styled.li`
  padding: 10px 8px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Pretendard';
  z-index: 4;
  letter-spacing: 0px;
  color: #000;
  
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
    color: #00ABFC;
  }
`;

export const ArrowIcon = styled.img`
  position: absolute;
  right: 5px;
  width: 18px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SelectedStation = styled.div`
  margin-top: 5px; 
  font-size: 13px;
  font-weight: bold;
  color: #333;
  font-family: 'Pretendard';
`;

export const Searchicon = styled.img`
width: 20px;
height: 20px;
flex-shrink: 0;
`;