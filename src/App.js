import React from 'react';
import Header from './components/Header'
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Uploader from './components/Uploader';

function App() {
  

  return (
    <main>
      <Header>
        <nav>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <a href="#components-anchor-demo-basic">Option 1</a>
            <a href="#components-anchor-demo-static">Option 2</a>
          </div>
        </nav>
      </Header>
      <section className="description">
        <div>
          <h1>Fashion</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus mauris, consequat vel fermentum quis, commodo sit amet odio. Nullam accumsan dapibus neque nec porttitor. Nam elementum nunc in urna mollis, quis condimentum magna sodales. Nunc odio augue, luctus eget consequat vitae, cursus quis est. Nulla semper efficitur mi eu efficitur.</p>
        </div>
        <div>
          <Button ghost className="button" >Web</Button>
          <Button ghost className="button">App</Button>
        </div>
      </section>
      <section className="card">
        <Uploader/>
        <Uploader/>
      </section>
      <footer className="footer">
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
      </footer>
    </main>
  /*   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;


