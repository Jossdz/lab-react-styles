import React from 'react'
import {Card, Button} from 'antd'

const {Meta} = Card

function Cards(props){
<Card
  hoverable
  style={{width: 240}}
  cover={<img src={props.imageUrl}/>}
>
<Meta
 title={props.title}
 year={props.year}
/>

<Button type="primary" ghost></Button>
  
</Card>
}

export default Cards