import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Papa from 'papaparse';
import mapImage from '../assets/images/map2.jpg';
import pointerImage from '../assets/images/pointer.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import TopBar2 from "../components/Common/TopBar2";
import BottomBar from "../components/Common/BottomBar";

const PageContainer = styled.div`
  position: relative;
  height: 873px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MapContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 646px;
  overflow: hidden;
`;

const MapImage = styled.img`
  max-height: 646px;
  width: auto;
  height: auto;
  object-fit: cover;
`;

const StyledBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 77px;
  background: #00ABFC;
`;

const Point = styled.div`
  position: absolute;
  width: 20px; 
  height: 20px;
  background-image: url(${pointerImage});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

const StationInfo = styled.div`
  position: absolute;
  z-index: 10;
  left: 30%;
  top: 0%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

function OnlyRandom() {
  const [stations, setStations] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  const fetchStations = async () => {
    const response = await fetch('/newtrain.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    Papa.parse(csv, {
      header: true,
      complete: (results) => {
        setStations(results.data);
        const coords = results.data.map(station => ({
          name: station.전철역명,
          x: parseFloat(station.X좌표),
          y: parseFloat(station.Y좌표)
        }));
        setCoordinates(coords);
        console.log('Fetched stations:', results.data);
      },
    });
  };

  useEffect(() => {
    fetchStations();
  }, []);

  const getPointPosition = (x, y) => {
    const mapWidth = 430;
    const mapHeight = 646;
    const transformedX = (x / 2700) * mapWidth; 
    const transformedY = (y / 4100) * mapHeight; 
    return { left: transformedX, top: transformedY };
  };

  const handlePointClick = (stationName) => {
    setSelectedStation(stationName);
  };

  return (
    <PageContainer>
      <TopBar2 />
      <MapContainer>
        <TransformWrapper initialScale={1} initialPositionX={-110} initialPositionY={0}>
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
            {coordinates.map((coord, index) => {
              const pointPosition = getPointPosition(coord.x, coord.y);
              return (
                <Point
                  key={index}
                  style={pointPosition}
                  onClick={() => handlePointClick(coord.name)}
                />
              );
            })}
            {selectedStation && (
              <StationInfo>
                {selectedStation}역
              </StationInfo>
            )}
          </TransformComponent>
        </TransformWrapper>
      </MapContainer>
      <StyledBottomBar>
        <BottomBar />
      </StyledBottomBar>
    </PageContainer>
  );
}

export default OnlyRandom;