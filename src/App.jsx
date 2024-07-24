// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <div>
        <Outlet />
    </div>
  );
}

export default App;