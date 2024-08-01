import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Papa from 'papaparse';
import mapImage from '../assets/images/map2.jpg';
import pointerImage from '../assets/images/pointer.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import TopBar2 from "../components/Common/TopBar2";
import Ment2 from "../components/Goal/Ment2";
import BottomBar from "../components/Common/BottomBar";
import Station from "../components/Main/Station";
import API from "../api";


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

const StationInfoModal = styled.div`
  position: absolute;
  border: 2px solid #ccc;
  padding: 0px 10px 30px 10px;
  z-index: 10;
  left: 20px;
  top: 20px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 2px 5px 5.1px 2px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: auto;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  line-height: 24.2px;
`;

const StationName = styled.h2`
  z-index: 40;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;
  line-height: 24.2px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

function OnlyRandom() {
  const [scale, setScale] = useState(1.0);
  const [stations, setStations] = useState([]);
  const [subwayStation, setSubwayStation] = useState(null);
  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.get(`/map/search_places_random/`);
      const { subway_station, places } = response.data;

      console.log('Fetched subway station:', subway_station);

      if (subway_station && subway_station !== subwayStation) {
        setSubwayStation(subway_station);
        setNearbyPlaces(places);
      } else {
        console.error('subway_station not found in response or station is the same');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (!subwayStation) {
      fetchData();
    }
  }, [subwayStation]);

  useEffect(() => {
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
          console.log('Fetched stations:', results.data);
        },
      });
    };

    fetchStations();
  }, []);

  useEffect(() => {
    if (subwayStation) {
      const stationCoordinates = getCoordinatesByStationName(subwayStation);
      if (stationCoordinates) {
        setCoordinates(stationCoordinates);
        console.log('Coordinates found:', stationCoordinates);
      }
    }
  }, [subwayStation]);

  const getCoordinatesByStationName = (name) => {
    const station = stations.find((station) => station.전철역명 === name);
    return station ? { x: parseFloat(station.X좌표), y: parseFloat(station.Y좌표) } : null;
  };

  const getPointPosition = (x, y) => {
    const mapWidth = 430;
    const mapHeight = 646;
    const transformedX = (x / 2700) * mapWidth;
    const transformedY = (y / 4100) * mapHeight;
    return { left: transformedX, top: transformedY };
  };

  const pointPosition = coordinates.x && coordinates.y ? getPointPosition(coordinates.x, coordinates.y) : null;

  return (
    <PageContainer>
      <TopBar2 />
      {subwayStation ? (
        <>
          <StationName>{subwayStation}역</StationName>
          <Station />
        </>
      ) : (
        <Ment2 />
      )}
      <MapContainer>
        <TransformWrapper
          initialScale={scale}
          initialPositionX={-110}
          initialPositionY={0}
        >
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
            {pointPosition && (
              <Point
                style={pointPosition}
                onClick={() => {}}
              />
            )}
          </TransformComponent>
        </TransformWrapper>
        {subwayStation && (
          <StationInfoModal>
            <h4>{subwayStation}역</h4>
            {nearbyPlaces.map((place, index) => (
              <div key={index}>
                <strong>{place.category} :</strong> {place.nearby_place.name} {/* nearby_place.name으로 접근 */}
              </div>
            ))}
          </StationInfoModal>
        )}
      </MapContainer>
      <StyledBottomBar>
        <BottomBar />
      </StyledBottomBar>
    </PageContainer>
  );
}

export default OnlyRandom;