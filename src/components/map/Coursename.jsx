import React, { useState } from "react";
import { Describ, Bold, Lockcontainer, LockButton, Courseguide, Courseinput, PlaceAddButton } from "./styled";
import Lock from "../../assets/images/Lock.svg";
import unLock from "../../assets/images/unLock.png";
import apiCall from "../../api";
import Warning from "../Common/Warning";

const Coursename = ({ addedPlaces, selectedStation, onRegisterSuccess }) => {
    const [isLock, setIsLock] = useState(true);
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [showWarning, setShowWarning] = useState(false); // 경고 메시지 상태 추가
    const [warningMessage,setWarningMessage] = useState("")

    const Locked = () => {
        setIsLock(prevState => !prevState);
    };

    const handleRegister = async () => {
        if (courseName.trim() === "" || courseDescription.trim() === "") {
            alert("모든 값을 입력해주세요!");
            return;
        }

        if (addedPlaces.length <= 2) {
            setShowWarning(true); // 경고 메시지 상태를 true로 설정
            return;
        } else {
            setShowWarning(false); // 경고 메시지 상태를 false로 설정
        }

        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall('/user/course', 'post', {
                title: courseName,
                description: courseDescription,
                subway_station: selectedStation,
                placelist: addedPlaces.map(place => place.name),
                is_share: isLock ? "False" : "True",
            }, token);

            console.log("등록 성공: ", response);
            onRegisterSuccess();
        } catch (error) {
            console.error("등록 실패", error);
            alert("코스 등록 중 오류가 발생했습니다.");
        }
    };
    const handleWarningClose=()=>{
        setShowWarning(false);
        setWarningMessage("");
    }

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
            {showWarning && <Warning message={"코스는 최소 3개 등록해야해요!"} onClose={handleWarningClose}/>} {/* 경고 메시지 조건부 렌더링 */}
            <PlaceAddButton onClick={handleRegister}>등록하기</PlaceAddButton>
        </>
    );
};

export default Coursename;
