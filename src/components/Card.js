import React from 'react'
import { Card } from 'antd'
const { Meta } = Card

function CardItem(props) {
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={props.image} />}>
      <Meta title={props.title} description={props.description} />
    </Card>
  )
}

export default CardItem
