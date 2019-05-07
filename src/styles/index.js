import styled from "styled-components";

export const Navbar = styled.nav`
  background: black;
  min-height: 100px;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  box-sizing: border-box;

  img {
    max-width: 100%;
    height: 100px;
  }
`;

export const Main = styled.main`
  background: url(https://lolstatic-a.akamaihd.net/site/skins-arcade/37aef2f0e4451bb4288f2a1927d389889b16d56c/images/extras/wallpaper/Arcade_Art_1920x1080.jpg)
    no-repeat;
  background-size: cover;
  min-height: 500px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  div {
    width: 500px;
    max-width: 100%;
    margin-bottom: 100px;
    padding: 3rem;
    box-sizing: border-box;
    display: block;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  p {
    text-align: center;
    color: white;
    opacity: 0.7;
    margin-bottom: 40px;
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  border: solid 3px white;
  font-size: 1.3em;
  padding: 0.3em;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: ${props => (props.type === "card-btn" ? "white" : "white")};
  border-color: ${props => (props.type === "card-btn" ? "white" : "white")};
  &:hover {
    color: ${props => (props.type === "card-btn" ? "white" : "white")};
    border-color: ${props => (props.type === "card-btn" ? "white" : "black")};
    background: black;
    border: solid 3px black;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export const Card = styled.article`
  background: white;
  box-sizing: border-box;
  width: 31%;
  padding: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: black;
    color: white;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  img {
    width: 100%;
  }
  h2 {
    text-align: center;
  }
  p{
    color:black;
    font-size:1rem;
    font-weight:1rem;
  }
  &:hover p{
     color:white;
  }
`;

export const Footer = styled.footer`
  background: black;
  position:relative;
  width:100%;
  min-height:50px;
  text-align:center;
  color:white;
`;
