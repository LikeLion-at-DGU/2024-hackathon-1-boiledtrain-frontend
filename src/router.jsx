// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Map from "./components/map/Map"
import Train from "./pages/train"
import TrainSearch from "./pages/TrainSearch"
import Test from "./pages/Test"
import OnlyRandom from "./pages/OnlyRandom"
import GoalTravel1 from "./pages/GoalTravel1"
import TestPage from "./pages/TestPage"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
      { path: "/course" , element: <Course/>},
      { path:"/map",element:<Map/>},
      { path:"/train",element:<Train/>},
      { path:"/trainsearch",element:<TrainSearch/>},
      { path:"/test",element:<Test/>},
      { path:"/random",element:<OnlyRandom/>},
      { path:"/goaltravel",element:<GoalTravel1/>},
      { path:"/testpage",element:<TestPage/>},
    ],
    errorElement: <NotFound />,
  },
]);

export default router;