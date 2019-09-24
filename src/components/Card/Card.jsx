import React from 'react'
import StyledCard from './StyledCard'

const Card = ({ children, bg }) => {
  return (
    <StyledCard bg={bg}>
      <div className='content'>{children}</div>
    </StyledCard>
  )
}

export default Card
