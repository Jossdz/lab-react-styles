import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  background-color: aliceblue;
  width: 100vw;
  height: 10vh;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  background-color: aliceblue;
  width: 100vw;
  height: 15vh;
  margin-top: 100%;
  text-align: center;
`;

export const Card = styled.div`
  background-image: url(https://media.comicbook.com/2019/06/cyberpunk-2077-keanu-1174989.jpeg?auto=webp&width=696&height=390&crop=696:390);
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 50vw;
  height: 35vh;
`;

export const Card1 = styled.div`
  background-image: url(https://i.kym-cdn.com/entries/icons/facebook/000/002/862/SadKeanu.jpg);
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 30vw;
  height: 25vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    display: inline-block;
    background-color: aliceblue;
  }
`;

export const Button = styled.button`
  background-color: ${props =>
    props.type === "danger" ? "violet" : "blueviolet"};
  width: 300px;
  height: 80px;
  color: yellowgreen;
  font-size: 2rem;
  border: none;
  border-radius: 15px;
  margin: 0.8rem;
  transition: 1s ease all;
  &:hover {
    transform: scale(1.2);
  }
  &::before {
    content: "";
  }
`;
