import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import IronHeader from './components/Header';
import IronFooter from './components/Footer';
import IronCard from './components/Card';

import './App.css'

function App() {

const juanGa1 = {
  src: 'http://www.juangabriel.com.mx/wp-content/uploads/2018/08/juan-gabriel-portada1.jpg',
  quote: 'Los Duo, son los discos más vendidos de Juan Gabriel'
}

const juanGa2 = {
  src: 'http://www.juangabriel.com.mx/wp-content/uploads/2018/08/juan-gabriel-portada2.jpg',
  quote: 'El Noa Noa y otros lugares emblemáticos definidos por Juan Gabriel'
}

  return (
    <>
    <Layout className="layout bg" style={{ minHeight: '100vh' }}>
      <IronHeader/>
      <Row style={{ marginTop: '10vh' }}>
      <Col span={22} push={1}>
      <h1 className="centerText">Datos curiosos que quizá no sabías de Juan Gabriel</h1>
      <p className="centerText">Juan Gabriel vendía artesanías de madera en la calle. Fue nominado a Grammy en seis oportunidades, gracias a su trabajo como compositor, intérprete y productor. </p>
      </Col>
      </Row>

      <Row style={{ marginTop: '10vh' }}>
      <Col span={9} offset={2}>
          <Button href="http://www.juangabriel.com.mx/category/noticias" target="_blank" type="primary" block>
          Juan Gabriel
        </Button>
      </Col>

      <Col span={9} offset={2}>
      <Button href="https://periodicocorreo.com.mx/wp-content/uploads/2019/08/pedro-sola.jpg" target="_blank" type="danger" block>
          No es juangabriel
        </Button>
      </Col>
      </Row>

        <Row style={{ margin: '8% 0' }}>
          <Col span={9} offset={3}><IronCard  props={juanGa1.src} quote={ juanGa1.quote }/></Col>
          <Col span={9} offset={3}><IronCard  props={juanGa2.src} quote={ juanGa2.quote }/></Col>
        </Row>
      <IronFooter />
    </Layout>
    </>
  )
}

export default App;
