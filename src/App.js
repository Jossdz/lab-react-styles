import React from 'react'
import LayoutComponent from './LayoutComponent'
import CarouselComponent from './CarouselComponent'
import CardsComponent from './CardsComponent'
import DescriptionComponent from './DescriptionComponent'
import './App.css'

function App() {
  return (
    <LayoutComponent>
      <CarouselComponent />
      <DescriptionComponent />
      <CardsComponent />
    </LayoutComponent>
  )
}

export default App
