import React from "react";
import * as S from "./style";
import closed from "../../assets/images/closed.png"; 
import face from "../../assets/images/tr.jpg";
import ticket from "../../assets/images/ticket.jpg";
import route from "../../assets/images/route.jpg";

function Menu() {
  return (
    <S.Board>
      <S.ClosedBox>
      <S.Closed src={closed} alt="closed" />
      </S.ClosedBox>

      <S.middle>
        <S.Box1>
          <S.NewShape>
          <S.newtext>안녕하세요!<br/>로그인하고 더 많은 기능을<br/>삶아봅시다.</S.newtext>
          </S.NewShape>
          <S.Newbox>
          <S.newmyprofile>카카오 로그인</S.newmyprofile>
          </S.Newbox>
        </S.Box1>

          <S.line></S.line>
        <S.AllShape>
          <S.Shape1>
          <S.Ticket src={ticket} alt="ticket" />
          <S.AllText>Boiled Diary</S.AllText>
          </S.Shape1>
          
          <S.Shape2>
          <S.Route src={route} alt="route" />
          <S.AllText>Boiled Course</S.AllText>
          </S.Shape2>
        </S.AllShape>

      </S.middle>

    </S.Board>
  );
}

export default Menu;