import { styled } from "styled-components";

export const SearchContainer = styled.div`
  width: 330px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

export const Search = styled.input`
  /* border: 0;
  height: 40px;
  border-radius: 10px;
  background: #E7E7E7;
  outline: none;
  font-family: 'Pretendard';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px; */
  width: 330px;
    height: 40px;
    border-radius: 10px;
    background: #E7E7E7;
    border:0;
    z-index:3;
    margin: 16px 0px 0px 0px;
    padding:0px 5px 0px 20px;
    outline: none; 
    font-size: 17px;
    font-weight: 500;
    font-family: 'Pretendard';
  
  &::placeholder {
    font-family: 'Pretendard';
  }
  
`;

export const AutoSearchContainer = styled.div`
  z-index: 2;
  max-height: 50vh;
  width: 326px;
  background-color: #D4F2FF;
  position: absolute;
  top: 55px;
  /* border: 2px solid; */
  overflow-y: auto;
`;

export const AutoSearchWrap = styled.ul`
list-style: none;
padding-top:50;
padding-left:0;
margin: 5;
color: #000;
`;

export const AutoSearchData = styled.li`
  padding: 10px 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Pretendard';
  z-index: 4;
  letter-spacing: 0px;
  color: #000;

  a {
    color: #000; /* 검은색으로 설정 */
    text-decoration: none; /* 밑줄 제거 */
  }
  
  &:hover {
    /* background-color: #edf5f5; */
    cursor: pointer;
    /* color: #00ABFC; */
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