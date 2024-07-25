import { styled } from "styled-components";

// 페이지의 맨 아래에 위치시키지만 스크롤 시 함께 이동하게 하는 스타일
export const Head = styled.div`
  display: flex;
  flex-direction: row;
  width: 430px;
  height: 77px;
  background: #00ABFC;
  justify-content: space-evenly;
  align-items: center;
  /* position: fixed;
  bottom: 0; 
  z-index: 1000; */
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #D4F2FF;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: normal;
  gap: 8.17px;
  font-weight: 700;
`;

export const Allimage = styled.img`
  width: 33px;
  height: 30px;
  flex-shrink: 0;
`;

export const TopHead = styled.div`
  display: flex;
  width: 430px;
  align-items: center;
  flex-shrink: 0;
`;

export const Topimage = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 11px;
  margin-top: 9px;
`;
