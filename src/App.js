import React from "react";
import { Navbar, Footer, Main, Card, Button, Card1, Container } from "./styles";

function App() {
  return (
    <div className="App">
      <Navbar>
        <a>Menu</a>
        <a>Login</a>
      </Navbar>
      <Main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi
          dignissimos sit sunt molestiae magni harum, mollitia possimus placeat
          eos similique praesentium suscipit porro totam debitis voluptatum ab
          error impedit?
        </p>
        <div>
          <Button>Ir a Wikipedia</Button>
          <Button type="danger">Ir a CyberPunk</Button>
        </div>
      </Main>
      <Container>
        <Card>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>

        <Card1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card1>
      </Container>

      <Footer>
        <p>Powered by React</p>
      </Footer>
    </div>
  );
}

export default App;
