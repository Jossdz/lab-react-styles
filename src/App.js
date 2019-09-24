import React from 'react';
import {PageHeader,Button, Descriptions, Card, Breadcrumb} from 'antd';
import './App.css';

function App(){
  const {Meta} = Card;
  return (
    <div className="App">
      <PageHeader id="top"
        title="EL POTRILLO"
        extra={[
        <Button href="https://open.spotify.com/artist/6sq1yF0OZEWA4xoXVKW1L9?si=4mGwldyESrK6NMrPCubvew"key="1" type="default">
          Listen on Spotify
        </Button>
        ]}
       >
      </PageHeader>
      <div id="main">
      <div id="description">
      <Descriptions title="About El Potrillo">
        <Descriptions.Item label="MonthlyListeners">7,807,547</Descriptions.Item>
        <Descriptions.Item label="Followers">2,431,613 </Descriptions.Item>
        <Descriptions.Item label="Latest Release">Abriré La Puerta</Descriptions.Item>
      </Descriptions>
        <Button href="https://open.spotify.com/track/4NUt1fcnO9aQAELBgXq3Kr"key="2" type="default" style={{margin:"0 10px"}}>
          Most popular song
        </Button>
        <Button href="https://open.spotify.com/artist/6sq1yF0OZEWA4xoXVKW1L9?si=4mGwldyESrK6NMrPCubvew"key="3" type="default" style={{margin:"0 10px"}}>
          TOP 5
        </Button>
      </div>
      <div id="cards">
      <Card id="card1"
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://i.scdn.co/image/c77197ba4cd91c28ecd6013057fafc858a217a2b"/>}
      >
        <Meta title="Rompiendo Fronteras (Deluxe)" description="Alejandro Fernández" />
      </Card>
      <Card id="card2"
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://i.scdn.co/image/fe8cd5cee2a6152538d1f804787bf28cbce7362a" />}
       >
        <Meta title="Confidencias" description="Alejandro Fernández" />
      </Card>
      </div>
      </div>
      <footer>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="https://www.alejandrofernandez.com/">Official Page</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="https://es.wikipedia.org/wiki/Alejandro_Fern%C3%A1ndez">More about El Potrillo</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      </footer>
    </div>
  );
}

export default App;
