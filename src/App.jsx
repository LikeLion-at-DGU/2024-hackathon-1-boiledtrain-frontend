import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import MapLoader from './components/Common/MapLoader';

const App = () => {
  return (
    <div>
      <MapLoader/>
        <Outlet />
    </div>
  );
}

export default App;