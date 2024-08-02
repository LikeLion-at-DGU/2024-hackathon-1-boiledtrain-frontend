import React from "react";
import * as S from "./styled";
import logo from "../../assets/images/boiledtrainLogo.png";
import back from "../../assets/images/back.png";
import cloud from "../../assets/images/union.png";
import kakao_login from "../../assets/images/kakao_login.png";

const Main=()=>{
    return(
        <>
            <S.HeadContainer>
                <img src={back}/>
            </S.HeadContainer>
            <S.MainContainer>
                <img src={logo}/>
                <S.mainP>Welcome<br/>Back!</S.mainP>
                <S.subP>다시 삶아지러 오셨군요!</S.subP>
            </S.MainContainer>
            <img src={kakao_login}><button></button></img>
            <img src={cloud}/>
        </>
    )
}

export default Main;