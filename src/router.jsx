// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Train from "./pages/train"
import Kakaologin from './components/Common/Kakaologin';
import KakaoCallback from './components/Common/KakaoCallback'
import CourseMake from './pages/CourseMake';
import ProtectedRoute from './components/Common/ProtectRoute';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
      { path: "/course", element: <ProtectedRoute element={<Course />} /> },
      { path: "/coursemake", element: <ProtectedRoute element={<CourseMake />} /> },
      { path: "/train", element: <ProtectedRoute element={<Train />} /> },
      { path: "/kakao", element: <Kakaologin /> },
      { path: "/kakao/login", element: <KakaoCallback /> },
    ],
    errorElement: <NotFound />,
  },
]);
 
export default router;