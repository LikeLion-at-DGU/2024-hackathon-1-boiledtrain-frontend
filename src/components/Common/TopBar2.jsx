import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import back from '../../assets/images/back.png'; 

function TopBar2() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.TopHead>
      <S.Topimage 
        src={back} 
        alt="back" 
        onClick={handleBackClick}
        style={{ cursor: 'pointer' }}
      />
    </S.TopHead>
  );
}

export default TopBar2;
