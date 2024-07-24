import React from 'react';
import train from "../../assets/images/tr.jpg";
import * as S from "./style";

const IntroLogo = ({ children }) => {
  return (
    <S.Container2>
      <S.Image2 src={train} alt="train" />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </S.Container2>
  );
};

export default IntroLogo;