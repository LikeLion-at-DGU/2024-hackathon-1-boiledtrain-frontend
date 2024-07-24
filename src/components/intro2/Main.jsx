import React from "react";
import * as S from "./styled";
import mapsImage from '../../assets/images/map2.jpg'

const Main=()=>{
    return(
        <S.MainContainer>
            <S.ImgContainer>
                <S.MapsImg src={mapsImage}/>
            </S.ImgContainer>
            <S.MainConstainer2>
                <S.line/>
                <S.HeaderContainer>
                    <S.LoginButton>목적 여행
                    <S.SubText>따로 원하는 방향의 여행이 있으신가요?</S.SubText>
                        </S.LoginButton>
                    <S.LoginButton>랜덤 여행
                    <S.SubText>여행지가 무작위로 추천돼요!</S.SubText>
                    </S.LoginButton>
                </S.HeaderContainer>
                <S.line/>
            </S.MainConstainer2>
        </S.MainContainer>
    )
}

export default Main;