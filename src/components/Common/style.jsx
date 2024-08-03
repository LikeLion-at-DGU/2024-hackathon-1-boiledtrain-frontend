import { styled } from "styled-components";

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  width: 430px;
  height: 77px;
  background: #00ABFC;
  justify-content: space-evenly;
  align-items: center;
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
export const TopHead2 = styled.div`
  display: flex;
  width: 430px;
  padding-top:10px;
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

export const WarningContainer = styled.div`
    position:absolute;
    top:50%;
    right:10%;
    z-index: 10;
    width: 346px;
    height: 184px;
    border-radius: 22px;
    background: #FFF;
    box-shadow: 3px 5px 6.6px 0px rgba(0, 0, 0, 0.25);
`

export const errorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:9px;
  justify-content:center;
  align-items: center;
  width:346px;
  height:117px;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
`
export const Button = styled.button`
  width:346px;
  height:67px;
  border-radius: 0px 0px 22px 22px;
  border :0;
  border-top : 2px solid #D9D9D9;;
  background-color: inherit;
  color: #00ABFC;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24.2px;
`
export const Ment = styled.div`
  display: flex;
  color: #00ABFC;
  text-align: center;
  padding-top:9px;
  width: 100px;
  height: 28px;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 18.7px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

export const TopSelect = styled.img`
  padding-top:10px;
  padding-left:240px;
  width: 24px;
  height: 24px;
`;


//MenuList
export const MenuContainer=styled.div`
  position: absolute;
  right:18px;
  top:120px;
  width: 160px;
  height: 80px;
  border-radius: 15px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  box-shadow: 0px 4px 4.8px 0px rgba(0, 0, 0, 0.25);
`
export const MenuButton = styled.button`
  border-radius: 15px;
  height:24px;
  width:160px;
  background-color: inherit;
  border:0;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const Hr = styled.hr`
  width:70%;
`