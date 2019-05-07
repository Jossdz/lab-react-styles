import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { Row, Col, Button, Card } from 'antd';


const { Header, Content, Footer } = Layout;
const { Meta } = Card;


function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Row gutter={16} className="header">
            <Col className="gutter-row" span={24}>

              <h1>Pulp Fiction</h1>
              <h2>Pulp Fiction (En Latinoamérica Tiempos violentos) es una película estadounidense de 19944​ escrita y dirigida por Quentin Tarantino, basada en historias del mismo Tarantino creadas en colaboración con Roger Avary. Su nombre deriva de las revistas de literatura pulp y las novelas gráficas Hard boiled muy populares a mediados del Siglo XX, conocidas por su violencia gráfica y su prosa dura. Es protagonizada por John Travolta, Uma Thurman, Samuel L. Jackson, Harvey Keitel, Bruce Willis y Tim Roth, entre otros. Debido a sus diálogos eclécticos, su irónica combinación de humor y violencia y sus múltiples referencias estéticas a la cultura pop, que fueron tan utilizadas posteriormente,5​ influyó de manera definitiva en la visión y el trabajo de directores como Bryan Singer, Paul Thomas Anderson y Danny Boyle.6​ Es considerada a su vez una de las cintas más representativas de la obra del director estadounidense.

              Se estrenó en mayo de 1994 en el Festival de Cine de Cannes, donde consiguió la Palma de Oro.7​ Luego fue galardonada con el Globo de Oro al mejor guion8​ y obtuvo siete candidaturas en la 67ª edición de los Premios Óscar y aunque solo obtuvo el Óscar al mejor guion original.9​10​ recibió más de cuarenta premios internacionales y otras tantas nominaciones. En 2013, la película fue considerada «cultural, histórica y estéticamente significativa» por la Biblioteca del Congreso de Estados Unidos y seleccionada para su preservación en el National Film Registry.</h2>

            </Col>
          </Row>
          <Row className="main">
            <Col span={4} offset={5}>
              <Button type="primary" size="large" span={12} block>Primary</Button>
            </Col>
            <Col span={4} offset={6}>
              <Button type="primary"  size="large" span={12}block>second</Button>
            </Col>
          </Row>
        </Content>

        < br />

        <Content style={{ padding: '0 50px' }}>
          <Row type="flex" justify="center" align="middle">
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 500 }}
                cover={<img alt="example" src="https://www.unir.net/wp-content/uploads/2019/03/Pulp.jpg" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col span={6} offset={4}>
              <Card
                hoverable
                style={{ width: 500 }}
                cover={<img alt="example" src="http://artisticmetropol.es/web/wp-content/uploads/Pulp-Fiction-Duo2.jpg" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
          </Footer>
      </Layout>
    </div>
  );
}

export default App;
