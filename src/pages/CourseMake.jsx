import React,{useState} from "react";
import Map from "../components/map/Map";
import AddedPlace from "../components/map/AddedPlace";
import {  CourseContainer, PlaceAddContainer } from "../components/map/styled";
import Coursename from "../components/map/Coursename";
import Header from "../components/Addcourse/AddTrainStation";
const CourseMake=()=>{
    return(
        <>  
            <Header/>
            <Map/>
            <PlaceAddContainer/>
            <CourseContainer>
                <Coursename/>
            </CourseContainer>
        </>
    )
}

export default CourseMake;