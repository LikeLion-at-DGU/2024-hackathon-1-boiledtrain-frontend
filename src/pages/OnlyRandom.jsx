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
import subwayInfo from '../../subwayinfo.json';

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
  display: flex;
  flex-direction: column;
`;

const StationInfoModalDetail = styled.div`
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  align-items: center;
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

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const LineImagesContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 9px;
`;

const LineImage = styled.img`
  width: 16px;
  height: auto;
  margin-top: 10px;
`;

import line1 from '../assets/images/1호선.png';
import line2 from '../assets/images/2호선.png';
import line3 from '../assets/images/3호선.png';
import line4 from '../assets/images/4호선.png';
import line5 from '../assets/images/5호선.png';
import line6 from '../assets/images/6호선.png';
import line7 from '../assets/images/7호선.png';
import line8 from '../assets/images/8호선.png';
import line9 from '../assets/images/9호선.png';
import gyeongui from '../assets/images/경의중앙선.png';
import shinbundang from '../assets/images/신분당선.png';
import suinbundang from '../assets/images/수인분당선.png';
import airport from '../assets/images/공항철도.png';
import incheon1 from '../assets/images/인천1호선.png';
import uijeongbu from '../assets/images/의정부선.png';
import ui from '../assets/images/우이신설.png';
import gimpo from '../assets/images/김포골드.png';
import incheon2 from '../assets/images/인천2.png';
import yongin from '../assets/images/용인에버라인.png';
import sinlim from '../assets/images/신림선.png';
import gyeongchun from '../assets/images/경춘선.png';
import gyeonggang from '../assets/images/경강선.png';
import seohae from '../assets/images/서해선.png';

const lineImages = {
  "01호선": line1,
  "02호선": line2,
  "03호선": line3,
  "04호선": line4,
  "05호선": line5,
  "06호선": line6,
  "07호선": line7,
  "08호선": line8,
  "09호선": line9,
  "경의선": gyeongui,
  "신분당선": shinbundang,
  "수인분당선": suinbundang,
  "공항철도": airport,
  "인천선": incheon1,
  "의정부경전철": uijeongbu,
  "우이신설경전철": ui,
  "김포도시철도": gimpo,
  "인천2호선": incheon2,
  "용인경전철": yongin,
  "신림선": sinlim,
  "경춘선": gyeongchun,
  "경강선": gyeonggang,
  "서해선": seohae,
};

function OnlyRandom() {
  const [scale, setScale] = useState(1.0);
  const [stations, setStations] = useState([]);
  const [subwayStation, setSubwayStation] = useState(null);
  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [infoModalOpen, setInfoModalOpen] = useState(true);

  const fetchData = async () => {
    try {
      const response = await apiCall('/api/map/search_places_random/', 'get');
      const { subway_station, places } = response.data;

      if (subway_station && subway_station !== subwayStation) {
        setSubwayStation(subway_station);
        setNearbyPlaces(places);
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
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${apiKey}`;
  };

  const handleDetailClick = () => {
    setSelectedPlace(nearbyPlaces);
    setDetailModalOpen(true);
  };

  const resetState = () => {
    setSubwayStation(null);
    setNearbyPlaces([]);
    setCoordinates({ x: null, y: null });
    setScale(1.0);
    setDetailModalOpen(false);
    setSelectedPlace([]);
  };

  const handlePointClick = () => {
    setInfoModalOpen(true);
  };

  const stationInfo = subwayInfo.DATA.filter((station) => station.station_nm === subwayStation);
  const lineImagesToShow = stationInfo.map((info) => lineImages[info.line_num]);

  return (
    <PageContainer>
      <TopBar2 />
      {subwayStation ? (
        <>
          <StationName>{subwayStation}역</StationName>
          <LineImagesContainer>
            {lineImagesToShow.map((lineImage, index) => (
              <LineImage key={index} src={lineImage} alt={`${stationInfo[index].line_num} 이미지`} />
            ))}
          </LineImagesContainer>
          <Station onReset={resetState} />
        </>
      ) : (
        <Ment2 />
      )}
      <MapContainer>
        <TransformWrapper initialScale={scale} initialPositionX={-110} initialPositionY={0}>
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
            {pointPosition && <Point style={pointPosition} onClick={handlePointClick} />} 
          </TransformComponent>
        </TransformWrapper>
        {infoModalOpen && subwayStation && ( 
          <StationInfoModal>
            <CloseButton onClick={() => setInfoModalOpen(false)}>×</CloseButton>
            <h4>{subwayStation}역 코스</h4>
            <StationInfoModalDetail>
              {nearbyPlaces.map((place, index) => (
                <div key={index}>
                  {place.nearby_place.photo_reference ? (
                    <img 
                      src={getPhotoUrl(place.nearby_place.photo_reference)} 
                      alt={place.nearby_place.name} 
                      style={{ width: '118px', height: '76px', paddingRight: '2.5px' }}
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