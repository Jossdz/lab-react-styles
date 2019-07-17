import styled, { createGlobalStyle, keyframes } from 'styled-components'

const scale = keyframes`
 0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.25);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.25);
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.25);
  }
  70% {
    transform: scale(1);
  }
`;

export const GlobalStyle = createGlobalStyle`

body {
  overscroll-behavior: none;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: white;
  transition: 1s;
}
li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}

`

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  a:hover  {
    color: red;
  }

`

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 

  & div {
  
    display: inherit;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 24px;
    text-align: center;
    width: 80%;
  }

`
export const Button = styled.button`
  background-color: ${props => props.type === 'left' ? 'crimson' : 'peru'};
  color: white;
  border:none;
  border-radius: 15px;
  width: 180px;
  height: 40px;
  margin: 0.8rem;
  font-size: 18px;
  transition: 1s ease all;
  &:hover{
    transform: scale(1.2)
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background: #000;
  flex-direction: column;

  p {
    color: white;
  }

  svg {
    fill: red;
    animation: ${scale} 1s linear infinite;
  }
`

export const Card = styled.div `
  width: 25%;
  padding: 40px;
  border: 1px solid #f3f6f6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    height: 150px;
  }

  p {
    letter-spacing: 1.5px;
  }
`

export const CardContainer = styled.div `
  display: flex;
  padding: 40px;
  justify-content: space-around;
`

