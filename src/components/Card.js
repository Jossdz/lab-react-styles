import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function IronCard({props, quote}){
	return(
		<Card
    hoverable
    style={{ width: '30vw' }}
    cover={<img alt="example" src={props} />}
  >
    <Meta title={quote} />
  </Card>
	)
}

export default IronCard