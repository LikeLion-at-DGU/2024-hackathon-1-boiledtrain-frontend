import React, { useState } from 'react';
import * as S from './style';
import mainch from "../../assets/images/loading.png";
import pong from "../../assets/images/pong.png";
import pong2 from "../../assets/images/pong2.png";

function Ment2() {
  return (
    <S.MainMent2>
      <S.Ment2Image1 src={pong} alt='대체이미지' />
      <S.Ment2Image2 src={pong2} alt='대체이미지' />
      <S.Ment2Image src={mainch} alt='대체이미지' />
      <S.Ment2>코스가 무작위로 삶아지는 중!</S.Ment2>
    </S.MainMent2>
  );
}

export default Ment2;