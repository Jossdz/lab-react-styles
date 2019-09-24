import React from 'react';
import Header from './components/Header'
import Intro from './components/Intro'
import Content from './components/Content';
import Bottom from './components/Bottom'
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <div className='cards'>
        <Content></Content>
        <Content></Content>
      </div>
      <Bottom></Bottom>
    </>
  );
}

export default App;
