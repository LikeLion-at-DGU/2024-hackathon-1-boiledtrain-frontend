import styled from "styled-components";
import '../../styles/font.css';

export const SearchContainer = styled.div`
  width: 313px;
  height: 40px;
  margin-left:45px;
  margin-bottom:37px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #E7E7E7;
  display: flex;
  align-items: center;
  padding: 0 13px;
  position: relative;
`;

export const DropdownButton = styled.div`
  width: 100%;
  height: 100%;
  background: #E7E7E7;
  border: none;
  outline: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
  color: #000;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
`;
//색깔 조정 필요
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 10%;
  width: 275px;
  background: #D4F2FF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1;
  max-height: 150px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  padding: 4px 10px 4px 8px;
  cursor: pointer;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  white-space: pre-line; /* 줄바꿈을 가능하게 함 */
  &:hover {
    background: #d3d3d3;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #8C8C8C; /* 요소 사이에 선 추가 */
  }
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

export const PrimaryText = styled.div`
  color: #000;
font-family: 'Pretendard';
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 201.667% */
`;

export const SecondaryText = styled.div`
  color: #8C8C8C;
font-family: 'Pretendard';
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`;

export const PlaceholderText = styled.div`
  color: #8C8C8C;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px; /* 161.333% */
`;

export const MainMent = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px; /* 134.444% */
  height:36px;
`;