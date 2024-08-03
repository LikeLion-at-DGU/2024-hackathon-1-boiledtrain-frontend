import React from "react";
import * as S from "./styled"
import profile from "../../assets/images/normalprofile.png";
import edit from "../../assets/images/edit.png"

const Info =()=>{
    return(
        <S.infoContainer>
            <S.profileImg src={profile}/>
            <S.EditButton src={edit}/>
            <S.name>@@@</S.name>
            <S.id>아이디</S.id>
        </S.infoContainer>
    )
}
export default Info;