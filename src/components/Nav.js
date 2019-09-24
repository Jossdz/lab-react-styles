import React from 'react'
import styled from 'styled-components'

import { Card } from 'antd'

const { Meta } = Card

function rard() {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Lucha_libre_%E2%80%94_Arena_M%C3%A9xico_por_Carlos_Adampol_001.jpg"
        />
      }
    >
      <Meta title="Europe Street beat" description="imagenes de las luchas" />
    </Card>
  )
}




export default rard
