import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            // 토큰이 없으면 로그인 페이지로 리디렉션
            window.location.href = 'http://3.36.243.22/accounts/kakao/login/';
            console.log('kakao 로그인 호출');
        }
    }, [navigate]);

    return element;
};

export default ProtectedRoute;
