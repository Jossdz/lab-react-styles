import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import FooterC from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <FooterC/>
    </div>
  );
}

export default App;
