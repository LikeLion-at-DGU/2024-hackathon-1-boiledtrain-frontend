import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import back from '../../assets/images/back.png'; 
import select from '../../assets/images/select.png'; 

function TopBarDiary() {
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
      <S.Ment>
      삶은 일기
      </S.Ment>
      <S.TopSelect src={select}/>
    </S.TopHead>
  );
}

export default TopBarDiary;