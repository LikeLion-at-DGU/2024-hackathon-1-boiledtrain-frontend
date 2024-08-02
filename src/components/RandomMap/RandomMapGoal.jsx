import React, { useEffect, useState } from 'react';

const RandomMapGoal = ({ placeIds }) => {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;

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
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.5665, lng: 126.978 },
        zoom: 12,
      });
      setMap(mapInstance);

      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);

      const service = new window.google.maps.places.PlacesService(mapInstance);
      const bounds = new window.google.maps.LatLngBounds(); 

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

              const marker = new window.google.maps.Marker({
                position: location,
                map: mapInstance,
                title: place.name,
              });

              bounds.extend(location);

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

      setTimeout(() => {
        mapInstance.fitBounds(bounds);
      }, 1000);
    };

    loadMap();
  }, [placeIds]);

  return <div id="map" style={{ width: '450px', height: '510px' }} />;
};

export default RandomMapGoal;