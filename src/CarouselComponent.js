import React from 'react'
import { Carousel } from 'antd'
import './App.css'

function CarouselComponent() {
  return (
    <Carousel autoplay>
      <div>
        <img src="https://www.tesla.com/tesla_theme/assets/img/models/v1.0/section-hero-background.jpg?20180111" />
      </div>
      <div>
        <img src="https://www.expoknews.com/wp-content/uploads/2017/07/Model-S-de-Tesla-no-pasa-test-de-seguridad-1440x500.jpg" />
      </div>
      <div>
        <img src="images/Blue_Sunset-1440.png" />
      </div>
    </Carousel>
  )
}

export default CarouselComponent
