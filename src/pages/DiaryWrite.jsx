import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../api'; 
import Photo from '../assets/images/coursepointer.jpg';
import BottomBar from "../components/Common/BottomBar";

const PostLayout = styled.div`
  width: 430px;
  height: 873px;
  flex-shrink: 0;
  background: #00ABFC;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const PostLayout2 = styled.div`
  height: 770px;
  border-radius: 20px;
  background: #FFFFFF;
  margin-top:13px;
  display: flex;
  flex-direction: column;
`;
const PostTop = styled.div`
  width: 403px;
  height: 63px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  background: #D4F2FF;
  display:flex;
  flex-direction:row;
  align-items:center;
`;

const PostTitle = styled.input`
  display: flex;
  margin-top:10px;
  width: 365px;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left:15px;
  text-align: center;
  background: none;
  border: none;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  color:#000;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const PostContent = styled.textarea`
  margin-left: 32px;
  width: 350px;
  border: none;
  color: #212529;
  resize: none;
  flex-grow: 1; 
  margin-top: 10px;
  margin-bottom: 20px;
  outline: none;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-height: 550px;
  overflow-y: auto;
  
  &::placeholder {
    color: #D9D9D9;
    font-size: 19px;
  }
`;
const PostLine = styled.div`
  width: 365px;
  height: 1px;
  background: #D9D9D9;
  margin-left:19px;
  margin-bottom:10px;
`;
const PostButton = styled.button`
  color: #00ABFC;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left:340px;
  background: none;
  border: none;
  cursor: pointer;
`;
const PostMood = styled.div`
width:100px;
`;
const PostCourse = styled.button`
display: flex;
width: 350px;
height: 55px;
align-items: center;
padding-left:23px;
flex-shrink: 0;
gap:10px;
color: #8C8C8C;
text-align: center;
font-feature-settings: 'liga' off, 'clig' off;
font-family: 'Pretendard';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
background: none;
border: none;
cursor: pointer;
`;
const PostCourseImage = styled.img`
width:20px;
height:24px;
`;
const DiaryWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  const navigate = useNavigate();

  const PostData = async () => {
    try {
      const response = await API.post(`/api/posts`,{ title:title, content:content, mood:mood });
      console.log(response.data); 
      alert('일기가 잘 삶아졌어요 !');
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('일기가 아직 삶아지지 않았어요 !');
    }
  };

  return (
    <PostLayout>
      <PostLayout2>
        <PostTop>
          <></>
        <PostButton onClick={PostData}>등록</PostButton>
        </PostTop>
        <PostTitle
          type="text"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <PostLine />
        <PostCourse>
        <PostCourseImage src={Photo}/>
        코스 추가
        </PostCourse>
        <PostContent
          placeholder="코스를 따라 여행한 당신의 일기를 삶아주세요"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <PostMood
          placeholder="코스에 대한 당신의 기분은?"
          value={mood}
          onChange={e => setMood(e.target.value)}
        />
      </PostLayout2>
      <BottomBar />
    </PostLayout>
  );
};

export default DiaryWrite;