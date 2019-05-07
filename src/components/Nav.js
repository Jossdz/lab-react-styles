import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 64px;
  color: white;
  background-color: tomato;
`;

const Title = styled.h1``;

const Menu = styled.ul`
  li {
    display: inline-block;
    margin: 0 20px;
  }
`;

const NavBar = () => (
  <Nav>
    <Title>Super Awesome Website</Title>
    <Menu>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </Menu>
  </Nav>
);

export default NavBar;
