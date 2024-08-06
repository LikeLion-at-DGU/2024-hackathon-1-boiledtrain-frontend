import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import KakaoCallback from './components/Common/KakaoCallback';
import OnlyRandom from './pages/OnlyRandom';
import GoalTravel1 from './pages/GoalTravel1';
import DiaryMain from './pages/DiaryMain';
import DiaryWrite from './pages/DiaryWrite';
import DiaryDetail from './pages/DiaryDetail';
import CourseDetail from './components/coursetrain/CourseDetail';
import Loginpage from './pages/Loginpage';
import Mypage from './pages/Mypage';
import MypageEdit from './pages/MypageEdit';
import DiaryEdit from './pages/DiaryEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MainHome1 /> },
      { path: '/random', element: <OnlyRandom /> },
      { path: '/goaltravel', element: <GoalTravel1 /> },
      { path: '/mypage', element: <Mypage /> },
      { path: '/mypage/edit', element:<MypageEdit/>},
      { path: '/course', element: <Course/> },
      { path: '/login', element: <Loginpage /> },
      { path:'/kakao/login',element:<KakaoCallback/>},
      { path: '/coursedetail', element: <CourseDetail /> },
      { path: '/testpage', element: <TestPage /> },
      { path: '/diarymain', element: <DiaryMain /> },
      { path: '/diarywrite', element: <DiaryWrite /> },
      { path: '/diarydetail/:id', element: <DiaryDetail /> },
      { path:"/diary/:courseId/edit", element:<DiaryEdit />},

    ],
    errorElement: <NotFound />,
  },
]);

export default router;
