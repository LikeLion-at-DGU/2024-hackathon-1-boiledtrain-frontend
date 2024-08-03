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
import DetailModal from "../components/Modal/DetailModal";
import apiCall from "../api";
import Base from '../assets/images/baseimage.png';
import PlusCourseRandom from '../components/PlusCourse/PlusCourseRandom'; 


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
  border: 1px solid #ccc;
  padding: 0px 0px 24px 0px;
  z-index: 10;
  left: 33px;
  top: 300px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 2px 5px 5.1px 2px rgba(0, 0, 0, 0.25);
  width: 364px;
  height: auto;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 24.2px;
  display:flex;
  flex-direction:column;
`;

const StationInfoModalDetail = styled.div`
  display:flex;
  flex-direction:row;
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

const Detail = styled.div`
color: #00ABFC;
display:flex;
flex-direction:column;
justify-content:center;
padding-top:20px;
align-items:center;
font-family: 'Pretendard';
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 24.2px;
cursor: pointer; 
`;
const UnderBar = styled.div`
width: 74px;
height: 1px;
flex-shrink: 0;
background: #00ABFC;
`;

function OnlyRandom() {
  const [scale, setScale] = useState(1.0);
  const [stations, setStations] = useState([]);
  const [subwayStation, setSubwayStation] = useState(null);
  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiCall('/map/search_places_random/', 'get');

      const { subway_station, places } = response.data;

      console.log('Fetched subway station:', subway_station);
      console.log('Fetched nearby places:', places);

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

  const getPhotoUrl = (photoReference) => {
    const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
    if (!apiKey) {
      console.error('Google Maps API key is missing');
      return '';
    }
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${apiKey}`;
  };

  const handleDetailClick = () => {
    setSelectedPlace(nearbyPlaces);
    setDetailModalOpen(true);
  };

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
        <TransformWrapper initialScale={scale} initialPositionX={-110} initialPositionY={0}>
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
            {pointPosition && <Point style={pointPosition} onClick={() => {}} />}
          </TransformComponent>
        </TransformWrapper>
        {subwayStation && (
          <StationInfoModal>
            <h4>{subwayStation}역 코스</h4>
            <StationInfoModalDetail>
              {nearbyPlaces.map((place, index) => (
                <div key={index}>
                  {place.nearby_place.photo_reference ? (
                    <img 
                      src={getPhotoUrl(place.nearby_place.photo_reference)} 
                      alt={place.nearby_place.name} 
                      style={{ width: '118px', height: '76px', paddingRight:'2.5px' }}
                    />
                  ) : (
                    <img 
                      src={Base} 
                      alt="기본 이미지" 
                      style={{ width: '118px', height: '76px' }} 
                    />
                  )}
                  <strong>{place.category} <br/></strong> {place.nearby_place.name}
                </div>
              ))}
            </StationInfoModalDetail>
            <Detail onClick={handleDetailClick}>자세히 보기<UnderBar /></Detail>
          </StationInfoModal>
        )}
      </MapContainer>
      <StyledBottomBar>
        <BottomBar />
      </StyledBottomBar>

      {/* <PlusCourseRandom
        subwayStation={subwayStation}
        placelist={nearbyPlaces.map(place => place.nearby_place.name)}
      /> */}

      <DetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        placeDetails={selectedPlace}
        getPhotoUrl={getPhotoUrl}
        subwayStation={subwayStation}
      />
    </PageContainer>
  );
}

export default OnlyRandom;