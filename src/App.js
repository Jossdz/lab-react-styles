import React from 'react';
import {Nav, Main, Content, Card, Footer, GlobalStyle, Button} from './styles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav>
        <Button className="">Home</Button>
        <Button className="">Profile</Button>
        <Button className="">Contact</Button>
      </Nav>
      <Main>
        <Content>
          <h1>Winnie the Pooh</h1>
          <p>To pay tribute to both English author A.A. Milne and his lovable bear, Winnie The Pooh, we've compiled a collection of incredible facts that even the most dedicated visitor to the Hundred Acre Wood might not know.</p>
        </Content>
        <Card>
          <img src="https://www.stickpng.com/assets/images/5954b83cdeaf2c03413be33a.png" alt="pooh"/>
          <div className="">During World War I, a Canadian soldier named Harry Colebourn made a pet of a black bear cub he bought from a hunter for $20. Named Winnipeg—or "Winnie" for short.</div>
        </Card>
        <Card>
        <img src="http://pngimg.com/uploads/winnie_pooh/winnie_pooh_PNG37624.png" alt="pooh"/>
          <div className="">Titled Winnie Ille Pu, the 1960 release translated by Dr. Alexander Lenard stayed on the coveted list for 20 weeks, and ultimately demanded 21 printings, selling 125,000 copies.</div>
        </Card>
      </Main>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
