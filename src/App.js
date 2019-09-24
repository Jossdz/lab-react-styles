import './App.css'
import React, { Component } from 'react'
import Nav from './components/Nav'
import Buttons from './components/Buttons'
import Cards from './components/Cards'

export default class App extends Component {
  state = {
    current: 'mail',
    size: 'large'
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '10vh',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          <div className="navbar">
            <a href="">Welcome to CDMX</a>
            <Nav />
          </div>
        </header>

        <main>
          <div className="butt">
            <h1>Welcome to CDMX</h1>
            <Buttons />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </main>

        <div className="footer">
          <p>©Emiliano and Otto, Ironhack CDMX</p>
        </div>
      </div>
    )
  }
}
