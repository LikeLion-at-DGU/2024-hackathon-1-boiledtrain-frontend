import styled from "styled-components";
import "../../styles/font.css"

export const infoContainer = styled.div`
    margin-top: 90px;
    width:430px;
    height:170px;
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
    text-align: left;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: 'Pretendard';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    width:350px;
    height:10px;
    margin-left:40px;
    margin-top:80px;
`

export const id = styled.p`
    color: #8C8C8C;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-left:42px;
`
    export const nameid = styled.div`
    display:flex;
    flex-direction:column;
    gap:0px;
    `;

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
    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    position: absolute;
    top:  280px;
    left: 31px;
`

export const triptext2 = styled.div`
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    position: absolute;
    top:  530px;
    left: 31px;
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
    height: 200px;
    margin-top: 17px;
    display: flex;
    gap: 0px;
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
    width: 330px;
    height: 140px;
    border-radius: 15px;
    background: #D4F2FF;
    margin-left: 20px;
    margin-top:10px;
`

export const pointImg = styled.img`
    width: 23.674px;
    height: 26.282px;
    margin: 15px 5px 0px 10px;
    padding-bottom:6px;
` 
export const Div = styled.div`
    display:flex;
    flex-direction: column;
    height:140px;
    width:150px;
`
export const stationP = styled.div`
    padding-left:8px;
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 6px;
    width: 130px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
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

//MypageEdit
export const Maincontainer = styled.div`
    width:430px;
    height:106px;
    margin: 64px 0px 0px 30px;
`

export const userImg = styled.img`
    width: 106px;
    height: 106px;
    border-radius: 100%;
`
export const editImg = styled.img`
    width: 37px;
    height: 37px;
    position: absolute;
    top:140px;
    left:100px
`
export const userInfoContainer = styled.div`
    width: 430px;
    height: 80px;
    margin : 30px 0px 0px 30px;
    display: flex;
    flex-direction: column;
`

export const infoText = styled.p`
    color: #8C8C8C;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
`
export const Hr = styled.hr`
    width:80%;
    margin:15px 30px;
`

export const Hr2 = styled.hr`
    width:80%;
    margin:-6px 30px;
`

export const userInput = styled.input`
    width:360px;
    height: 30px;
    border-width: 0;
    outline: none;
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    &::value{
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
    }
`
export const userID = styled.p`
    width:360px;
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
`

export const editButtonContainer = styled.div`
    width:430px;
    height: 100px;
    display: flex;
    gap:10px;
    justify-content: center;
    align-items: center;
    margin-top:250px;
`
export const editButton = styled.button`
    width: 200px;
    height: 70px;
    border-radius: 58px;
    background: #00ABFC;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border:0;
`

export const cancelButton = styled.button`
    width: 200px;
    height: 70px;
    border-radius: 58px;
    background: #00ABFC;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border:0;
`;

export const charCount = styled.div`
    color: #8C8C8C;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px; 
    text-align: right; 
    width: 82%;
    margin-top:10px;
`;
