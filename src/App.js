import React from 'react'
import './App.css'
import { Layout, Menu, Card, Icon, Avatar, Row, Col} from 'antd';
const { Header, Footer, Content} = Layout;
const { Meta } = Card;



function App() {
  return (
      <Layout style={{backgroundImage: 'url("https://www.heet.org.uk/wp-content/uploads/2016/06/gradient-background-26046-26731-hd-wallpapers.jpg.png")'}}>
        <Header>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', fontSize: '17px', }} >
            <Menu.Item key="1"><img src="http://www.stickpng.com/assets/images/5842a4f5a6515b1e0ad75af6.png" width="40"/></Menu.Item>
            <Menu.Item key="2">Home</Menu.Item>
            <Menu.Item key="3">About Us</Menu.Item>
          </Menu>
        </Header>
        <Content style={{height: '100%'}}>
            <div>
              <Card style={{ width: '100vw', backgroundColor: '#d4e1f7'}} actions={[<Icon type="setting" />, <Icon type="edit" />]} >
                <Row type='flex'>
                  <Col xs={10} sm={14} md={18} lg={20} xl={20}>
                    <h1 style={{fontSize: '50px'}} >Groot</h1>
                    <Meta style={{display: 'flex', flexDirection: 'row', fontSize: '25px'}} description="I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT.I AM GROOT."  />
                  </Col>
                  <Col xs={1} sm={2} md={3} lg={4} xl={4}>
                    <img src="https://www.sideshow.com/storage/product-images/903344/groot_marvel_silo.png" width='200' />
                  </Col>
                </Row>
              </Card>
            </div>
            <div>
              <Row type="flex" style={{marginLeft: '2%', margin: '20px 30px'}}>
                <Col span={6} order={1}>
                  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/doctor-strange-doctor-extrano/97464054-1-esl-ES/Doctor-Strange-Doctor-Extrano.jpg?resize=320:*" />} >
                    <Meta title="Dr Strange" description="Doctor Stephen Strange is a fictional superhero appearing in American comic books published by Marvel Comics. "/>
                  </Card>
                </Col>
                <Col span={6} order={2}>
                  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src="https://i.pinimg.com/originals/c9/70/1e/c9701e21acebf15b6b86b7a36dffdc16.jpg" height="420px" />} >
                    <Meta title="Spiderman" description="Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko."/>
                  </Card>
                </Col>
                <Col span={6} order={3}>
                  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src="https://i.pinimg.com/originals/e0/b8/62/e0b8626fc4c3476723dc6366c22d3abf.jpg"/>} >
                    <Meta title="Scarlet Witch" description="Scarlet Witch is a fictional superhero appearing in American comic books published by Marvel Comics."/>
                  </Card>
                </Col>
                <Col span={6} order={4}>
                  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src="https://www.moviestarjacket.com/product_images/uploaded_images/raccoon-leather-vest.jpg"  height="420px" />} >
                    <Meta title="Rocket Racoon" description="Rocket Raccoon is a fictional character appearing in American comic books published by Marvel Comics."/>
                  </Card>
                </Col>
              </Row>
            </div>
        </Content>
        <Footer style={{height: '10vh'}}>GrootPage @2019 Made at Ironhack by Majo & Victoria</Footer>
      </Layout>
  )
}

export default App;






