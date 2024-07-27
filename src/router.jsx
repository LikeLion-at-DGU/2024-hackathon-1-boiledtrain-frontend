// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Map from "./components/map/Map"
import Train from "./pages/train"
import Kakaologin from './components/Common/Kakaologin';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
      { path: "/course" , element: <Course/>},
      { path:"/map",element:<Map/>},
      { path:"/train",element:<Train/>},
      { path:"/kakao",element:<Kakaologin/>},
    ],
    errorElement: <NotFound />,
  },
]);

export default router;