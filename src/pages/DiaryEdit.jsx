import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apiCall from '../api';
import { getToken } from '../utils/auth';

const PostLayout = styled.div`
  width: 430px;
  height: 873px;
  flex-shrink: 0;
  background: #00ABFC;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostLayout2 = styled.div`
  height: 843px;
  border-radius: 20px;
  background: #FFFFFF;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
`;

const PostTop = styled.div`
  width: 403px;
  height: 63px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  background: #D4F2FF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PostTitle = styled.input`
  display: flex;
  margin-top: 10px;
  width: 365px;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 15px;
  text-align: center;
  background: none;
  border: none;
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 500;
  outline: none;
  color: #000;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const PostContent = styled.textarea`
  margin-left: 25px;
  width: 350px;
  border: none;
  color: #212529;
  resize: none;
  flex-grow: 1; 
  margin-top: 10px;
  margin-bottom: 20px;
  outline: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 500;
  max-height: 530px;
  overflow-y: auto;
  
  &::placeholder {
    color: #D9D9D9;
    font-size: 19px;
  }
  &::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
`;

const PostLine = styled.div`
  width: 365px;
  height: 1px;
  background: #D9D9D9;
  margin-left: 19px;
  margin-bottom: 10px;
`;

const PostButton = styled.button`
  color: #00ABFC;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  padding-right:20px;
`;

const CancelButton = styled(PostButton)`
  padding-left: 20px;
`;

const PostMood = styled.input`
  display: flex;
  margin-top: 10px;
  width: 350px;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 25px;
  text-align: center;
  background: none;
  border: none;
  font-family: 'Pretendard';
  font-size: 19px;
  font-weight: 500;
  outline: none;
  color: #000;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const PreviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;     
  margin: 10px 0;         
`;

const FileInput = styled.input`
  margin: 0px 25px;
  display: block;
  width:300px;
  color: #8C8C8C;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PreviewImage = styled.img`
  width: 300px;
  height: 200px;
  margin: 10px 0;
  align-items:center;
`;

const RemainingText = styled.div`
  color: #8C8C8C;
  font-size: 14px;
  text-align: right;
  margin-top: -10px;
  padding-right:19px;
  margin-bottom: 10px;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DiaryEdit = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
      const fetchDiaryData = async () => {
          if (!courseId) {
              console.error('courseId is undefined');
              return;
          }

          try {
              const token = getToken();
              const response = await apiCall(`/api/user/diary/${courseId}`, 'get', {}, token);
              const diaryData = response.data;
              setTitle(diaryData.title);
              setContent(diaryData.content);
              setMood(diaryData.mood);
              setImagePreview(diaryData.image);
          } catch (error) {
              console.error('Error fetching diary data:', error);
          }
      };

      fetchDiaryData();
  }, [courseId]);

  const handleSave = async () => {
      try {
          const token = getToken();
          const body = new FormData();
          body.append('title', title);
          body.append('content', content);
          body.append('mood', mood);

          if (imagePreview && typeof imagePreview === 'string' && imagePreview.startsWith('data:image')) {
              const response = await fetch(imagePreview);
              const blob = await response.blob();
              const file = new File([blob], 'diary-image.png', { type: 'image/png' });
              body.append('image', file);
          }

          await apiCall(`/api/user/diary/${courseId}`, 'put', body, token, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });

          alert('저장을 성공했어요 ^ㅅ^');
          navigate('/diarymain');
      } catch (error) {
          console.error('저장을 실패했어요!', error);
          alert('저장을 실패했어요 ^ㅠ^');
      }
  };

  const handleCancel = () => {
      navigate('/diarymain');
  };

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };

  return (
      <PostLayout>
          <PostLayout2>
              <PostTop>
                  <CancelButton onClick={handleCancel}>취소</CancelButton>
                  <PostButton onClick={handleSave}>수정하기</PostButton>
              </PostTop>
              <PostTitle
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목"
                  maxLength={50}
              />
              <RemainingText>{50 - title.length}/50</RemainingText>
              <PostLine />
              <FileInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
              />
              <PreviewImageWrapper>
                  {imagePreview && <PreviewImage src={imagePreview} alt="Diary Preview" />}
              </PreviewImageWrapper>
              <PostMood
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="코스에 대한 당신의 기분을 수정해주세요 !"
                  maxLength={50}
              />
              <RemainingText>{50 - mood.length}/50</RemainingText>
              <PostContent
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="코스를 따라 여행한 당신의 일기를 수정해주세요 !"
              />
          </PostLayout2>
      </PostLayout>
  );
};

export default DiaryEdit;