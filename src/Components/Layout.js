import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Card, Col, Row, Button } from 'antd'
const { Header, Content, Footer } = Layout

const { Meta } = Card

export default class LayoutA extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Card 1</Menu.Item>
            <Menu.Item key="3">Card 2</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The
            Simpsons. He is voiced by Dan Castellaneta and first appeared on television, along with the rest of his
            family, in The Tracey Ullman Show short "Good Night" on April 19, 1987.
            <br />
            <Button type="primary">Homer</Button>&nbsp;&nbsp;
            <Button type="primary">Duff</Button>
            <br />
            <br />
            <div style={{ background: '#ECECEC', padding: '30px', align: 'center' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                      <img alt="example" src="http://static.t13.cl/images/sizes/1200x675/mgr_homero-simpson.jpg" />
                    }
                  >
                    <Meta title="Duff Beer" description="Duff Beer" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                      <img
                        alt="example"
                        src="https://gritaradio.com/wp-content/uploads/2019/01/Homero-Simpson-GIF-2.jpg"
                      />
                    }
                  >
                    <Meta title="Homero Biography" description="Homero" />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Homero Simpson</Footer>
      </Layout>
    )
  }
}
