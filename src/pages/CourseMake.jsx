import React,{useState} from "react";
import Map from "../components/map/Map";
import AddedPlace from "../components/map/AddedPlace";
import {  CourseContainer, PlaceAddContainer } from "../components/map/styled";
import Coursename from "../components/map/Coursename";
const CourseMake=()=>{
    return(
        <>
            <Map/>
            <PlaceAddContainer/>
            <CourseContainer>
                <Coursename/>
            </CourseContainer>
        </>
    )
}

export default CourseMake;