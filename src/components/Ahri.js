import { Card } from 'antd';
import React from 'react'
const { Meta } = Card;

function Ahri(){
    return(
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://i.redd.it/opqjel68llm21.png" />}
      >
        <Meta title="Esta pagina no tiene sentido alv" description="www.laAhri.com" />
      </Card>
      
      
    );
    
}

export default Ahri
 