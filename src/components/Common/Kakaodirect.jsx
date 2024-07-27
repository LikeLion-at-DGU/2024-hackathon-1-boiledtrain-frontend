// src/components/KakaoRedirectHandler.js
import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import API from '../../api';

const Kakaodircet = () => {
    const history = useHistory();

    useEffect(() => {
        const getKakaoToken = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');

            if (code) {
                try {
                    const response = await axios.post('https://kauth.kakao.com/oauth/token', {
                        grant_type: 'authorization_code',
                        client_id: 'YOUR_CLIENT_ID',
                        redirect_uri: '/main', // 실제 리다이렉트 URI
                        code,
                    });
                    const { access_token } = response.data;

                    // access_token을 쿠키에 저장
                    Cookies.set('kakaoToken', access_token, { expires: 7 });
                    API.defaults.headers.Authorization = `Bearer ${access_token}`;

                    // 로그인 후 메인 페이지로 리다이렉션
                    history.push('/main');
                } catch (error) {
                    console.error('토큰 받기 실패', error);
                }
            }
        };

        getKakaoToken();
    }, [history]);

    return <div>로그인 중...</div>;
};

export default Kakaodircet;
