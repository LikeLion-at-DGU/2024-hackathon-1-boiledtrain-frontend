import React, { useEffect, useState, useCallback } from "react";
import * as S from "./styled";
import HeartIcon from "../../assets/images/HeartIcon";
import train from "../../assets/images/ticket.jpg";
import apiCall from "../../api";
import EmptyCourse from "../Common/EmptyCourse";

const CourseContentLike = ({ onCourseClick }) => {
    const [data, setData] = useState([]);
    const [likedCourses, setLikedCourses] = useState({});

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall("/api/user/course/zzim_course", "get", null, token);
            setData(response.data);
            const initialLikedCourses = {};
            response.data.forEach(course => {
                initialLikedCourses[course.id] = course.is_like;
            });
            setLikedCourses(initialLikedCourses);
        } catch (error) {
            console.log("error 발생: ", error);
        }
    }, []);

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

    const toggleLike = async (courseId, isLiked, e) => {
        e.stopPropagation();  // Prevent triggering the onCourseClick event
        try {
            const token = localStorage.getItem('access_token');
            await apiCall(`/api/user/course/${courseId}/likes`, "get", { headers: { Authorization: `Bearer ${token}` } });
            setLikedCourses((prevState) => ({
                ...prevState,
                [courseId]: !isLiked
            }));
        } catch (error) {
            console.log("error 발생: ", error);
        }
    };

    if (data.length === 0) {
        return <EmptyCourse />;
    }

    return (
        <S.TopContainer>
            {data.map((course, index) => {
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
                                <img src={train} style={{ borderRadius: '100px' }} alt="course thumbnail" />
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

export default CourseContentLike;
