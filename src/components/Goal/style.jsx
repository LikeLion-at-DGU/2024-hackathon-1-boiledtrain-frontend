import styled from "styled-components";
import '../../styles/font.css';

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
  padding-top:47px;
  padding-bottom:10px;
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  height:36px;
`;

export const MainMent3 = styled.div`
  padding-bottom:75px;
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  height:36px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:11px;
`;

export const Ment3Image = styled.img`
  width: 199px;
  height: 38px;
  flex-shrink: 0;
`;

export const Button = styled.button`
  width:70px;
  height:20px;
  background-color: #00ABFC;
  color: white;
  border: none; 
  border-radius: 3px;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background-color: #008BCE;
    transform: scale(1.05); 
    transition: background-color 0.3s ease, transform 0.3s ease; 
  }
`;

export const MentButton = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:10px;
`;