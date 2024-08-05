import React, { useEffect, useState, useCallback } from "react";
import * as S from "./styled";
import train from "../../assets/images/boiledtrainLogo.png";
import apiCall from "../../api";
import EmptyCourse from "../Common/EmptyCourse";
import HeartIcon from "../../assets/images/HeartIcon";
import profile from "../../assets/images/normalprofile.png";
const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;

const CourseContent = ({ onCourseClick }) => {
    const [data, setData] = useState([]);
    const [likedCourses, setLikedCourses] = useState({});
    const [placeImages, setPlaceImages] = useState({});
    const [map, setMap] = useState(null);

    useEffect(() => {
        // Google Maps JavaScript API 로드
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            const map = new window.google.maps.Map(document.createElement('div'));
            setMap(map);
        };
        document.head.appendChild(script);
    }, []);

    const fetchPlaceImage = async (placeId) => {
        return new Promise((resolve, reject) => {
            if (!map) {
                resolve(train);
                return;
            }

            const service = new window.google.maps.places.PlacesService(map);
            service.getDetails({ placeId }, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && place.photos && place.photos.length > 0) {
                    const photoUrl = place.photos[0].getUrl();
                    resolve(photoUrl);
                } else {
                    resolve(train); // 사진이 없으면 기본 이미지 사용
                }
            });
        });
    };

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall("/api/user/my_course", "get", null, token);
            setData(response.data);
            const initialLikedCourses = {};
            response.data.forEach(course => {
                initialLikedCourses[course.id] = {
                    is_like: course.is_like,
                    like_count: course.like_count // 초기 like_count 저장
                };
            });
            setLikedCourses(initialLikedCourses);

            // 장소 이미지 불러오기
            const placeImagePromises = response.data.flatMap(course =>
                course.placelist.slice(0, 3).map(async placeId => {
                    const imageUrl = await fetchPlaceImage(placeId);
                    return { [placeId]: imageUrl };
                })
            );

            const placeImageResults = await Promise.all(placeImagePromises);
            const newPlaceImages = placeImageResults.reduce((acc, img) => {
                return { ...acc, ...img };
            }, {});

            setPlaceImages(newPlaceImages);
        } catch (error) {
            console.log("error 발생: ", error);
        }
    }, [map]);

    useEffect(() => {
        if (map) {
            fetchData();
        }
    }, [fetchData, map]);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const toggleLike = async (id, isLiked, event) => {
        event.stopPropagation();
        try {
            const token = localStorage.getItem('access_token');
            await apiCall(`/api/user/course/${id}/likes`, "get", null, token);
            // 기존 상태에서 like_count를 증가시키고 is_like 상태를 반전
            setLikedCourses((prevState) => {
                const course = prevState[id];
                return {
                    ...prevState,
                    [id]: {
                        is_like: !course.is_like,
                        like_count: course.is_like ? course.like_count - 1 : course.like_count + 1
                    }
                };
            });
        } catch (error) {
            console.log("error 발생: ", error);
        }
    };

    if (data.length === 0) {
        return <EmptyCourse />;
    }

    return (
        <S.TopContainer>
             {data.slice().map((course, index) => {
                const { is_like, like_count } = likedCourses[course.id] || { is_like: course.is_like, like_count: course.like_count };


                const courseImages = course.placelist.slice(0, 3).map(
                    placeId => placeImages[placeId] || train
                );

                return (
                    <S.CourseContainer key={course.id} onClick={() => onCourseClick(course.id)}>
                        <S.PhotoContainer>
                            {courseImages.map((image, index) => (
                                <S.Img 
                                    key={index}
                                    style={{
                                        borderRadius: index === 0 ? '12px 0px 0px 0px' : index === 2 ? '0px 12px 0px 0px' : ''
                                    }} 
                                    src={image} 
                                />
                            ))}
                        </S.PhotoContainer>
                        <S.InfoUser>
                            <S.CourseContentContainer>
                                <img src={course.user.profile_image || profile} style={{ borderRadius: '100px', width: '40px', height: '40px' }} alt="course thumbnail" />
                                <div style={{ marginLeft: '5px' }}>
                                    <S.Course>{course.title}</S.Course>
                                    <S.Describ>{formatDateTime(course.created_at)} | {course.description}</S.Describ>
                                </div>
                            </S.CourseContentContainer>
                            <S.Plus>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <S.like_count>{like_count}</S.like_count> {/* 실시간으로 업데이트 되는 likeCount */}
                                    <S.Button onClick={(e) => toggleLike(course.id, is_like, e)}>
                                        <HeartIcon fill={is_like ? '#FF3434' : '#CCCCCC'} />
                                    </S.Button>
                                </div>
                                <S.P>#{course.subway_station}역</S.P>
                            </S.Plus>
                        </S.InfoUser>
                    </S.CourseContainer>
                );
            })}
        </S.TopContainer>
    );
};

export default CourseContent;
