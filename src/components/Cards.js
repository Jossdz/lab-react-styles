import React from 'react';
import styled from 'styled-components';

const CardsSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vw;
  background-color: lightsalmon;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px lightgray darkgray;
  box-shadow: 2px 2px 25px black;
  background-color: white;
  border-radius: 10px;
  width: 30%;
  height: 80%;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Cards = () => (
  <CardsSection>
    <Card>
      <h1>Titulo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, est.</p>
    </Card>
    <Card>
      <h1>Titulo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, est.</p>
    </Card>
  </CardsSection>
);

export default Cards;
