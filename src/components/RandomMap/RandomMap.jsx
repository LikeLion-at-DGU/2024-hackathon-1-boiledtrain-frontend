import React, { useEffect, useState } from 'react';

const RandomMap = ({ placeIds }) => {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;

    // Google Maps API 로드
    const loadMap = () => {
      if (!apiKey) {
        console.error('Google Maps API key is missing');
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      // 기본 지도 설정
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.5665, lng: 126.978 }, // 기본 중심 좌표 (서울)
        zoom: 12,
      });
      setMap(mapInstance);

      // InfoWindow 인스턴스 생성
      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);

      // 장소 세부정보 가져오기
      const service = new window.google.maps.places.PlacesService(mapInstance);
      const bounds = new window.google.maps.LatLngBounds(); // 경계 상자 생성

      placeIds.forEach((placeId) => {
        if (!placeId) {
          console.error('placeId is missing');
          return;
        }

        service.getDetails(
          { placeId: placeId },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const location = place.geometry.location;

              // 마커 추가
              const marker = new window.google.maps.Marker({
                position: location,
                map: mapInstance,
                title: place.name,
              });

              // 경계 상자에 마커 위치 추가
              bounds.extend(location);

              // 마커 클릭 시 InfoWindow 표시
              marker.addListener('click', () => {
                infoWindowInstance.setContent(`
                  <div>
                    <strong>${place.name}</strong><br>
                    평점: ${place.rating || '정보 없음'}<br>
                    ${place.formatted_address || '주소 정보 없음'}
                  </div>
                `);
                infoWindowInstance.open(mapInstance, marker);
              });
            } else {
              console.error('Place details request failed due to ' + status);
            }
          }
        );
      });

      // 모든 마커를 포함하는 경계 상자에 맞춰 지도 조정
      // 서비스에서 모든 장소의 세부정보를 가져온 후 한 번만 호출해야 합니다.
      // setTimeout을 사용하여 모든 마커가 추가된 후에 경계 상자를 조정합니다.
      setTimeout(() => {
        mapInstance.fitBounds(bounds);
      }, 1000); // 1초 후에 fitBounds 호출
    };

    loadMap();
  }, [placeIds]);

  return <div id="map" style={{ width: '450px', height: '510px' }} />;
};

export default RandomMap;
