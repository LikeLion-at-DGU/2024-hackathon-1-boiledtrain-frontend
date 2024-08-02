import React from "react";
import {
    RootContainer,
    HeadContainer,
    MainContainer,
    MainP,
    SubP,
    LoginDiv,
    Button,
    Footer,
    CloudImg,
} from "../components/Login/styled";
import logo from "../assets/images/boiledtrainLogo.png";
import back from "../assets/images/back.png";
import cloud from "../assets/images/union.png";
import kakao_login from "../assets/images/kakao_login.png";

const Loginpage = () => {
    const Back = () => {
        window.history.back();
    };

    const redirectToKakaoLogin = async () => {
        const kakaoAuthUrl = 'http://3.36.243.22/accounts/kakao/login/';
        // const kakaoAuthUrl = 'https://0de0-210-94-220-228.ngrok-free.app/accounts/kakao/login/';
        window.location.href = kakaoAuthUrl;
    };

    return (
        <RootContainer>
            <HeadContainer>
                <img src={back} alt="Back" onClick={Back} />
            </HeadContainer>
            <MainContainer>
                <img src={logo} alt="Boiled Train Logo" />
                <MainP>Welcome<br />Back!</MainP>
                <SubP>다시 삶아지러 오셨군요!</SubP>
            </MainContainer>
            <LoginDiv>
                <Button onClick={redirectToKakaoLogin}><img src={kakao_login} alt="Kakao Login" /></Button>
            </LoginDiv>
            <Footer><CloudImg src={cloud} alt="Cloud" /></Footer>
        </RootContainer>
    );
};

export default Loginpage;
