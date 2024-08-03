import React, { useEffect, useState } from 'react';  // useState 추가
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [data, setData] = useState(null);  // data 상태 추가
    const navigate = useNavigate();

        useEffect(()=>{
            const fetchtoken = async () => {
                try {
                    const response = await fetch('http://3.36.243.22:8000/accounts/kakao/login/callback/', {
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
                    console.log('Response data:', result);
                    setData(result);
                    
                    localStorage.setItem('access_token', result.access);

                    navigate('/');
                } catch (error) {
                    console.error("Error during Kakao login:", error);
                    //로그인 실패화면
                }
            };
            if(code){
                fetchtoken();
            }
            else{
                //로그인실패화면 추후
                };
        },[code]);
    ;

    return (
        <div>
            
        </div>
    );
};

export default KakaoCallback;
