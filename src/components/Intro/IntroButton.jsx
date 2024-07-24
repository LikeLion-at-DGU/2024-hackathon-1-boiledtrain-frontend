import React from "react";
import * as S from "./style";

function IntroButton() {
  return (
    <S.HeaderContainer>
      <S.LoginButton>목적 여행
      <S.SubText>따로 원하는 방향의 여행이 있으신가요?</S.SubText>
        </S.LoginButton>
      <S.LoginButton>랜덤 여행
      <S.SubText>여행지가 무작위로 추천돼요!</S.SubText>
      </S.LoginButton>
    </S.HeaderContainer>
  );
}

export default IntroButton;