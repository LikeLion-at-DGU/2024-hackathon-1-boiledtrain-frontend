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
            <S.chooseButton onClick={onClose}>뒤로가기</S.chooseButton>
            <S.chooseButton2 onClick={onLogin}>로그인하기</S.chooseButton2>
        </S.WarningContainer>
    );
};

export default WarningChoose;
