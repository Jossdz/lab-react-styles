import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon, Divider, Card, Button, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout
const { Meta } = Card

class App extends Component {
  state = {
    current: 'home',
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Layout>
        <Header >
          <Menu
            theme='dark'
            // style={{ lineHeight: '64px' }}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Icon type="home" />
              Home
            </Menu.Item>
            <Menu.Item key="actors">
              <Icon type="user" />
              Actors
            </Menu.Item>
            <Menu.Item key="movies">
              <Icon type="video-camera" />
              Movies
            </Menu.Item>
          </Menu>
        </Header>
        <Content type="flex" justify="space-evenly" align="center">
          <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            The Joker is a supervillain created by Bill Finger, Bob Kane, and Jerry Robinson
            who first appeared in the debut issue of the comic book Batman (April 25, 1940),
            published by DC Comics. Credit for the Joker's creation is disputed; Kane and Robinson
            claimed responsibility for the Joker's design while acknowledging Finger's writing
            contribution. Although the Joker was planned to be killed off during his initial appearance,
            he was spared by editorial intervention, allowing the character to endure as the archenemy
            of the superhero Batman.
          </Card>
          <Divider />
          <Row type="flex" justify="space-evenly" align="center">
            <Col span={4}>
              <Button type="primary" size="large">Learn more...</Button>
            </Col>
            <Col span={4}>
              <Button size="large">Best actors who played character</Button>
            </Col>
          </Row>
          <Divider />
          <Row type="flex" justify="center"  >
            <Col span={6} align="center">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://i2-prod.ok.co.uk/incoming/article14515995.ece/ALTERNATES/s615b/527386_1983_1_0b737076110f7319a19018d689789d73" />}
              >
                <Meta title="The Dark Knight (2008) Played by Heath Ledger" description="www.instagram.com" />
              </Card>
            </Col>
            <Col span={6} align="center">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/38/1537552289-joker1.jpg?resize=480:*" />}
              >
                <Meta title="Joker (2019) Played by Joaquin Phoenix" description="www.instagram.com" />
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer theme='dark' style={{ textAlign: 'center' }}>
          <p>&copy;All rights reserved 2019</p>
        </Footer>
      </Layout >
    );
  }
}

export default App;
