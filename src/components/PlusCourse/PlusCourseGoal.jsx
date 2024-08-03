import React from 'react';
import * as S from './style';
import Main from '../../assets/images/mainch.png';
import apiCall from '../../api';
import { useNavigate } from 'react-router-dom';
import { getToken } from "../../utils/auth";

const PlusCourseGoal = ({ subwayStation, placelist, onClose }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log('Placelist:', placelist); 
    const token = getToken();
    const title = '테스트 코스입니다요_목적'; 
    const description = '테스트 설명_목적'; 
    const is_share = 'True'; 

    try {
      const response = await apiCall('/api/user/my_course', 'POST', { title, description, subway_station: subwayStation, placelist, is_share }, token); 

      console.log('Response Data:', response.data);

      if (response.status === 200) {
        alert('코스가 저장되었습니다!');
        navigate('/course'); 
      } else {
        alert(`코스 저장에 실패했습니다: ${response.data.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('API 호출 중 오류가 발생했습니다.');
    }
    onClose();
  };

  return (
    <S.MainContainer onClick={handleClick}>
      <S.Image src={Main} alt="저장하기" />
      <S.SaveMent>내 코스로 저장</S.SaveMent>
    </S.MainContainer>
  );
}

export default PlusCourseGoal;
