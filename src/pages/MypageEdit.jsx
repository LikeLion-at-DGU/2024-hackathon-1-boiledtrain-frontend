import React, { useState, useEffect } from "react";
import * as S from "../components/Mypage/styled";
import styled from "styled-components";
import userimg from "../assets/images/normalprofile.png";
import edit from "../assets/images/editBackground.svg";
import { getUserInfo } from "../utils/auth";
import apiCall from "../api";
import { useNavigate } from "react-router-dom";
import Bottom from "../components/Common/BottomBar";

const BottomStyle = styled.div`
    position: absolute;
    bottom: 0px;
    width: 430px;
    height: 77px;
    background: #00ABFC;
`;

const MypageEdit = () => {
    const [userInfo, setUserInfo] = useState({
        nickname: '',
        name: '',
        profile_image: '',
    });
    const [nicknameLength, setNicknameLength] = useState(0);
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const info = getUserInfo();
        setUserInfo(info);
        setNicknameLength(info.nickname.length);
    }, []);

    const handleNicknameChange = (event) => {
        const newNickname = event.target.value;
        if (newNickname.length <= 16) {
            setUserInfo({ ...userInfo, nickname: newNickname });
            setNicknameLength(newNickname.length);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("이미지 용량이 너무 큽니다. 5MB 이하로 업로드 해주세요.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(file);
                setUserInfo({ ...userInfo, profile_image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const register = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const formData = new FormData();
            formData.append('nickname', userInfo.nickname);
            if (imageFile) {
                formData.append('profile_image', imageFile); 
            }

            const response = await apiCall('/api/accounts/userinfo/yes', 'patch', formData, token, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log("API Response:", response);

            const updatedUserInfo = { ...userInfo, nickname: response.data.nickname, profile_image: response.data.profile_image };
            localStorage.setItem('user_info', JSON.stringify(updatedUserInfo));

            navigate('/mypage');
        } catch (error) {
            console.log("Error updating nickname:", error.response.data);
        }
    };

    const handleSave = () => {
        console.log("저장된 정보:", userInfo);
        register();
    };

    return (
        <>
            <S.Maincontainer>
                <S.editImg src={edit} onClick={() => document.getElementById('imageInput').click()} />
                <S.userImg src={userInfo.profile_image || userimg} alt="User Profile" />
                <input
                    type="file"
                    id="imageInput"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </S.Maincontainer>
            <S.userInfoContainer>
                <S.infoText>닉네임</S.infoText>
                <S.userInput 
                    value={userInfo.nickname} 
                    onChange={handleNicknameChange} 
                />
                <S.charCount>{nicknameLength}/16</S.charCount>
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
            <BottomStyle>
                <Bottom />
            </BottomStyle>
        </>
    );
};

export default MypageEdit;
