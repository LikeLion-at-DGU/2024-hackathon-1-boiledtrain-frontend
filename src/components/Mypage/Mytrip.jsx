import React,{useRef, useState} from "react";
import * as S from "./styled"
import point from "../../assets/images/pointer.png"
const Mytrip=()=>{
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
    return(
        <>
        <S.triptext>최근 내 여행</S.triptext>
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
            <S.courseContainer>
                <S.Div>
                    <S.pointImg src={point}></S.pointImg>
                    <S.stationP>AAA역</S.stationP>
                </S.Div>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
            </S.courseContainer>
            <S.courseContainer>
                <S.Div>
                    <S.pointImg src={point}></S.pointImg>
                    <S.stationP>AAA역</S.stationP>
                </S.Div>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
            </S.courseContainer>
            <S.courseContainer>
                <S.Div>
                    <S.pointImg src={point}></S.pointImg>
                    <S.stationP>AAA역</S.stationP>
                </S.Div>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
            </S.courseContainer>
            <S.courseContainer>
                <S.Div>
                    <S.pointImg src={point}></S.pointImg>
                    <S.stationP>AAA역</S.stationP>
                </S.Div>
                    <S.placeP>ㅇㅇㅇ 까페</S.placeP>
            </S.courseContainer>
        </S.tripContainer2>
        </>
    )
}
export default Mytrip;