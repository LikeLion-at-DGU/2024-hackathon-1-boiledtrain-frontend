import styled from "styled-components";


export const Backcontainer = styled.div`
    display: flex;
    width: 430px;
    height: 28px;
`
export const BackButton = styled.button`
    display: flex;
    width: 28px;
    height: 28px;
    margin-left: 11px;
    background-color: inherit;
    border: 0;
`

// 지도 화면 추가
export const Mapcontainer = styled.div`
    width:100%;
    height:420px;
    display:flex;
    align-items: center;
    flex-direction: column;
`
export const MapContent = styled.div`
    width:380px;
    height: 263px;;
    border-radius: 30px 30px 0px 0px;
`

//지도 장소 내용 출력
export const PlaceContent = styled.div`
    width:356px;
    height: 157px;
    background-color: #D4F2FF ;
    padding:0px 0px 0px 24px;
`

export const PlaceTitle = styled.div`
    margin-top:20px;
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.2px;
`
export const Placeother = styled.div`
    color: #000;

    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
`

export const Placeaddr = styled.div`
    color: #8C8C8C;

    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
`


export const PlaceAddButton = styled.button`
    width: 190px;
    height: 40px;
    border-radius: 60px;
    border:0;
    background: #00ABFC;
    color : #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 18.7px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
    margin: 12px 0px;
`   

// 장소추가
export const PlaceAddContainer = styled.div`
    width:430px;
    display:flex;
    align-items: center;
    flex-direction:column;
`

export const AddedContainer = styled.div`
    width: 380px;
    height: 89px;
    border-radius: 17px;
    background: #D4F2FF;
    display:flex;
    flex-direction: row;
    align-items: center;
    position:relative;
    margin-top:10px;
`

export const PlaceAddedImg = styled.img`
    width: 101px;
    height: 66px;
    border-radius: 8px;
    margin: 0px 12px;
`

export const PlaceOrder = styled.div`
    width: 23px;
    height: 23px;
    border-radius: 100%;
    background-color: #00ABFC;
    color: #FFF;
    position: absolute;
    right:11px;
    top:9px;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 24.2px;

`

export const PlaceAddedContentContainer = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.2px;
`

export const PlaceDeleteImg = styled.img`
    position:absolute;
    left:-11px;
`


// 코스 추가
export const CourseContainer = styled.div`
    width: 430px;
    height:249px;
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const Lockcontainer = styled.div`
    width:100%;
    height:30px;
    display:flex;
    justify-content: flex-end;
`
export const LockButton = styled.button`
    width:25px;
    height:25px;
    background-color:inherit;
    border:0;
    flex-basis: 50px;
`

export const Bold = styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
    margin:0px;
`

export const Describ = styled.span`
    color: #8C8C8C;
    font-weight: 500;
    font-size: 11px;
`
export const Input = styled.input`
    width: 380px;
    height: 33px;
    width: 380px;
    height: 33px;
`
export const Courseguide = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 58px;
    margin-top:10px;
`

export const Courseinput = styled.input`
    width: 380px;
    height: 33px;
    border-radius: 6px;
    border:0;
    background: #D4F2FF;
`
