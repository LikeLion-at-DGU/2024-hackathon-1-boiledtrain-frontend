import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../api'; 
import Photo from '../assets/images/coursepointer.jpg';
import BottomBar from "../components/Common/BottomBar";
import apiCall from "../api";
import { getToken } from "../utils/auth";

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

const PostCourse = styled.button`
  display: flex;
  width: 390px;
  height: 55px;
  align-items: center;
  padding-left: 23px;
  flex-shrink: 0;
  gap: 10px;
  color: #8C8C8C;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PostCourseImage = styled.img`
  width: 20px;
  height: 24px;
`;

const ModalOverlay = styled.div`
  position: absolute;
  transform: translate(0px, 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 430px;
  height: 701px;
  flex-shrink: 0;
  border-radius: 50px 50px 0px 0px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  box-shadow: 0px 0px 16.1px 0px rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  max-height: 550px;
  overflow: hidden;
`;

const ScrollableArea = styled.div`
  max-height: 550px;
  overflow-y: auto;
  padding-right: 10px;
  
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; 
  }
`;

const CloseButton = styled.button`
  position: absolute;
  transform: translate(365px, -50px);
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const CourseButton = styled.button`
  margin: 5px 0;
  width: 380px;
  height: 75px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #D4F2FF;
  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  border: 1px solid #D4F2FF;
  &:hover {
    background-color: #00ABFC;
    color: white;
  }
`;

const CourseStation = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:0px 10px 0px 10px;
  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CoursePlace = styled.div`
color: #000;
padding-left: 10px;
padding-top: 4px;
font-feature-settings: 'liga' off, 'clig' off;
font-family: Pretendard;
font-size: 16px;
font-weight: 400;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 345px;
text-align: left;
`;

const PostCourseText = styled.div`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width:350px;
`;
const CourseTime = styled.div`
  color: #8C8C8C;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const TopMent = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CourseDetails = styled.div`
  margin: 10px;
  background-color: #FFFFFF;
  width: 380px;
  text-align: left;
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

const DiaryWrite = () => {
  const { course_id } = useParams(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  const [courseId, setCourseId] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 
  const navigate = useNavigate();

  const fetchCourseData = async () => {
    try {
      const token = getToken();
      const response = await apiCall('/api/user/my_course', 'get', {}, token); 
      setCourses(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching course data:', error);
      alert('코스 정보를 불러오는 데 실패했습니다.');
    }
  };

  const selectCourse = async (id) => {
    setCourseId(id);
    setModalIsOpen(false);
    try {
      const token = getToken();
      const response = await apiCall(`/api/user/course/${id}`, 'get', {}, token);
      setSelectedCourseDetails(response.data);
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      setImage(file);
      reader.readAsDataURL(file);
    }
  };

  const PostData = async () => {
    try {
      const token = getToken();
      if (!courseId) {
        alert('코스를 선택해주세요!');
        return;
      }
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('mood', mood);
      

      if (image) {
        formData.append('image', image); 
      }

      const response = await apiCall(`/api/user/course/${courseId}/diary`, 'post', formData, token, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('일기가 작성되었습니다!');
      navigate('/diarymain');
    } catch (error) {
      console.error(error);
      alert('일기가 작성되지 않았습니다!');
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}.${month}.${day}`;
  };

  return (
    <PostLayout>
      <PostLayout2>
        <PostTop>
          <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
          <PostButton onClick={PostData}>등록</PostButton>
        </PostTop>
        <PostTitle
          type="text"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxLength={49}
        />
        <RemainingText>{title.length}/50</RemainingText> 
        <PostLine />
        <PostCourse onClick={fetchCourseData}>
          <PostCourseImage src={Photo} />
          <PostCourseText>
            {selectedCourseDetails 
              ? `${selectedCourseDetails.subway_station}역 코스 - ${selectedCourseDetails.title}` 
              : '코스 추가'}
          </PostCourseText>
        </PostCourse>
        <FileInput type="file" accept="image/*" onChange={handleAddImage} /> 
        {imagePreview && (
          <PreviewImageWrapper>
            <PreviewImage src={imagePreview} alt="미리보기" />
          </PreviewImageWrapper>
        )}
        <PostMood
          placeholder="코스에 대한 당신의 기분을 한줄로!"
          value={mood}
          onChange={e => setMood(e.target.value)}
          maxLength={49}
        />
        <RemainingText>{mood.length}/50</RemainingText> 
        <PostContent
          placeholder="코스를 따라 여행한 당신의 일기를 작성해주세요"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </PostLayout2>
      {modalIsOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setModalIsOpen(false)}>X</CloseButton>
            <TopMent>일기에 코스를 추가해보세요!</TopMent>
            <ScrollableArea>
              {courses.map((course) => (
                <CourseButton key={course.id} onClick={() => selectCourse(course.id)}>
                  <CourseStation>{course.subway_station}<CourseTime>{formatDate(course.created_at)}</CourseTime></CourseStation>
                  <CoursePlace>{course.title}</CoursePlace>
                </CourseButton>
              ))}
            </ScrollableArea>
          </ModalContent>
        </ModalOverlay>
      )}
    </PostLayout>
  );
}

export default DiaryWrite;