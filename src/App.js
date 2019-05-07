import React from 'react';
import './App.css';
import { Nav, Hero, Button, Card } from './styles'

function App() {
  return (
    <div className="App">

      <Nav type='nav'>
        <div className='img'>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt='react logo' width='50px;' height='40px;' />
        </div>
        <ul>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/'>About us</a>
          </li>
          <li>
            <a href='/'>Documentation</a>
          </li>
        </ul>
      </Nav>
      <Hero>
        <h1>
        React
        </h1>
        <h2>
        A JavaScript library for building user interfaces
        </h2>
        <Button>Get Started</Button>
        <Button>Tutorial</Button>
      </Hero>

      <Hero>
        <Card>
          <h2>Declarative</h2>
          <p>
          React makes it painless to create interactive UIs. 
          Design simple views for each state in your application, 
          and React will efficiently update and render just the right components when your data changes.
          </p>
        </Card>
        <Card>
          <h2>Component-Based</h2>
          <p>
          Build encapsulated components that manage their own state, 
          then compose them to make complex UIs.
          </p>
          </Card>
      </Hero>
      <Hero>

      </Hero>
      <Nav type='footer'>

      </Nav>
    </div>
  );
}

export default App;
