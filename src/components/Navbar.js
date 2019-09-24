import React from 'react';
import {Layout, Menu, Breadcrumb, Button} from 'antd';
import Tarjeta from './Tarjeta';

const {Header, Content, Footer} = Layout;

function Navbar() {
  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{padding: '0 50px', marginTop: 64}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content-one" style={{background: '#fff', padding: 24, minHeight: 380}}>
          <div className="description">
            <h1>Corgi</h1>
            <br />
            <p>
              El Corgi galés de Pembroke (Welsh Pembroke Corgi) es una raza de perro pequeño nativo de Gran Bretaña. Se
              ha desempeñado durante siglos como perro pastor, y se le considera uno de los perros más antiguos de Gran
              Bretaña. Existe otra raza muy similar, el Corgi galés de Cardigan, ligeramente más grande y de cola larga.
            </p>
          </div>
          <div className="buttons">
            <Button className="single-button" type="primary">
              Button 1
            </Button>
            <Button className="single-button" type="primary">
              Button 2
            </Button>
          </div>
        </div>
      </Content>
      <Content style={{padding: '0 50px', marginTop: 10}}>
        <div className="images" style={{background: '#fff', padding: 24, minHeight: 380}}>
          <Tarjeta img="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/03/22124638/Untitled-design-5-800x600.png" />
          <Tarjeta img="https://upload.wikimedia.org/wikipedia/commons/f/fb/Welchcorgipembroke.JPG" />
          <Tarjeta img="https://getyourpet.com/wp-content/uploads/2019/02/AdobeStock_166083188-768x494.jpeg" />
        </div>
      </Content>

      <Footer style={{textAlign: 'center'}}>Corgis cool ©2019 Created by Dan & Raul</Footer>
    </Layout>
  );
}

export default Navbar;
