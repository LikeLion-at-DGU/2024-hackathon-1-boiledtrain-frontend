import React, { useEffect, useState } from "react";
import * as S from "./styled";
import heart from "../../assets/images/mdi_heart.svg";
import train from "../../assets/images/ticket.jpg";
import apiCall from "../../api";
import EmptyCourse from "../Common/EmptyCourse";

const CourseContentLike = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall("/user/course", "get", { headers: { Authorization: `Bearer ${token}` } });
            setData(response.data);
        } catch (error) {
            console.log("error 발생: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}.${month}.${day} ${hours}:${minutes}`;
    };

    const toggleLike = async (courseId) => {
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
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            {data.slice().reverse().map((course, index) => (
                <S.CourseContainer key={index}>
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
                                <S.Describ>{course.description}</S.Describ>
                            </div>
                        </S.CourseContentContainer>
                        <S.Plus>
                            <S.Button onClick={() => toggleLike(course.id)}><img src={heart} alt="heart icon" /></S.Button>
                            <S.P>{course.subway_station}</S.P>
                            <S.time>{formatDateTime(course.created_at)}</S.time>
                        </S.Plus>
                    </S.InfoUser>
                </S.CourseContainer>
            ))}
        </div>
    );
};

export default CourseContentLike;
