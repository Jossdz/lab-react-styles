import React from 'react'
import {Card} from 'antd';

const {Meta} = Card;

function Uploader(){
  return(
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://www.notjessfashion.com/wp-content/uploads/2016/11/Coach-Delancey-leather-strap-watch-NotJessFashion-top-NYC-fashion-blogger-006.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default Uploader;