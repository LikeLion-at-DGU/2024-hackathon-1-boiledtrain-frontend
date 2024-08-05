import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                // 서버 배포용
                // const response = await fetch('http://3.36.243.22:8000/api/accounts/kakao/login/callback/', {
                // 로컬 테스트용
                const response = await fetch('http://3.36.243.22:8000/api/accounts/front_kakao/login/callback/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code: code }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Response data:', result);
                setData(result);

                localStorage.setItem('access_token', result.access);

                const userInfoResponse = await fetch('http://3.36.243.22:8000/api/accounts/userinfo/yes', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${result.access}`
                    }
                });

                if (!userInfoResponse.ok) {
                    throw new Error(`HTTP error! Status: ${userInfoResponse.status}`);
                }

                const userInfo = await userInfoResponse.json();
                console.log('User Info:', userInfo);
                localStorage.setItem('user_info', JSON.stringify(userInfo));

                navigate('/');
            } catch (error) {
                console.error("Error during Kakao login:", error);
            }
        };

        if (code) {
            fetchToken();
        } else {
        }
    }, [code, navigate]);

    return (
        <div>
        </div>
    );
};

export default KakaoCallback;
