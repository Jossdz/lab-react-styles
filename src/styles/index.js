import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: lightblue;
  a {
    color: blue;
    text-decoration: none;
    margin-right: 5px;
  }
`;

export const Main = styled.main`
  background-color: white;
  font-size: 20px;
  p  {
    margin: 25px;
    text-align: justify;
  }
  button {
    height: 30px;
    margin: 20px;
  }
`;

export const Card = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Footer = styled.footer`
  background-color: peru;
  position: fixed;
  bottom: 0px;
  p {
    text-align: justify;
    margin: 10px;
  }
`;
