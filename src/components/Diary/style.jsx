import styled from "styled-components";
import '../../styles/font.css';

export const DiaryHeadContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 430px;
  height: 46px;
  padding-top: 1px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap:19px;
  padding-top:19px;
`;

export const HeadTitle = styled.div`
color: #00ABFC;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 18.7px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-right:250px;
`;

export const DiaryLine = styled.div`
width: 430px;
height: 2px;
background: #AFAFAF;
`;

export const DiaryBoxContainer = styled.div`
width: 360px;
height: 258px;
flex-shrink: 0;
display:flex;
flex-direction:column;
align-items:flex-start;
gap:10px;
padding-left:35px;
padding-top:40px;
padding-bottom:40px;
`;

export const BoxTitle = styled.div`
width: 28px;
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const BoxPhoto = styled.div`
width: 360px;
height: 170px;
border-radius: 10px;
background: var(--Miscellaneous-Kit-Section-Fill, #F5F5F5);
`;

export const BoxContent = styled.div`
color: #8C8C8C;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const BoxDate = styled.div`
color: #AFAFAF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Bar = styled.div`
color: #AFAFAF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const BoxStation = styled.div`
color: #AFAFAF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const BoxLine = styled.div`
width: 360px;
height: 1px;
flex-shrink: 0;
background: #D9D9D9;
`;

export const DateStation = styled.div`
display:flex;
flex-direction:row;
height:25px;
align-items:center;
gap:4px;
`;

export const DiaryPlusContainer = styled.div`
width: 430px;
height: 159px;
flex-shrink: 0;
border-radius: 117px;
background: #D4F2FF;
position: fixed;
bottom: 0px;
transform: translateX(0px);
`;

export const MentBtn = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
padding-top:31px;
gap:7px;
background: transparent;
border: none;
cursor: pointer;
`;

export const PlusMent = styled.div`
width: 63px;
height: 28.116px;
flex-shrink: 0;
color: #00ABFC;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const PlusImage = styled.img`
width: 23px;
height: 22.299px;
flex-shrink: 0;
padding-top:3.5px;
`;

export const DiaryEmptyContainer = styled.div`
display: flex;
flex-direction:column;
width: 430px;
height: 157px;
justify-content: center;
align-items: center;
flex-shrink: 0;
gap:18px;
`;

export const EmptyTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`;
export const EmptyTitle = styled.div`
color: #00ABFC;
text-align: center;
font-family: 'Pretendard';
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24.2px;
`;
export const EmptyPhoto = styled.img`
width: 90px;
height: 90px;
flex-shrink: 0;
`;