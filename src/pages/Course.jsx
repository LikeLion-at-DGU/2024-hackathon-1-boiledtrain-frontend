import React, { useState } from "react";
import Head from "../components/Course/Head";
import Search from "../components/Course/Search";
import Select from "../components/Course/Select";
import CourseMake from "../components/map/CourseMake";
import CourseContent from "../components/coursetrain/CourseContent";
import CourseContentLike from "../components/coursetrain/CourseContentLike";
import CourseContentSharedFast from "../components/coursetrain/CourseContentSharedFast";
import CourseContentShaedLike from "../components/coursetrain/CourseContentShaedLike";
import CourseDetail from "../components/coursetrain/CourseDetail";
import BottomBar from "../components/Common/BottomBar";
import styled from "styled-components";

const StyledBottomBar = styled.div`
    position: absolute;
    bottom: -77px;
    width: 430px;
    height: 77px;
    background: #00ABFC;
;`

const Course = () => {
    const [selected, setSelected] = useState(1);
    const [selected2, setSelected2] = useState(1);
    const [isCourseMakeVisible, setIsCourseMakeVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [editingCourse, setEditingCourse] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [coursePlaces, setCoursePlaces] = useState([]);
    const [selectedStation, setSelectedStation] = useState("");

    const handleAddCourseClick = () => {
        setIsCourseMakeVisible(true);
        setEditingCourse(null);
        setIsEditMode(false);
    };

    const handleBackButtonClick = () => {
        setIsCourseMakeVisible(false);
        setEditingCourse(null);
        setSelectedCourse(null);
    };

    const handleSelect = (value) => {
        setSelected(value);
        if (value === 1) {
            setIsCourseMakeVisible(false);
        }
        if (selectedCourse) {
            setSelectedCourse(null);
        }
    };

    const handleCourseClick = (courseId) => {
        setSelectedCourse(courseId);
    };

    const handleCloseDetail = () => {
        setSelectedCourse(null);
    };

    const handleEditCourse = (courseId) => {
        setEditingCourse(courseId);
        setIsCourseMakeVisible(true);
        setSelectedCourse(null);
        setIsEditMode(true);
    };

    return (
        <div>
            <Head 
                selected={selected} 
                onSelect={handleSelect}
            />
            {!isCourseMakeVisible && !selectedCourse && (
                <>
                    <Search 
                        selected={selected} 
                        onAddCourseClick={handleAddCourseClick}
                        setSelectedStation={setSelectedStation}
                    />
                    <Select 
                        selected={selected} 
                        selected2={selected2} 
                        onSelect2={setSelected2} 
                    />
                    {selected === 1 && selected2 === 1 && <CourseContentShaedLike onCourseClick={handleCourseClick}  
                        selectedStation={selectedStation}/>}
                    {/* 전체 코스 인기순 */}
                    {selected === 1 && selected2 === 2 && <CourseContentSharedFast onCourseClick={handleCourseClick}  
                        selectedStation={selectedStation}/>}
                    {/* 전체 코스 최신순 */}
                    {selected === 2 && selected2 === 1 && <CourseContentLike onCourseClick={handleCourseClick} />}
                    {/* 내 코스 좋아요 누른거 */}
                    {selected === 2 && selected2 === 2 && <CourseContent 
                        onCourseClick={handleCourseClick}
                    />}
                    {/* 내 코스 내가 만든거  */}
                </>
            )}
            {isCourseMakeVisible && (
                <CourseMake 
                    course={editingCourse} 
                    onBackButtonClick={handleBackButtonClick} 
                    isEditMode={isEditMode}
                    coursePlaces={coursePlaces}
                />
            )}
            {selectedCourse && !isCourseMakeVisible && (
                <CourseDetail 
                    courseId={selectedCourse} 
                    onClose={handleCloseDetail} 
                    onEditCourse={handleEditCourse} 
                />
            )}
            <StyledBottomBar>
                <BottomBar />
            </StyledBottomBar>
        </div>
    );
}

export default Course;
