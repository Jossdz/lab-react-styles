import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background-image: url('http://4.bp.blogspot.com/-NFcrtouuSP4/UiAW_Xt9tHI/AAAAAAAAJr4/LhQ0lo81eus/s640/Background-Tiles2.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
  color: white;
`;

const Title = styled.h1`
  width: 70%;
  margin: 0 auto;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid tomato;
  background-color: white;
  font-size: 1.2em;
  font-weight: bold;
`;

const MainComponent = () => (
  <Main>
    <Title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic atque harum et culpa dolorum architecto
      perferendis veniam odit ducimus, explicabo consectetur, tempore quae! Laboriosam excepturi veniam dolor rerum qui.
    </Title>
    <ButtonSection>
      <Button>Left Button</Button>
      <Button>Right Button</Button>
    </ButtonSection>
  </Main>
);

export default MainComponent;
