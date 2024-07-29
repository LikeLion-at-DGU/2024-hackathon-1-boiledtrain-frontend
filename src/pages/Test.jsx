//컴포넌트들 모아서 test해본 페이지
import React from 'react';
import Station from '../components/Main/Station';
import Menu from '../components/Main/Menu';
import BottomBar from '../components/Common/BottomBar';
import TopBar2 from '../components/Common/TopBar2';
import '../App.css';

const Test = () => {
  return (
    <div>
      <TopBar2 />
      <Menu />
      <Station />
      <BottomBar />
    </div>
  );
}

export default Test;