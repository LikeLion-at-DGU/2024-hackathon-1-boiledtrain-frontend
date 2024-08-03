import styled from "styled-components";
import "../../styles/font.css"

export const infoContainer = styled.div`
    margin-top: 90px;
    width:430px;
    height:258px;
    background-color: #D4F2FF;
    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
`

export const profileImg = styled.img`
    width: 106px;
    height: 106px;
    border-radius:100%;
    position: absolute; 
    left:30px;
    top:55px;
`

export const EditButton = styled.img`
    position: absolute;
    top:50px;
    right:33px;
    cursor: pointer;
`

export const name = styled.p`
    color: #000;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    margin:0px 0px 0px 38px;
`

export const id = styled.p`
    color: #8C8C8C;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-left:38px;
`

//my-trip
export const tripContainer = styled.div`
    width:430px;
    height: 176px;
    margin-top: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const triptext = styled.div`
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    position: absolute;
    top:  370px;
    left: 33px;
`

export const emptytext = styled.div`
    color: #00ABFC;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`

//내 코스 출력
export const tripContainer2 = styled.div`
    width: 430px;
    height: 250px;
    margin-top: 17px;
    display: flex;
    gap: 12px;
    flex-direction: row;
    justify-content: flex-start;
    margin-top:50px;
    border-radius: 15px;
    overflow-x: auto; 
    overflow-y: hidden; 
    -webkit-overflow-scrolling: touch; 
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

export const courseContainer = styled.div`
    min-width: 160px;
    height: 160px;
    border-radius: 15px;
    background: #D4F2FF;
    margin-left: 30px;
`

export const pointImg = styled.img`
    width: 25.674px;
    height: 30.282px;
    margin: 15px 5px 0px 10px;
` 
export const Div = styled.div`
    display:flex;
    flex-direction: row;
`
export const stationP = styled.p`
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 10px;
`

export const placeP = styled.p`
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    margin: 0px 0px 0px 14px;
`