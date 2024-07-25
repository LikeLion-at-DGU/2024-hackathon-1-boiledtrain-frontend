import styled from "styled-components"


// course_1
export const CourseContainer = styled.div`
    width:375px;
    height: 153px;
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
    width: 99px;
    height: 45px;
    display: flex;
    flex-direction: row;
`
export const Course = styled.div`
    color: #000;

    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.2px;
    white-space: nowrap;
`
export const Describ = styled.div`
    color: #8C8C8C;

    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px; /* 242% */
`


// 좋아요/다운로드
export const Plus = styled.div`
    width: 55px;
    height: 47px;
`

export const P = styled.div`
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px; /* 242% */
`

export const Button = styled.button`
    border:0;
    background-color: inherit;
`