import styled from "styled-components"
import "../../styles/font.css"

// course_1
export const CourseContainer = styled.div`
    width:375px;
    min-height: 153px;
    background-color: rgba(212, 242, 255, 1);
    border-radius: 27px;
    position: relative;
    padding: 0px 15px 0px 14px;
`
export const PhotoContainer  = styled.div`
    width: 368px;
    height: 78px;
    padding-top:12px;
    position: absolute;
    padding: 0px 15px 0px 0px;
    display:flex;
    gap:9px;
    top:12px;
`

export const Img = styled.img`
    width: 118px;
    height: 78px;
`

export const InfoUser = styled.div`
    display: flex;
    width: 368px;
    height: 47px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    padding: 0px 15px 0px 0px;
    position: absolute;
    bottom:11px;
`

// user 정보
export const CourseContentContainer = styled.div`
    /* width: 99px; */
    height: 45px;
    display: flex;
    flex-direction: row;
`
export const Course = styled.div`
    color: #000;
    font-family: 'Pretendard';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 260px;  
`;

export const Describ = styled.div`
    color: #8C8C8C;
    font-family: 'Pretendard';
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 220px;
`;


// 좋아요
export const Plus = styled.div`
    width: 55px;
    height: 80px;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top:35px;
`

export const like_count = styled.div`
    color: #8C8C8C;
    text-align: right;
    font-family: 'Pretendard';
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
`
export const P = styled.div`
    color: #000;
    text-align: right;
    font-family: 'Pretendard';
    font-size: 10px;
    width:100px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
`

export const time = styled.div`
    color: #8C8C8C;
    font-family: 'Pretendard';
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
`

export const Button = styled.button`
    border:0;
    background-color: inherit;
    display:flex;
    padding:0;
    z-index: 100;
`

//코스 디테일 페이지

export const detailContainer = styled.div`
    width: 400px;
    min-height: 712px;
    border-radius: 20px;
    background: #D4F2FF;
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const header = styled.div`
    width:400px;
    height: 28px;
    padding-top: 20px;
    padding-bottom: 13px;
    border-radius: 20px;
    display:flex;
    justify-content: space-between;
`

export const HeadButton = styled.div`
    background-color: inherit;
    border:0;
    width: 24px;
    height: 24px;
    margin:0 15px;
`

export const infoUserContainer = styled.div`
    width:384px;
    height: 45px;
    display: flex;
    flex-direction: row;
    margin-left: 16px;
`

export const userImg= styled.img`
    border-radius: 100%;
    width:45px;
    height: 45px;
`

export const User = styled.div`
    height: 45px;
    display:flex;
    flex-direction: column;
    gap:10px;
    margin-top:3px;
    margin-left: 6px;
`

export const userNickname = styled.p`
    color: #000;
    font-family: 'Pretendard';
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    margin: 0;
`

export const userId = styled.p`
    color: #8C8C8C;
    font-family: 'Pretendard';
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    margin: 0;
`

export const mapContainer = styled.div`
    width: 360px;
    height: 393px;
    border-radius: 20px;
    margin-top: 22px;
`

export const ContentContainer = styled.div`
    width: 400px;
    min-height: 139px;
    margin-left:30px;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    font-size: 16px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: bold;
`


export const TopContainer = styled.div`
    display: flex; 
    justify-content: center;
    flex-wrap: wrap; 
    gap: 10px; 
    max-height:520px; 
    overflow-y:auto;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

`

export const TopContainer2 = styled.div`
    display: flex; 
    justify-content: center;
    flex-wrap: wrap; 
    gap: 10px; 
    max-height:630px; 
    overflow-y:auto;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

`
export const BigContainer = styled.div`
    width:300px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap:10px;
    margin-top:20px
`

export const white = styled.div`
    display: flex;
    align-items: center;
    width: 360px;
    height: 30px;
    background-color: #fff;

    border-radius: 10px;
`