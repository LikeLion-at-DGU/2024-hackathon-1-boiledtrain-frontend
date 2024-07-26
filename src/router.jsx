// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import GoalTravel1 from './pages/GoalTravel1';
import TrainSearch from './pages/TrainSearch';
import Train from './pages/train';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
      { path: "/course" , element: <Course/>},
      { path: "/goaltravel" , element: <GoalTravel1/>},
      { path: "/trainsearch" , element: <TrainSearch/>},
      { path: "/train" , element: <Train/>}
    ],
    errorElement: <NotFound />,
  },
]);

export default router;