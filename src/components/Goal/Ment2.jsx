import React, { useState } from 'react';
import * as S from './style';
import mainch from "../../assets/images/mainch.png";

function Ment2() {
  return (
    <S.MainMent2>
      <S.Ment2Image src={mainch} alt='대체이미지' />
      <S.Ment2>코스가 무작위로 삶아졌어요!</S.Ment2>
    </S.MainMent2>
  );
}

export default Ment2;