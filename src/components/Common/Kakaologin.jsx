// src/components/KakaoLogin.js
import React from 'react';
import API from "../../api";

const Kakaologin = () => {
    const redirectToKakaoLogin = () => {
        const kakaoAuthUrl = `${API.defaults.baseURL}accounts/kakao/login/`;
        window.location.href = kakaoAuthUrl;
    };

    return (
        <button onClick={redirectToKakaoLogin}>
            카카오 로그인
        </button>
    );
};

export default Kakaologin;

async function handleKakaoCallback() {
    try {
        const response = await fetch('/api/accounts/kakao/login/callback/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User Info:', data.user_info);
            console.log('Access Token:', data.access_token);
        } else {
            console.error('Failed to fetch user info:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching login callback data:', error);
    }
}

document.addEventListener('DOMContentLoaded', handleKakaoCallback);
