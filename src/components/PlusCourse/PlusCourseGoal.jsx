import React from 'react';
import * as S from './style';
import Main from '../../assets/images/mainch.png';
import apiCall from '../../api';
import { useNavigate } from 'react-router-dom';
import { getToken } from "../../utils/auth"; // getToken 함수 import

const PlusCourseGoal = ({ subwayStation, placelist, onClose }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log('Placelist:', placelist); // 추가된 로그
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNjQxMzM1LCJpYXQiOjE3MjI2MTYxMzUsImp0aSI6ImNmMWE2OGM0YmUwZTQyNjlhYmE0NGUxNGRkYWRmMWJiIiwidXNlcl9pZCI6M30.4t0X6F3XeDfHkQTcbrM0AkNDeDG2ZFxB9aXWbdVgilE'; // getToken 함수를 사용하여 토큰 가져오기
    const title = '테스트 코스입니다요'; 
    const description = '테스트 설명'; 
    const is_share = 'True'; 
  
    try {
      const response = await apiCall('/api/user/course', 'POST', { title, description, subway_station: subwayStation, placelist, is_share }, token); 
  
      console.log('Response Data:', response.data);
  
      if (response.status === 200) {
        alert('코스가 저장되었습니다!');
        navigate('/main'); 
      } else {
        alert(`코스 저장에 실패했습니다: ${response.data.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('API 호출 중 오류가 발생했습니다.');
    }
    onClose(); // 저장 후 모달 닫기
  };
  

  return (
    <S.MainContainer onClick={handleClick}>
      <S.Image src={Main} alt="저장하기" />
      <S.SaveMent>내 코스로 저장</S.SaveMent>
    </S.MainContainer>
  );
}

export default PlusCourseGoal;
