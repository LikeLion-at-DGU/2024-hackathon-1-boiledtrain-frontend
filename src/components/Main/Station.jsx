import React from "react";
import * as S from "./style";
import again from "../../assets/images/again.png";

function TopStation({ onReset }) {
  return (
    <S.Frame>
      <S.Button onClick={onReset}>
          <img src={again} alt="한번 더 삶기" />
        </S.Button>
      <S.Bar />
        <S.CenterBar>
        </S.CenterBar>
      <S.Bar />
    </S.Frame>
  );
}

export default TopStation;