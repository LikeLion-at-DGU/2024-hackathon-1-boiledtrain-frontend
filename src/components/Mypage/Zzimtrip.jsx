import React,{useRef, useState,useCallback,useEffect} from "react";
import * as S from "./styled"
import point from "../../assets/images/pointer.png"
import apiCall from "../../api/index";
import { getToken } from "../../utils/auth";

const Zzimtrip=()=>{ 
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const token = getToken();
            const response = await apiCall("/api/user/course/zzim_course", "get", {}, token);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
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
        }).replace(/\./g, '.'); // 한국어 형식으로 변환
    };

    return(
        <>
        <S.triptext2>최근 내가 찜한 여행</S.triptext2>
        {/* <S.tripContainer>
            <S.emptytext>이곳에서 내 여행 기록을/ 볼 수 있어요!</S.emptytext>
        </S.tripContainer> */}
        <S.tripContainer2
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {data.slice().reverse().map((course, index)=>(
                <S.courseContainer key={index}>
                <S.Div>
                    <S.pointImg src={point} />
                    <S.stationP>{course.subway_station}</S.stationP>
                    <S.stationP>{course.title}</S.stationP>
                    <S.stationP>{formatDate(course.created_at)}</S.stationP>
                </S.Div>
                {course.placelist.map((place, idx) => (
                            <S.placeP key={idx}>{place.name}</S.placeP> // name 속성을 출력
                        ))}
            </S.courseContainer>
            ))}
            </S.tripContainer2>
        </>
    )
}
export default Zzimtrip;