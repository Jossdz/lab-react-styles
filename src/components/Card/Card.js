import React from 'react'
import {Card} from '../../styles'

const CardComponent = (props) => {
  return (
    <Card>
      <img src={props.img} alt="Tim Ferris"/>
      <p>{props.text}</p>
    </Card>
  )
}

export default CardComponent