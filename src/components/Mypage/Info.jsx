import React from "react";
import * as S from "./styled"
import profile from "../../assets/images/normalprofile.png";
import edit from "../../assets/images/edit.png"
import { getUserInfo } from "../../utils/auth";
import { Link } from "react-router-dom";

const Info =()=>{
    const id = getUserInfo()
    return(
        <S.infoContainer>
            <S.profileImg src={profile}/>
            <Link to='/mypage/edit'><S.EditButton src={edit}/></Link>
            <S.nameid>
            <S.name>{id.nickname}</S.name>
            <S.id>{id.email}</S.id>
            </S.nameid>
        </S.infoContainer>
    )
}
export default Info;