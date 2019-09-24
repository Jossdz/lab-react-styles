import React from 'react'
import StyledHero from './StyledHero'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <StyledHero>
      <div className='content'>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quam?</h1>
        <Button bg='black'>Go somewhere</Button>
        <Button border='white'>Go elsewhere</Button>
      </div>
    </StyledHero>
  )
}

export default Hero
