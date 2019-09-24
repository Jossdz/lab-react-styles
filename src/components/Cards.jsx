import React from 'react'
import { Card, Col, Row } from 'antd'

export default function Cards() {
  return (
    <div style={{ background: '#ECECEC', padding: '30px', margin: '50px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Photos to share" bordered={false}>
          Views of our beautiful City
          
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Photos to share" bordered={false}>
        Views of our beautiful City
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Photos to share" bordered={false}>
        Views of our beautiful City
        </Card>
      </Col>
    </Row>
  </div>
  )
}
