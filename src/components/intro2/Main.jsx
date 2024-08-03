import React, { useState } from "react";
import * as S from "./styled";
import mapsImage from '../../assets/images/map2.jpg';
import { useNavigate } from "react-router-dom";
import WarningChoose from "../Common/WarningChoose"; // WarningChoose 컴포넌트 import
import { getToken } from '../../utils/auth'; // 토큰 가져오기 함수 import

const Main = () => {
    const [showWarning, setShowWarning] = useState(false);
    const [redirectPath, setRedirectPath] = useState('');
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        const token = getToken();
        if (!token) {
            setRedirectPath(path);
            setShowWarning(true);
        } else {
            navigate(path);
        }
    };

    const handleLogin = () => {
        navigate('/login', { state: { from: redirectPath } });
    };

    const handleCloseWarning = () => {
        setShowWarning(false);
    };

    return (
    <>
    <S.MainContainer>
        <S.ImgContainer>
        <S.MapsImg src={mapsImage} />
        </S.ImgContainer>
        <S.MainConstainer2>
            <S.line />
            <S.HeaderContainer>
                <div onClick={() => handleLinkClick('/goaltravel')}>
                <S.LoginButton>
                    목적 여행
                    <S.SubText>따로 원하는 방향의 여행이 있으신가요?</S.SubText>
                </S.LoginButton>
                </div>
                <div onClick={() => handleLinkClick('/random')}>
                <S.LoginButton>
                    랜덤 여행
                    <S.SubText>여행지가 무작위로 추천돼요!</S.SubText>
                </S.LoginButton>
                </div>
            </S.HeaderContainer>
            <S.line />
        </S.MainConstainer2>
    </S.MainContainer>
    {showWarning && (
        <WarningChoose
            message="로그인 후 이용 가능합니다."
            onClose={handleCloseWarning}
            onLogin={handleLogin}
            />
        )}
    </>
);
};

export default Main;
