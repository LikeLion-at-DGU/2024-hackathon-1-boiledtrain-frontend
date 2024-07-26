import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import styled from 'styled-components';
import mapImage from '../assets/images/map2.jpg'; // 지하철 노선도 이미지 경로
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import API from "../api";

const Station = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: blue;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px; /* Fixed width */
  height: auto;
`;

const MapImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto; 
  height: auto;
`;

const StationInfo = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

function TrainMap() {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [example, setExample] = useState([]);
  const fetchData = async () => {
    try {
      const response = await API.get(`/map/search_places_random/`);
      console.log('Response:', response);
      setExample(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);
  useEffect(() => {
    Papa.parse('/newtrain.csv', {
      header: true,
      download: true,
      complete: (results) => {
        console.log('Parsed CSV data:', results.data);
        setStations(results.data);
      },
      error: (error) => {
        console.error('Error fetching CSV file:', error);
      }
    });
  }, []);

  useEffect(() => {
    // Calculate the dimensions of the image after it's loaded
    const img = new Image();
    img.src = mapImage;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, []);

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  return (
    <div>
      <h1>Subway Map</h1>
      <MapContainer>
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent>
                <MapImage src={mapImage} alt="Subway Map" />
                {stations.map((station, index) => {
                  const x = parseFloat(station['X좌표']);
                  const y = parseFloat(station['Y좌표']);
                  
                  // Adjust the coordinates based on the image scaling
                  const scaleX = imageDimensions.width / 430; // Assuming 430px is the image's displayed width
                  const scaleY = imageDimensions.height / (window.innerHeight * 0.7); // Adjust the height scaling as needed

                  return (
                    <Station
                      key={index}
                      style={{
                        left: `${(x / scaleX)}px`,
                        top: `${(y / scaleY)}px`,
                      }}
                      onClick={() => handleStationClick(station)}
                    />
                  );
                })}
              </TransformComponent>
              <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
                <button onClick={() => zoomIn()}>Zoom In</button>
                <button onClick={() => zoomOut()}>Zoom Out</button>
                <button onClick={() => resetTransform()}>Reset</button>
              </div>
            </>
          )}
        </TransformWrapper>
      </MapContainer>
      {selectedStation && (
        <StationInfo>
          <h2>Selected Station</h2>
          <p><strong>Station Name:</strong> {selectedStation['전철역명']}</p>
          <p><strong>Code:</strong> {selectedStation['전철역코드']}</p>
        </StationInfo>
      )}
    </div>
  );
}

export default TrainMap;
