import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiCall from '../api'; 
import styled from 'styled-components';
import BottomBar from "../components/Common/BottomBar";
import TopBarDiary from "../components/Common/TopBarDiary";
import DiaryMenuList from '../components/Diary/DiaryMenuList';
import { getToken } from '../utils/auth';
import Photo from '../assets/images/baseimage.png'; 

const DetailContainer = styled.div`
  width: 430px;
  height: 873px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 26px;
  font-weight: 500;
  margin: 30px 0;
`;

const DetailDate = styled.div`
  color: #8C8C8C;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 500;
`;

const DetailCourse = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const DetailThumbnail = styled.img`
  width: 360px;
  height: 170px;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 10px;
  background: var(--Miscellaneous-Kit-Section-Fill, #F5F5F5);
`;

const DetailContent = styled.div`
  padding: 10px 30px;
  flex-grow: 1;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
`;

const DetailMood = styled.div`
  padding: 10px;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
`;

const DiaryDetailLine = styled.div`
  margin-top: 20px;
  width: 430px;
  height: 2px;
  background: #AFAFAF;
`;

const DiaryDetailLine2 = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 360px;
  height: 1px;
  background: #D9D9D9;
`;

const DetailURL = styled.div`
  color: #00ABFC;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;

const UnderBar = styled.div`
  width: 100px;
  height: 1px;
  background: #00ABFC;
`;

const Detail = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const token = getToken();
      const response = await apiCall(`/api/user/diary/${id}`, 'get', {}, token);
      console.log(response.data); 
      setData(response.data); 
    } catch (error) {
      console.error("Error fetching diary data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('ko-KR', options).replace(/\//g, '.');
    return formattedDate;
  };

  const handleCourseDetailClick = () => {
    navigate(`/diarywrite`);
  };

  const handleCourseDeleted = () => {
  };

  return (
    <DetailContainer>
      <TopBarDiary />
      <DiaryDetailLine />
      <DetailTitle>{data?.title}</DetailTitle>
      <DetailDate>{formatDate(data?.created_at)}</DetailDate>
      <DiaryDetailLine2 />
      <DetailCourse>#{data?.course}</DetailCourse>
      <DetailURL onClick={handleCourseDetailClick} style={{ cursor: 'pointer' }}>
        코스 자세히 보기<UnderBar />
      </DetailURL>
      <DetailThumbnail src={data?.image || Photo} alt="다이어리 이미지" />
      <DetailMood>{data?.mood}</DetailMood>
      <DetailContent>{data?.content}</DetailContent>
      <DiaryMenuList 
        courseId={id} 
        onCourseDeleted={handleCourseDeleted} 
        onEditCourse={() => navigate(`/diaryedit/${id}`)} 
      />
      <BottomBar />
    </DetailContainer>
  );
};

export default Detail;