import React, { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styled";
import point from "../../assets/images/pointer.png";
import apiCall from "../../api/index";

const Mytrip = () => {
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error("No access token found");
                return;
            }

            const response = await apiCall("/api/user/my_course", "get", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setData(response.data);
        } catch (error) {
            if (error.response) {
                console.error("API call error:", error.response.status, error.response.data);
            } else {
                console.error("API call error:", error.message);
            }
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
                        </S.Div>
                        {course.placelist.map((place, idx) => (
                            <S.placeP key={idx}>{place.name}</S.placeP> // name 속성을 출력
                        ))}
                    </S.courseContainer>
                ))}
            </S.tripContainer2>
        </>
    );
};

export default Mytrip;
