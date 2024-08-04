import React, { useState, useEffect, useRef, useCallback } from "react";
import * as S from "./styled";
import back from "../../assets/images/back.png";
import menu from "../../assets/images/select.png";
import user from "../../assets/images/tr.jpg";
import MenuList from "../Common/MenuList";
import apiCall from "../../api";
import profile from "../../assets/images/normalprofile.png"

// User info retrieval function
const getUserInfo = () => {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
};

const CourseDetail = ({ courseId, onClose, onEditCourse, selected, selected2 }) => {
    const [map, setMap] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null);
    const [course, setCourse] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall(`/api/user/course/${courseId}`, "get", null, token);
            setCourse(response.data);
        } catch (error) {
            console.log("error 발생: ", error);
        }
    }, [courseId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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

            if (course && course.placelist && course.placelist.length > 0) {
                course.placelist.forEach((place) => {
                    const request = {
                        query: place.name,
                        fields: ['place_id', 'name', 'geometry', 'formatted_address', 'rating']
                    };

                    service.findPlaceFromQuery(request, (results, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                            const placeResult = results[0];
                            const location = placeResult.geometry.location;

                            const marker = new window.google.maps.Marker({
                                position: location,
                                map: mapInstance,
                                title: placeResult.name,
                            });

                            bounds.extend(location);

                            marker.addListener('click', () => {
                                infoWindowInstance.setContent(`
                                    <div>
                                        <strong>${placeResult.name}</strong><br>
                                        평점: ${placeResult.rating || '정보 없음'}<br>
                                        ${placeResult.formatted_address || '주소 정보 없음'}
                                    </div>
                                `);
                                infoWindowInstance.open(mapInstance, marker);
                            });
                        } else {
                            console.error('Place search failed due to ' + status);
                        }
                    });
                });

                setTimeout(() => {
                    mapInstance.fitBounds(bounds);
                }, 1000);
            }
        };

        loadMap();
    }, [course]);

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    if (!course) {
        return <p>Loading...</p>;
    }

    const userInfo = getUserInfo();
    const shouldShowMenu = !(userInfo && userInfo.email !== course.user.email);

    return (
        <S.detailContainer>
            <S.header>
                <S.HeadButton onClick={onClose}><img src={back} alt="back" /></S.HeadButton>
                {shouldShowMenu && <S.HeadButton onClick={handleMenuClick}><img src={menu} alt="menu" /></S.HeadButton>}
            </S.header>
            <S.infoUserContainer>
                <S.userImg src={course.user.profile_image || profile} alt="user" />
                <S.User>
                    <S.userNickname>{course.user.nickname}</S.userNickname>
                    <S.userId>{course.user.email}</S.userId>
                </S.User>
            </S.infoUserContainer>
            <S.mapContainer id='map'></S.mapContainer>
            <S.ContentContainer>
                <p style={{ fontSize: '20px' }}>{course.title}</p>
                <p style={{ fontSize: '14px', color: '#8C8C8C' }}>{course.description}</p>
                {course.placelist && course.placelist.length > 0 ? (
                    course.placelist.map((place, index) => (
                        <p key={index}>{index + 1}. {place.name}</p>
                    ))
                ) : (
                    <p>No places available</p>
                )}
            </S.ContentContainer>
            {menuVisible && (
                <div ref={menuRef}>
                    <MenuList 
                        courseId={course.id} 
                        onCourseDeleted={() => { onClose(); }} 
                        onEditCourse={() => onEditCourse(course)}
                    />
                </div>
            )}
        </S.detailContainer>
    );
}

export default CourseDetail;
