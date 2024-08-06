import React, { useState, useEffect } from "react";
import Map from "../map/Map";
import { CourseContainer, PlaceAddContainer, Backcontainer, BackButton, Topcontainer } from "../map/styled";
import Coursename from "../map/Coursename";
import Header from "../Addcourse/AddTrainStation";
import { SearchContainer, SearchText } from "../Course/styled";
import Back from "../../assets/images/back.png";

const CourseMake = ({ onBackButtonClick, course, isEditMode }) => {
    const [selectedStation, setSelectedStation] = useState(course?.subway_station || '');
    const [addedPlaces, setAddedPlaces] = useState(course?.placelist || []);
    const courseId = course?.id; 

    useEffect(() => {
        if (course) {
            console.log('adddddddeddddPlacessss',addedPlaces);
            setSelectedStation(course.subway_station || '');
            setAddedPlaces(course.placelist || []);
        }
    }, [course]);

    const isSearchContainerHidden = selectedStation !== '';

    return (
        <>     
            <Backcontainer>
                <BackButton onClick={onBackButtonClick}>
                    <img src={Back} alt="Back"/>
                </BackButton>
            </Backcontainer>
            <Topcontainer>
            <SearchContainer style={{ display: isSearchContainerHidden ? 'none' : 'flex' }}>
                <SearchText>코스의 지하철 역을 검색해 등록하세요.</SearchText>
                <Header setSelectedStation={setSelectedStation} />
            </SearchContainer>
            <hr/>
            <Map selectedStation={selectedStation} addedPlaces={addedPlaces} setAddedPlaces={setAddedPlaces} />
            <PlaceAddContainer/>
            <CourseContainer>
                <Coursename 
                    addedPlaces={addedPlaces} 
                    setAddedPlaces={setAddedPlaces}
                    selectedStation={selectedStation} 
                    onRegisterSuccess={() => onBackButtonClick()}
                    isEditMode={isEditMode}
                    courseId={courseId}
                />
            </CourseContainer>
            </Topcontainer>
        </>
    );
};

export default CourseMake;