import React from 'react';
import * as S from './style';
import tr from "../../assets/images/tr.jpg";

function Ment3({ onReset }) {
  return (
    <S.MainMent3>
      <S.Ment3Image src={tr} alt='대체이미지' />
      <S.MentButton>
        <p>맛있게 삶아졌어요! 훌쩍 떠나보아요!</p>
        <S.Button onClick={onReset}>한번 더 삶기</S.Button> {/* 여기서 onReset 호출 */}
      </S.MentButton>
    </S.MainMent3>
  );
}

export default Ment3;
