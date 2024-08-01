import React from 'react';
import * as S from './style';
import error from "../../assets/images/error.svg"

const Warning = ({ message, onClose }) => {
    return (
        <S.WarningContainer>
            <S.errorContainer>
                <img src={error}/>
                {message}
            </S.errorContainer>
            <S.Button onClick={onClose}>계속하기</S.Button>
        </S.WarningContainer>
    );
};

export default Warning;
