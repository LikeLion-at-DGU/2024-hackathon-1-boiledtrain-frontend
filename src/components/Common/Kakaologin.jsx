// src/components/KakaoLogin.js
import React from 'react';

const Kakaologin = () => {
    const redirectToKakaoLogin = async () => {
        const kakaoAuthUrl = 'http://3.36.243.22/api/accounts/kakao/login/';
        // const kakaoAuthUrl = 'https://0de0-210-94-220-228.ngrok-free.app/accounts/kakao/login/';
        window.location.href = kakaoAuthUrl;
    };

    

    return (
        <button onClick={redirectToKakaoLogin}>
            카카오 로그인
        </button>
    );
};

export default Kakaologin;
