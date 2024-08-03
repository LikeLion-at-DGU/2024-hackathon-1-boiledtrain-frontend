import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Photo from '../assets/images/tr.jpg';
import { API } from '../api'; 
import styled from 'styled-components';
import BottomBar from "../components/Common/BottomBar";
import TopBarDiary from "../components/Common/TopBarDiary";

const DetailContainer = styled.div`
  width: 430px;
  height: 873px;
  flex-shrink: 0;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const DetailTitle = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 30px 0;
`;
const DetailDelete = styled.button`
  margin-bottom: 20px;
  color: red;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 18px;
`;
const DetailDate = styled.div`
  color: #8C8C8C;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const DetailCourse = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom:5px;
`;
const DetailThumbnail = styled.img`
  width: 360px;
  height: 170px;
  margin-top:20px;
  margin-bottom:24px;
  border-radius: 10px;
  background: var(--Miscellaneous-Kit-Section-Fill, #F5F5F5);
`;
const DetailContent = styled.div`
  padding: 10px;
  flex-grow: 1;
  color: #000;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DiaryDetailLine = styled.div`
  margin-top:20px;
  width: 430px;
  height: 2px;
  background: #AFAFAF;
`;
const DiaryDetailLine2 = styled.div`
  margin-top:20px;
  margin-bottom:20px;
  width: 360px;
  height: 1px;
  flex-shrink: 0;
  background: #D9D9D9;
`;
const DetailURL = styled.div`
  color: #00ABFC;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const UnderBar = styled.div`
width: 100px;
height: 1px;
flex-shrink: 0;
background: #00ABFC;
`;

const Detail = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { diary_id } = useParams();

  const fetchData = async () => {
    try {
      const response = await API.get(`/user/diary/${diary_id}`);
      console.log(response.data); 
      setData(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  const RemoveData = async () => {
    try {
      await API.delete(`/user/diary/${diary_id}`);
      alert('삭제 성공 :>');
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('삭제 실패 :<');
    }
  };


  if (!data) {
    return <>게시물을 찾을 수 없습니다.</>;
  }

  const handleCourseDetailClick = () => {
    navigate(`/diarywrite`);
  };

  return (
    <DetailContainer>
      <TopBarDiary />
      <DiaryDetailLine />
      <DetailTitle>{data.title}</DetailTitle>
      <DetailDelete onClick={RemoveData}>삭제</DetailDelete>
      <DetailDate>{data.created_at}</DetailDate>
      <DiaryDetailLine2 />
      <DetailCourse>#{data.course}</DetailCourse>
      <DetailURL onClick={handleCourseDetailClick} style={{ cursor: 'pointer' }}>코스 자세히 보기<UnderBar></UnderBar></DetailURL>
      <DetailThumbnail src={Photo} />
      <DetailContent>{data.content}</DetailContent>
      <BottomBar />
    </DetailContainer>
  );
};

export default Detail;