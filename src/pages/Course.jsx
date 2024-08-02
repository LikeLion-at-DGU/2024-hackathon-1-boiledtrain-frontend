import React, { useState } from "react";
import Head from "../components/Course/Head";
import Search from "../components/Course/Search";
import Select from "../components/Course/Select";
import CourseContent from "../components/coursetrain/CourseContent";
import CourseContentLike from "../components/coursetrain/CourseContentLike";
import CourseContentSharedFast from "../components/coursetrain/CourseContentSharedFast";
import CourseContentSharedLike from "../components/coursetrain/CourseContentShaedLike";

const Course = () => {
    const [selected, setSelected] = useState(1);
    const [selected2, setSelected2] = useState(1);
    const [isCourseMakeVisible, setIsCourseMakeVisible] = useState(false);

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
                    {selected === 1 && selected2 === 1 && <CourseContentSharedLike />}
                    {/* 전체 코스 인기순 */}
                    {selected === 1 && selected2 === 2 && <CourseContentSharedFast />}
                    {/* 전체 코스 최신순 */}
                    {selected === 2 && selected2 === 1 && <CourseContentLike />}
                    {/* 내 코스 좋아요 누른거 */}
                    {selected === 2 && selected2 === 2 && <CourseContent />}
                    {/* 내 코스 내가 만든거  */}
                </>
            )}
            {isCourseMakeVisible && (
                <CourseMake onBackButtonClick={handleBackButtonClick} />
            )}
        </>
    );
}

export default Course;
