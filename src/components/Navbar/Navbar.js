import React from 'react'
import {Nav} from '../../styles'
const Navbar = (props) => {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <a href="#about">{props.liOne}</a>
          </li>
          <li>
            <a href="#cards">{props.liTwo}</a>
          </li>
          <li>
            <a href="#footer">{props.liThree}</a>
          </li>
        </ul>
      </Nav>
    </div>
  )
}

export default Navbar
