import React, { useState } from "react";
import SearchImg from "../../assets/images/search.svg";
import Add from "../../assets/images/Vector.svg";
import * as S from './styled';
import Header from "../Addcourse/AddTrainStation";
import { SearchContainer } from "../Course/styled";

const Search = ({ selected, onAddCourseClick, setSelectedStation }) => { 
    const [selectedStation, setSelectedStationState] = useState(""); 

    return (
        <>
            <S.SearchContainer>
                {selected === 1 ? 
                    <>
                        <S.SearchText>다른 사람들의 코스를 참고 할 수 있어요.</S.SearchText>
                        <SearchContainer>
                            <Header 
                                setSelectedStation={(station) => {
                                    setSelectedStationState(station); 
                                    setSelectedStation(station);
                                }} 
                            />
                        </SearchContainer>
                        <S.InfoText>지하철역을 검색해보세요</S.InfoText>
                    </> :
                    <> 
                        <S.SearchText>나만의 장소를 조합해 코스를 만들 수 있어요.</S.SearchText>
                        <S.AddButton onClick={onAddCourseClick}>코스 만들기<img src={Add} alt="Add"/></S.AddButton>
                    </>
                }
            </S.SearchContainer>
            <S.Hr2/>
        </>
    );
};

export default Search;
