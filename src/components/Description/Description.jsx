import React from 'react'
import StyledDescription from './StyledDescription'
import Card from '../Card/Card'
import Button from '../Button/Button'

const Description = () => {
  return (
    <StyledDescription>
      <Card bg='https://source.unsplash.com/oJW6cBoCHfo/400x900'>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button bg='#fff' color='black'>
          Click me
        </Button>
      </Card>
      <Card>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button bg='#fff' color='black'>
          Click me
        </Button>
      </Card>
    </StyledDescription>
  )
}

export default Description
