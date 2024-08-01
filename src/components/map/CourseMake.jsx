import React, { useState } from "react";
import Map from "../map/Map";
import { CourseContainer, PlaceAddContainer, Backcontainer, BackButton } from "../map/styled";
import Coursename from "../map/Coursename";
import Header from "../Addcourse/AddTrainStation";
import { SearchContainer, SearchText } from "../Course/styled";
import Back from "../../assets/images/back.png";

const CourseMake = ({ onBackButtonClick }) => {
    const [selectedStation, setSelectedStation] = useState('');
    const [addedPlaces, setAddedPlaces] = useState([]);

    const handleRegisterSuccess = () => {
        onBackButtonClick(); // 등록 성공 시 원래 화면으로 돌아가기
    };

    return (
        <>     
            <Backcontainer>
                <BackButton onClick={onBackButtonClick}>
                    <img src={Back} alt="Back"/>
                </BackButton>
            </Backcontainer>
            <SearchContainer>
                <SearchText>코스의 지하철 역을 검색해 등록하세요.</SearchText>
                <Header setSelectedStation={setSelectedStation}/>
            </SearchContainer>
            <hr/>
            <Map selectedStation={selectedStation} addedPlaces={addedPlaces} setAddedPlaces={setAddedPlaces} />
            <PlaceAddContainer/>
            <CourseContainer>
                <Coursename 
                    addedPlaces={addedPlaces} 
                    selectedStation={selectedStation} 
                    onRegisterSuccess={handleRegisterSuccess} // onRegisterSuccess prop 전달
                />
            </CourseContainer>
        </>
    );
};

export default CourseMake;
