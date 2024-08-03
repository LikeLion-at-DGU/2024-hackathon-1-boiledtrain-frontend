import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Train from "./pages/train";
import Kakaologin from './components/Common/Kakaologin';
import KakaoCallback from './components/Common/KakaoCallback';
import ProtectedRoute from './components/Common/ProtectRoute';
import TrainSearch from "./pages/TrainSearch";
import Test from "./pages/Test";
import OnlyRandom from "./pages/OnlyRandom";
import GoalTravel1 from "./pages/GoalTravel1";
import TestPage from "./pages/TestPage";
import DiaryMain from "./pages/DiaryMain";
import DiaryWrite from "./pages/DiaryWrite";
import DiaryDetail from "./pages/DiaryDetail"; //
import CourseDetail from './components/coursetrain/CourseDetail';
import Loginpage from './pages/Loginpage';
import Mypage from './pages/Mypage';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/", element: <MainHome1 /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/course", element: <Course /> },
      { path: "/train", element: <ProtectedRoute element={<Train />} /> },
      { path: "/login", element: <Loginpage /> },
      { path: "/kakao", element: <Kakaologin /> },
      { path: "/kakao/login", element: <KakaoCallback /> },
      { path: "/coursedetail", element: <CourseDetail /> },
      { path: "/train", element: <Train /> },
      { path: "/trainsearch", element: <TrainSearch /> },
      { path: "/test", element: <Test /> },
      { path: "/random", element: <OnlyRandom /> },
      { path: "/goaltravel", element: <GoalTravel1 /> },
      { path: "/testpage", element: <TestPage /> },
      { path: "/diarymain", element: <DiaryMain /> },
      { path: "/diarywrite", element: <DiaryWrite /> },
      { path: "/diarydetail/:id", element: <DiaryDetail /> },//
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
