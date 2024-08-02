import React, { useEffect, useRef, useState } from "react";
import { Mapcontainer, MapContent, PlaceAddButton, PlaceAddContainer, Placeaddr, PlaceContent, Placeother, PlaceTitle } from "./styled";
import apiCall from "../../api";
import imageUrl from "../../assets/images/pointer.png";
import { SearchInput, SearchButton, SearchContainer, SearchText } from "../Course/styled";
import SearchImg from "../../assets/images/search.svg";
import AddedPlace from "./AddedPlace";
import Warning from "../Common/Warning";

const Map = ({ selectedStation, addedPlaces, setAddedPlaces }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");

    const currentMarkerRef = useRef(null);

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

                const bounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(37.0, 126.0),
                    new google.maps.LatLng(38.5, 129.0)
                );

                newMap.addListener("dragend", () => {
                    if (!bounds.contains(newMap.getCenter())) {
                        newMap.panToBounds(bounds);
                    }
                });

                setMap(newMap);

                const autocompleteInput = document.getElementById("autocomplete");
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
                    const service = new google.maps.places.PlacesService(map);
                    service.textSearch({ query: place.name }, (results, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                            map.setCenter(results[0].geometry.location);
                            map.setZoom(15);
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
            currentMarkerRef.current.setMap(null);
            currentMarkerRef.current = null;
        }
    };

    const createMarker = (location, place) => {
        deleteMarker();
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: imageUrl,
        });

        infoWindow.setContent(`
            <div>
                <strong>${place.name}</strong><br>
                ${place.formatted_address}
            </div>
        `);

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        currentMarkerRef.current = marker;
    };

    const handleAddClick = async () => {
        if (addedPlaces.length >= 7) {
            setWarningMessage("코스는 7개까지 등록할 수 있어요!");
            setShowWarning(true);
            return;
        }
        
        if (selectedPlace) {
            console.log("Selected Place:", selectedPlace);
            try {
                const token = localStorage.getItem('access_token');
                const response = await apiCall("/user/choose_and_add_place/", 'post', {
                    subway_station: selectedStation,
                    place: selectedPlace.place_id,
                }, token);

                console.log('API response:', response);
                if (response.data.true) {
                    setAddedPlaces(prevPlaces => [
                        ...prevPlaces,
                        {
                            name: selectedPlace.name,
                            address: selectedPlace.formatted_address,
                            category: selectedPlace.types.length > 0 ? selectedPlace.types[0] : '카테고리 정보가 없습니다.',
                        }
                    ]);
                    setSelectedPlace(null);
                } else if (response.data.false) {
                    setWarningMessage("두 지점은 도보로 20분 이상의 거리입니다.");
                    setShowWarning(true);
                }
            } catch (error) {
                console.error('Error sending data to API:', error);
                if (error.response) {
                    if (error.response.status === 401) {
                        alert('인증 오류: 로그인 상태를 확인하세요.');
                    } else {
                        alert(`오류 발생: ${error.response.status}`);
                    }
                } else {
                    alert('네트워크 오류: 서버에 연결할 수 없습니다.');
                }
            }
        } else {
            console.error('No place selected');
        }
    };

    const handleEditPlace = async (placeName) => {
        const service = new google.maps.places.PlacesService(map);
        
        service.textSearch({ query: placeName }, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                const place = results[0];
                map.setCenter(place.geometry.location);
                map.setZoom(15);
                setSelectedPlace(place);
                createMarker(place.geometry.location, place);
            } else {
                console.error('장소를 찾을 수 없습니다.');
            }
        });
    };

    const handleDeletePlace = (placeName) => {
        setAddedPlaces(prevPlaces => prevPlaces.filter(place => place.name !== placeName));
    };

    const handleWarningClose = () => {
        setShowWarning(false);
        setWarningMessage("");
    };

    useEffect(() => {
        console.log("Updated Added Places:", addedPlaces);
    }, [addedPlaces]);

    return (
        <div style={{ position: "relative" }}>
            {showWarning && <Warning message={warningMessage} onClose={handleWarningClose} />}
            <SearchContainer>
                <SearchText>원하는 장소명을 검색해 등록하세요.</SearchText>
                <SearchInput id='autocomplete' type='text' placeholder="검색" />
                <SearchButton><img src={SearchImg} alt="Search" /></SearchButton>
            </SearchContainer>
            <Mapcontainer>
                <MapContent id="map" ref={mapRef} />
                <PlaceContent>
                    <PlaceTitle>장소이름 : {selectedPlace ? selectedPlace.name : '선택된 장소가 없습니다.'}</PlaceTitle>
                    <Placeaddr>주소 : {selectedPlace ? selectedPlace.formatted_address : '주소 정보가 없습니다.'}</Placeaddr>
                    <Placeother>카테고리 : {selectedPlace && selectedPlace.types.length > 0 ? selectedPlace.types[0] : '카테고리 정보가 없습니다.'}</Placeother>
                </PlaceContent>
                <PlaceAddButton onClick={handleAddClick}>추가하기</PlaceAddButton>
            </Mapcontainer>
            <PlaceAddContainer>
                <hr />
                {addedPlaces.map((place, index) => (
                    <AddedPlace
                        key={index}
                        placeName={place.name}
                        placeAddress={place.address}
                        placeCategory={place.category}
                        order={index + 1}
                        onDelete={() => handleDeletePlace(place.name)}
                        onEdit={() => handleEditPlace(place.name)} // 수정하기 버튼 클릭 시 호출
                    />
                ))}
            </PlaceAddContainer>
            <hr />
        </div>
    );
};

export default Map;
