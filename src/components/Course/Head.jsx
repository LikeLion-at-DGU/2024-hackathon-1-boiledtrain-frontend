import React from "react";
import * as S from './styled';

const Head = ({ selected, onSelect }) => {
    return (
        <>
            <S.HeadContainer>
                <S.Button 
                    onClick={() => onSelect(1)}
                    style={{color: selected === 1 ? '#00ABFC' : '#8C8C8C'}}
                >
                    코스 보기
                </S.Button>
                <S.Button
                    onClick={() => onSelect(2)}
                    style={{color: selected === 2 ? '#00ABFC' : '#8C8C8C'}}
                >
                    나의 코스
                </S.Button>
            </S.HeadContainer>
            <S.Hr 
                style={{textAlign: selected === 1 ? 'left' : 'right', marginLeft: selected === 1 ? '0' : '213px'}}
            ></S.Hr>
        </>
    );
}

export default Head;
