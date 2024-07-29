import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mapImage from '../assets/images/map2.jpg';
import pointerImage from '../assets/images/pointer.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import TopBar2 from "../components/Common/TopBar2";
import Search from "../components/Goal/Search";
import Ment from "../components/Goal/Ment";
import Ment3 from "../components/Goal/Ment3";
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

const StationInfoModal = styled.div`
  position: absolute;
  border: 2px solid #ccc;
  padding: 10px;
  z-index: 10;
  left: 20px;
  top: 20px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 2px 5px 5.1px 2px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 240px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  line-height: 24.2px;
`;
//임시로 데이터 넣어둠, API 연결 해야함

const TEMP_DATA = {
  맛집: [
    {
      subway_station: "진접",
      nearby_place: {
        name: "스시쿠모",
        place_id: "ChIJ4zNMyFzJfDUROYD-Awegpak",
        rating: 4.5,
        user_ratings_total: 274
      },
      additional_places: [
        {
          category: "베이커리",
          name: "쁘왈란",
          place_id: "ChIJWaEmuFzJfDUR0Kv33EdOKbk",
          rating: 4.2,
          user_ratings_total: 9
        },
        {
          category: "쇼핑몰",
          name: "현대백화점",
          place_id: "ChIJmyP2NUPJfDURJhIAPvuVaSY",
          rating: 4.3,
          user_ratings_total: 19
        }
      ]
    },
    {
      subway_station: "신금호",
      nearby_place: {
        name: "원조호남순대국24시",
        place_id: "ChIJQahD-J1sMhUR0dY1BEju3qQ",
        rating: 4.2,
        user_ratings_total: 168
      },
      additional_places: [
        {
          category: "베이커리",
          name: "침착하고느린손",
          place_id: "ChIJO_TE72yjfDURll7DLmMEhC0",
          rating: 4.5,
          user_ratings_total: 11
        },
        {
          category: "서점",
          name: "알바트로스",
          place_id: "ChIJs6XeqIKjfDUR196z7quiVZY",
          rating: 3.8,
          user_ratings_total: 20
        }
      ]
    },
    {
      subway_station: "솔밭공원",
      nearby_place: {
        name: "메기한마당",
        place_id: "ChIJpftLiTC8fDURCQ4YAh5IVMM",
        rating: 4.2,
        user_ratings_total: 151
      },
      additional_places: [
        {
          category: "카페",
          name: "종점커피",
          place_id: "ChIJG8ujrqm_fDUR-oKWUcqntuk",
          rating: 4.3,
          user_ratings_total: 3
        },
        {
          category: "서점",
          name: "쓸모의 발견",
          place_id: "ChIJz63t43e_fDURaUD5ekDlmoI",
          rating: 4.8,
          user_ratings_total: 5
        }
      ]
    }
  ]
};

function GoalTravel1() {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subwayStation, setSubwayStation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [places, setPlaces] = useState([]);
  const [pointers, setPointers] = useState([]);
  const [showMent3, setShowMent3] = useState(false);

  const TEMP_STATIONS = [
    { 전철역명: "진접", X좌표: 1350, Y좌표: 3100 },
    { 전철역명: "신금호", X좌표: 1500, Y좌표: 3200 },
    { 전철역명: "솔밭공원", X좌표: 1700, Y좌표: 3300 },
  ];

  useEffect(() => {
    setStations(TEMP_STATIONS);
  }, []);

  const resetStates = () => {
    setSelectedStation(null);
    setIsModalOpen(false);
    setSubwayStation('');
    setSelectedCategory('');
    setPlaces([]);
    setPointers([]);
    setShowMent3(false);
  };

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

  const handlePointClick = (station) => {
    setSelectedStation(station);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category) {
      const selectedPlaces = TEMP_DATA[category] || [];
      setPlaces(selectedPlaces);
      const newPointers = selectedPlaces
        .map((place) => getCoordinatesByStationName(place.subway_station))
        .filter(Boolean);
      
      setPointers(newPointers);
      
      if (newPointers.length > 0) {
        setShowMent3(true);
      }
    }
  };
  
  return (
    <PageContainer>
      <TopBar2 />
      {!showMent3 && <Ment />}
      {!showMent3 && <Search onCategorySelect={handleCategorySelect} />}
      {showMent3 && <Ment3 onReset={resetStates} />}

      <MapContainer>
        <TransformWrapper initialScale={1.0} initialPositionX={-110} initialPositionY={0}>
          <TransformComponent>
            <MapImage src={mapImage} alt="Subway Map" />
            {pointers.map((pointer, index) => {
              const pointPosition = getPointPosition(pointer.x, pointer.y);
              return (
                <Point
                  key={index}
                  style={pointPosition}
                  onClick={() => handlePointClick({ 전철역명: subwayStation })}
                />
              );
            })}
            {places.map((place, index) => (
              <Point
                key={index}
                style={getPointPosition(1000 + index * 50, 3000)} // 예시 좌표로 표시
                onClick={() => handlePointClick(place)}
              />
            ))}
          </TransformComponent>
        </TransformWrapper>
        {isModalOpen && selectedStation && (
          <StationInfoModal style={{ left: '20px', top: '20px' }}>
            <h4>{selectedStation.전철역명}</h4>
            <div>
              <h3>'맛집'과 함께 코스를 삶았어요!</h3>
              <p>맛집 : {selectedStation.nearby_place.name}</p>
            </div>
            <div>
              {selectedStation.additional_places.map((place, idx) => (
                <div key={idx}>
                  <p>{place.category} : {place.name}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setIsModalOpen(false)}>닫기</button>
          </StationInfoModal>
        )}
      </MapContainer>
      <StyledBottomBar>
        <BottomBar />
      </StyledBottomBar>
    </PageContainer>
  );
}

export default GoalTravel1;