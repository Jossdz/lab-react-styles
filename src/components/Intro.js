import React from 'react'
import { PageHeader, Button, Typography, Row, Avatar } from 'antd';

const { Title, Paragraph } = Typography;

function Intro() {
  return (
    <PageHeader>
      <div className="content">
        <Avatar size={64} src="https://pbs.twimg.com/media/Cp33yGdUsAEII1l.jpg" />
        <Title>Jefferson Gutierritos</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia cupiditate ipsum enim totam nostrum
          provident fugit soluta laborum corporis, sequi earum blanditiis amet asperiores, architecto ut? Maiores, minima quis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos, aut ipsam nisi harum placeat corporis unde
          nulla nemo sit voluptatum. Modi impedit animi, tempore voluptatibus reprehenderit labore rem et.
        </Paragraph>
        <Row className='buttons' type="flex">
          <a href="https://www.facebook.com"><Button key="2">Facebook</Button></a>
          <a href="https://www.twitter.com"><Button key="1" type="primary">Twitter</Button></a>
        </Row>
      </div>
    </PageHeader>
  )
}

export default Intro