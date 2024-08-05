import React, { useEffect, useState,useCallback } from "react";
import * as S from "./styled";
import train from "../../assets/images/ticket.jpg";
import apiCall from "../../api";
import EmptyCourse from "../Common/EmptyCourse";
import HeartIcon from "../../assets/images/HeartIcon";
import profile from "../../assets/images/normalprofile.png"

const CourseContentShaedLike = ({selectedStation,onCourseClick}) => {
    const [data, setData] = useState([]);
    const [likedCourses, setLikedCourses] = useState({});

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall("/api/user/course/like_order", "get", { headers: { Authorization: `Bearer ${token}` } });
            setData(response.data);
            const initialLikedCourses = {};
            response.data.forEach(course => {
                initialLikedCourses[course.id] = course.is_like;
            });
            setLikedCourses(initialLikedCourses);
        } catch (error) {
            console.log("error 발생: ", error);
        }
    },[]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
            setLikedCourses((prevState) => ({
                ...prevState,
                [id]: !isLiked
            }));
        } catch (error) {
            console.log("error 발생: ", error);
        }
    };
    useEffect(() => {
        console.log("Selected Station:", selectedStation);
    }, [selectedStation]);

    const filteredData = selectedStation 
        ? data.filter(course => course.subway_station === selectedStation) 
        : data;

    if (filteredData.length === 0) {
        return <EmptyCourse />;
    }

    return (
        <S.TopContainer>
            {filteredData.slice().map((course, index) => {
                const isLiked = likedCourses[course.id] !== undefined ? likedCourses[course.id] : course.is_like;
                const likeCount = isLiked ? course.like_count + 1 : course.like_count;

                return (
                    <S.CourseContainer key={index} onClick={() => onCourseClick(course.id)}>
                        <S.PhotoContainer>
                            <S.Img style={{ borderRadius: '12px 0px 0px 0px' }} src={train} />
                            <S.Img src={train} />
                            <S.Img style={{ borderRadius: '0px 12px 0px 0px' }} src={train} />
                        </S.PhotoContainer>
                        <S.InfoUser>
                            <S.CourseContentContainer>
                                <img src={course.user.profile_image || profile} style={{ borderRadius: '100px',width:'40px',height:'40px' }} alt="course thumbnail" />
                                <div style={{ marginLeft: '5px' }}>
                                    <S.Course>{course.title}</S.Course>
                                    <S.Describ>{formatDateTime(course.created_at)} | {course.description}</S.Describ>
                                </div>
                            </S.CourseContentContainer>
                            <S.Plus>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <S.like_count>{likeCount}</S.like_count>
                                    <S.Button onClick={(e) => toggleLike(course.id, isLiked, e)}>
                                        <HeartIcon fill={isLiked ? '#FF3434' : '#CCCCCC'} />
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

export default CourseContentShaedLike;
