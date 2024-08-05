import React, { useState, useEffect } from "react";
import * as S from "../components/Mypage/styled";
import userimg from "../assets/images/normalprofile.png";
import edit from "../assets/images/editBackground.svg";
import { getUserInfo } from "../utils/auth";
import apiCall from "../api";
import { useNavigate } from "react-router-dom";

const MypageEdit = () => {
    const [userInfo, setUserInfo] = useState({
        nickname: '',
        name: ''
    });
    const [nicknameLength, setNicknameLength] = useState(0); // 닉네임 글자 수 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        const info = getUserInfo();
        setUserInfo(info);
        setNicknameLength(info.nickname.length); // 초기 닉네임 길이 설정
    }, []);

    const handleNicknameChange = (event) => {
        const newNickname = event.target.value;
        if (newNickname.length <= 30) { // 50자 제한
            setUserInfo({ ...userInfo, nickname: newNickname });
            setNicknameLength(newNickname.length); // 글자 수 업데이트
        }
    };

    const register = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await apiCall('/api/accounts/userinfo/yes', 'patch', {
                nickname: userInfo.nickname,
            }, token);

            console.log("API Response:", response);

            const updatedUserInfo = { ...userInfo, nickname: response.data.nickname }; // 서버에서 반환된 정보로 업데이트
            localStorage.setItem('user_info', JSON.stringify(updatedUserInfo));

            navigate('/mypage');
        } catch (error) {
            console.log("Error updating nickname:", error);
        }
    };

    const handleSave = () => {
        console.log("저장된 정보:", userInfo);
        register();
    };

    return (
        <>
            <S.Maincontainer>
                <S.editImg src={edit} />
                <S.userImg src={userimg} />
            </S.Maincontainer>
            <S.userInfoContainer>
                <S.infoText>닉네임</S.infoText>
                <S.userInput 
                    value={userInfo.nickname} 
                    onChange={handleNicknameChange} 
                />
                <S.charCount>{nicknameLength}/30</S.charCount> {/* 남은 글자 수 표시 */}
            </S.userInfoContainer>
            <S.Hr2 />
            <S.userInfoContainer>
                <S.infoText>이름</S.infoText>
                <S.userID>{userInfo.name}</S.userID>
            </S.userInfoContainer>
            <S.Hr />
            <S.editButtonContainer>
                <S.editButton onClick={handleSave}>저장</S.editButton>
            </S.editButtonContainer>
        </>
    );
};

export default MypageEdit;
