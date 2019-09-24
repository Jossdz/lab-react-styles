import React from 'react'
import { Carousel } from 'antd'
import Katy1 from '../images/katy 4.jpg'
import Katy2 from '../images/Katy 2.jpg'
import Katy3 from '../images/katy 3.jpg'

function Main() {
  return (
    <Carousel effect="fade">
      <div>
        <img src={Katy1} alt="katy" width="100%" />
        <h3>1</h3>
      </div>
      <div>
        <img src={Katy2} alt="katy" width="100%" />
        <h3>2</h3>
      </div>
      <div>
        <img src={Katy3} alt="katy" width="100%" />
        <h3>3</h3>
      </div>
    </Carousel>
  )
}

export default Main
