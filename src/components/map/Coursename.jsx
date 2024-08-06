import React, { useEffect, useState } from "react";
import { Describ, Bold, Lockcontainer, LockButton, Courseguide, Courseinput, PlaceAddButton, Ment, MentContainer } from "./styled";
import Lock from "../../assets/images/Lock.svg";
import unLock from "../../assets/images/unLock.svg";
import apiCall from "../../api";
import Warning from "../Common/Warning";
import ment from "../../assets/images/mentment2.png";
import getPlacePhotoUrl from "../../utils/getPlacePhotoUrl";

const Coursename = ({ addedPlaces,setAddedPlaces, selectedStation, onRegisterSuccess, courseId, isEditMode }) => {
    const [isLock, setIsLock] = useState(true);
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [places, setPlaces] = useState([]); 
    useEffect(()=>{
        console.log('Added Places in Coursename:', addedPlaces);
    },[addedPlaces]);
    useEffect(() => {
        if (isEditMode && courseId) {
            console.log('isEditMode in Coursename:', isEditMode);
            const fetchCourseDetails = async () => {
                try {
                    const token = localStorage.getItem('access_token');
                    const response = await apiCall(`/api/user/course/${courseId}`, 'get', null, token);
                    const course = response.data;

                    console.log('Course placelist:', course.placelist);

                    const placesWithPhotoUrls = await Promise.all(course.placelist.map(async (place) => {
                        console.log('Place:', place); 
                        console.log('Photo Reference:', place.photo_reference);
                        let photoUrl = '';
                        if (place.photo_reference) {
                            try {
                                photoUrl = getPlacePhotoUrl(place.photo_reference); 
                                console.log(photoUrl);
                            } catch (error) {
                                console.error('Error fetching photo URL:', error.message);
                            }
                        }
                        return {
                            ...place,
                            photoUrl: photoUrl || '' 
                        };
                        
                    }));
                    console.log("phtourl 추가",placesWithPhotoUrls);

                    setCourseName(course.title);
                    setCourseDescription(course.description);
                    setIsLock(course.is_share === "False");
                    setPlaces(placesWithPhotoUrls); 
                    setAddedPlaces(placesWithPhotoUrls);
                } catch (error) {
                    console.error("Failed to fetch course details", error);
                }
            };

            fetchCourseDetails();
        }
    }, [courseId, isEditMode,setAddedPlaces]);

    const Locked = () => {
        setIsLock(prevState => !prevState);
    };
    console.log("c최종ㅇㅇㅇㅇ",places);
    console.log("adddedddpacel",addedPlaces);
    const handleRegister = async () => {
        if (courseName.trim() === "" || courseDescription.trim() === "") {
            alert("모든 값을 입력해주세요!");
            return;
        }

        if (addedPlaces.length <= 2) {
            setShowWarning(true);
            setWarningMessage("코스는 최소 3개 등록해야해요!");
            return;
        } else {
            setShowWarning(false);
        }
        try {
            const token = localStorage.getItem('access_token');
            const method = isEditMode ? 'patch' : 'post';
            const url = isEditMode ? `/api/user/course/${courseId}` : '/api/user/course';

            const response = await apiCall(url, method, {
                title: courseName,
                description: courseDescription,
                subway_station: selectedStation,
                placelist: addedPlaces.map(addedPlaces => addedPlaces.id),
                is_share: isLock ? "False" : "True",
            }, token);

            console.log("등록 성공: ", response);
            onRegisterSuccess();
        } catch (error) {
            console.error("등록 실패", error);
            alert("코스 등록 중 오류가 발생했습니다.");
        }
    };

    const handleWarningClose = () => {
        setShowWarning(false);
        setWarningMessage("");
    };

    return (
        <>
            <Lockcontainer>
                <MentContainer src={ment} style={{ display: isHovered ? 'block' : 'none' }}></MentContainer>
                <LockButton 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={Locked}
                >
                    <img src={isLock ? Lock : unLock} alt="Lock" style={{width:"30px", height:"30px"}}/>
                </LockButton>
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
            {showWarning && <Warning message={warningMessage} onClose={handleWarningClose}/>} {/* 경고 메시지 조건부 렌더링 */}
            <PlaceAddButton onClick={handleRegister}>{isEditMode ? '수정하기' : '등록하기'}</PlaceAddButton>
        </>
    );
};

export default Coursename;
