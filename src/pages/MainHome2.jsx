import React from 'react';
import IntroBack from '../components/Intro/IntroBack';
import IntroButton from '../components/Intro/IntroButton';
import IntroLogo from '../components/Intro/IntroLogo';
import '../App.css';
import '../styles/font.css';

const Welcome = {
  color: '#00ABFC',
  textAlign: 'center',
  fontFamily: "Climate Crisis KR",
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '1000',
  lineHeight: 'normal',
  WebkitTextStrokeWidth: '1px',
  WebkitTextStrokeColor: '#FFF',
  marginBottom: '0',
  transform: 'scaleX(0.7) scaleY(1.0)',
};

const Welcome2 = {
  color: '#00ABFC',
  textAlign: 'center',
  fontFamily: "Climate Crisis KR",
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  WebkitTextStrokeWidth: '2px',
  WebkitTextStrokeColor: '#FFF',
  marginTop: '0',
  transform: 'scaleX(1.0) scaleY(1.1)',
};

const MainHome2 = () => {
  return (
    <IntroBack>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'110px'}}>
        <IntroLogo />
      </div>
        <h1 style={Welcome}>WELCOME TO</h1>
        <h1 style={Welcome2}>BOILED <br />TRAIN</h1>
        <IntroButton />
    </IntroBack>
  );
}

export default MainHome2;