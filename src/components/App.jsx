import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Description from './Description/Description'
import Footer from './Footer/Footer'

const App = () => {
  const siteName = 'Lorem ipsum'
  return (
    <div>
      <Navbar siteName={siteName} />
      <Hero />
      <Description />
      <Footer siteName={siteName} />
    </div>
  )
}

export default App
