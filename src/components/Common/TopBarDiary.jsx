import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import back from '../../assets/images/back.png'; 
import select from '../../assets/images/select.png'; 
import DiaryMenuList from '../Diary/DiaryMenuList';

function TopBarDiary() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSelectClick = () => {
    setMenuVisible(prev => !prev); 
  };

  const handleOutsideClick = () => {
    if (menuVisible) {
      setMenuVisible(false); 
    }
  };

  return (
    <div onClick={handleOutsideClick} style={{ position: 'relative' }}> 
      <S.TopHead2>
        <S.Topimage 
          src={back} 
          alt="back" 
          onClick={handleBackClick}
          style={{ cursor: 'pointer' }}
        />
        <S.Ment>
          삶은 일기
        </S.Ment>
        <S.TopSelect 
          src={select}
          onClick={handleSelectClick} 
          style={{ cursor: 'pointer' }}
        />
      </S.TopHead2>
      {menuVisible && <DiaryMenuList courseId={id} onCourseDeleted={handleCourseDeleted} onEditCourse={handleEditCourse} />} {/* 메뉴가 표시되어야 할 때만 렌더링 */}
    </div>
  );
}

export default TopBarDiary;