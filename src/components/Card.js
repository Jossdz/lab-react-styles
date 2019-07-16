import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

class CardC extends React.Component{
  render(){
    return(
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://i.pinimg.com/originals/d9/95/61/d995610dc3a4f60ea0ccfe2ee700cffc.jpg" />}
      >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img style={{height: '300px'}}alt="example" src="https://img.buzzfeed.com/buzzfeed-static/static/2013-10/enhanced/webdr03/4/15/enhanced-buzz-18484-1380914434-34.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*" />}
    >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    </div>
    )
  }
}
export default CardC