import React from 'react'
import { Card, Col, Row } from 'antd'

function CardsComponent() {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Model 3"
            cover={
              <img
                alt="Model 3"
                src="https://www.enriquedans.com/wp-content/uploads/2018/08/Tesla-Model-3.jpg"
              />
            }
          />
        </Col>

        <Col span={8}>
          <Card
            title="Model X"
            cover={
              <img
                alt="Model 3"
                src="https://www.enriquedans.com/wp-content/uploads/2018/08/Tesla-Model-3.jpg"
              />
            }
          />
        </Col>

        <Col span={8}>
          <Card
            title="Model S"
            cover={
              <img
                alt="Model 3"
                src="https://www.enriquedans.com/wp-content/uploads/2018/08/Tesla-Model-3.jpg"
              />
            }
          />
        </Col>
      </Row>
    </div>
  )
}

export default CardsComponent
