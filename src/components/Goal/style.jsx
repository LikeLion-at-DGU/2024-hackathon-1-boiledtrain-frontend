import styled, { keyframes, css } from 'styled-components';
import '../../styles/font.css';

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const fadeInOutAlternate = keyframes`
  0%, 100% { opacity: 0; }
  25%, 75% { opacity: 1; }
`;

export const SearchContainer = styled.div`
  width: 313px;
  height: 40px;
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
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 6%;
  width: 300px;
  background: #D4F2FF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1;
  max-height: 150px;
  overflow-y: auto;
  &::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
`;

export const DropdownItem = styled.li`
  padding: 4px 10px 4px 8px;
  cursor: pointer;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  white-space: pre-line; 
  &:hover {
    background: #d3d3d3;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #8C8C8C; 
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
line-height: 20px;
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
  line-height: 24.2px;
`;

export const MainMent = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  height:36px;
`;

export const MainMent2 = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  display: flex;
  width: 430px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const MainMent3 = styled.div`
  padding-bottom:58px;
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  width: 430px;
  height: 91px;
  position: relative; 
  font-weight: 600;
  line-height: 24.2px;
  height:45px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Ment2 = styled.div`
display:flex;
  flex-direction:row;
  align-items:center;
`;


export const Ment2Image = styled.img`
  width: auto;
  height: 58px;
  flex-shrink: 0;
  margin-bottom:10px;
`;


export const Ment3Image = styled.img`
  width: 95px;
  height: 58px;
  flex-shrink: 0;
`;

export const Button = styled.button`
  width:70px;
  height:20px;
  border: none; 
  position:absolute;
  transform: translate(385%, -510%);
  background-color:white;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 11px;
  cursor: pointer;
`;

export const MentButton = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`;

export const Ment2Image1= styled.img`
  width:40px;
  position: absolute;
  transform:translate(50%,-80%);
  animation: ${fadeInOut} 1.3s infinite;
`;

export const Ment2Image2 = styled.img`
  width:30px;
  position: absolute;
  transform:translate(150%,-20%);
  animation: ${fadeInOutAlternate} 1.3s infinite;
`;