import { styled } from "styled-components";

export const SearchContainer = styled.div`
  width: 330px;
  height: 80px; /* 높이를 고정하여 검색창과 선택된 역 이름을 모두 포함 */
  flex-shrink: 0;
  margin-left: 50px;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
`;

export const Search = styled.input`
  border: 0; /* 전체 너비 */
  height: 40px; /* 검색창의 높이 */
  border-radius: 10px;
  background: #E7E7E7;
  outline: none;
  font-family: 'Pretendard';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px; /* 161.333% */
  
  &::placeholder {
    color: #8C8C8C; /* 원하는 색상 */
    font-family: 'Pretendard';
  }
  
  padding-left: 15px; /* 텍스트 왼쪽 패딩 */
`;

export const AutoSearchContainer = styled.div`
  z-index: 3;
  max-height: 50vh; /* 최대 높이 설정 */
  width: 326px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 추가 */
`;

export const AutoSearchWrap = styled.ul``;

export const AutoSearchData = styled.li`
  padding: 10px 8px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Pretendard';
  z-index: 4;
  letter-spacing: 0px;
  color: #000; /* 원하는 글자 색상 설정 */
  
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
    color: #00ABFC; /* 호버 시 글자 색상 변경 */
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
  margin-top: 5px; /* 검색창과 간격 조정 */
  font-size: 13px; /* 원하는 글자 크기 */
  font-weight: bold; /* 글자 두께 */
  color: #333; /* 글자 색상 */
  font-family: 'Pretendard';
`;

export const Searchicon = styled.img`
width: 20px;
height: 20px;
flex-shrink: 0;
`;

