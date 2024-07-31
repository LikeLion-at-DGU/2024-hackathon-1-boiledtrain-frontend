import React, { useState } from "react";
import { Describ, Bold, Lockcontainer, LockButton, Courseguide, Courseinput, PlaceAddButton } from "./styled";
import Lock from "../../assets/images/Lock.svg";
import unLock from "../../assets/images/unLock.png";
import apiCall from "../../api";

const Coursename = ({ addedPlaces }) => {
    const [isLock, setIsLock] = useState(true);
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");

    const Locked = () => {
        setIsLock(prevState => !prevState);
    };

    const handleRegister = async () => {
        if (courseName.trim() === "" || courseDescription.trim() === "") {
            alert("모든 값을 입력해주세요!");
            return;
        }
        
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall('/user/course', 'post', {
                title: courseName,
                description: courseDescription,
                subway_station: "군자역",
                placelist: addedPlaces.map(place => place.name), // 장소 이름을 placelist에 포함
                is_share: isLock ? "False" : "True", // isLock 상태에 따라 is_share 값을 설정
            }, token);

            console.log("등록 성공: ", response);
        } catch (error) {
            console.error("등록 실패", error);
            alert("코스 등록 중 오류가 발생했습니다.");
        }
    };

    return (
        <>
            <Lockcontainer>
                <LockButton onClick={Locked}><img src={isLock ? Lock : unLock} alt="Lock" /></LockButton>
            </Lockcontainer>
            <Courseguide>
                <Bold>코스 이름<Describ>나만의 이름을 붙여주세요. (10자 이내)</Describ></Bold>
                <Courseinput
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    maxLength="10"
                />
            </Courseguide>
            <Courseguide>
                <Bold>한줄 소개<Describ>코스에서의 기억, 좋았던 점 등을 작성해봐요. (20자 이내)</Describ></Bold>
                <Courseinput
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    maxLength="20"
                />
            </Courseguide>
            <PlaceAddButton onClick={handleRegister}>등록하기</PlaceAddButton>
        </>
    );
};

export default Coursename;
