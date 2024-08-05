import React, { useEffect, useState } from "react";
import * as S from "./style";
import closed from "../../assets/images/closed.png";
import face from "../../assets/images/normalprofile.png"; // 기본 프로필 이미지
import ticket from "../../assets/images/ticket.jpg";
import route from "../../assets/images/route.jpg";
import { Link } from "react-router-dom";

function Menu({ onClose }) {
    const [userInfo, setUserInfo] = useState({ nickname: "", email: "", profile_image: "" });

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('user_info');
        console.log(storedUserInfo);
        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo);
        }
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_info');
            onClose(); 
        } catch (error) {
            console.error("로그아웃 오류 발생: ", error);
        }
    };

    return (
        <S.Board>
            <S.ClosedBox>
                <S.Closed src={closed} alt="closed" onClick={onClose} />
            </S.ClosedBox>

            <S.middle>
                <S.Box1>
                    <S.Shape>
                        {/* 업로드한 프로필 이미지를 보여줍니다. */}
                        <S.Face src={userInfo.profile_image || face} alt="face" />
                        <S.name>
                            <S.text>{userInfo.nickname}님,<br />반가워요!</S.text>
                            <S.text2>{userInfo.email}</S.text2>
                        </S.name>
                    </S.Shape>
                    <S.box>
                        <Link to="/mypage" style={{ textDecoration: "none" }}>
                            <S.myprofile>내 정보 보기</S.myprofile>
                        </Link>
                    </S.box>
                </S.Box1>

                <S.line></S.line>
                <S.AllShape>
                    <Link to='/diarymain' style={{ textDecoration: "none" }}>
                        <S.Shape1>
                            <S.Ticket src={ticket} alt="ticket" />
                            <S.AllText>삶은 일기</S.AllText>
                        </S.Shape1>
                    </Link>

                    <Link to='/course' style={{ textDecoration: "none" }}>
                        <S.Shape2>
                            <S.Route src={route} alt="route" />
                            <S.AllText>삶은 코스 </S.AllText>
                        </S.Shape2>
                    </Link>
                </S.AllShape>

            </S.middle>
            <S.logout onClick={handleLogout}>로그아웃</S.logout>
        </S.Board>
    );
}

export default Menu;
