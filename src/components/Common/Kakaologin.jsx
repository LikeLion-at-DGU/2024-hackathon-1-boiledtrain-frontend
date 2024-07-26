import React from 'react';
import API from "../../api";

const Kakaologin = () => {
    const redirectToKakaoLogin = () => {
        const kakaoAuthUrl = 'https://kauth.kakao.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code';
        window.location.href = kakaoAuthUrl;
    };

    return (
        <button onClick={redirectToKakaoLogin}>
            카카오 로그인
        </button>
    );
};

export default Kakaologin;
