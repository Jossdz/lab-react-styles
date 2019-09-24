import React from 'react';
import {Card} from 'antd';

const {Meta} = Card;

function Tarjeta({img}) {
  return (
    <Card hoverable style={{width: 240}} cover={<img alt="example" src={img} />}>
      <Meta title="Europe Street beat" description="www.loscorgissonbonitos.com" />
    </Card>
  );
}

export default Tarjeta;
