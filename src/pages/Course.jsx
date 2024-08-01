import React, { useState } from "react";
import Head from "../components/Course/Head";
import Search from "../components/Course/Search";
import Select from "../components/Course/Select";
import CourseContent from "../components/coursetrain/CourseContent";
import CourseMake from "../components/map/CourseMake"

const Course = () => {
    const [selected, setSelected] = useState(1);
    const [selected2, setSelected2] = useState(1);
    const [isCourseMakeVisible, setIsCourseMakeVisible] = useState(false); // 상태 추가

    const handleAddCourseClick = () => {
        setIsCourseMakeVisible(true);
    };

    const handleBackButtonClick = () => {
        setIsCourseMakeVisible(false);
    };

    const handleSelect = (value) => {
        setSelected(value);
        if (value === 1) {
            setIsCourseMakeVisible(false); // 코스 보기를 누르면 원래 페이지로 돌아감
        }
    };

    return (
        <>
            <Head 
                selected={selected} 
                onSelect={handleSelect}
            />
            {!isCourseMakeVisible && (
                <>
                    <Search 
                        selected={selected} 
                        onAddCourseClick={handleAddCourseClick} // 이벤트 핸들러 전달
                    />
                    <Select 
                        selected={selected} 
                        selected2={selected2} 
                        onSelect2={setSelected2} 
                    />
                    <CourseContent />
                </>
            )}
            {isCourseMakeVisible && (
                <CourseMake onBackButtonClick={handleBackButtonClick} />
            )}
        </>
    );
}

export default Course;
