import React from "react";
import * as S from "./style";
import LoadingImg from '../../assets/images/loading.png';
import Pong from '../../assets/images/pong.png';
import Pong2 from '../../assets/images/pong2.png';
import Under from '../../assets/images/loadingunder.png';

const LoadingScreen = () => {
  return (
    <S.LoadingContainer>
      <S.LImage1 src={Pong} alt="Pong" />
      <S.LImage2 src={Pong2} alt="Pong2" />
      <S.LImage src={LoadingImg} alt="Loading" />
      <S.LImage src={Under} alt="Under" />
      <S.LoadingMent>기차가 맛있게 삶아지는 중</S.LoadingMent>
    </S.LoadingContainer>
  );
};

export default LoadingScreen;