import React from 'react';
import * as S from './style';
import Main from '../../assets/images/downbtn.png';
import Main2 from '../../assets/images/downbtn2.png';
import Ment from '../../assets/images/ment.png';
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
      const response = await apiCall('/api/user/course', 'POST', { title, description, subway_station: subwayStation, placelist, is_share }, token); 

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
    <S.HoverContainer>
      <S.Image src={Main} alt="저장하기" className="main-image" />
      <S.Push className="push">
        <S.ImageHover src={Main2} alt="저장하기 누른 후" className="main-image-hover" />
        <S.MentImage src={Ment} alt="저장하기 버튼 옆 문구" className="ment-image" />
        <S.Ment>저장 후 <br/> 내 코스에서 볼 수 있어요.</S.Ment>
      </S.Push>
    </S.HoverContainer>
  </S.MainContainer>
  );
}

export default PlusCourseGoal;
