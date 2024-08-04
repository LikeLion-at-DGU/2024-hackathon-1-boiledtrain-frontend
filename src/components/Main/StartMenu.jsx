import React, { useState } from "react";
import * as S from "./style";
import closed from "../../assets/images/closed.png"; 
import ticket from "../../assets/images/ticket.jpg";
import route from "../../assets/images/route.jpg";
import { Link, useNavigate } from "react-router-dom";
import WarningChoose from '../Common/WarningChoose';

function StartMenu({ onClose }) {
  const [showWarning, setShowWarning] = useState(false);
  const [redirectPath, setRedirectPath] = useState('');
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setRedirectPath(path);
      setShowWarning(true);
    } else {
      navigate(path);
    }
  };

  const handleLogin = () => {
    navigate('/login', { state: { from: redirectPath } });
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <S.Board>
      <S.ClosedBox>
        <S.Closed src={closed} alt="closed" onClick={onClose} />
      </S.ClosedBox>

      <S.middle>
        <S.Box1>
          <S.NewShape>
            <S.newtext>안녕하세요!<br/>로그인하고 더 많은 기능을<br/>삶아봅시다.</S.newtext>
          </S.NewShape>
          <S.Newbox>
            <Link to='/login' style={{ textDecoration: "none" }}><S.newmyprofile>카카오 로그인</S.newmyprofile></Link>
          </S.Newbox>
        </S.Box1>

        <S.line></S.line>
        <S.AllShape>
          <div onClick={() => handleLinkClick('/diarymain')}>
            <S.Shape1>
              <S.Ticket src={ticket} alt="ticket" />
              <S.AllText>삶은 일기</S.AllText>
            </S.Shape1>
          </div>
          <div onClick={() => handleLinkClick('/course')}>
            <S.Shape2>
              <S.Route src={route} alt="route" />
              <S.AllText>삶은 코스</S.AllText>
            </S.Shape2>
          </div>
        </S.AllShape>
      </S.middle>

      {showWarning && (
        <WarningChoose
          message="로그인 후 이용 가능합니다."
          onClose={handleCloseWarning}
          onLogin={handleLogin}
        />
      )}
    </S.Board>
  );
}

export default StartMenu;
