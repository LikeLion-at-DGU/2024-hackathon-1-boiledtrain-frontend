import styled from "styled-components";
import "../../styles/font.css"

// root container
export const RootContainer = styled.div`
    background-color: #00ABFC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 430px;
    height: 873px;
`

// head
export const HeadContainer = styled.div`
    width: 100%;
    height: 28px;
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding-left: 20px;
`

// main
export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`
export const Button = styled.button`
    background-color: inherit;
    border:0;
`
export const LogoImg = styled.img`
    width: 78px;
    height: 78px;
`

export const MainP = styled.p`
    color: #FFF;
    text-align: center;
    font-family: "Climate Crisis KR";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 10px 0;
`

export const SubP = styled.p`
    color: #FFF;
    font-family: "Pretendard";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
    margin: 0;
`

// login bar
export const LoginDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

//footer
export const Footer = styled.div`
    width:100%;
`
export const CloudImg = styled.img`
    margin-bottom: -50px;
`