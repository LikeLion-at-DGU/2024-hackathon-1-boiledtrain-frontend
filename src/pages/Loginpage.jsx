import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const Back = () => {
        window.history.back();
    };

    const redirectToKakaoLogin = async () => {
        // 서버 배포용
        // const kakaoAuthUrl = 'http://3.36.243.22/api/accounts/kakao/login/';
        // 로컬 테스트용
        const kakaoAuthUrl = 'http://3.36.243.22/api/accounts/front_kakao/login/';
        window.location.href = kakaoAuthUrl;
    };

    // const handleKakaoLogin = () => {
    //     localStorage.setItem('access_token', 'your_token');
    //     navigate(from, { replace: true });
    // };

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
