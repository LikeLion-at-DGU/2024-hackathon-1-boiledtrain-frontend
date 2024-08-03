import React from "react";
import * as S from "./style";
import closed from "../../assets/images/closed.png";
import face from "../../assets/images/normalprofile.png";
import ticket from "../../assets/images/ticket.jpg";
import route from "../../assets/images/route.jpg";

function Menu({ onClose }) {
    const handleLogout = async () => {
        try {
            localStorage.removeItem('access_token'); // 로그아웃 처리
            onClose(); // 사이드바 닫기
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
                        <S.Face src={face} alt="face" />
                        <S.name>
                            <S.text>@@@님,<br />반가워요!</S.text>
                            <S.text2>아이디</S.text2>
                        </S.name>
                    </S.Shape>
                    <S.box>
                        <S.myprofile>내 정보 보기</S.myprofile>
                        
                    </S.box>
                </S.Box1>

                <S.line></S.line>
                <S.AllShape>
                    <S.Shape1> 
                        <S.Ticket src={ticket} alt="ticket" />
                        <S.AllText>삶은 일기</S.AllText>
                    </S.Shape1>

                    <S.Shape2>
                        <S.Route src={route} alt="route" />
                        <S.AllText>삶은 코스 </S.AllText>
                    </S.Shape2>
                </S.AllShape>
                
            </S.middle>
            <S.logout onClick={handleLogout}>로그아웃</S.logout>
        </S.Board>
    );
}

export default Menu;
