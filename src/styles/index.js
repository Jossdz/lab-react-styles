import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Times New Roman', Times, serif;
  }
`

export const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  Button{
    color: white;
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
  }
`

export const Main = styled.main`
  width: 100vw;
  height: 80vh;
  background: whitesmoke;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-evenly;
`

export const Content = styled.div`
  width: 80%;
  height: 20vh;
  background: #F39C12;
  color: whitesmoke;
  margin: 2rem 2rem 2rem 4.2rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 10px 10px 5px rgba(0,0,0,0.25);
  p{
    font-size: 1.4rem;
  }
  h1{
    font-size: 2rem;
  }
`

export const Card = styled.div`
  width: 35%;
  height: 20vh;
  background: #546E7A;
  color: whitesmoke;
  display:flex;
  box-shadow: 10px 10px 5px rgba(0,0,0,0.25);
  img{
    width: 30%;
  }
  div{
    padding: 1rem;
  }
`

export const Footer = styled.footer`
  background: brown;
  width: 100vw;
  height: 10vh;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  height: 10vh;
  width: 20vw;
  outline: none;
  &:hover{
    color: brown;
    font-weight:bold;
    background: #F39C12;
    cursor: pointer;
  }
`