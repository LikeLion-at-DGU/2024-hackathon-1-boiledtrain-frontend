import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import point from "../../assets/images/pointer.png";
import apiCall from "../../api/index";
import { getToken } from "../../utils/auth";

const Mytrip = () => {
    const [data, setData] = useState([]);

    const fetchCourseData = async () => {
        try {
            const token = getToken();
            const response = await apiCall('/api/user/my_course', 'get', {}, token);
            setData(response.data); 
        } catch (error) {
            console.error('Error fetching course data:', error);
            alert('코스 정보를 불러오는 데 실패했습니다.');
        }
    };

    useEffect(() => {
        fetchCourseData();
    }, []);

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\./g, '.');
    };

    return (
        <>
            <S.triptext>최근 내 여행</S.triptext>
            <S.tripContainer2
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {data.slice().reverse().map((course, index) => (
                    <S.courseContainer key={index}>
                        <S.Div>
                            <S.pointImg src={point} />
                            <S.stationP>{course.subway_station}</S.stationP>
                            <S.stationP>{course.description}</S.stationP>
                            <S.stationP>{formatDate(course.created_at)}</S.stationP>
                        </S.Div>
                    </S.courseContainer>
                ))}
            </S.tripContainer2>
        </>
    );
};

export default Mytrip;
