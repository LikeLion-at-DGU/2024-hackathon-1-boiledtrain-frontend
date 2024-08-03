import React from 'react';
import * as S from './style';
import error from "../../assets/images/error.svg";

const WarningChoose = ({ message, onClose, onLogin }) => {
    return (
        <S.WarningContainer>
            <S.errorContainer>
                <img src={error} alt="Error" />
                {message}
            </S.errorContainer>
            <S.Button onClick={onClose}>뒤로가기</S.Button>
            <S.Button onClick={onLogin}>로그인하기</S.Button>
        </S.WarningContainer>
    );
};

export default WarningChoose;
