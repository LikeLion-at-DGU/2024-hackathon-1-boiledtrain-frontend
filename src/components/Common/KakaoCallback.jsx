import React, { useState } from 'react';  // useState 추가
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [data, setData] = useState(null);  // data 상태 추가
    const navigate = useNavigate();

    const Kakaocallback2 = async () => {
        try {
            const response = await fetch('https://0de0-210-94-220-228.ngrok-free.app/accounts/kakao/login/callback/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: code }),  // JSON 문자열로 변환
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Response data:', result);  // 응답 데이터 확인
            setData(result);  // 상태 업데이트

            // 필요 시 navigate를 사용하여 다른 페이지로 이동할 수 있습니다.
            // navigate('/somepath');
        } catch (error) {
            console.error("Error during Kakao login:", error);
        }
    };

    return (
        <div>
            <h1>Kakao Callback</h1>
            <p>Received code: {code}</p>
            <button onClick={Kakaocallback2}>
                카카오 로그인
            </button>
            <p>{data ? data.access : 'No data received'}</p> {/* 상태로 데이터 출력 */}
        </div>
    );
};

export default KakaoCallback;
