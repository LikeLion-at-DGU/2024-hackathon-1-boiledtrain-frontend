import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Papa from 'papaparse';
import mapImage from '../assets/images/map2.jpg';
import pointerImage from '../assets/images/pointer.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import TopBar2 from "../components/Common/TopBar2";
import Search from "../components/Goal/Search";
import Ment from "../components/Goal/Ment";
import Ment3 from "../components/Goal/Ment3";
import BottomBar from "../components/Common/BottomBar";
import apiCall from "../api";

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
  width: 270px;
  height: auto;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  line-height: 24.2px;
`;

function GoalTravel() {
  const [stations, setStations] = useState([]);
  const [subwayStations, setSubwayStations] = useState([]);
  const [coordinatesList, setCoordinatesList] = useState([]); 
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [additionalPlaces, setAdditionalPlaces] = useState([]); // 추가 장소 상태
  const [scale, setScale] = useState(1.0);
  const [selectedStation, setSelectedStation] = useState(null);
  const [hasPointer, setHasPointer] = useState(false);

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

  useEffect(() => {
    fetchStations();
  }, []);

  useEffect(() => {
    const coordsList = subwayStations.map(station => getCoordinatesByStationName(station));
    setCoordinatesList(coordsList);
    if (coordsList.length > 0) {
      setHasPointer(true);
    }
  }, [subwayStations]);

  const getCoordinatesByStationName = (name) => {
    const station = stations.find((station) => station.전철역명 === name);
    return station ? { x: parseFloat(station.X좌표), y: parseFloat(station.Y좌표) } : null;
  };

  const getPhotoUrl = (photoReference) => {
    const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
    if (!apiKey) {
      console.error('Google Maps API key is missing');
      return '';
    }
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${apiKey}`;
  };

  const handleCategorySelect = async (category) => {
    if (!category) {
      console.error('Category is not provided');
      return;
    }

    try {
      const response = await apiCall('/map/search_places_category/', 'post', { category });
      
      if (response.data && Array.isArray(response.data.places)) {
        const places = response.data.places;

        const subwayStations = places.map(place => place.subway_station);
        const nearbyPlaces = places;
        const additionalPlaces = places.flatMap(place => place.additional_places || []); // 추가 장소 처리

        setSubwayStations(subwayStations);
        setNearbyPlaces(nearbyPlaces); 
        setAdditionalPlaces(additionalPlaces); // 추가 장소 상태 업데이트

        console.log('Fetched subway stations:', subwayStations);
        console.log('Fetched places:', nearbyPlaces);
        console.log('Fetched additional places:', additionalPlaces);
      } else {
        console.error('Invalid response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getPointPosition = (x, y) => {
    const mapWidth = 430;
    const mapHeight = 646;
    const transformedX = (x / 2700) * mapWidth;
    const transformedY = (y / 4100) * mapHeight;
    return { left: transformedX, top: transformedY };
  };

  return (
    <PageContainer>
      <TopBar2 />
      {!hasPointer ? (
        <>
          <Search onCategorySelect={handleCategorySelect} />
          <Ment />
        </>
      ) : (
        <Ment3 />
      )}
      <MapContainer>
        <TransformWrapper
          initialScale={scale}
          initialPositionX={-110}
          initialPositionY={0}
        >
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
            {coordinatesList.map((coords, index) => (
              coords && (
                <Point
                  key={index}
                  style={getPointPosition(coords.x, coords.y)}
                  onClick={() => {
                    setSelectedStation(subwayStations[index]);
                  }}
                />
              )
            ))}
          </TransformComponent>
        </TransformWrapper>
        {selectedStation && (
          <StationInfoModal>
            <h4>{selectedStation}역</h4>
            {nearbyPlaces
              .filter(place => place.subway_station === selectedStation)
              .map((place, index) => (
                <div key={index}>
                  {place.nearby_place.photo_reference ? (
                    <img 
                      src={getPhotoUrl(place.nearby_place.photo_reference)} 
                      alt={place.nearby_place.name} 
                      style={{ width: '118px', height: '76px' }}
                    />
                  ) : (
                    <img 
                      src={pointerImage} 
                      alt="기본 이미지" 
                      style={{ width: '118px', height: '76px' }} 
                    />
                  )}
                  <strong>당신의 역:</strong> {place.nearby_place.name}(평점: {place.nearby_place.rating})
                </div>
              ))}
            {/* 추가 장소 출력 */}
            {additionalPlaces
              .filter(place => place.subway_station === selectedStation)
              .map((place, index) => (
                <div key={index}>
                  {place.photo_reference ? (
                    <img 
                      src={getPhotoUrl(place.photo_reference)} 
                      alt={place.name} 
                      style={{ width: '118px', height: '76px' }}
                    />
                  ) : (
                    <img 
                      src={pointerImage} 
                      alt="기본 이미지" 
                      style={{ width: '118px', height: '76px' }} 
                    />
                  )}
                  <strong>추가 장소:</strong> {place.name}(평점: {place.rating})
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

export default GoalTravel;
