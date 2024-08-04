import React, { useEffect, useState,useCallback } from "react";
import * as S from "./styled";
import heart from "../../assets/images/mdi_heart.svg";
import train from "../../assets/images/ticket.jpg";
import apiCall from "../../api";
import EmptyCourse from "../Common/EmptyCourse";

const CourseContentSharedFast = ({onCourseClick}) => {
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall("/api/user/course/created_order", "get", { headers: { Authorization: `Bearer ${token}` } });
            setData(response.data);
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

    const toggleLike = async (courseId) => {
        event.stopPropagation();
        try {
            const token = localStorage.getItem('access_token');
            await apiCall(`/user/course/${courseId}/likes`, "get", { headers: { Authorization: `Bearer ${token}` } });
            fetchData();
        } catch (error) {
            console.log("error 발생: ", error);
        }
    };

    if (data.length === 0) {
        return <EmptyCourse />;
    }

    return (
        <S.TopContainer>
            {data.slice().map((course, index) => (
                <S.CourseContainer key={index} onClick={() => onCourseClick(course)}>
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
                                <S.like_count>{course.like_count}</S.like_count>
                                {/* <HeartIcon fill={likedCourses[course.id] ? '#FF3434' : '#CCCCCC'} /> */}
                                <S.Button onClick={(e) => toggleLike(course.id, course.isLiked, e)}>
                                    <img src={heart} alt="heart icon" />
                                </S.Button>
                            </div>
                            <S.P>#{course.subway_station}역</S.P>
                        </S.Plus>
                    </S.InfoUser>
                </S.CourseContainer>
            ))}
        </S.TopContainer>
    );
};

export default CourseContentSharedFast;
