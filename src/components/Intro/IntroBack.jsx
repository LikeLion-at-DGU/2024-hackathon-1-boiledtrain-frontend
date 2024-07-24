// src/components/IntroBack.jsx
import React from 'react';
import map from "../../assets/images/map2.jpg"; 
import * as S from "./style";

const IntroBack = ({ children }) => {
  return (
    <S.Container>
      <S.Image src={map} alt="map" />
      <S.Overlay>
        {children}
      </S.Overlay>
    </S.Container>
  );
};

export default IntroBack;