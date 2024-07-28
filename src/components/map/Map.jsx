import React, { useEffect, useRef, useState } from "react";
import { Mapcontainer, MapContent, PlaceAddButton, Placeaddr, PlaceContent, Placeother, PlaceTitle } from "./styled";
import API from "../../api";
import imageUrl from "../../assets/images/pointer.png"; 
import { SearchInput,SearchButton, SearchContainer, InfoText, SearchText } from "../Course/styled";
import SearchImg from "../../assets/images/search.svg"

const Map = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null); 
    const [currentMarker, setCurrentMarker] = useState(null); 

    useEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;

        const loadScript = (url) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${url}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement("script");
                script.src = url;
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const initMap = () => {
            if (mapRef.current) {
                const seoulLatLng = { lat: 37.5665, lng: 126.9780 };
                const newMap = new google.maps.Map(mapRef.current, {
                    center: seoulLatLng,
                    zoom: 10,
                });

                // 초기 위치 표시
                const bounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(37.0, 126.0),
                    new google.maps.LatLng(38.5, 129.0)
                );

                // 찾는 범위 현재 지도 위치로 제한
                newMap.addListener("dragend", () => {
                    if (!bounds.contains(newMap.getCenter())) {
                        newMap.panToBounds(bounds);
                    }
                });

                setMap(newMap);

                const autocompleteInput = document.getElementById("autocomplete");
                // 한국에서 있는 장소 중에 자동완성
                const newAutocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
                    bounds: bounds,
                    strictBounds: true,
                    componentRestrictions: { country: "kr" },
                });
                newAutocomplete.bindTo("bounds", newMap);
                setAutocomplete(newAutocomplete);

                setInfoWindow(new google.maps.InfoWindow());

                // 지도에 클릭 이벤트 생성
                newMap.addListener("click", (event) => {
                    const latLng = event.latLng; // 좌표 저장
                    const service = new google.maps.places.PlacesService(newMap);
                    console.log("Clicked location:", latLng);
                    
                    console.log("Current marker before removal:", currentMarker);
                    
                    

                    // 선택 장소에 반경 50미터에 있는 장소 검색
                    service.nearbySearch({
                        location: latLng,
                        radius: 50, // Define the search radius (in meters)
                    }, (results, status) => {
                        console.log(results);
                        if ((status === google.maps.places.PlacesServiceStatus.OK) && (results.length > 0)) {
                            // Remove previous marker if any
                            if (currentMarker) {
                                currentMarker.setMap(null);
                            }

                            // Create a new marker with a custom icon
                            const marker = new google.maps.Marker({
                                position: latLng,
                                map: newMap,
                                icon: imageUrl,
                            });
                            

                            // Set content for the InfoWindow
                            infoWindow.setContent(`
                                <div style="text-align: center;">
                                    <img src="${imageUrl}" alt="Place" style="width: 200px; height: auto; border-radius: 10px; margin-bottom: 10px;" />
                                    <div>
                                        <strong>${results[0].name}</strong><br>
                                        ${results[0].vicinity}
                                    </div>
                                </div>
                            `);

                            // Add a click listener to the marker to show the InfoWindow
                            marker.addListener("click", () => {
                                infoWindow.open(newMap, marker);
                            });

                            // Save the marker and place info
                            setCurrentMarker(marker);
                            setSelectedPlace({ ...results[0], marker });
                        } else {
                            console.log("No places found at this location.");
                        }
                    });
                });
            }
        };

        if (window.google && window.google.maps && window.google.maps.places) {
            initMap();
        } else {
            window.initMap = initMap;
            loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`)
                .catch((err) => {
                    console.error("Failed to load Google Maps script:", err);
                });
        }
    }, []);

    useEffect(() => {
        if (autocomplete && map && infoWindow) {
            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    map.setCenter(place.geometry.location);
                    map.setZoom(15);

                    // Remove previous marker if any
                    if (currentMarker) {
                        currentMarker.setMap(null);
                    }

                    // Create a new marker with a custom icon
                    const marker = new google.maps.Marker({
                        position: place.geometry.location,
                        map: map,
                        icon: imageUrl,
                    });

                    // Set content for the InfoWindow
                    infoWindow.setContent(`
                        <div style="text-align: center;">
                            <img src="${imageUrl}" alt="${place.name}" style="width: 200px; height: auto; border-radius: 10px; margin-bottom: 10px;" />
                            <div>
                                <strong>${place.name}</strong><br>
                                ${place.formatted_address}
                            </div>
                        </div>
                    `);

                    // Add a click listener to the marker to show the InfoWindow
                    marker.addListener("click", () => {
                        infoWindow.open(map, marker);
                    });

                    // Save the marker and place info
                    setCurrentMarker(marker);
                    setSelectedPlace({ ...place, marker });
                } else {
                    // If no geometry, zoom to the predicted place location
                    const service = new google.maps.places.PlacesService(map);
                    service.textSearch({ query: place.name }, (results, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                            map.setCenter(results[0].geometry.location);
                            map.setZoom(15);

                            // Remove previous marker if any
                            if (currentMarker) {
                                currentMarker.setMap(null);
                            }

                            // Create a new marker with a custom icon
                            const marker = new google.maps.Marker({
                                position: results[0].geometry.location,
                                map: map,
                                icon: imageUrl,
                            });

                            // Set content for the InfoWindow
                            infoWindow.setContent(`
                                <div style="text-align: center;">
                                    <div>
                                        <strong>${results[0].name}</strong><br>
                                        ${results[0].formatted_address}
                                    </div>
                                </div>
                            `);

                            // Add a click listener to the marker to show the InfoWindow
                            marker.addListener("click", () => {
                                infoWindow.open(map, marker);
                            });

                            // Save the marker and place info
                            setCurrentMarker(marker);
                            setSelectedPlace({ ...results[0], marker });
                        }
                    });
                }
            });
        }
    }, [autocomplete, map, infoWindow, currentMarker]);

    const handleAddClick = async () => {
        console.log('선택된 장송',selectedPlace);
        if (selectedPlace) {
            try {
                const response = await API.post("/user/choose_and_add_place/", {
                    subway_station: "군자역",
                    place: selectedPlace.formatted_address || selectedPlace.name,
                    // 필요한 경우 다른 정보를 추가
                });
                console.log('API response:', response);
                // 추가 성공 후 처리
            } catch (error) {
                console.error('Error sending data to API:', error);
                // 오류 처리
            }
        } else {
            console.error('No place selected');
        }
    };

    return (
        <>
            
            <SearchContainer>
                <SearchText>원하는 장소명을 검색해 등록하세요.</SearchText>
                <SearchInput id='autocomplete' type='text' placeholder="   검색"></SearchInput>
                <SearchButton><img src={SearchImg}/></SearchButton>
            </SearchContainer>
            <Mapcontainer>
                <MapContent id="map" ref={mapRef}/>
                <PlaceContent>
                    <PlaceTitle>장소 이름</PlaceTitle>
                    <Placeaddr>주소</Placeaddr>
                    <Placeother>영업시간</Placeother>
                    <Placeother>카테고리</Placeother>
                </PlaceContent>
                <PlaceAddButton onClick={handleAddClick}>추가하기</PlaceAddButton>
            </Mapcontainer>
            <hr></hr>
        </>
    );
};

export default Map;
