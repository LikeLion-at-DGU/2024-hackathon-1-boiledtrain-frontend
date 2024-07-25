import styled from "styled-components"

//Head
export const HeadContainer = styled.div`
    width: 430px;
    height: 38px;
    margin-top: 19px;
`
export const Button = styled.button`
    width: 215px;
    height: 38px;
    text-align: center;
    font-family: Pretendard;
    font-size: 18.7px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.2px;
    background-color: inherit;
    border: 0;
`

export const Hr = styled.hr`
    width:50%; 
    border:1px solid #00ABFC; 
`

//search and add container

export const SearchContainer = styled.div`
    width:430px;
    height:123px;
    margin-top: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const SearchText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
`
export const Hr2 = styled.hr`
    border:1px solid #AFAFAF;
    width: 430px;
`
//search

export const SearchInput = styled.input`
    width: 330px;
    height: 40px;
    border-radius: 10px;
    background: #E7E7E7;
    border:0;
    margin: 16px 0px 0px 0px;
`

export const SearchButton = styled.button`
    background-color: inherit;
    border:0;
    position:absolute;
    top:50px;
    right: 60px;
`

export const InfoText = styled.div`
    color: #8C8C8C;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.2px;
    margin-bottom:17px;
`

//mycourse
export const AddButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:6px;
    width: 320px;
    height: 50px;
    border-radius: 20px;
    background: #00ABFC;
    border:0;
    margin-top: 11px;
    color: #FFF;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.2px;
`

//select
export const SelectContainer = styled.div`
    width:430px;
    height:25px;
    margin:8px 0px 9px 0px;
    display: flex;
    align-items:center;
    gap:9px;
    
`

export const SelectButton = styled.button`
    width: 41px;
    height: 25px;
    background-color:inherit;
    border:0;
    font-size: 12px;
    font-style: normal;
    font-weight: 590;
    line-height: 24.2px;
    white-space: nowrap;
    color:blue;
`