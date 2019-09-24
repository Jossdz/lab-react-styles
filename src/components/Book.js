import React from 'react';
import { Card, Icon } from 'antd';
const { Meta } = Card;

const Book = ({ title, image, description }) => (
  <div className="Books">
    <Card
      style={{ width: 250 }}
      cover={<img alt={title} src={image} />}
      actions={[<Icon type="read" key="read" />, <Icon type="message" key="comment" />]}
    >
      <Meta title={title} description={description} />
    </Card>
  </div>
);

export default Book;
