import styled, { keyframes } from 'styled-components';
import '../../styles/font.css';

const slideInFromRight = keyframes`
from {
    transform: translateX(100%); 
    opacity: 0;
}
to {
    transform: translateX(0); 
    opacity: 1;
}
`;

// TopBar
export const TopBarContainer =styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:23px;
    margin:0px 24px 0px 37px;
`
export const Img = styled.img`
    width:56px;
    height:56px;
`

export const menuButton = styled.button`
    width:30px;
    height:30px;
    background-color: inherit;
    border:0;
`

// Head
export const HeadContainer=styled.div`
    display:flex;
    flex-direction: column;
    margin:0px 0px 0px 37px;
`

export const Title = styled.div`
    font-size:40px;
    font-family: "Climate Crisis KR";
    color:white;
    font-weight: 400px;
    line-height: normal;
    margin-top:0px;
    margin-bottom: 0px;
    letter-spacing:5px
`

export const Content = styled.div`
color: #FFF;
font-family: 'Pretendard';
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

//Subwayai
export const SubwayContainer = styled.div`
display: flex;
justify-content: flex-end;
width: 430px;
height: 95px;
margin: 20px 0px 60px 0px;
animation: ${slideInFromRight} 0.7s ease-in-out;
`;

export const SubwayImg = styled.img`
width: 300px;
height: 153px;
`;


//Main
export const MainContainer=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50px 50px 0px 0px;
    background: #FFF;
    width: 430px;
    height: 503px;
    flex-shrink: 0;
    position: relative;
`

export const ImgContainer = styled.div`
    width: 370px;
    height: 240px;
    border-radius: 20px;
    display: flex;
    justify-content: center; 
    align-items: center;
    overflow:hidden;
    position:absolute;
    top:27px;
`;

export const MapsImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; 
    transition: transform 0.2s ease; 
`;

//버튼 컨테이너
export const MainConstainer2 = styled.div`
    width: 430px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position:absolute;
    bottom:70px;
    z-index:9;
`
export const line = styled.hr`
    width: 370px;
    border-width: 2px;
    border:1px solid #d9d9d9;
    
    margin:10px 0px 10px 0px;
    z-index:10;
`

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    gap:20px;
    z-index: 8;
`;

export const LoginButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 58px;
    background: #00ABFC;
    color: #FFF;
    text-align: center;
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 2px solid #007bff;
    cursor: pointer;
    border: none;
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    &:active {
        background: #007bff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
        transform: translateY(2px);
    }
`;

export const SubText = styled.span`
    margin-top: 8px;
    color: #FFF;
    text-align: center;
    font-family: "Pretendard";
    font-size: 12px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
`;