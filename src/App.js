import React from "react";
import "./App.css";
import { Navbar, Main, Footer, Button, Card } from "./styles";

function App() {
  return (
    <div>
      <Navbar>
        <img src="https://lolstatic-a.akamaihd.net/site/skins-arcade/37aef2f0e4451bb4288f2a1927d389889b16d56c/localized/es_AR/arcade-logo.png" />
      </Navbar>
      <Main>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div>
          <Button >view more</Button>
          <Button >fuk go back</Button>
        </div>
        <aside>
          <Card>
            <h2>Malzahar</h2>
            <img src="https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2017/august/arcade2017event/battle_boss_malzahar_icon.png?v=1://news-a.akamaihd.net/public/images/articles/2017/august/arcade2017event/battle_boss_ziggs_icon.png?v=1"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button type="card-btn">View more</Button>
          </Card>
          <Card>
            <h2>Ziggs</h2>
            <img src="https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2017/august/arcade2017event/battle_boss_ziggs_icon.png?v=1"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button type="card-btn">View more</Button>
          </Card>
          <Card>
            <h2>Brand</h2>
            <img src="https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2017/august/arcade2017event/battle_boss_brand_icon.png?v=1"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button type="card-btn">View more</Button>
          </Card>
        </aside>
      </Main>

      <Footer>© 2019 Riot Games, inc. All rights reserved.</Footer>
    </div>
  );
}

export default App;
