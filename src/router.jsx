// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;