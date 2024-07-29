import React, { useEffect, useRef, useState } from "react";
import { Mapcontainer, MapContent, PlaceAddButton, Placeaddr, PlaceContent, Placeother, PlaceTitle } from "./styled";
import API from "../../api";
import apiCall from "../../api";
import imageUrl from "../../assets/images/pointer.png"; 
import { SearchInput, SearchButton, SearchContainer, SearchText } from "../Course/styled";
import SearchImg from "../../assets/images/search.svg";


const Map = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null);
    const currentMarkerRef = useRef(null); // useRef로 currentMarker 관리

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
                    setSelectedPlace(place);
                    createMarker(place.geometry.location, place);
                } else {
                    // geometry가 없는 경우 텍스트 검색 사용
                    const service = new google.maps.places.PlacesService(map);
                    service.textSearch({ query: place.name }, (results, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                            map.setCenter(results[0].geometry.location);
                            map.setZoom(15);

                            // 마커 생성 함수 호출
                            setSelectedPlace(results[0]);
                            createMarker(results[0].geometry.location, results[0]);
                        }
                    });
                }
            });
        }
    }, [autocomplete, map, infoWindow]);

    const deleteMarker = () => {
        if (currentMarkerRef.current) {
            currentMarkerRef.current.setMap(null); // 지도에서 마커 제거
            currentMarkerRef.current = null; // 마커 참조 초기화
        }
    };

    const createMarker = (location, place) => {
        deleteMarker(); // 기존 마커 삭제
        // 마커 생성
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: imageUrl,
        });

        console.log("Marker created:", marker); // 마커 생성 확인

        // InfoWindow 내용 설정
        infoWindow.setContent(`
            <div>
                <strong>${place.name}</strong><br>
                ${place.formatted_address}
            </div>
        `);

        // 마커 클릭 리스너 추가
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        // 마커 저장
        currentMarkerRef.current = marker;
    };

    const handleAddClick = async () => {
        if (selectedPlace) {
            try {
                const token = localStorage.getItem('authToken');
                console.log(token);
                const response = await apiCall("/user/choose_and_add_place/",'get', {
                    subway_station: "군자역",
                    place_id: selectedPlace.place_id,
                    // 필요한 경우 다른 정보를 추가
                },token);
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
                <SearchInput id='autocomplete' type='text' placeholder="검색"></SearchInput>
                <SearchButton><img src={SearchImg}/></SearchButton>
            </SearchContainer>
            <Mapcontainer>
                <MapContent id="map" ref={mapRef}/>
                <PlaceContent>
                    <PlaceTitle>장소이름 : {selectedPlace ? selectedPlace.name : '선택된 장소가 없습니다.'}</PlaceTitle>
                    <Placeaddr>주소 : {selectedPlace ? selectedPlace.formatted_address : '주소 정보가 없습니다.'}</Placeaddr>
                    <Placeother>카테고리 : {selectedPlace && selectedPlace.types.length > 0 ? selectedPlace.types[0] : '카테고리 정보가 없습니다.'}</Placeother>
                </PlaceContent>
                <PlaceAddButton onClick={handleAddClick}>추가하기</PlaceAddButton>
            </Mapcontainer>
            <hr></hr>
        </>
    );
};

export default Map;
