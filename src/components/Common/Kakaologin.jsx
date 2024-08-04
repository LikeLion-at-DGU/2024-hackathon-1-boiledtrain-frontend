// src/components/KakaoLogin.js
import React from 'react';

const Kakaologin = () => {
    const redirectToKakaoLogin = async () => {
        // 서버 배포용
        // const kakaoAuthUrl = 'http://3.36.243.22/api/accounts/kakao/login/';
        // 로컬 테스트용
        const kakaoAuthUrl = 'http://3.36.243.22/api/accounts/front_kakao/login/';
        window.location.href = kakaoAuthUrl;
    };

    

    return (
        <button onClick={redirectToKakaoLogin}>
            카카오 로그인
        </button>
    );
};

export default Kakaologin;
