import styled, { keyframes } from 'styled-components';
import '../../styles/font.css';

const moveUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 580;
  line-height: 24.2px;
  /* padding-top: 3px; */
  animation: ${moveUp} 1s ease-in-out;

  &:hover .push {
    display: flex;
  }
`;
export const MainContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 580;
  line-height: 24.2px;
  padding-top: 2px;
  animation: ${moveUp} 1s ease-in-out;

  &:hover .push {
    display: flex;
  }
`;

export const HoverContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 47px;
  height: 47px;
`;

export const Push = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
`;

export const ImageHover = styled.img`
  width: 47px;
  height: 47px;
`;

export const MentImage = styled.img`
  position: absolute;
  width: 120px;
  height: 40px;
  top: 0;
  left: -119px;
  padding-top: 5px;
`;

export const Ment = styled.div`
  position: absolute;
  top: 0;
  left: -112px;
  padding-top: 11px;
  padding-left: 1px;
  color: #000;
  font-family: 'Pretendard';
  text-align: left;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
`;
