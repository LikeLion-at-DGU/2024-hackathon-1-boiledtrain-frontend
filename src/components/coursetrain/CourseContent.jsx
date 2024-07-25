import React from "react";
import * as S from "./styled"
import download from "../../assets/images/tabler_download.svg"; 
import heart from "../../assets/images/mdi_heart.svg"; 
import train from "../../assets/images/ticket.jpg";

const CourseContent = ()=>{
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
        <S.CourseContainer>
            <S.PhotoContainer>
                <S.Img style = {{borderRadius:'12px 0px 0px 0px'}} src={train}></S.Img>
                <S.Img src={train}></S.Img>
                <S.Img style = {{borderRadius:'0px 12px 0px 0px'}} src={train}></S.Img>
            </S.PhotoContainer>
            <S.InfoUser>
                <S.CourseContentContainer>
                    <img src={train} style={{borderRadius:'100px'}}></img>
                    <div style={{marginLeft:'5px'}}>
                        <S.Course>코스 이름</S.Course>
                        <S.Describ>한 줄 소개</S.Describ>
                    </div>
                </S.CourseContentContainer>
                <S.Plus>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <S.Button><img src={download}></img></S.Button>
                        <S.Button><img src={heart}></img></S.Button>
                    </div>
                    <S.P>#@@역</S.P>
                </S.Plus>
            </S.InfoUser>
        </S.CourseContainer>
        </div>
    )
}

export default CourseContent;