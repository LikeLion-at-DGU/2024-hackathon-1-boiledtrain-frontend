import styled, { keyframes } from 'styled-components';
import '../../styles/font.css';

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 120px;
    animation: ${slideInFromRight} 1.4s ease-in-out forwards;
    position: relative;
    cursor: pointer; 
    color: #000;
    text-align: center;
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight:580;
    line-height: 24.2px;
`;

export const Image = styled.img`
    width: 95px;
    height: 58px;
`;

export const SaveMent = styled.div`
  position: absolute; 
  bottom: 10px;
  left: 38%;
  transform: translateX(-50%);
  color: black;
  padding: 0px 1px 0px 10px;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
`;

