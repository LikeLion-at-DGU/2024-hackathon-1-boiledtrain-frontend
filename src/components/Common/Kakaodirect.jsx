// src/components/Common/KakaoCallback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
    const navigate = useNavigate();
    const ss = document.querySelector(pre);
    console.log(ss)
    useEffect(() => {
        const extractAccessToken = () => {
            const preElement = document.querySelector('pre');
            console.log(preElement)
            if (preElement) {
                try {
                    const data = JSON.parse(preElement.textContent);
                    const accessToken = data.access;
                    console.log('Access Token:', accessToken);
                    // 액세스 토큰을 사용하여 상태를 업데이트하거나 로컬 스토리지에 저장
                    localStorage.setItem('accessToken', accessToken);
                    navigate('/main'); // 로그인 후 메인 화면으로 이동
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
        };

        extractAccessToken();
    }, [navigate]);

    return (
        <div>
            로그인 처리 중...
        </div>
    );
};

export default KakaoCallback;
