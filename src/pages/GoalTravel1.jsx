import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mapImage from '../assets/images/map2.jpg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import TopBar2 from "../components/Common/TopBar2";
import Search from "../components/Goal/Search";
import Ment from "../components/Goal/Ment";
import BottomBar from "../components/Common/BottomBar";

const PageContainer = styled.div`
  position: relative;
  height: 873px;
`;
const MapContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 646px;
  margin: 0 auto;
`;
const MapImage = styled.img`
  max-width: 430px;
  max-height: 646px;
  width: 430px;
  height: 646px;
  object-fit: cover;
  filter: blur(3px);
`;
const StyledBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 77px;
  background: #00ABFC;
`;

function GoalTravel1() {
  const [scale, setScale] = useState(1);

  return (
    <PageContainer>
      <TopBar2 />
      <Ment />
      <Search />
      <MapContainer>
        <TransformWrapper
          initialScale={scale} // 계산된 확대 비율 설정
          initialPositionX={0}
          initialPositionY={0}
        >
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
          </TransformComponent>
        </TransformWrapper>
      </MapContainer>
      <StyledBottomBar>
        <BottomBar />
      </StyledBottomBar>
    </PageContainer>
  );
}

export default GoalTravel1;