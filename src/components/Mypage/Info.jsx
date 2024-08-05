import React from "react";
import * as S from "./styled";
import { getUserInfo } from "../../utils/auth";
import { Link } from "react-router-dom";
import edit from "../../assets/images/edit.png";

const Info = () => {
    const userInfo = getUserInfo(); 
    
    return (
        <S.infoContainer>
            <S.profileImg src={userInfo.profile_image || profile} alt="Profile" />
            <Link to='/mypage/edit'>
                <S.EditButton src={edit} alt="Edit" />
            </Link>
            <S.nameid>
                <S.name>{userInfo.nickname}</S.name>
                <S.id>{userInfo.email}</S.id>
            </S.nameid>
        </S.infoContainer>
    );
};

export default Info;
